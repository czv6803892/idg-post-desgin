import { Component } from 'vue-property-decorator';
import BaseModal from './BaseModal';
@Component({
})
/* 一般的需求使用Modal组件即可，继承BaseModal主要是方便将复杂的Modal放在独立的tsx文件里 */
export default class TestModal extends BaseModal {
  public title = '测试modal';
  public renderContent() {
    return <div>modal content</div>;
  }
}
