import { Vue, Component } from 'vue-property-decorator';
import { Log } from '@idg/idg';
@Component({
  depends: [],
})
export default class LeftMenuItemTitle extends Vue {
  public titleItem: [{ element: string; text: string }];
  public data() {
    return {
      titleItem: [
        { element: 'h1', text: 'H1' },
        { element: 'h2', text: 'H2' },
        { element: 'h3', text: 'H3' },
        { element: 'h4', text: 'H4' },
        { element: 'div', text: 'text' },
      ],
    };
  }
  public render() {
    return (
      <div class='pt-2'>
        <div>
          {this.titleItem.map((item) => {
            return (
              <div
                class='hover:bg-gray-3 mb-2 cursor-pointer'
                on={{
                  click: () => {
                    Log.debug('clicked', item.element);
                  },
                }}
              >
                <item.element> {item.text}</item.element>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}
