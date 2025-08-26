import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Article001 from './pages/Article001';
import Article002 from './pages/Article002';
import Article003 from './pages/Article003';
import Article004 from './pages/Article004';
import Article005 from './pages/Article005';
import Article006 from './pages/Article006';
import Chat from './pages/Chat';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { index: true, element: <Dashboard /> },
      { path: 'article001', element: <Article001 /> },
      { path: 'article002', element: <Article002 /> },
      { path: 'article003', element: <Article003 /> },
      { path: 'article004', element: <Article004 /> },
      { path: 'article005', element: <Article005 /> },
      { path: 'article006', element: <Article006 /> },
      { path: 'chat', element: <Chat /> },
      // fallback
      { path: '*', element: <Dashboard /> },
    ],
  },
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);