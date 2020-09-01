import { Vue, Component, Model, Watch, Emit } from 'vue-property-decorator';
import { Modal } from '@idg/iview';

@Component
export default class BaseModal extends Vue {
  public title: string = 'Title';
  public width: string | number = 520;
  public showModal: boolean = false;
  public fullscreen: boolean = false;
  @Model('change', { type: Boolean }) public value: boolean;

  /*  @Prop({ type: String }) private title: string; */
  /*  @Prop({ type: Number}) private width: number | string; */
  // loading暂时不加，后期加的话还要加on-ok，on-cancel事件，本版本使用footer-slot
  /* @Prop({ type: Boolean }) private loading: boolean; */
  public renderContent(): JSX.Element | JSX.Element[] {
    return (
      <div>
        <p>通过复写renderContent函数来决定modal的内容，</p>
        <p>renderContent函数的返回是一个VNode或者一个VNode数组</p>
      </div>
    );
  }
  public render() {
    return (
      <Modal
        fullscreen={this.fullscreen}
        title={this.title}
        v-model={this.showModal}
        width={this.width}
        onon-visible-change={this.handleChange}
      >
        {this.renderContent()}
            
      </Modal>
    );
  }
  @Watch('value')
  public handleValueChange(val: boolean) {
    this.showModal = val;
  }
  @Emit('change')
  public handleChange(val: boolean) {
    if (!val) {
      return val;
    }
  }
}
