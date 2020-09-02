import { Api , ERROR_RESPONSE_FORMAT, NetworkError} from '@idg/idg';
import { AxiosResponse } from 'axios';

// tslint:disable-next-line
Api.prototype.responseHandler = function(response: AxiosResponse): any {
  if (!response.data) {
    return Promise.reject(new NetworkError(ERROR_RESPONSE_FORMAT, 'no data'));
  }

  const res = response.data;
  if (!res.hasOwnProperty('state') && !res.hasOwnProperty('ret')) {
    return Promise.reject(new NetworkError(
      ERROR_RESPONSE_FORMAT,
      'error response format, should like {state: xx, data: xx}',
    ));
  }

  if (res.state !== 1) {
    if (Number(res.code) === -2) {
      window.location.hash = '#/login';
    }
    return Promise.reject(new NetworkError(res.state, res.message || res.msg));
  }

  return res.data;
};
