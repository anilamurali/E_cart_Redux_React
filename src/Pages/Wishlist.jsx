import React from 'react'
import { Col, Row } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBBtn
} from 'mdb-react-ui-kit';
import Badge from 'react-bootstrap/Badge';
import { addToWishlist, deleteFromWishlist } from '../Redux/slices/whishlistSlice';
import { addToCart } from '../Redux/slices/cartSlice';
import { Link } from 'react-router-dom';


function Wishlist() {

  const dispatch=useDispatch()
  const wishlistArray=useSelector((state)=>state.wishlistReducer)
  console.log(wishlistArray);

  const handleWishlist =(item)=>{
    // add to cart
    dispatch(addToCart(item))
    
    // remove from wishlist
    dispatch(deleteFromWishlist(item.id))


  }
  return (
    <div className='container'>
      <Row>
        {
          wishlistArray.length>0? wishlistArray.map((item)=>(
            <Col sm={12} md={6} lg={4} xl={3}>
        <MDBCard className='p-2' style={{width:'300px',margin:'20px', }}>
      <MDBCardImage style={{height:'200px'}} className=' rounded border border-info' src={item.thumbnail} position='top' alt='...' />
      <MDBCardBody className='text-center' >
        <MDBCardTitle className='fw-bolder' style={{height:'40px'}} >{item.title}</MDBCardTitle>
        <MDBCardTitle className='fw-bolder'  >$ {item.price}</MDBCardTitle>
        <Badge className='p-2 mb-2' bg="primary"><i className="fa-solid fa-star"></i> {item.rating}</Badge>
        <MDBCardText >
          {
            item.description.slice(0,50)
          } ...
        </MDBCardText>
       <div className='d-flex justify-content-between evenly px-3'>
       <MDBBtn onClick={()=>handleWishlist(item)}  href='#' color='info'>
       <i className='fa-solid fa-shopping-cart '></i>
       </MDBBtn>
        <MDBBtn onClick={()=>dispatch(deleteFromWishlist(item.id))} href='#' color='info'>
        <i className="fa-solid fa-trash "></i>
        </MDBBtn>
       </div>
      </MDBCardBody>
    </MDBCard>
        </Col>
          )): <div className='text-center my-5 p-5'>
          <img src="https://static.wixstatic.com/media/7742ef_dfe620d0354b471b8620fcb2c3a46e62~mv2.gif" alt="" />
          <h1>Your Wishlist is empty</h1>
          <Link to={'/'}>
          <button className="btn  btn-primary">Back To Home</button>
          </Link>
        </div>


        }
      </Row>

    </div>
  )
}

export default Wishlist