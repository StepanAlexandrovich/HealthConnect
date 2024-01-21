import React, { useEffect, useState } from 'react';
import { json, useParams } from 'react-router-dom';
import Connection from "../connection/Connection"
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';

const DepartmentDetails = (props) => {
    let {id} = useParams();
    let url = "http://localhost:8082/clinic/department_details/"+id
    let typeRequest = "get"

    const [typeAppointments,setTypeAppointments] = useState([])

    const toJson = (o)=>{
      return JSON.stringify(o)
    }
    

    useEffect( ()=>{
      

        Connection.requestSymple(
            url,
            typeRequest
          ).then(function (response) {
            setTypeAppointments(response.data.typeAppointmentsList)
          })
          .catch(function (error) {
            console.log(error);
          });
    },[]);

    return (
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Title</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          {
            typeAppointments.map(
              (typeAppointment,index) =>
                <tr key={index}>
                <th> {typeAppointment.title} </th>
                <th> {typeAppointment.description} </th>
                <th> 
                  <Button href={ `/change_appointment/${toJson(typeAppointment)}`} variant="primary" > change description </Button>  
                </th>
                </tr>
            )
          }
        </tbody>
      </Table>
    );
};

export default DepartmentDetails;