import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import Leftside from '../pages/shared/Leftside/Leftside';
import Rightside from '../pages/shared/RightSide/Rightside';
import Footer from '../pages/shared/Footer/Footer'
import Header from '../pages/shared/Header/Header';

const Main = () => {
    return (
        <div>
            <Header></Header>
            <Container>
                <Row>
                    <Col lg="2" className='d-none d-lg-block'>
                    <Leftside></Leftside>
                    </Col>

                    <Col lg="7">

                    <Outlet></Outlet>

                    </Col>

                    <Col lg="3">

                    <Rightside></Rightside>
                    
                    </Col>
                </Row>
            </Container>
            <Footer></Footer>
        </div>
    );
};

export default Main;