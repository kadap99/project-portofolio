import { Container, Row, Col, Accordion } from "react-bootstrap";
import Carousel from './Carousel'
import gambar from '../assets/2.png'
import gambar2 from '../assets/service-hp.jpg'
import gambar3 from '../assets/service-pc.jpg'

function Dropdown() {
    return (
        <div>
            <Container className='m-2'>
            <h2>Berikut beberapa skill yang saya milki.</h2>
              <Row>
                  <Col className='col-12 px-0 rounded-2 shadow' >
                  <Accordion defaultActiveKey="0">
                        <Accordion.Item eventKey="0">
                          <Accordion.Header className='accbg'>Service Electronika</Accordion.Header>
                          <Accordion.Body>
                          <Carousel image1={gambar} image2={gambar2} image3={gambar3} judul1={'tes'}/>
                          </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="1">
                          <Accordion.Header>Programing (html, css, javascript)</Accordion.Header>
                          <Accordion.Body>
                          <Carousel />
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