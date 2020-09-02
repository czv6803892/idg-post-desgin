import { Vue, Component } from 'vue-property-decorator';
import { Footer, Button, Icon } from '@idg/iview';
import style from '../styles/post-desgin.module.less';
@Component({
  depends: ['component.BodyContent'],
})
export default class PageLayOut extends Vue {
  public data() {
    return {};
  }
  public render() {
    return (
      <div class='h-screen'>
        <div class={style.topBar}>
          <div class={style.topBarWrap}>
            <div class={style.topBarBack}>
              <Icon type='ios-arrow-back' size={36} />
            </div>
            <div class={style.topBarTitle}>postDesign</div>
            <Button type='primary' class='mr-4 items-center'>
              <Icon type='md-camera' class='mr-2' />保 存
            </Button>
          </div>
        </div>
        <div class='h-full'>
          <body-content />
        </div>
        <Footer style='text-align:center' class='bg-gray-2'>
          idg-post-maker@ 2020 Made By Billy-S
        </Footer>
      </div>
    );
  }
}
