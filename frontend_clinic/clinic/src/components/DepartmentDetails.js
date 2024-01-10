import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Connection from "../connection/Connection"
import Table from 'react-bootstrap/Table';

const DepartmentDetails = (props) => {
    let {id} = useParams();
    let url = "http://localhost:8082/api/v1/admin/department_details/"+id
    let typeRequest = "get"

    const [typeAppointments,setTypeAppointments] = useState([])

    useEffect( ()=>{

        Connection.request(
            url,
            {},
            typeRequest
          ).then(function (response) {
            console.log(JSON.stringify(response.data));

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
          <th>#</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Username</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>@fat</td>
        </tr>
        <tr>
          <td>3</td>
          <td colSpan={2}>Larry the Bird</td>
          <td>@twitter</td>
        </tr>
      </tbody>
    </Table>
    );
};

export default DepartmentDetails;