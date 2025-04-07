import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "@/pages/Home";
import ProductoList from "@/components/ProductoList";

function AppRoutes() {
  return (
    <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/productos" element={<ProductoList />} />
    </Routes>
  </Router>
  );
}

export default AppRoutes;
