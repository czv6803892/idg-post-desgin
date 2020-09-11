import { Vue, Component } from 'vue-property-decorator';
@Component({
  depends: [],
})
export default class LeftMenuItemShape extends Vue {
  public imageOptions: [{ key: string; src: string }];
  public data() {
    return {
      imageOptions: [
        { key: 'vue', src: '../../../../public/img/icons/vue.png' },
        { key: '2', src: '2' },
        { key: '3', src: '2' },
        { key: '4', src: '2' },
      ],
    };
  }
  public render() {
    return (
      <div class='pt-1 flex-wrap flex'>
        {this.imageOptions.map((item) => {
          return (
            <div class='w-1/2 h-10 border-solid'>
              <img src={item.src} />
            </div>
          );
        })}
      </div>
    );
  }
}
