import { Vue, Component } from 'vue-property-decorator';
import { Layout, Footer, Button, Icon } from '@idg/iview';
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
      <div>
        <Layout>
          <div
            class='t-0 absoulte w-full bg-gray-8 h-12 items-center flex text-lg flex justify-between'
            style='z-index:2000'
          >
            <div class={style.topBarBack}>
              <Icon type='ios-arrow-back' size={36} />
            </div>
            <div class={style.topBarTitle}>postMaker</div>
            <Button type='primary' class='mr-4 items-center'>
              <Icon type='md-camera' class='mr-2' />保 存
            </Button>
          </div>
          <div class='w-screen h-screen bg-gray-2'>
            <body-content />
          </div>
          <Footer style='text-align:center' class='bg-gray-2'>
            idg-post-maker@ 2020 Made By Billy-S
          </Footer>
        </Layout>
      </div>
    );
  }
}
