import React from 'react';
import ReactDOM from 'react-dom/client';
import './assets/styles/index.css';
import App from './components/App';
import reportWebVitals from './reportWebVitals';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Login from "./components/Login";
import {checkLogin} from "./setup";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
    },
    {
        path: "/login",
        element: <Login />,
    },
]);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>
);

checkLogin({router: router});

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
