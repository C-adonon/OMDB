import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Details from './pages/Details';
// import App from './App';
import Root from './pages/Root';
import "./style.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root/>,
  },{
    path: "/details/:id",
    element: <Details/>
  }
]);

ReactDOM.createRoot(document.getElementById("app")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// const root = createRoot(document.getElementById('app'));
// root.render(
//   <StrictMode>
//     <App />
//   </StrictMode>
// );
