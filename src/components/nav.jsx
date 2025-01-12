import { IoHome } from "react-icons/io5";
import { FaUser } from "react-icons/fa";
import { FaSuitcase } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";

const Nav = () => {
  return (
    
    <div className="col-2">
          <nav className="navbar nav-menu">
  <div className="container-fluid">
    
    
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/"><IoHome /></a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#about"><FaUser/></a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#portfolio">< FaSuitcase /></a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#contact">< IoMdMail/></a>
        </li>
      
      </ul>
     
  </div>
</nav>
</div>
  )
}

export default Nav;