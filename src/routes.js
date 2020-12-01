import { Dashboard } from "./app/dashboard";
import { Donations } from "./app/donations";
import { Organization } from "./app/organisation";
import { Profile } from "./app/profile";
import { Withdraw } from "./app/withdraw";


const allRoutes = [
    {
      name: 'Dashboard',
      path: '/',
      component: Dashboard ,
      exact:true
    },
    {
      name: 'Dashboard',
      path: '/home',
      component: Dashboard ,
      exact:true
    },
    {
      name: 'Documents',
      path: '/documents',
      component: Dashboard ,
    },
    {
      name: "Withdraw",
      path: '/withdraw',
      component: Withdraw ,
    },
    {
      name: "Donations",
      path: '/donations',
      component: Donations ,
    },
    {
      name: "Organisation",
      path: '/organisation',
      component: Organization ,
    },
   
    {
      name: "Profile",
      path: '/profile',
      component: Profile ,
    },
  ];
  
  export default  allRoutes;