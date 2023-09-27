import React from 'react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import todosReducer from './features/redux/todoSlice';
import TodoList from './components/TodoList';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import axios from 'axios';

const store = configureStore({
  reducer: {
    todos: todosReducer,
  },
});

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 1,
      refetchOnWindowFocus: false,
    },
  },
});

axios.defaults.baseURL = 'http://localhost:3000';

function App() {
  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <TodoList />
        <ReactQueryDevtools />
      </QueryClientProvider>
    </Provider>
  );
}

export default App;
