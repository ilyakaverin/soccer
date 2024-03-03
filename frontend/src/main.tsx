import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { Provider } from 'react-redux';
import store from './store/index.ts';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { MainPage } from './pages/main/index.tsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainPage />,
  },
]);

const root = document.getElementById('root') as HTMLElement

ReactDOM.createRoot(root).render(
  <Provider store={store}><RouterProvider router={router} /></Provider>
  ,
)
