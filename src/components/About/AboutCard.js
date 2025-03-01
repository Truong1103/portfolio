import React from "react";
import Card from "react-bootstrap/Card";
import { ImMusic } from "react-icons/im";
import { motion } from "framer-motion";

function AboutCard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <Card className="quote-card-view">
        <Card.Body>
          <blockquote className="blockquote mb-0">
            <p style={{ textAlign: "justify" }}>
              Hello everyone, I am <span className="purple">Thanh Nguyen </span>
              from <span className="purple">Thanh Chuong, Nghe An.</span>
              <br />
              I am a passionate musician, especially in cover songs and songwriting.
              <br />
              I love bringing fresh melodies and inspiring people through my music.
              <br />
              <br />
              Besides singing, here are some of my other hobbies!
            </p>
            <ul>
              <li className="about-activity">
                <ImMusic /> Playing musical instruments (guitar, piano)
              </li>
              <li className="about-activity">
                <ImMusic /> Recording and music production
              </li>
              <li className="about-activity">
                <ImMusic /> Performing live & interacting with the audience
              </li>
            </ul>
            <p style={{ color: "rgb(155 126 172)" }}>
              "Music is not just melodies, it’s emotions and stories!"
            </p>
            <footer className="blockquote-footer">Thanh Nguyen</footer>
          </blockquote>
        </Card.Body>
      </Card>
    </motion.div>
  );
}

export default AboutCard;