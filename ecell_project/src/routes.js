import { Navigate, useRoutes } from 'react-router-dom';
import Division3 from './components-2/Division3';
import Food1 from './components-2/Food1';
import Services1 from './components-2/Services1';
import Others1 from './components-2/Others1';
import Dashboard1 from './components1/Dashboard1';
import Todayprofit from './components1/Todayprofit';



function useAuth() {
    return localStorage.getItem('token')?true:false;
  }
  
  function PrivateRoute({ children }) {
    const auth = useAuth();
    return auth ? children : <Navigate to="/login" />;
  }

  
export default function Router() {
    return useRoutes([
      {path:'/',
      element:<Division3/>
    },
    {
      path:'/food1',
      element:<Food1/>
    },
    {
      path:'/services1',
      element:<Services1/>
    },
    {
      path:'/others1',
      element:<Others1/>
    },
    {
      path:'/dashboard',
      element:<Dashboard1/>
    },
    {
      path:'/dashboard/today',
      element:<Todayprofit/>
    },

      // {
      //   path: '/',
      //   element: <Division3/>,
      //   children: [
      //     // {path:'/',element:<Division3/>},
      //       {path:'food1',element:<Food1/>},
      //       {path:'services1',element:<Services1/>},
      //       {path:'others1',element:<Others1/>}
      //   ]
      // },
      // {
      //   path: '/dashboard',
      //   element: <Dashboard1 />,
      //   children: [
      //     { path: '/', element: <Navigate to="/dashboard/app" replace /> },
      //   //   { path: 'app', element: <PrivateRoute><DashboardApp /></PrivateRoute> },
      //   //   { path: 'user*', element: <PrivateRoute><User /></PrivateRoute>},
      //   ]
      // },
  
      // { path: '*', element: <Navigate to="/404" replace /> }
    ]);
    
  }
  