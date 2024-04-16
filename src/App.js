import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';

function App() {
  const navLinks = [
    {
      title: 'Dashboard',
      path: '/',
      component: 'Dashboard'
    },
    {
      title: 'User Management',
      path: '/user-management',
      component: 'User Management'
    },
    {
      title: 'Team Management',
      path: '/team-management',
      component: 'Team Management'
    },
    {
      title: 'Payment Management',
      path: '/payment-management',
      component: 'Payment Management'
    },
    {
      title: 'Subscription Management',
      path: '/subscription-management',
      component: 'Subscription Management'
    },
    {
      title: 'Audio Management',
      path: '/audio-management',
      component: 'Audio Management'
    },
    {
      title: 'Video Management',
      path: '/video-management',
      component: 'Video Management'
    },
    {
      title: 'Control Management',
      path: '/control-management',
      component: 'Control Management'
    },
    {
      title: 'Settings',
      path: '/settings',
      component: 'Settings'
    },
    {
      title: 'Login',
      path: '/login',
      component: 'Login'
    }
  ];
  return (
    <div className="stance-and-motion-app">
      <BrowserRouter>
        <Header />
        <Sidebar />
        <Routes>
          {
            navLinks.map(
              (item, index) =>
                <Route key={index} path={item.path} element=""></Route>
            )
          }
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
