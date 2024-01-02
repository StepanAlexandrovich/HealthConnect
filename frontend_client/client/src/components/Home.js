import React from 'react';
import Slider from './Slider';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import LeftMenu from './LeftMenu';

import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const Home = () => {
    return (
        <>
            <Row>
                <Col sm={2} > <LeftMenu></LeftMenu> </Col>
                <Col sm={10} > <Slider></Slider></Col>
            </Row>

            <Row>
                <Col sm={3}>

                <Card style={{ width: '18rem' }}>
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
            
            </Col>

            <Col sm={3}>

    <Card style={{ width: '18rem' }}>
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

    </Col>

    <Col sm={3}>


    <Card style={{ width: '18rem' }}>
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

    

                </Col>

                <Col sm={3}>

    <Card style={{ width: '18rem' }}>
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

                </Col>

                
            </Row>
        </>
        
    );
};

export default Home;