import Layout from './components/Layout/Layout'
import './index.css'
import {Routes, Route } from "react-router-dom"
import Navbar from './components/Navbar/Navbar'
import Home from './components/Home/Home'
import Store from './components/Store/Store'
import Card from './components/Cart/Cart'
import NotFound from './components/Not-Found/NotFound'
import Product from './components/Product/Product'

function App() {

  return (
    <>
    <Navbar />
     <Layout>
        <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/store" element={<Store />}/>
            <Route path="/product/:id" element={<Product />}/>
            <Route path="/cart" element={<Card />}/>
            <Route path="/*" element={<NotFound />}/>
        </Routes>
     </Layout>
    </>
       
  )
}

export default App
