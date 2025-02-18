import Layout from "./components/Layout/Layout";
import "./index.css";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./components/Home/Home";
import Store from "./components/Store/Store";
import Card from "./components/Cart/Cart";
import NotFound from "./components/Not-Found/NotFound";
import Product from "./components/Product/Product";
import {
  useShopingCartContext,
} from "./components/ShopingCartContext/ShopingCartContext";
import Loing from "./components/privateRoute/privateRoute";
import LoginPage from "./components/login page/LoginPage";

function App() {
  const { isLogin } = useShopingCartContext();
  return (
    <>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/store" element={<Store />} />
          <Route path="/product/:id" element={<Product />} />
          <Route element={<Loing />}>
            <Route path="/cart" element={<Card />} />
          </Route>
          <Route
            path="/login"
            element={isLogin ? <Navigate to="/" /> : <LoginPage />}
          />
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </Layout>
    </>
  );
}

export default App;
