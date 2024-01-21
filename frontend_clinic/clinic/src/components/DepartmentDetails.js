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
    
    // function del(id){
    //   console.log(id)
    // }

    const del = (currentId)=>{
      let url = "http://localhost:8082/api/v1/admin/delete_appointment/"+currentId
      let typeRequest = "get"

      Connection.request(
        url,
        {},
        typeRequest
      ).then(function (response) {
        console.log(response.data)
      })
      .catch(function (error) {
        console.log(error);
      });
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
                  <Button href={ `/change_appointment/${JSON.stringify(typeAppointment)}`} variant="primary" > change description </Button> 
                  <br/>
                  <Button onClick={()=>del(typeAppointment.id)} variant="primary" > delete </Button> 
                </th>
                </tr>
            )
          }
        </tbody>
      </Table>
    );
};

export default DepartmentDetails;