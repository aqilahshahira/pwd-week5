import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';

import HomePage from './assets/pages/HomePage';
import ListPage from './assets/pages/ListPage';
import DetailPage from './assets//pages/DetailPage';
import PopularPage from './assets/pages/PopularPage';
import SubmitPage from './assets/pages/SubmitPage';

import Header from './assets/components/Header';
import NotFound from './assets/components/NotFound';

import GlobalStyles from './assets/styles/GlobalStyles';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5,
      retry: 1,
    },
  },
});

function App() {
  return (
  <QueryClientProvider client={queryClient}>
    <BrowserRouter>
      <GlobalStyles />
      <div className="app">
        <Header/>
        <main className="main-content">
          <Routes>
            <Route path="/" element={<HomePage />}/>
            <Route path="/list" element={<ListPage />}/>
            <Route path="/restaurant/:id" element={<DetailPage />}/>
            <Route path="/popular" element={<PopularPage/>}/>
            <Route path="/submit" element={<SubmitPage/>}/>
            <Route path="*" element={<NotFound/>}/>
          </Routes>
        </main>
        <footer className="footer">
          <p>&;c 2026 Ajou Campus Foodmap | Made with React</p>
        </footer>
      </div>
      <ToastContainer
        position="bottom-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </BrowserRouter>
  </QueryClientProvider>
  );
}

export default App;