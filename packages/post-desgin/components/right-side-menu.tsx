import { Vue, Component } from 'vue-property-decorator';
import { Log } from '@idg/idg';
@Component({
  depends: ['component.RightMenuTabLayer', 'component.RightMenuTabSetting'],
})
export default class RightSideMenu extends Vue {
  public currentTab: string = 'right-menu-tab-setting';
  public tabMap: [{ component: string; title: string; icon: string }];
  public data() {
    return {
      tabMap: [
        { component: 'right-menu-tab-setting', title: '设置', icon: 'ios-setting' },
        { component: 'right-menu-tab-layer', title: '图层', icon: 'ios-setting' },
      ],
    };
  }
  public renderCoponent() {
    const componentName = this.currentTab;
    Log.debug(componentName);
    return (
      <div>
        <componentName />
      </div>
    );
  }
  public render() {
    return (
      <div>
        <div class='h-10 flex'>
          {this.tabMap.map((item) => {
            return (
              <div
                class={
                  this.currentTab === item.component
                    ? 'w-1/2 shadow py-1 text-xl text-center cursor-pointer text-gray-1 bg-gray-10'
                    : 'w-1/2 shadow py-1 text-xl text-center cursor-pointer'
                }
                on={{
                  click: () => {
                    this.currentTab = item.component;
                  },
                }}
              >
                {item.title}
              </div>
            );
          })}
        </div>
        {this.renderCoponent()}
      </div>
    );
  }
}
