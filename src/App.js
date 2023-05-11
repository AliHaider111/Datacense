import logo from './logo.svg';
import './App.css';
import Auth from './components/Auth/Auth';
import { ToastContainer } from "react-toastify";
import { Route, Routes } from 'react-router-dom';
import Layout from './components/layout/Layout';

function App() {
  return (
    <>
      <div className='bg-color'>
        <Routes>
          <Route index element={<Auth />} />
          
          <Route path='user-profile' element={<Layout />} />
        </Routes>
        <ToastContainer />
      </div>
    </>
  );
}

export default App;
