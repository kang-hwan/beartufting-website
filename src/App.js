import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

// Components and Functions
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Pages
import Home from "./pages/Home/home";
import Booking from "./pages/Booking/booking";
import Orders from "./pages/Orders/order";
import FAQ from "./pages/FAQ/faq";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <div className="main-container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/booking" element={<Booking />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/faq" element={<FAQ />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
