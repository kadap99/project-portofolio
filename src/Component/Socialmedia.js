import { Container, Row, Col, click } from "react-bootstrap"

function Socialmedia() {

    const click= (link)=> {
        window.open(link);
      };

    return (
        <div>
        <h1 className='fw-bold text-center'>Link Social Media</h1>
            <Container >
              <Row>
                  <Col className='col-12 col-sm-3 px-0 rounded-2'>
                    <button onClick={() => click('https://whatsapp.com')}   className='bt btn-wa m-2 rounded border-0'>Whatsapp</button></Col>
                    <Col className='col-12 col-sm-3 px-0 rounded-2 '>
                    <button onClick={() => click('https://instagram.com')} className='bt btn-ig m-2 rounded border-0'>Instagram</button></Col>
                    <Col className='col-12 col-sm-3 px-0 rounded-2 '>
                    <button onClick={() => click('https://facebook.com')} className='bt btn-fb m-2 rounded border-0'>Facebook</button></Col>
                    <Col className='col-12 col-sm-3 px-0 rounded-2 '>
                    <button onClick={() => click('https://twitter.com')} className='bt btn-tw m-2 rounded border-0'>Twitter</button></Col>
            </Row>
            </Container>
        </div>
    )
}

export default Socialmedia;