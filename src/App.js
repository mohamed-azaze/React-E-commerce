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

  return (
    <>

      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/:id" element={<ProductDetails />} />
          <Route path='/Wishlist' element={<Wishlist />} />
          <Route path='/create_account' element={<CreateAccount />} />
          <Route path='/login' element={<Login />} />
          <Route path='/reset-password' element={<ResetPassword />} />
          {/* <Route path='/loading' element={<Loading />} /> */}

        </Routes>
      </BrowserRouter>


    </>
  );
}

export default App;
