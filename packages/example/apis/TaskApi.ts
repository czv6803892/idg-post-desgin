import { Api } from '@idg/idg';
import {
  Task,
} from '../interfaces';
export default class extends Api {
  public publishTask(data?: Task ) {
    return this.request({
      url: '/index.php/test',
      method: 'post',
      data,
    });
  }
}
