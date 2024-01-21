import Carousel from 'react-bootstrap/Carousel';
// import ExampleCarouselImage from '../images/rubik.jpg';
import img from '../images/rubik.jpg'



function Slider() {
  return (
    <Carousel>
      <Carousel.Item>
        <img src={img} width = '1200' height = '500' alt='image' className='d-block'/>
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src={img} width = '1200'  height = '500' alt='image' className='d-block'/>
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src={img} width = '1200'  height = '500' alt='image' className='d-block'/>
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Slider;