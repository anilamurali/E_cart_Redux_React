import React from 'react'
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';

function Footer() {
  return (
    <><MDBFooter bgColor='info' className='text-center text-lg-start text-muted'>
    <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
      <div className='me-5 d-none d-lg-block text-white'>
        <span>Get connected with us on social networks:</span>
      </div>

      <div>
        <a href='' className='me-4 text-reset text-white'>
          <MDBIcon color='light' fab icon="facebook-f" />
        </a>
        <a href='' className='me-4 text-reset text-white '>
          <MDBIcon color='light' fab icon="twitter " />
        </a>
        <a href='' className='me-4 text-reset'>
          <MDBIcon color='light' fab icon="google" />
        </a>
        <a href='' className='me-4 text-reset'>
          <MDBIcon color='light' fab icon="instagram" />
        </a>
        <a href='' className='me-4 text-reset'>
          <MDBIcon color='light' fab icon="linkedin" />
        </a>
        <a href='' className='me-4 text-reset'>
          <MDBIcon color='light' fab icon="github" />
        </a>
      </div>
    </section>

    <section className=''>
      <MDBContainer className='text-center text-md-start mt-5'>
        <MDBRow className='mt-3'>
          <MDBCol md="3" lg="4" xl="3" className='mx-auto mb-4'>
            <h6 className='text-uppercase fw-bold mb-4'>
              <MDBIcon icon="gem" className="me-3" />
             Shop-N-Shop
            </h6>
            <p className='text-white'>
              Here you can use rows and columns to organize your footer content. Lorem ipsum dolor sit amet,
              consectetur adipisicing elit.
            </p>
          </MDBCol>

          <MDBCol md="2" lg="2" xl="2" className='mx-auto mb-4'>
            <h6 className='text-uppercase fw-bold mb-4 text-white'>Products</h6>
            <p className='text-white'>
              <a href='#!' className='text-reset text-white'>
                Angular
              </a>
            </p>
            <p className='text-white'>
              <a href='#!' className='text-reset text-white'>
                React
              </a>
            </p>
            <p className='text-white'>
              <a href='#!' className='text-reset text-white'>
                Vue
              </a>
            </p>
            <p className='text-white'>
              <a href='#!' className='text-reset text-white'>
                Laravel
              </a>
            </p>
          </MDBCol>

          <MDBCol md="3" lg="2" xl="2" className='mx-auto mb-4'>
            <h6 className='text-uppercase fw-bold mb-4'>Useful links</h6>
            <p className='text-white'>
              <a href='#!' className='text-reset text-white'>
                Pricing
              </a>
            </p>
            <p className='text-white'>
              <a href='#!' className='text-reset text-white'>
                Settings
              </a>
            </p>
            <p className='text-white'>
              <a href='#!' className='text-reset text-white'>
                Orders
              </a>
            </p>
            <p className='text-white'>
              <a href='#!' className='text-reset text-white'>
                Help
              </a>
            </p>
          </MDBCol>

          <MDBCol md="4" lg="3" xl="3" className='mx-auto mb-md-0 mb-4'>
            <h6 className='text-uppercase fw-bold mb-4 text-white'>Contact</h6>
            <p className='text-white'>
              <MDBIcon icon="home" className="me-2 text-white" />
              New York, NY 10012, US
            </p>
            <p className='text-white'>
              <MDBIcon icon="envelope" className="me-3 text-white" />
              info@example.com
            </p>
            <p className='text-white'>
              <MDBIcon icon="phone" className="me-3 text-white" /> + 01 234 567 88
            </p>
            <p className='text-white'>
              <MDBIcon icon="print" className="me-3 text-white" /> + 01 234 567 89
            </p>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </section>

    <div className='text-center text-white p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
      © 2023 Copyright:
      <a className='text-reset fw-bold text-white' href='/'>
        Shop-N-Shop.com
      </a>
    </div>
  </MDBFooter></>
  )
}

export default Footer