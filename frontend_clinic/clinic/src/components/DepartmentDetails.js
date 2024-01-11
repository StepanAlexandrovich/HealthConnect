import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Connection from "../connection/Connection"
import Table from 'react-bootstrap/Table';

const DepartmentDetails = (props) => {
    let {id} = useParams();
    let url = "http://localhost:8082/clinic/department_details/"+id
    let typeRequest = "get"

    const [typeAppointments,setTypeAppointments] = useState([])

    useEffect( ()=>{
        Connection.requestSymple(
            url,
            typeRequest
          ).then(function (response) {
            // console.log(JSON.stringify(response.data));
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
                </tr>
            )
          }
        </tbody>
      </Table>
    );
};

export default DepartmentDetails;