import { Vue, Component } from 'vue-property-decorator';
@Component({
  depends: [],
})
export default class LeftMenuItemSource extends Vue {
  public data() {
    return {};
  }
  public render() {
    return <div>Source</div>;
  }
}
