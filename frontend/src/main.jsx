import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
//import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/styles/bootstrap.custom.css'
import './assets/styles/index.css'
import { 
          createBrowserRouter,
          createRoutesFromElements,
          Route,
          RouterProvider
} from 'react-router-dom'
import { HomeSreen } from './screens/HomeSreen.jsx';
import { ProductScreen } from './screens/ProductScreen.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App/>}>
      <Route index={true} path='/' element={<HomeSreen/>}/>
      <Route path='/product/:id' element={<ProductScreen/>}/>
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)

