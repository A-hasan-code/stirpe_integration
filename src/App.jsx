import Headers from "./components/Header";
import { Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./components/Home";
import CartDetails from "./components/CartDetail";
import { Toaster } from "react-hot-toast";
import Sucess from "./components/Sucess";
import Cancel from "./components/Cancel";
function App() {
  return (
    <>
      <Headers />
      <Routes>
        <Route>
          <Route path="*" />
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<CartDetails />} />
          <Route path="/sucess" element={<Sucess />} />
          <Route path="/cancel" element={<Cancel />} />
        </Route>
      </Routes>
      <Toaster />
    </>
  );
}

export default App;
