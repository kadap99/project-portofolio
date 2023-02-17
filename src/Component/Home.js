import {Container, Col, Row, Accordion } from 'react-bootstrap';
import Navbar from './Navbar.js'
import bg from '../assets/2.png'
import './Home.css'
import React, { useEffect, useState } from 'react';
import Dropdown from './Dropdown.js';
import Socialmedia from './Socialmedia.js'
import Carousel from './Carousel2'
import gambar1 from '../assets/service-lainya.jpg'
import gambar2 from '../assets/service-hp.jpg'
import gambar3 from '../assets/service-pc.jpg'
import gambar4 from '../assets/html.png'
import gambar5 from '../assets/css.png'
import gambar6 from '../assets/js.png'
import gambar7 from '../assets/react.svg'
import Form from './Form'
import Footer from './Footer'
import Offcanvas from './Offcanvas.js';

function Home() {

    const [ismobile, setIsMobile] = useState(false)

    useEffect(() => {
      function handleResize() {
        setIsMobile(window.innerWidth <= 768);
      }

      window.addEventListener('resize', handleResize)

      return () => window.removeEventListener('resize', handleResize)
    }, []);

    const divStyle = {
      backgroundImage: `url(${ismobile ? '../assets/3.jpg' : '../assets/2.png'})`,
      width: '100%',
      height: '100vh',
      backgroundPosition: 'center',
      backgroundSize: 'cover',
    }

  return (
    <div>
    <Navbar/>
      <div className='bg shadow' >
      <Container>
        <Row>
          <Col className='col-lg-6 my-3  text-center text-sm-center text-md-start'>
            <h1 className='fw-bold shadow d-inline-block rounded'>Selamat datang!</h1>
            <h2>Ini adalah website Portofolio saya
              <br></br>(M. HELMAN ANSYARI)</h2>
            <h5>Website ini saya buat dengan menggunakan library react js dengan menggunakan Bootstrap5,<br></br>Semoga website ini mempresentasikan skill yang saya miliki,<br></br>website ini akan terus saya perbarui seiring dengan skill yang saya dapat.</h5>
            
            <Socialmedia />
            <hr></hr>
           
            
            <Offcanvas />
          </Col>
        </Row>
      </Container>
      </div>
      <Footer />
    </div>
  );
}

export default Home;