
import { Route, Routes } from 'react-router-dom';
import './App.css';
import NotFound from './components/404/NotFound';

import AboutMe from './components/AboutMe/AboutMe';
import RequireAuth from './components/Auth/RequireAuth';

import Login from './components/Authintication/Login';
import Register from './components/Authintication/Register';
import Blogs from './components/Blogs/Blogs';
import Checkout from './components/CheckOut/Checkout';
import Footer from './components/CommonRouts/Footer';
import Navbar from './components/CommonRouts/NavBar/NavBar';
import Home from './components/Home/Home';



function App() {
  return (
    <div className=" ">
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/home' element={<Home />} />
        <Route path='/checkout' element={
          <RequireAuth>
            <Checkout />
          </RequireAuth>
        } />

        <Route path='/blogs' element={<Blogs />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/aboutme' element={<AboutMe />} />
        <Route path='*' element={<NotFound />} />
      </Routes>



      <Footer />
    </div>
  );
}

export default App;
