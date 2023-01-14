import React from 'react'
import  {Card,ListGroup, Button, } from "react-bootstrap"
import Rating from './Rating'
import {Link} from 'react-router-dom'




const Product = ({product}) => {


    
    const addToCartHandler =() =>{
        navigate(`/cart/${product_id.id}? qty=${qty}`)
 
 
   }


  return (
    <Card className='my-3 p-3 rounded'>
     <Link to={`/product/${product._id}`}>
        <Card.Img style={{ width: 270, height: 340 }} src={product.image}/>
     </Link>

        <Card.Body>
            <Link to={`/product/${product._id}`}>
                <Card.Title as="div">
                    <h2> {product.name}</h2>
                </Card.Title>
            </Link>
                
            <Card.Text as='div'>
                <div className='my-3'>
                    
                    <Rating value ={product.rating} text={`${product.numReviews} reviews`} color={`#f8e825`} />

                </div>
            </Card.Text>
             
             <Card.Text as='h3'>
             ₪{product.price}

             </Card.Text>
             <ListGroup.Item>
                <Button className=" btn-block" onClick={addToCartHandler} disabled={product.countInStock === 0 } type="button"> Add to Cart</Button>
            </ListGroup.Item>

        </Card.Body>
    </Card>
  )
}

export default Product