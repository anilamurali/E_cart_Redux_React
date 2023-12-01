import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBBtn
} from 'mdb-react-ui-kit';
import { MDBSpinner } from 'mdb-react-ui-kit';

import { Col, Row } from 'react-bootstrap';
import useFetch from '../Hooks/useFech';
import Badge from 'react-bootstrap/Badge';
import { useDispatch } from 'react-redux';
import { addToWishlist } from '../Redux/slices/whishlistSlice';
import { addToCart } from '../Redux/slices/cartSlice';

function Home() {

    const fetchData= useFetch('https://dummyjson.com/products')
    console.log(fetchData);

    const dispatch=useDispatch()


   
  return (
    <>
    <div className="container ">
    <Row>
    
        {
            fetchData?.length>0?
            fetchData.map((item)=>(
              <Col sm={12} md={6} lg={4} xl={3}  >
                <div className="d-flex justify-content-center">
             
              <MDBCard className='p-2  my-4' style={{width:'300px'}}>
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
              <div onClick={()=>dispatch(addToCart(item))} className='d-flex justify-content-evenly' >
             <MDBBtn   href='#' color='info'>
             <i className='fa-solid fa-shopping-cart '></i>
             </MDBBtn>
              <MDBBtn onClick={()=>dispatch(addToWishlist(item))} href='#' color='info'>
              <i className="fa-solid fa-heart text-danger"></i>
              </MDBBtn>
             </div>
             
             
            </MDBCardBody>
          </MDBCard>
          </div>
               
              </Col>
            )): <MDBSpinner className='mx-2 my-4' color='info'>
            <span className='visually-hidden'>Loading...</span>
          </MDBSpinner>
        }
       
     </Row>
     </div>
    
    </>
  )
}

export default Home