import React from 'react';
import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router-dom';

// Layouts
import MainLayout from '../layouts/MainLayout';
import ForumMain from '../layouts/ForumMainLayout';

// Main Pages
import Home from '../pages/main/Home';
import About from '../pages/main/About';
import News from '../pages/main/News';

// Forum pages
import ForumRooms from '../pages/forum/ForumRooms';
import ThreadFeed from '../layouts/components/ThreadFeed';

import './App.css'


const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
        index: true,
      },
      {
        path: "news",
        element: <News />,
        // loader: teamLoader,
      },
      {
        path: "forum",
        element: <ForumMain />,
        // loader: teamLoader,
        children: [
          {
            path: "",
            // index: true,
            element: <ForumRooms />,
            children: [
              {

              }
            ]
          },
          {
            path: "",
            // index: true,
            element: <ThreadFeed />,

          },
        ]
      }
    ]
  }
])

function App() {


  return (
    <RouterProvider router={router} />
  )
}

export default App
