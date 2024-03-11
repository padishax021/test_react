import "./Card.css"
import React from "react"
import App from "../App";

function Card({ title, image, price}) {
  return (
  <>
  <div className='container'>
<img src={image} alt=""/>
<p>{title}</p>
<p>{price}</p>
<button>В корзину</button>
   
  </div>
  </>
  )
}

export default Card