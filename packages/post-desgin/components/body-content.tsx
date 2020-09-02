import { Vue, Component } from 'vue-property-decorator';
import { Drawer } from '@idg/iview';
@Component({
  depends: [],
})
export default class BodyContent extends Vue {
  public leftMenuShow: boolean = true;
  public rightMenuShow: boolean = true;
  public data() {
    return {};
  }
  public render() {
    return (
      <div class='flex '>
        <Drawer placement='left' v-model={this.leftMenuShow} mask={false} transfer={false}>
          左侧抽屉
        </Drawer>
        <div class='p-15'>
          <div class='bg-gray-0' style='width:80%;height:80%'>
            22
          </div>
        </div>
        <Drawer placement='right' v-model={this.rightMenuShow} mask={false} transfer={false}>
          右侧抽屉
        </Drawer>
      </div>
    );
  }
}
