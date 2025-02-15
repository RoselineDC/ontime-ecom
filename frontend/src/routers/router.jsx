import React from 'react';
import { createBrowserRouter } from "react-router-dom";
import App from '../App';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,	
    children: [
      {
        path: "/",
        element:{
          path: "/",
          element: <div>Home</div>,
          
        }
      },
      {
        path: "/orders",
        element: <h1>Orders
          
        </h1>
      },
      {
        path: "/about",
        element: <div>About</div>,
      },
    ]
  },
]);

export default router;