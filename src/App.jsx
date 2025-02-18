import React, { useState } from "react";
import AboutMe from "./pages/aboutMe";
import Portfolio from "./pages/portfolio";
import Contact from "./pages/contact";
import Resume from "./pages/resume";
import Footer from "./components/footer";
import Header from "./components/header";

function App() {
  const [activeSection, setActiveSection] = useState("aboutMe");

  return (
    <div>
      <Header setActiveSection={setActiveSection} />{" "}
      <main>
        {activeSection === "aboutMe" && <AboutMe />}
        {activeSection === "portfolio" && <Portfolio />}
        {activeSection === "contact" && <Contact />}
        {activeSection === "resume" && <Resume />}
      </main>
      <Footer />
    </div>
  );
}

export default App;
