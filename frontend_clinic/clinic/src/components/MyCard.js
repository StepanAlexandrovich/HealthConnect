import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const MyCard = (props) => {
    return (
        
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="holder.js/100px180" />
                <Card.Body>
                    {/* <Card.Title>Dental</Card.Title> */}
                    <Card.Title>{props.department.title}</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                    </Card.Text>
                    <Button href={ `/department/${props.department.id}` } variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>
        
    );
};

export default MyCard;