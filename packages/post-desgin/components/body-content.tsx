import { Vue, Component } from 'vue-property-decorator';
@Component({
  depends: ['component.LeftSideMenu', 'component.RightSideMenu', 'component.DrawWrapper'],
})
export default class BodyContent extends Vue {
  public rightMenuShow: boolean = true;
  public data() {
    return {};
  }
  public render() {
    return (
      <div class='flex w-full h-full'>
        <div class='h-full'>
          <left-side-menu />
        </div>
        <div class='flex-grow text-center bg-gray-3' style='min-width:600px'>
          <div class='h-full' style='padding:60px 180px'>
            <draw-wrapper />
          </div>
        </div>
        <div class='full' style='width:300px'>
          <right-side-menu />
        </div>
      </div>
    );
  }
}
