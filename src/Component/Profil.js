import Figure from 'react-bootstrap/Figure';
import Navbar from './Navbar.js'

function Profil() {
  return (
    <div>
      <div>
        <Navbar />
        <Figure>
          <Figure.Image
            width={171}
            height={180}
            alt="171x180"
            src="holder.js/171x180"
          />
          <Figure.Caption>
            Nulla vitae elit libero, a pharetra augue mollis interdum.
          </Figure.Caption>
        </Figure>
        </div>
    </div>
  );
}

export default Profil;