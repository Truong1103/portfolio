import React, { useEffect, useRef } from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/hinhnen.jpg";
import Tilt from "react-parallax-tilt";
import { AiFillFacebook, AiFillYoutube } from "react-icons/ai";
import { FaTiktok } from "react-icons/fa";
import zaloImg from "../../Assets/zalo.png"; // Import the Zalo logo

function Home2() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          sectionRef.current.classList.add("show");
        }
      },
      { threshold: 0.2 } // Giảm threshold giúp kích hoạt sớm hơn
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <Container fluid className="home-about-section fade-in-up" id="about" ref={sectionRef}>
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 className="purple1">
              LET ME <span>INTRODUCE</span> MYSELF
            </h1>

            <p className="home-about-body">
              I fell in love with <b className="purple">music</b> and have dedicated my time to creating and exploring its depths. 🎵  
              <br />
              <br />I have a strong passion for
              <i>
                <b className="purple"> bass music </b>
              </i>
              and constantly experiment with new sounds and styles.
              <br />
              <br />
              My work includes various projects in &nbsp;
              <i>
                <b className="purple">music production and sound design</b>
              </i>
              , with a focus on deep, immersive bass.
              <br />
              <br />
              I have shared my music across platforms like
              <b className="purple"> YouTube </b> and
              <b className="purple"> TikTok</b>, where I connect with listeners and showcase my creations.
              <br />
              <br />
              Whenever possible, I push my creativity further by blending
              <b className="purple"> modern production techniques</b> with  
              <i>
                <b className="purple"> unique soundscapes </b>
              </i>
              to deliver an unforgettable experience.
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://www.facebook.com/thanhbnuh"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillFacebook />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://zalo.me/0366796928"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <img
                    src={zaloImg}
                    alt="Zalo"
                    style={{ width: "24px", height: "24px" }}
                  />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.tiktok.com/@thanh_bass"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <FaTiktok />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.youtube.com/channel/UCY480ouszQbbD0h3evfIU8w"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillYoutube />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Home2;
