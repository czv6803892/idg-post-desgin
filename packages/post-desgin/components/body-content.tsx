import { Vue, Component } from 'vue-property-decorator';
@Component({
  depends: [],
})
export default class BodyContent extends Vue {
  public rightMenuShow: boolean = true;
  public data() {
    return {};
  }
  public render() {
    return (
      <div class='flex w-full'>
        <div class=''>我是左边菜单</div>

        <div class='flex-grow'>我是中间内容</div>

        <div class=''>我是右边菜单</div>
      </div>
    );
  }
}
