import React, { useContext, useEffect, useState } from 'react';
import Slider from './Slider';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import LeftMenu from './LeftMenu';
import MyCard from './MyCard';
import DepartmentsService from '../connection/DepartmentService';
import { AuthContext } from '../context/AuthContext';

const Home = () => {
    const [departments,setDepartments] = useState([])

    useEffect( ()=>{
        console.log('Home -> useEffect')
        DepartmentsService.getDepartments()
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
                                <MyCard title = {department.title}></MyCard>
                            </Col>
                    )
                }

            </Row>
        </>
        
    );
};

export default Home;