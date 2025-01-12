import { useLocation } from "react-router-dom";
import { FaStepBackward } from "react-icons/fa";


const Details = () => {
const location = useLocation();

const { product } = location.state || {};
console.log(product);

if (!product) {
  return <p>An Error has occured, please go back to the main page</p>
}
  return (
    <div>
      <h5 className="details-title p-4" style={{textAlign: 'center'}}> 
        {product.projectName}
      </h5>
   <div className="container" >
   <div>
        <a href="/" style={{fontSize: '34px', padding: '3%', color: '#41173F'}}> <FaStepBackward /> </a>
      </div>

      <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleControls" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleControls" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleControls" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src={product.img1} className="d-block w-100" alt="..." />
    </div>
    <div className="carousel-item">
      <img src={product.img2} className="d-block w-100" alt="..." />
    </div>
    <div className="carousel-item">
      <img src={product.img3} className="d-block w-100" alt="..." />
    </div>
  </div>

</div>
      <h5 className="detail-desc">{product.description}</h5>
      <ul className="detail-list">
        <li><a href={product.sourceCode}>Source Code</a></li>
        <li><a href={product.productLink}>Demo</a></li>
      </ul>
   </div>
    </div>
  )
}

export default Details;