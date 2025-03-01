import React from "react";
import { Container, Row, Col, Card, Button, Image } from "react-bootstrap";
import { motion } from "framer-motion"; // Import Framer Motion
import Particle from "../Particle";
import "./project.css";
import project1 from "../../Assets/project1.jpg";
import project2 from "../../Assets/project2.jpg";
import s3 from "../../Assets/s3.jpg";
import s4 from "../../Assets/s4.jpg";
import s5 from "../../Assets/s5.jpg";
import s6 from "../../Assets/s6.jpg";

function Music() {
  const cardVariants = {
    hidden: { opacity: 0, y: 50 }, 
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.5, ease: "easeOut" } 
    },
  };

  return (
    <Container fluid className="project-section bg-dark text-white py-5">
      <Particle />
      <Container>
      {/*heading */}
      <motion.div
          initial="hidden"
          whileInView="visible"
          variants={cardVariants}
          viewport={{ once: true }} 
        >
          <h1 className="project-heading text-center mb-4">
            My Recent <strong className="purple1">Music Activities</strong>
          </h1>
          </motion.div>
          <motion.p 
                    initial="hidden"
                    whileInView="visible"
                    variants={cardVariants}
                    viewport={{ once: true }} 
          >
          <p className="text-center mb-5" style={{ fontSize: "1.3rem" }}>
            ( Recent music activities I've joined. )
          </p>
          </motion.p>
        {/* Card Decus VIII */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={cardVariants}
          viewport={{ once: true }} 
        >
          <Card
            className="text-light p-3 mb-4"
            style={{
              marginTop: "-30px",
              borderRadius: "20px",
              background: "linear-gradient(135deg, #4b2c82 0%, #2c1654 100%)",
              border: "1px solid rgba(255, 255, 255, 0.1)",
              boxShadow: "0 10px 30px rgba(0, 0, 0, 0.5), 0 0 15px rgba(0, 150, 200, 0.2)",
              padding: "1.5rem",
              position: "relative",
              overflow: "hidden",
            }}
          >
            {/* Abstract background pattern */}
            <div
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                backgroundImage:
                  "url('data:image/svg+xml,%3Csvg width=\"100\" height=\"100\" viewBox=\"0 0 100 100\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cpath d=\"M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z\" fill=\"rgba(255,255,255,0.05)\" fill-rule=\"evenodd\"/%3E%3C/svg%3E')",
                opacity: 0.3,
                zIndex: 0,
              }}
            ></div>
            <Card.Body style={{ position: "relative", zIndex: 1 }}>
              <h2
                className="text-center mb-3"
                style={{
                  fontSize: "2.4rem",
                  fontWeight: "700",
                  background: "linear-gradient(90deg, #f8c946, #ffd700, #f8c946)",
                  backgroundSize: "200% auto",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  textShadow: "0 2px 10px rgba(255, 215, 0, 0.2)",
                  animation: "gradient 3s ease infinite",
                }}
              >
                Decus VIII: Lang Thang
              </h2>
              <p
                className="fst-italic text-center mb-3"
                style={{
                  fontSize: "1.1rem",
                  color: "#ffffff",
                  letterSpacing: "0.5px",
                }}
              >
                (Full band performance management and coordination.)
              </p>
              <p
                style={{
                  textAlign: "justify",
                  color: "#e8e8e8",
                  fontSize: "1.1rem",
                  lineHeight: "1.7",
                  padding: "0 0.5rem",
                  textShadow: "0 1px 2px rgba(0,0,0,0.3)",
                }}
              >
                → Successfully managed and coordinated a full band performance on
                a{" "}
                <span style={{ color: "#f8c946", fontWeight: "600" }}>
                  professional stage
                </span>
                , gaining invaluable experience in{" "}
                <span style={{ color: "#f8c946", fontWeight: "600" }}>
                  teamwork, leadership, time management
                </span>
                , and the ability to{" "}
                <span style={{ color: "#f8c946", fontWeight: "600" }}>
                  adapt under pressure
                </span>{" "}
                while showcasing strong collaboration and stage presence.
              </p>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  margin: "1.5rem 0 1rem 0",
                }}
              >
                <div
                  style={{
                    width: "8px",
                    height: "28px",
                    background: "#e74c3c",
                    borderRadius: "4px",
                    marginRight: "10px",
                  }}
                ></div>
                <h3
                  style={{
                    fontSize: "1.6rem",
                    fontWeight: "600",
                    color: "#e74c3c",
                    margin: 0,
                    textShadow: "0 2px 4px rgba(0, 0, 0, 0.2)",
                  }}
                >
                  The values contributed:
                </h3>
              </div>

              <ul
                style={{
                  textAlign: "justify",
                  color: "#e8e8e8",
                  fontSize: "1rem",
                  lineHeight: "1.6",
                  paddingLeft: "1rem",
                  listStyleType: "none",
                }}
              >
                {[
                  "Planning and Organizing Events: Assisted in planning and executing successful events, including brainstorming themes, managing logistics, and coordinating with team members.",
                  "Mentorship and Training: Provided guidance and support to newer members, sharing expertise in performance techniques and teamwork.",
                  "Creative Contributions: Contributed innovative ideas for performances and events.",
                  "Resource Management: Helped manage resources, schedule rehearsals, and ensure material availability.",
                  "Community Building: Fostered a positive and inclusive environment within the club.",
                ].map((item, index) => (
                  <li
                    key={index}
                    style={{
                      marginBottom: "8px",
                      position: "relative",
                      paddingLeft: "20px",
                    }}
                  >
                    <div
                      style={{
                        position: "absolute",
                        left: 0,
                        top: "4px",
                        width: "14px",
                        height: "14px",
                        borderRadius: "50%",
                        background: "linear-gradient(135deg, #9370DB, #6A5ACD)",
                        boxShadow: "0 2px 5px rgba(0,0,0,0.2)",
                      }}
                    ></div>
                    <strong>{item.split(":")[0]}:</strong> {item.split(":")[1]}
                  </li>
                ))}
              </ul>

              <Row className="justify-content-center mt-4 g-3">
                <Col md={5} className="mb-2">
                  <div
                    style={{
                      overflow: "hidden",
                      borderRadius: "12px",
                      boxShadow: "0 10px 20px rgba(0, 0, 0, 0.3)",
                      position: "relative",
                    }}
                  >
                    <Image
                      src={project1}
                      fluid
                      style={{
                        transition: "transform 0.5s ease",
                        transform: "scale(1.01)",
                      }}
                      className="hover-zoom"
                    />
                    <div
                      style={{
                        position: "absolute",
                        bottom: 0,
                        left: 0,
                        right: 0,
                        background: "linear-gradient(to top, rgba(0,0,0,0.8), transparent)",
                        padding: "20px 15px 10px 15px",
                        textAlign: "center",
                      }}
                    >
                      <div style={{ fontSize: "0.9rem" }}>Performance Stage</div>
                    </div>
                  </div>
                </Col>
                <Col md={5} className="mb-2">
                  <div
                    style={{
                      overflow: "hidden",
                      borderRadius: "12px",
                      boxShadow: "0 10px 20px rgba(0, 0, 0, 0.3)",
                      position: "relative",
                    }}
                  >
                    <Image
                      src={project2}
                      fluid
                      style={{
                        transition: "transform 0.5s ease",
                        transform: "scale(1.01)",
                      }}
                      className="hover-zoom"
                    />
                    <div
                      style={{
                        position: "absolute",
                        bottom: 0,
                        left: 0,
                        right: 0,
                        background: "linear-gradient(to top, rgba(0,0,0,0.8), transparent)",
                        padding: "20px 15px 10px 15px",
                        color: "white",
                        textAlign: "center",
                      }}
                    >
                      <div style={{ fontSize: "0.9rem" }}>Team Collaboration</div>
                    </div>
                  </div>
                </Col>
              </Row>
              <style jsx>{`
            .hover-zoom:hover {
              transform: translateY(-5px); /* Lifts the image slightly */
              box-shadow: 0 8px 20px rgba(147, 112, 219, 0.6); /* Purple glow */
              transition: transform 0.3s ease, box-shadow 0.3s ease; /* Smooth transition */
            }

            @keyframes pulse {
              0% { transform: scale(1); }
              50% { transform: scale(1.05); }
              100% { transform: scale(1); }
            }
            `}</style>
            </Card.Body>
          </Card>
        </motion.div>

        <Row style={{ justifyContent: "center", gap: "20px" }}>
          {[
            {
              title: "Journey 2022",
              text: [
                "Art Team (Instrument):",
                "→ Enhanced stage performance skills, emotional control, and team coordination to deliver a professional and impactful performance.",
                "Technical Team (Video & Photo):",
                "→ Improved multimedia production skills, including filming and post-production, ensuring creative and high-quality outputs.",
              ],
              img: s3,
              link: "https://www.facebook.com/journey2022amalis",
            },
            {
              title: "NTV 2022",
              text: [
                "Art Team (Instrument)",
                "→ Founded and debuted a new band, sparking a music band movement in Vinh, and set the foundation for regional music culture development.",
                "→ Organized numerous live performances, inspiring young musicians and fostering a vibrant local music scene.",
              ],
              img: s4,
              link: "https://www.facebook.com/ngaytrove2024thcshht",
            },
            {
              title: "Honda UNITOUR 2023",
              text: [
                "Participant in Honda UNITOUR, a prestigious national art competition.",
                "→ Gained firsthand experience in a high-caliber professional competition, enhancing artistic skills and confidence under pressure.",
                "- Phó TT-KT của KMC (Clb Âm nhạc của Trường THPT chuyên ĐHV)",
                "→ Led and organized key music events.",
              ],
              img: s5,
              link: "https://www.facebook.com/story.php/?story_fbid=854031576081678&id=100044245305650&_rdr",
            },
            {
              title: "Journey 2023",
              text: [
                "Art Team (Instrument)",
                "→ Returned to the stage with refined skills, bringing a more confident and polished performance that resonated with the audience.",
                "Technical Team (Video Recording)",
                "→ Produced creative, high-quality video projects that stood out for their originality and audience engagement.",
              ],
              img: s6,
              link: "https://journeymusic.com/?srsltid=AfmBOopY4cp8uAwA_rT4zQ060WsTCWsb9XXHHaS5EHPblz51a3O74S25",
            },
          ].map((activity, index) => (
            <Col md={5} className="mb-4" key={index}>
              <motion.div
                initial="hidden"
                whileInView="visible"
                variants={cardVariants}
                viewport={{ once: true }}
              >
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
                  <Card.Body
                    className="d-flex flex-column justify-content-between"
                    style={{ flex: "1 1 auto", padding: "1.5rem" }}
                  >
                    <div>
                      <Card.Title className="mb-3 gradient-title">
                        {activity.title}
                      </Card.Title>
                      <Card.Text
                        className="text-light text-start"
                        style={{ lineHeight: "1.6", textAlign: "justify" }}
                      >
                        <ul className="list-unstyled">
                          {activity.text.map((item, i) => (
                            <li key={i}>{item}</li>
                          ))}
                        </ul>
                      </Card.Text>
                      <div
                        className="image-container"
                        style={{
                          height: "300px",
                          overflow: "hidden",
                          borderRadius: "8px",
                          marginTop: "1rem",
                          marginBottom: "5px",
                        }}
                      >
                        <Image
                          src={activity.img}
                          alt={`${activity.title} Activity`}
                          fluid
                          style={{
                            width: "100%",
                            height: "100%",
                            objectFit: "cover",
                          }}
                        />
                      </div>
                    </div>
                    <Button
                      variant="outline-light"
                      className="w-100"
                      style={{ borderRadius: "8px", marginTop: "auto" }}
                      onClick={() => window.open(activity.link, "_blank")}
                    >
                      Learn More
                    </Button>
                  </Card.Body>
                </Card>
              </motion.div>
            </Col>
          ))}
        </Row>
      </Container>
    </Container>
  );
}

export default Music;