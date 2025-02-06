import { createBrowserRouter, RouterProvider } from 'react-router-dom';
//import Home from './components/Home';  
import Dashboard from './components/Dashboard'; 
import About from './components/About'; 
import Navbar from './components/Navbar';
import Dashboard1 from './components/Dashboard1';
import Dashboard2 from './components/Dashboard2';
import Dashboard3 from './components/Dashboard3';
import Layouts from './components/Layouts';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Home from './components/Home'; 

function App() {
  const router = createBrowserRouter([
   // { path: '/', element: <div> <Navbar/> <Home /></div> },

    {
      path: '/',
      element: <Layouts />, 
      children: [
        { path: '/', element: <Home /> },
        {
          path: '/dashboard',
          element: <Dashboard />,
          children: [
            { path: 'dashboard1', element: <Dashboard1 /> },
            { path: 'dashboard2', element: <Dashboard2 /> },
            { path: 'dashboard3', element: <Dashboard3 /> },
          ],
        },
        { path: '/about', element: <About /> },
      ],
    },
    
    { path: '/dashboard',
     element: <div> <Navbar/> <Dashboard />
     </div>,
     children: [
      {
        path:'dashboard1',
        element:<Dashboard1/>
      },
      {
        path:'dashboard2',
        element:<Dashboard2/>
      },
      {
        path:'dashboard3',
        element:<Dashboard3/>
      }
     ]
      },
    { path: '/about', element: <div> <Navbar/> <About /></div> },
  ]);

  return (
    <div>
      
      <RouterProvider router={router} />
    </div>
  );
  
}

export default App;
