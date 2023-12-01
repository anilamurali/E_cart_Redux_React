import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Badge from 'react-bootstrap/Badge';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';


function Header() {
  const wishlist=useSelector((state)=>state.wishlistReducer)
  const cart =useSelector((state)=>state.cartReducer)
  console.log(wishlist.length);
  return (
    <>
     <Navbar style={{position:'sticky', top:'0',}} collapseOnSelect expand="lg" className="bg-body-tertiary bg-info sticky-top">
      <Container>
        <Navbar.Brand  className='text-light'>
          <Link to={'/'} style={{textDecoration:'none',color:'white'}}>
          <i className='fa-solid fa-shopping-cart me-3'></i>
          Shop-N-Shop
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            {/* <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link> */}
            {/* <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown> */}
          </Nav>
          <Nav>
            <Link to={"/wishlist"} className='text-light mx-2 mt-2' style={{textDecoration:'none'}}>
            <i className="fa-solid fa-heart text-danger me-2"></i>
              Wishlist 
              <Badge className='ms-1' pill bg="secondary">{wishlist.length}</Badge>
            </Link>
            <Link to={"/cart"} className='text-light mx-2 mt-2  ms-4' style={{textDecoration:'none'}}>
            <i className='fa-solid fa-shopping-cart me-1'></i>
              Cart 
              <Badge className='ms-1' pill bg="secondary">{cart.length}</Badge>
            </Link>
            
            {/* <Nav.Link eventKey={2} className='text-light' href="/cart">
          <i className='fa-solid fa-shopping-cart me-1'></i>
              Cart <Badge pill bg="secondary">9</Badge>
            </Nav.Link> */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  )
}

export default Header