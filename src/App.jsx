import React from 'react';
import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router-dom';

import MainLayout from '../layouts/MainLayout';

import './App.css'


const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [

    ]
  }
])

function App() {


  return (
    <RouterProvider router={router} />
  )
}

export default App
