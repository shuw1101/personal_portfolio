import { Container, Row, Col } from "react-bootstrap";
import { MailchimpForm } from "./MailchimpForm";
import navIcon1 from "../assets/img/nav-icon1.svg";
import linkedin from '../assets/img/linkedin.png';
import github from '../assets/img/github.png';


export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          {/* <MailchimpForm /> */}
          <Col size={12} sm={6}>
            <text className="logotext">Shuwen's Portfolio</text>
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/shuwenguan/"><img src={linkedin} alt="Icon" /></a>
              <a href="https://github.com/shuw1101/personal_portfolio"><img src={github} alt="" /></a>

            </div>
            <p>Copyright 2023. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
