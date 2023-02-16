import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';

function Offcanvashome() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className='col-12 my-lg-5'>
    <h2>Lihat skill singkat</h2>
      <Button variant="primary" onClick={handleShow}>
        Lihat
      </Button>

      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Offcanvas</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          Lorem
        </Offcanvas.Body>
      </Offcanvas>
    </div>
  );
}

export default Offcanvashome;