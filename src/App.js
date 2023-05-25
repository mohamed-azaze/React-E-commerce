import './App.css';
import { Route, Routes, BrowserRouter } from 'react-router-dom'
// Start Import Components
import Home from './Pages/Home/Home.jsx';
import ProductDetails from './Pages/ProductDetails/ProductDetails';
import Wishlist from './Pages/Wishlist/Wishlist';
import CreateAccount from './Pages/CreateAccount/CreateAccount';
import Login from './Pages/Login/Login';
import ResetPassword from './Pages/ResetPassword/ResetPassword';







function App() {
  localStorage.setItem('cart', JSON.stringify([]));
  localStorage.setItem('fav', JSON.stringify([]));
  localStorage.setItem('isActive', JSON.stringify([]));


  return (
    <>

      <BrowserRouter>
        <Routes>
          <Route path="React-E-commerce/" element={<Home />} />
          <Route path="React-E-commerce/:id" element={<ProductDetails />} />
          <Route path='React-E-commerce/Wishlist' element={<Wishlist />} />
          <Route path='React-E-commerce/create_account' element={<CreateAccount />} />
          <Route path='React-E-commerce/login' element={<Login />} />
          <Route path='React-E-commerce/reset-password' element={<ResetPassword />} />
          {/* <Route path='/loading' element={<Loading />} /> */}

        </Routes>
      </BrowserRouter>


    </>
  );
}

export default App;
