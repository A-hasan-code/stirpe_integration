import Headers from "./components/Header";
import { Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./components/Home";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <>
      <Headers />
      <Routes>
        <Route>
          <Route path="/" element={<Home />} />
        </Route>
      </Routes>
      <Toaster />
    </>
  );
}

export default App;
