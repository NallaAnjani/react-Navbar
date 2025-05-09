import React from "react"
import Navbar from "./components/Navbar/Navbar"
import Home from "./components/Home/Home"
import Contact from "./components/Contact/Contact"
import About from "./components/About/About"
import Product from "./components/Product/Product"
import { Route, Routes } from "react-router-dom"
class App extends React.Component{
  render(){
    return(
      <div>
        <Navbar></Navbar>
        <Routes> 
          <Route path="/hom" element={<Home/>}></Route>
          <Route path="/about" element={<About/>}></Route>
          <Route path="/contact" element={<Contact/>}></Route>
          <Route path="/product" element={<Product/>}></Route>
        
        </Routes>
       
      </div>
    )
  }
}
export default App