/*
  example模块是示例代码，请勿直接在上面开发，可以使用yarn run generate pkgname命令来生成package，详见README
*/
import { Vue, Component, Prop } from 'vue-property-decorator';
const TAG = 'example/components/Hello';
import { Button } from '@idg/iview';
import { Log } from '@idg/idg';
import TaskApi from '../apis/TaskApi';
@Component({
  depends: ['component.TestModal', 'api.TaskApi'],
})
export default class Hello extends Vue {
  @Prop({}) private x: string;
  private taskApi: TaskApi;
  private showModal: boolean = false;
  public async created() {
    Log.debug(TAG, 'hello created', this.x);
    // 接口调用示范
    try {
      const res = await this.taskApi.publishTask();
      Log.debug(TAG, res);
    } catch (e) {
      Log.debug(TAG, e);
    }
  }

  public render() {
    return (
      <div class='flex justify-center items-center'>
        <p class='mr-6'>I'm a component!</p>
        {/* 一般的需求使用Modal组件即可，继承BaseModal主要是方便将复杂的Modal放在独立的tsx文件里 */}
        <test-modal v-model={this.showModal}/>
        <div><Button onClick={this.handleModalShow} type='primary'>显示modal</Button></div>
      </div>
    );
  }
  private handleModalShow() {
    this.showModal = true;
  }
}
