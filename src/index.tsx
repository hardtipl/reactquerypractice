import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools'
import { BrowserRouter } from 'react-router-dom';
const queryclient = new QueryClient()

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    {/* These is responsible for providing the passed funtion to the childs */}
    <QueryClientProvider client={queryclient}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
      <ReactQueryDevtools />
    </QueryClientProvider>
  </React.StrictMode>
);
