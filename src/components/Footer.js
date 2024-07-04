import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import logo from "../assets/img/logo.svg";
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/nav-icon2.svg';
import navIcon3 from '../assets/img/nav-icon3.svg';
import './Footer.css';

export const Footer = () => {
    return(
        <footer className="footer">
            <Container>
                <Row className="align-item-center">
                    <Col sm={10}>
                        <img src={logo} alt="Logo" />
                    </Col>
                    <Col sm={10} className="text-center text-sm-end">
                        <div className="social-icon">
                            <a href="www.linkedin.com/in/swethasebastian" target="_blank" rel="noopener noreferrer">
                                <img src={navIcon1} alt="LinkedIn"/>
                            </a>
                            <a href="https://github.com/swedevswe" target="_blank" rel="noopener noreferrer">
                                <img src={navIcon2} alt="Github"/>
                            </a>
                            <a href="https://medium.com/@dreamweaver12" target="_blank" rel="noopener norefferer">
                                <img src={navIcon3} alt="Medium"/></a>
                        </div>
                        <p>CopyRight 2024. All Rights Reserved by Swetha Sebastian.</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
};
