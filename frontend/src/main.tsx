import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { Provider } from 'react-redux'
import {
  createBrowserRouter,
  RouterProvider,
  Navigate
} from 'react-router-dom'
import store from './store/index.ts'
import { MainPage } from './pages/main/index.tsx'
import { NotFound } from './pages/not-found/index.tsx'
import { CheckPath } from './pages/main/route-wrapper.tsx'

const router = createBrowserRouter([
  {
    path: '/:league/:date',
    element: (
      <CheckPath>
        <MainPage />
      </CheckPath>
    )
  },
  {
    path: '/',
    element: <Navigate to="/BL1/today" replace />
  },
  {
    path: '/*',
    element: <NotFound />
  }
])

const root = document.getElementById('root') as Element | DocumentFragment

ReactDOM.createRoot(root).render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
)
