import Other from '@/page/other'
import getAsyncComponent from './asyncImport';

const Home = getAsyncComponent(()=>import('@/page/home'))
const Persion = getAsyncComponent(()=>import('@/page/persion'))

const routes = [
    {
      path: '/home',
      component: Home
    },
    {
      path: '',
      component: Other,
      routes: [
        {
          path: '/persion',
          component: Persion
        }
      ]
    }
  ];
  
export default routes;