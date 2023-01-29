import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/header';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import Booking from './pages/booking';
import Orders from './pages/order';
import FAQ from './pages/faq';
import Footer from './components/footer';


function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/booking' element={<Booking />} />
        <Route path='/orders' element={<Orders />} />
        <Route path='/faq' element={<FAQ />} />

        <Route path='/checkout' element={<CheckoutLayout />}>
          <Route index element={<PersonalDetails />}></Route>  
          <Route path='step-2' element={<Address />}></Route>  
        </Route> 
      </Routes>
    </BrowserRouter>
  );
}

export default App;
