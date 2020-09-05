
import getAsyncComponent from './asyncImport';

const Login = getAsyncComponent(()=>import('@/page/login'))
const Persion = getAsyncComponent(()=>import('@/page/persion'))
const Home = getAsyncComponent(()=> import('@/page/home'))

const routes = [
    {
      path: '/login',
      component: Login
    },
    {
      path: '',
      component: Home,
      routes: [
        {
          path: '/persion',
          component: Persion
        }
      ]
    }
  ];
  
export default routes;