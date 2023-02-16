import { Carousel } from "react-bootstrap";

function Carousel1(props) {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100 h-100"
          src={props.image1}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>{props.judul1}</h3>
          
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 h-100"
          src={props.image2}
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>{props.judul2}</h3>
          
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 h-100"
          src={props.image3}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>{props.judul3}</h3>
          
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100 h-100"
          src={props.image4}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>{props.judul4}</h3>
          
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Carousel1;