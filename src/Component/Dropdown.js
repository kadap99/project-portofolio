import { Container, Row, Col, Accordion } from "react-bootstrap";
import Carousel from './Carousel'
import gambar1 from '../assets/service-lainya.jpg'
import gambar2 from '../assets/service-hp.jpg'
import gambar3 from '../assets/service-pc.jpg'
import gambar4 from '../assets/html.png'
import gambar5 from '../assets/css.png'
import gambar6 from '../assets/js.png'
import gambar7 from '../assets/react.svg'

function Dropdown() {
    return (
        <div>
            <Container className='m-2'>
            <h2>Berikut beberapa skill yang saya milki.</h2>
              <Row>
                  <Col className='col-12 px-0 rounded-2 shadow' >
                  <Accordion>
                        <Accordion.Item eventKey="0">
                          <Accordion.Header className='accbg'>Service Electronika</Accordion.Header>
                          <Accordion.Body>
                          <Carousel image1={gambar2} image2={gambar3} image3={gambar1} judul1={'SERIVE HP'} judul2={'SERVICE LAPTOP/KOMPUTER'} judul3={'SERVICE ELEKTRONIK LAINYA'}/>
                          </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="1">
                          <Accordion.Header>Programing (html, css, javascript, React)</Accordion.Header>
                          <Accordion.Body>
                          <Carousel image1={gambar4} image2={gambar5} image3={gambar6} image4={gambar7} judul1={'HTML'} judul2={'CSS'} judul3={'JAVASCRIPT'} judul4={'REACT'}/>
                          </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                  </Col>
            </Row>
            </Container>

        </div>
    )
}

export default Dropdown;