import { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import useMediaQuery from "@hooks/useMediaQuery";
import LineGradient from "@components/LineGradient";
import Navbar from "@scenes/Navbar";
import DotGroup from "@scenes/DotGroup";
import Landing from "@scenes/Landing";
import MySkills from "@scenes/MySkills";
import Projects from "@scenes/Projects";
import Testimonials from "@scenes/Testimonials";
import Contact from "@scenes/Contact";
import Footer from "@scenes/Footer";

function App() {
  const [selectedPage, setSelectedPage] = useState("accueil");
  const [visiblePage, setVisiblePage] = useState(null);
  const [isTopOfPage, setIsTopOfPage] = useState(true);
  const isAboveMediumScreens = useMediaQuery("(min-width:1060px)");

  const { ref: accueil, inView: inView1 } = useInView();
  const { ref: competences, inView: inView2 } = useInView();
  const { ref: projets, inView: inView3 } = useInView();
  const { ref: temoignages, inView: inView4 } = useInView();
  const { ref: contact, inView: inView5 } = useInView();

  useEffect(() => {
    if (inView1) setVisiblePage("accueil");
    if (inView2) setVisiblePage("compétences");
    if (inView3) setVisiblePage("projets");
    if (inView4) setVisiblePage("témoignages");
    if (inView5) setVisiblePage("contact");
  }, [inView1, inView2, inView3, inView4, inView5]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) setIsTopOfPage(true);
      if (window.scrollY !== 0) setIsTopOfPage(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="app bg-deep-blue">
      <Navbar isTopOfPage={isTopOfPage} selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
      {isAboveMediumScreens && <DotGroup visiblePage={visiblePage} setSelectedPage={setSelectedPage} />}
      <div ref={accueil} id="accueil" className="w-5/6 mx-auto md:h-full">
        <Landing setSelectedPage={setSelectedPage} />
      </div>
      <LineGradient />
      <div ref={competences} id="compétences" className="w-5/6 mx-auto md:h-full">
        <MySkills />
      </div>
      <LineGradient />
      <div ref={projets} id="projets" className="w-5/6 mx-auto">
        <Projects />
      </div>
      <LineGradient />
      <div ref={temoignages} id="témoignages" className="w-5/6 mx-auto">
        <Testimonials className="w-5/6 mx-auto md:h-full" />
      </div>
      <LineGradient />
      <div ref={contact} id="contact" className="w-5/6 mx-auto">
        <Contact className="w-5/6 mx-auto md:h-full" />
      </div>
      <Footer />
    </div>
  );
}

export default App;
