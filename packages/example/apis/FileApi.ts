import { Api, ContentType } from '@idg/idg';
// 上传文件的示例
export default class extends Api {
  public contentType = ContentType.MULTIPART_FORM_DATA;
  public imageUpload(data: File) {
    return this.request({
      url: 'image/upload',
      method: 'post',
      data,
    });
  }
}
