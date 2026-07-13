import { useEffect, useState } from "react";

import About from "./sections/About";
import Projects from "./sections/Projects";
import Certificates from "./sections/Certificates";
import LinkedIn from "./sections/LinkedIn";

import Navbar from "./components/Navbar";

function App() {
  const [activeSection, setActiveSection] = useState("about");
  useEffect(() => {
    const sectionIds = [
      "about",
      "projects",
      "certificates",
      "linkedin",
    ];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        threshold: 0.6,
      }
    );

    sectionIds.forEach((id) => {
      const section = document.getElementById(id);

      if (section) {
        observer.observe(section);
      }
    });

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <About />

      <Navbar activeSection={activeSection} />

      <Projects />

      <Certificates />

      <LinkedIn />
    </>
  );
}

export default App;