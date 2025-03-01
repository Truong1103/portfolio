import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import chapterImg1 from "../../Assets/chapter1-img1.jpg";
import chapterImg2 from "../../Assets/chapter1-img2.jpg";
import chapterImg3 from "../../Assets/chapter2-img1.jpg";
import chapterImg4 from "../../Assets/chapter2-img2.jpg";
import chapterImg5 from "../../Assets/chapter3-img1.JPG";
import chapterImg6 from "../../Assets/chapter3-img2.JPG";
import "./Chapter.css";

// Variants for animation
const chapterVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
      staggerChildren: 0.3,
    },
  },
  exit: { opacity: 0, y: -20, transition: { duration: 0.5 } },
};

const textVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const imageVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.6, ease: "easeOut" } },
};

// New variants for scroll-triggered navigation
const navVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

function Chapter() {
  const [currentChapter, setCurrentChapter] = useState(1);

  // Refs for scroll detection
  const navRef = useRef(null);
  const contentRef = useRef(null);

  // Detect when elements are in view
  const isNavInView = useInView(navRef, { once: true, margin: "-50px" });
  const isContentInView = useInView(contentRef, { once: true, margin: "-50px" });

  useEffect(() => {
    const timer = setTimeout(() => {
      window.dispatchEvent(new Event("resize"));
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  const chapters = [
    {
      title: "Chapter 1: The Spark of Passion",
      content: [
        "Some passions arrive like a sudden storm, wild and unrelenting. Others, like mine, begin as a quiet whisper—subtle, delicate, yet impossible to ignore.",
        "It started in fifth grade, with a classical guitar cradled in my hands. My fingers fumbled at first, hesitant against the nylon strings. But the moment the sound emerged—soft, warm, alive—I was mesmerized. It felt like I had uncovered a secret language, one that spoke not in words, but in emotions.",
        "What began as a simple pastime became something deeper. For the next few years, I let the melodies guide me. I played in the quiet of the night, in the solitude of my thoughts, in the rhythm of my beating heart. The more I immersed myself, the clearer I saw—art isn’t just creation; it’s connection.",
        "Music wasn’t just about sound. It mirrored life itself—the highs, the lows, the unsaid emotions woven between the notes. It was in music that I discovered a world where feelings could be understood without explanation. And just like that, I knew: this was more than a hobby. It was a calling.",
      ],
      images: [chapterImg1, chapterImg2],
    },
    {
      title: "Chapter 2: The Struggle, the Awakening",
      content: [
        "Growth is never gentle. It demands sacrifice, demands sleepless nights, demands the kind of patience that only passion can fuel.",
        "By ninth grade, I had stepped into a world where ambition and competition intertwined. I buried myself in studies, pushing through hours of learning, striving for academic excellence. I entered competitions, won awards, proved my abilities through logic and calculation. But amidst it all, music never loosened its grip on me.",
        "There were moments when exhaustion whispered that I should pause, that I should focus solely on the path most traveled—the safe one, the certain one. But how could I? Music wasn’t just something I did. It was something I was.",
        "So, I didn’t let go. Instead, I held on tighter. I found myself waking up earlier and staying up later, balancing equations by day and melodies by night. The deeper I went, the more I understood—music and academics weren’t two separate worlds. They were both disciplines of passion, both requiring persistence, both demanding the ability to see patterns in chaos.",
        "I realized that success wasn’t about choosing between logic and art. It was about embracing them both—learning to weave structure into creativity and emotion into discipline. In struggle, I found clarity. In difficulty, I found purpose.",
      ],
      images: [chapterImg3, chapterImg4],
    },
    {
      title: "Chapter 3: A Path Unfolding",
      content: [
        "Some moments don’t just happen—they define you. The first step onto a grand stage, the warm glow of the lights, the hushed anticipation of hundreds waiting to listen. My heart pounded in rhythm with the silence. And then—the first note.",
        "Everything else faded. No fear, no hesitation. Just music. Just me and the sound filling the air, weaving through the crowd, connecting every heartbeat in the room. It was then that I knew: this wasn’t just something I loved. This was where I belonged.",
        "From that moment, the world seemed to expand. Music wasn’t just a passion; it became a gateway. I found myself drawn to new forms of storytelling—filmmaking, video editing, photography—each a different canvas, yet all driven by the same desire: to capture emotions, to freeze time, to tell stories that mattered.",
        "But I didn’t just follow the path—I started building it. I became more than a performer. I became a founder, a mentor, a leader. I established Relex.ion Band, shaping a movement, bringing musicians together, and helping to create a network of bands in Vinh, a space where creativity could thrive.",
        "At my high school’s music club, KMC, I took on the role of Vice Head of Media, guiding a team of five, not just teaching them photography and video production but showing them how to see the world through an artist’s eyes. Beyond the stage, I planned events, coordinated shows, and crafted creative projects that blended vision with execution.",
      ],
      images: [chapterImg5, chapterImg6],
    },
  ];

  return (
    <>
      {/* Tiêu đề Personal Chapter */}
      <motion.h1
        className="personal-chapter-title"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        Personal Chapter
      </motion.h1>

      {/* Navigation bar with scroll animation */}
      <motion.div
        ref={navRef}
        className="chapter-nav"
        variants={navVariants}
        initial="hidden"
        animate={isNavInView ? "visible" : "hidden"}
      >
        {chapters.map((_, index) => (
          <button
            key={index}
            className={`chapter-nav-item ${currentChapter === index + 1 ? "active" : ""}`}
            data-chapter={`0${index + 1}`}
            onClick={() => setCurrentChapter(index + 1)}
          />
        ))}
      </motion.div>

      {/* Chapter content with scroll animation */}
      <div className="chapter-wrapper">
        <AnimatePresence mode="wait">
          <motion.div
            ref={contentRef}
            key={currentChapter}
            className="chapter-container"
            variants={chapterVariants}
            initial="hidden"
            animate={isContentInView ? "visible" : "hidden"}
            exit="exit"
          >
            <motion.h2 variants={textVariants}>{chapters[currentChapter - 1].title}</motion.h2>
            <div className="chapter-content">
              {chapters[currentChapter - 1].content.map((paragraph, idx) => (
                <motion.p key={idx} variants={textVariants}>
                  {paragraph}
                </motion.p>
              ))}
            </div>
            <div className="chapter-images">
              {chapters[currentChapter - 1].images.map((img, idx) => (
                <motion.img
                  key={idx}
                  src={img}
                  alt={`chapter-img-${idx}`}
                  className="chapter-image"
                  variants={imageVariants}
                />
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </>
  );
}

export default Chapter;