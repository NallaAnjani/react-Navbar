import React from "react"
import Data from "../../data"
import "./Product.css"
class Product extends React.Component{
    render(){
        return(
            <div id="container">
            {Data.map((product)=>{
                return(
                    <div id="card">
                    <img src={product.image}/>
                    <h4>{product.title}</h4>
                    <p>{product.price}</p>
                    </div>
                )
            })}
            </div>
        )
    }
}
export default Product