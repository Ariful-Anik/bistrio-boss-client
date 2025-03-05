import React from 'react';
import * as ReactDOM from "react-dom/client";
import './index.css';


import {
  
  RouterProvider,
} from "react-router-dom";
import { router } from './Routes/Router.jsx';

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <div className='max-w-11/12 mx-auto'>

    <RouterProvider router={router} />
    </div>
  </React.StrictMode>
);
