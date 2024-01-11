import React, { useContext, useEffect, useState } from 'react';
import Slider from './Slider';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import LeftMenu from './LeftMenu';
import MyCard from './MyCard';
import Connection from "../connection/Connection"

const Home = () => {
    const url = "http://localhost:8082/clinic/departments"
    let typeRequest = "get"
    const [departments,setDepartments] = useState([])

    useEffect( ()=>{
        Connection.requestSymple(url,typeRequest)
            .then((result) => {
                setDepartments(result.data)
            }).catch((err) => {
                console.error("нет доступа");
            });
        },[]
    );

    return (
        <>
            <Row>
                <Col sm={2} > <LeftMenu></LeftMenu> </Col>
                <Col sm={10} > <Slider></Slider></Col>
            </Row>

            <Row>
                { 
                    departments.map(
                        (department,index) =>
                            <Col key={index} sm={12/departments.length}>
                                <MyCard department = {department}></MyCard>
                            </Col>
                    )
                }

            </Row>
        </>
        
    );
};

export default Home;