import React from "react"
import "./Navbar.css"
import { Link } from "react-router-dom"
class Navbar extends React.Component{
    render(){
        return(
            <div id = "navbar">
                <div id="nav_left">
                OnlineStore
                </div>
                <div id="nav_right">
                 <Link to="/hom" id="link"><span>Home</span></Link>
                 <Link to="/about" id="link"><span>About</span></Link>
                 <Link to="/contact" id="link"><span>Contact</span></Link>
                 <Link to="/product" id="link"><span>Products</span></Link>
                </div>
            </div>
        )
    }
}
export default Navbar 