import { Vue, Component } from 'vue-property-decorator';
import { Icon } from '@idg/iview';
import { Log } from '@idg/idg';
@Component({
  depends: [
    'component.LeftMenuItemTitle',
    'component.LeftMenuItemSource',
    'component.LeftMenuItemShape',
    'component.LeftMenuItemImage',
  ],
})
export default class LeftSideMenu extends Vue {
  public sideTab: [{ icon: string; title: string; ref: string; component: string }];
  public checked: string = '标题';
  public currentTab: string = 'left-menu-item-title';
  public data() {
    return {
      sideTab: [
        { icon: 'logo-tumblr', title: '标题', ref: '', component: 'left-menu-item-title' },
        { icon: 'md-heart', title: '形状', ref: '', component: 'left-menu-item-shape' },
        { icon: 'md-camera', title: '图片', ref: '', component: 'left-menu-item-image' },
        { icon: 'md-build', title: '素材', ref: '', component: 'left-menu-item-source' },
      ],
    };
  }
  public renderComponent() {
    const componentName = this.currentTab;
    Log.debug(componentName);
    return (
      <div class='text-center' style='width:250px'>
        <componentName />
      </div>
    );
  }
  public render() {
    return (
      <div class='flex h-full'>
        <div class='h-full' style='width:56px;background:#718096'>
          {this.sideTab.map((item) => {
            return (
              <div
                class={
                  this.checked === item.title
                    ? 'text-center px-2 py-1 cursor-pointer bg-gray-1'
                    : 'text-center px-2 py-1 cursor-pointer text-gray-1'
                }
                on={{
                  click: () => {
                    this.checked = item.title;
                    this.currentTab = item.component;
                  },
                }}
              >
                <Icon type={item.icon} size={24} />
                <div>{item.title}</div>
              </div>
            );
          })}
        </div>
        {this.renderComponent()}
      </div>
    );
  }
}
