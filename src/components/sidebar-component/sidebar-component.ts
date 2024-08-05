import { Options, Vue } from 'vue-class-component';
import { useRoute, useRouter } from 'vue-router';

@Options({
    components: {},
})
export default class SidebarComponent extends Vue {

  private route = useRoute(); // 用於獲取當前路由信息
  private router = useRouter(); // 用於進行路由導航和操作

  private isHighlight:boolean = true;

  // 組件初始化
  mounted() {
    console.log('[SidebarComponent] 當前路由：', this.route.path);
  }

  // 導航到首頁
  goToAbout = () => {
    console.log(`[SidebarComponent] 導航到 /about`);
    this.router.push('/about');
  }
  
  // 切換高亮狀態
  changeHightlight = () => {
    this.isHighlight = !this.isHighlight;
  }

}
