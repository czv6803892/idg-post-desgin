import { Vue, Component } from 'vue-property-decorator';
@Component({
  depends: [],
})
export default class DrawWrapper extends Vue {
  public data() {
    return {};
  }
  public render() {
    return <div class='bg-gray-1 h-full shadow-md'>DrawWrapper</div>;
  }
}
