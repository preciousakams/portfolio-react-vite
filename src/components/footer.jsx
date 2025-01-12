import { FaXTwitter } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { SiWellfound } from "react-icons/si";
import { FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <>
    <footer id="footer">
    <div className="container">
      <div className="social-links">
        <a href="https://twitter.com/precious_akams" className="twitter" aria-label="social link"><FaXTwitter /> </a>
        <a href="https://github.com/preciousakams" className="facebook" aria-label="social link"><FaGithub /> </a>
        <a href="https://angel.co/u/onyeagoziri-akams" className="instagram" aria-label="social link"> <SiWellfound /> </a>
        <a href="https://www.linkedin.com/in/preciousakams/" className="linkedin" aria-label="social link"><FaLinkedinIn /> </a>
      </div>
    </div>
  </footer>

  <div id="preloader"></div>
  <a href="###" className="back-to-top d-flex align-items-center justify-content-center" aria-label="preloader"><i className="bi bi-arrow-up-short"></i></a>
</>
  )
} 

export default Footer;