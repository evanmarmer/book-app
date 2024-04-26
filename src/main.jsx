import Home from './Home.jsx'
import User from './User.jsx'
import Explore from './Explore.jsx'
import App from './App.jsx'
import React from 'react'
import ReactDOM from 'react-dom/client'
import {RouterProvider, Route, createBrowserRouter, createRoutesFromElements} from 'react-router-dom';



const router = createBrowserRouter(
  createRoutesFromElements(

    <Route path="/" element={<App/>} >
      <Route path='/home' element={<Home/>} />
      <Route path="/explore"  element={<Explore/>} />
      <Route path="/user" element={<User/>} />
    </Route>
  ),
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
