import Home from "./home";
import About from "./about";
import Skills from "./skills";
import Portfolio from "./portfolio";
import Contact from "./contact";
import Footer from "../components/footer";

function MainDisplay() {
  return (
    <div className="MainDisplay container-fluid">
      <Home />
      <About />
      <Skills />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  );
}

export default MainDisplay;
