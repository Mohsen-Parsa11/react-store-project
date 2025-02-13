import Layout from './components/Layout/Layout'
import './index.css'
import {Routes, Route } from "react-router-dom"
import Home from './components/Home/Home'
import Store from './components/Store/Store'
import Card from './components/Cart/Cart'
import NotFound from './components/Not-Found/NotFound'
import Product from './components/Product/Product'
import { ShopingCartProvider } from './components/ShopingCartContext/ShopingCartContext'



function App() {

  return (
    <>
    <ShopingCartProvider>
     <Layout>
        <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/store" element={<Store />}/>
            <Route path="/product/:id" element={<Product />}/>
            <Route path="/cart" element={<Card />}/>
            <Route path="/*" element={<NotFound />}/>
        </Routes>
     </Layout>
     </ShopingCartProvider>
    </>
       
  )
}

export default App
