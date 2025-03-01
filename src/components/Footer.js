import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import tiktokIcon from "../Assets/social-media.png";

function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <Container fluid className="footer">
      <Row>
        <Col md="4" className="footer-copywright">
          <h3>Designed and Developed by Thanh Nguyen</h3>
        </Col>
        <Col md="4" className="footer-copywright">
          <h3>Copyright © {year} Thanh Nguyen</h3>
        </Col>
        <Col md="4" className="footer-body">
          <ul className="footer-icons">
            <li className="social-icons">
              <a
                href="https://www.facebook.com/thanhbnuh"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/0/05/Facebook_Logo_%282019%29.png"
                  alt="Facebook"
                  width="20"
                  height="20"
                />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://zalo.me/0366796928"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Icon_of_Zalo.svg/512px-Icon_of_Zalo.svg.png"
                  alt="Zalo"
                  width="20"
                  height="20"
                />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.tiktok.com/@thanh_bass"
                target="_blank"
                rel="noopener noreferrer"
              >
            <img src={tiktokIcon} alt="TikTok" width="25" height="25" />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.instagram.com/yourprofile"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png"
                  alt="Instagram"
                  width="20"
                  height="20"
                />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=bint5699@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/4/4e/Gmail_Icon.png"
                  alt="Gmail"
                  width="20"
                  height="20"
                />
              </a>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;