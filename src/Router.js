import { BrowserRouter, Routes, Route } from "react-router-dom";
import Detail from "./components/Detail";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Cart from "./routes/Cart";
import Home from "./routes/Home";
import Signup from "./routes/Signup";


function Router() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/react-doyoram/" element={<Home />} />
        <Route path="/react-doyoram/:productId" element={<Detail />} />
        <Route path="cart" element={<Cart />} />
        <Route path="signup" element={<Signup />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default Router;