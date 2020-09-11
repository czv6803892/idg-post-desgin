import { Vue, Component } from 'vue-property-decorator';
@Component({
  depends: [],
})
export default class LeftMenuItemImage extends Vue {
  public imageOptions: any;
  public data() {
    return {
      imageOptions: [
        { key: '', src },
        { key: '', src },
        { key: '', src },
        { key: '', src },
      ],
    };
  }
  public render() {
    return (
      <div class='pt-1 flex-wrap'>
        <div class='w-1/2 h-10 border-solid'>sss</div>
      </div>
    );
  }
}
