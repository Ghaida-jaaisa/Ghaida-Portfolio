import { Container, Row, Col } from "react-bootstrap";
import logo from "../assets/img/Ghaida.png";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";
import FooterInspiration from "./FooterInspiration";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          {/* <FooterInspiration /> */}
          <Col lg={12}>
            <FooterInspiration />
          </Col>

          <Col size={12} sm={6}>
            {/* <img src={logo} alt="Logo" /> */}
            <img
              src={logo}
              alt="Logo"
              style={{
                height: "100px",
                objectFit: "cover",
                width: "fit-content",
              }}
            />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a
                href="https://www.linkedin.com/in/ghaida-jaaisa/"
                target="_blank"
              >
                <img src={navIcon1} alt="LinkedIn" />
              </a>
              <a href="mailto:ghaidajaaysah@gmail.com" target="_blank">
                <img src={navIcon2} alt="Gmail" />
              </a>
              <a href="https://github.com/Ghaida-jaaisa" target="_blank">
                <img src={navIcon3} alt="GitHub" />
              </a>
            </div>
            {/* <p>Copyright 2022. All Rights Reserved</p> */}
            <p>
              &copy; {new Date().getFullYear()} Ghaida Ja'aysah | All rights
              reserved.
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
