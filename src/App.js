import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

// Components and Functions
import Header from "./components/Header";
import Footer from "./components/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Pages
import Home from "./pages/home";
import Booking from "./pages/booking";
import Orders from "./pages/order";
import FAQ from "./pages/faq";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/booking" element={<Booking />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/faq" element={<FAQ />} />
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
