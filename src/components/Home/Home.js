import React, { useState, useEffect, useRef } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";
import homeVideo from "../../Assets/home-bg.mp4";
import homeLogo1 from "../../Assets/home-main1.jpeg";
import homeLogo2 from "../../Assets/home-main2.jpeg";
import homeLogo3 from "../../Assets/home-main3.jpeg";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

function Home() {
  const images = [homeLogo1, homeLogo2, homeLogo3];
  const [activeIndex, setActiveIndex] = useState(0);
  const imgRefs = useRef([]);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [images.length]);

  useEffect(() => {
    imgRefs.current.forEach((img, index) => {
      gsap.fromTo(
        img,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: img,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );
    });
  }, []);

  return (
    <section>
      <Container fluid className="home-section" id="home">
        <video autoPlay muted loop className="home-video-bg">
          <source src={homeVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Hi There!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>

              <h1 className="heading-name">
                I'M
                <strong className="main-name"> NGUYEN THANH</strong>
              </h1>

              <div style={{ padding: 50, textAlign: "left" }}>
                <Type />
              </div>
            </Col>
            <Col
              md={5}
              style={{
                paddingBottom: 20,
                display: "flex",
                gap: "10px",
                justifyContent: "center",
                marginLeft: "-130px",
              }}
            >
              {images.map((img, index) => (
                <img
                  key={index}
                  src={img}
                  alt={`home-pic-${index}`}
                  className="img-fluid"
                  ref={(el) => (imgRefs.current[index] = el)}
                  style={{
                    maxHeight: "450px",
                    maxWidth: "60%",
                    borderRadius: "20px",
                    border: "3px solid #a855f7",
                    boxShadow: "0px 0px 8px rgba(168, 85, 247, 0.4)",
                    opacity: index === activeIndex ? 1 : 0.9,
                    transform: `perspective(1000px) scale(${index === activeIndex ? 1.02 : 0.98})`,
                    transition: "all 0.5s ease-in-out",
                  }}
                />
              ))}
            </Col>
          </Row>
        </Container>
      </Container>
      <Home2 />
    </section>
  );
}

export default Home;
