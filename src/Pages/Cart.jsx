import React, { useEffect, useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';
import { Link, useNavigate } from 'react-router-dom';
import { deleteFromCart, emptyCart } from '../Redux/slices/cartSlice';


function Cart() {
  const navigate=useNavigate()
  const dispatch = useDispatch()
  const cartArray = useSelector((state) => state.cartReducer)
  console.log(cartArray);//cart array

  // function for total price
  const [total,setTotal]=useState()
  const getCartTotal=()=>{
    if (cartArray.length>0) {

      setTotal(cartArray.map(item=>item.price).reduce((p1,p2)=>p1+p2)) 
      
    }
    else{
      setTotal(0)
    }
  }

  useEffect(()=>{
    getCartTotal()
  },[cartArray])

  // functon for empty cart

  const handleCartEmpty= ()=>{
    dispatch(emptyCart())
    alert("Your Order has been placed successfully")
    navigate('/')
  }
  return (
    <div className='container'>
      <Row>
        <Col >
         
            {
              cartArray.length > 0 ? cartArray.map((item, index) => (
                <div className="container shadow rounded border mt-3 p-2 flex d-flex justify-content-between evenly">

                  <img className='rounded' src={item.thumbnail}  width={'100px'} height={'100px'} alt="" />
                  <div>
                    <h2 className='text-dark'>Product :{item.title}</h2>
                    <h4 className='text-dark'>Price :{item.price}</h4>
                  </div>

                  <div className="text-center">
                    <button className="btn btn-info  mt-4 me-4">
                      <i className="fa-solid fa-trash"></i>
                    </button>
                  </div>

                </div>

                // <MDBTableBody>
                //   <tr>
                //     <th scope='row'>{index + 1}</th>
                //     <td>{item.title}</td>
                //     <td><img src={item.thumbnail} alt="" width={'100px'} height={'100px'} /></td>
                //     <td>$ {item.price}</td>
                //     <td><i onClick={() => dispatch(deleteFromCart(item.id))} className="fa-solid fa-trash text-danger"></i> </td>
                //   </tr>



                // </MDBTableBody>

              ))
                :
                <div className='text-center my-5 p-5'>
                  <img src="https://static.wixstatic.com/media/7742ef_dfe620d0354b471b8620fcb2c3a46e62~mv2.gif" alt="" />
                  <h1>Your Cart is empty</h1>
                  <Link to={'/'}>
                    <button className="btn btn-primary">Back To Home</button>
                  </Link>
                </div>

            }
          
        </Col>
        <Col>
          <div className='container  border shadow my-5'>
            <h1 className='text-center m-4'>Cart Summary</h1>
            <h3 className='text-center '>Total Cart Items:{cartArray.length}</h3>
            <h2 className='text-center '>Total Price :${total}</h2>
            <div className="text-center">
              <button onClick={handleCartEmpty} className="btn btn-info m-4">Place Order</button>
            </div>

          </div>
        </Col>
      </Row>


    </div>
  )
}

export default Cart