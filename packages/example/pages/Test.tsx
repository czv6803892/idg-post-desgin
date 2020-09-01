/*
  example模块是示例代码，请勿直接在上面开发，可以使用yarn run generate pkgname命令来生成package，详见README
*/
import { Vue, Component } from 'vue-property-decorator';
import { Card } from '@idg/iview';

@Component({
  depends: [
    'component.Hello',
  ],
})
export default class Test extends Vue {
  public render() {
    return (
      <div>
        <page-header title='Test Page!' onBack={this.back}></page-header>
        <Card><hello x='1'/></Card>
      </div>
    );
  }
  private back() {
    this.$Message.success('event triggered');
  }
 }
