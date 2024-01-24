//react
import React from 'react';

//react-dom
import ReactDOM from 'react-dom/client';

//react-router-dom
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

//components
import App from './App.tsx';

//styles
import './styles/global.sass';

//react-query
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

//pages
import Home from "./routes/Home.tsx";

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
         path: '/',
         element: <Home /> 
      }
    ]
  }
])

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router}/>
    </QueryClientProvider>
  </React.StrictMode>,
)
