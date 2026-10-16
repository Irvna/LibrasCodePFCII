import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

//serve para criar uma instância do QueryClient, que é o objeto principal do React Query responsável por gerenciar o cache e as consultas de dados. 
//O QueryClientProvider é um componente que envolve a aplicação e fornece o QueryClient para todos os componentes filhos, permitindo que eles usem os hooks do React Query para fazer consultas de dados e acessar o cache.
const queryClient = new QueryClient();
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/*O QueryClientProvider é um componente que envolve a aplicação e fornece o QueryClient para todos os componentes filhos, 
    permitindo que eles usem os hooks do React Query para fazer consultas de dados e acessar o cache.*/}
    <QueryClientProvider client={queryClient}>
    <App />
    </QueryClientProvider>
  </React.StrictMode>
);
