import React from "react";
import { Container, Row, Col, Card, Button, Image } from "react-bootstrap";
import { motion } from "framer-motion"; // Import Framer Motion
import Particle from "../Particle";
import Music from "./Music.js";
import s1 from "../../Assets/s1.png";
import s2 from "../../Assets/s2.png";
import "./project.css";

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

function Projects() {
  return (
    <Container fluid className="project-section bg-dark text-white py-5" style={{ marginTop: "50px" }}>
      <Particle />
      <Container>
        <motion.h1 
          className="project-heading text-center mb-4"
          initial={{ opacity: 0, y: -20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          My Recent <strong className="purple1">Extracurricular Activities</strong>
        </motion.h1>
        <motion.p 
          className="text-center mb-5" 
          style={{ fontSize: "1.3rem" }}
          initial={{ opacity: 0, y: -20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
        >
          ( Recent extracurricular activities I've joined. )
        </motion.p>
        <Row style={{ justifyContent: "center", gap: "20px" }}>
          {/* Card cho YURA Media Team Member */}
          <Col md={5} className="mb-4">
            <motion.div initial="hidden" whileInView="visible" variants={cardVariants} viewport={{ once: true }}>
              <Card
                className="h-100 shadow-lg border-0 bg-gradient"
                style={{
                  background: "linear-gradient(135deg, #343a40, #495057)",
                  borderRadius: "15px",
                  overflow: "hidden",
                  display: "flex",
                  flexDirection: "column",
                  minHeight: "500px", // Chiều cao tối thiểu cố định
                }}
              >
                <Card.Body className="d-flex flex-column justify-content-between" style={{ flex: "1 1 auto", padding: "1.5rem" }}>
                  <div>
                  <Card.Title className="mb-3 gradient-title">
                      Media Team Member - YURA
                    </Card.Title>
                    <Card.Text className="text-light text-start" style={{ lineHeight: "1.6", textAlign: "justify" }}>
                      <ul className="list-unstyled">
                        <li>Developed creative ideas and produced engaging image and video content to promote YURA's mission on social media.</li>
                        <li>Contributed to YURA's goal of improving the lives of children in need.</li>
                        <li>-	Member TT-KT của YURA ( là tổ chức thiện nguyện được Hội chữ Thập đỏ Tỉnh Nghệ An bảo trợ pháp lý )</li>
                      </ul>
                    </Card.Text>
                    <div
                      className="image-container"
                      style={{
                        height: "300px", // Chiều cao cố định cho ảnh
                        overflow: "hidden",
                        borderRadius: "8px",
                        marginTop: "1rem",
                      }}
                    >
                      <Image
                        src={s2}
                        alt="YURA Activity"
                        fluid
                        style={{
                          width: "100%",
                          height: "100%",
                          objectFit: "cover", // Đảm bảo ảnh không bị méo
                        }}
                      />
                    </div>
                  </div>
                  <Button
                    variant="outline-light"
                    className="mt-3 w-100"
                    style={{ borderRadius: "8px" }}
                    onClick={() => window.open("https://www.facebook.com/northsoundrecs", "_blank")}
                  >
                    Learn More
                  </Button>
                </Card.Body>
              </Card>
            </motion.div>
          </Col>

          {/* Card cho Phó TT-KT của KMC */}
          <Col md={5} className="mb-4">
            <motion.div initial="hidden" whileInView="visible" variants={cardVariants} viewport={{ once: true }}>
              <Card
                className="h-100 shadow-lg border-0 bg-gradient"
                style={{
                  background: "linear-gradient(135deg, #343a40, #495057)",
                  borderRadius: "15px",
                  overflow: "hidden",
                  display: "flex",
                  flexDirection: "column",
                  minHeight: "500px", 
                }}
              >
                <Card.Body className="d-flex flex-column justify-content-between" style={{ flex: "1 1 auto", padding: "1.5rem" }}>
                  <div>
                  <Card.Title className="mb-3 gradient-title">
                      Vice head of Media Team - KMC
                    </Card.Title>
                    <Card.Text className="text-light text-start" style={{ lineHeight: "1.6", textAlign: "justify" }}>
                      <ul className="list-unstyled">
                        <li>Trained and mentored a team of 5 in photography, tracking their progress and skill development.</li>
                        <li>- Founder of a Vinh-based music band collection.</li>
                        <li>- Founder of Relex.ion band.</li>
                        <li>-	Phó TT-KT của KMC ( Clb Âm nhạc của Trường THPT chuyên ĐHV ) Vice head of Media Team - KMC</li>
                      </ul>
                    </Card.Text>
                    <div
                      className="image-container"
                      style={{
                        height: "300px", // Chiều cao cố định cho ảnh
                        overflow: "hidden",
                        borderRadius: "8px",
                        marginTop: "1rem",
                      }}
                    >
                      <Image
                        src={s1}
                        alt="KMC Activity"
                        fluid
                        style={{
                          width: "100%",
                          height: "100%",
                          objectFit: "cover", // Đảm bảo ảnh không bị méo
                        }}
                      />
                    </div>
                  </div>
                  <Button
                    variant="outline-light"
                    className="mt-3 w-100"
                    style={{ borderRadius: "8px" }}
                    onClick={() => window.open("https://www.facebook.com/kcmusicclub", "_blank")}
                  >
                    Learn More
                  </Button>
                </Card.Body>
              </Card>
            </motion.div>
          </Col>
        </Row>
      </Container>
      <Music />
    </Container>
  );
}

export default Projects;