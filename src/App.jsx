import  { useRef, useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import About from "./pages/About";
import Header from "./pages/Header";
import Navbar from "./Navbar";
import WorkExp from "./pages/WorkExp";
import EduExp from "./pages/EduExp";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import Certifications from "./pages/Certifications";

const ScrollToSection = () => {
  const location = useLocation();
  const [isVisible, setIsVisible] = useState(false);
  const headerRef = useRef(null);
  const WorkRef = useRef(null);
  const EduRef = useRef(null);
  const projRef = useRef(null);

  useEffect(() => {
    setIsVisible(true);
    
    if (location.pathname === "/" && headerRef.current) {
      headerRef.current.scrollIntoView({ behavior: "smooth" });
    }
    if (location.pathname === "/work" && WorkRef.current) {
      WorkRef.current.scrollIntoView({ behavior: "smooth" });
    }
    if (location.pathname === "/education" && EduRef.current) {
      EduRef.current.scrollIntoView({ behavior: "smooth" });
    }
    if (location.pathname === "/projects" && projRef.current) {
      projRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [location]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100
      }
    }
  };

  return (
    <motion.div
      initial="hidden"
      animate={isVisible ? "visible" : "hidden"}
      variants={containerVariants}
      className=''
    >
      <motion.div ref={headerRef} variants={itemVariants} >
        <Header />
      </motion.div>
      <motion.div variants={itemVariants}>
        <About />
      </motion.div>
      <motion.div ref={EduRef} variants={itemVariants}>
        <EduExp />
      </motion.div>
      <motion.div variants={itemVariants}>
        <Certifications />
      </motion.div>
      <motion.div ref={WorkRef} variants={itemVariants}>
        <WorkExp />
      </motion.div>
      <motion.div variants={itemVariants}>
        <Skills />
      </motion.div>
      <motion.div ref={projRef} variants={itemVariants}>
        <Projects />
      </motion.div>
    </motion.div>
  );
};

const App = () => {
  return (
    <Router>
      <div className="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.2),rgba(255,255,255,0))] overflow-auto">
        <AnimatePresence mode="wait">
          <Routes>
            <Route path="/" element={<ScrollToSection />} />
            <Route path="/work" element={<ScrollToSection />} />
            <Route path="/education" element={<ScrollToSection />} />
            <Route path="/projects" element={<ScrollToSection />} />
          </Routes>
        </AnimatePresence>
        <div className="flex flex-col justify-end mt-auto">
          <Navbar />
        </div>
      </div>
    </Router>
  );
};

export default App;