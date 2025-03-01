import React, { useRef } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { motion, useInView } from "framer-motion";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Particle from "../Particle";
import Aboutcard from "./AboutCard";
import Chapter from "./Chapter.js";
import aboutimg1 from "../../Assets/about.jpg";
import aboutimg2 from "../../Assets/about1.jpg";
import aboutimg3 from "../../Assets/about2.jpg";
import aboutimg4 from "../../Assets/about3.jpg";
import aboutimg5 from "../../Assets/about4.jpg";
import "./About.css";

const headingVariants = {
  hidden: { opacity: 0, y: -50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const cardVariants = {
  hidden: { opacity: 0, x: -100 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, delay: 0.2, ease: "easeOut" } },
};

const sliderVariants = {
  hidden: { opacity: 0, x: 100 },
  visible: { 
    opacity: 1, 
    x: 0, 
    transition: { duration: 0.8, delay: 0.4, ease: "easeOut" },
  },
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1, 
    transition: { 
      duration: 0.5, 
      when: "beforeChildren", 
      staggerChildren: 0.2,
    },
  },
};

function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "0px 0px -100px 0px" });

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    pauseOnHover: true,
  };

  return (
    <Container fluid className="about-section" ref={ref}>
      <Particle />
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <Container>
          <Row style={{ justifyContent: "center", padding: "10px" }}>
            <Col
              md={7}
              style={{
                paddingTop: "30px",
                paddingBottom: "50px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center", 
              }}
            >
              <motion.h1
                style={{ fontSize: "2.1em", paddingBottom: "20px", textAlign: "center" }}
                variants={headingVariants}
              >
                Know Who <strong className="purple">I'M</strong>
              </motion.h1>
              <motion.div
                variants={cardVariants}
                style={{
                  width: "100%",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <div style={{ width: "100%", textAlign: "center", marginBottom: "40px" }}>
                  <Aboutcard />
                </div>
                <div style={{ width: "100%", textAlign: "center" }}>
                  
                </div>
              </motion.div>
            </Col>
            <Col
              md={5}
              style={{ paddingTop: "120px", paddingBottom: "50px" }}
              className="about-img"
            >
              <motion.div variants={sliderVariants}>
                <Slider {...settings}>
                  <div>
                    <img
                      src={aboutimg1}
                      alt="about-1"
                      className="img-fluid about-image fixed-size"
                    />
                  </div>
                  <div>
                    <img
                      src={aboutimg2}
                      alt="about-2"
                      className="img-fluid about-image fixed-size"
                    />
                  </div>
                  <div>
                    <img
                      src={aboutimg3}
                      alt="about-3"
                      className="img-fluid about-image fixed-size"
                    />
                  </div>
                  <div>
                    <img
                      src={aboutimg4}
                      alt="about-4"
                      className="img-fluid about-image fixed-size"
                    />
                  </div>
                  <div>
                    <img
                      src={aboutimg5}
                      alt="about-5"
                      className="img-fluid about-image fixed-size"
                    />
                  </div>
                </Slider>
              </motion.div>
            </Col>
          </Row>
        </Container>
      </motion.div>
      <Chapter />
    </Container>
  );
}

export default About;