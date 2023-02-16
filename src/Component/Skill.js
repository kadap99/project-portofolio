import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Navbar from './Navbar.js'
function Skill() {
  return (
    <div>
    <Navbar />
    <div className='container-fluid'>
        <div>
        <div className='container'>
            <div className='row d-inline-block shadow' >
                <div className='col shadow ' style={{width: '100vh'}}>
                    <Card style={{ width: '100vh' }}>
                    <Card.Img variant="top" src="holder.js/100px180" />
                    <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Text>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                        </Card.Text>
                        <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                    </Card>
                 </div>

                 <div className='col-6'>
                    <Card style={{ width: '50vh' }}>
                    <Card.Img variant="top" src="holder.js/100px180" />
                    <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Text>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                        </Card.Text>
                        <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                    </Card>
                    </div>
                 </div>
             </div>
         </div>
    </div>
    </div>
  );
}

export default Skill;