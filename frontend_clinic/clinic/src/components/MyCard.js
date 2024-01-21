import React, { useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import axios from 'axios'
import { Roles } from '../context/AuthContext';

const MyCard = (props) => {
    const [img,setImg] = useState("")

    useEffect( ()=>{ 

        axios
      .get(
        'http://localhost:8082/images/image/'+props.department.departmentImagesList[0].id,
        { responseType: 'arraybuffer' },
      )
      .then(response => {
        const base64 = btoa(
          new Uint8Array(response.data).reduce(
            (data, byte) => data + String.fromCharCode(byte),
            '',
          ),
        );

        let ii = "data:;base64," + base64
        console.log(ii)
        setImg(ii)

      });

        
    
        },[] 
    )

    
    return (
        
            <Card style={{ width: '18rem' }}>
                {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
                <Card.Img variant="top" src={img} alt='cl' width={30} height={30} />

                <Card.Body>
                    <Card.Title>{props.department.title}</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                    </Card.Text>

                    {
                      Roles().includes("ROLE_ADMIN")
                      ? <>
                        <Button href={ `/add_appointment/${props.department.id}` } variant="primary">Add Appointment</Button>
                        </>
                      : <></>
                    }

                    <Button href={ `/department/${props.department.id}` } variant="primary">List Appointments</Button>
                    {/* <Button href={ `/add_appointment/${props.department.id}` } variant="primary">Add Appointment</Button> */}
                </Card.Body>
            </Card>
        
    );
};

export default MyCard;