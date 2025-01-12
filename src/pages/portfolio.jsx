import { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom'
import PortfolioArray from "../components/portfolio-array";

const Portfolio = () => {
  const [products, setProducts] = useState([])

const navigate = useNavigate();

  useEffect(() => {
    setProducts(PortfolioArray)
  }, [])
  
  console.log(products)

  const handleClick = (product) => {

    navigate('/details', {state: {product}})
  }
  return (
    <>
    <section className="portfolio section-bg" id="portfolio">
    <div className="container" data-aos="fade-up">
    <div className=" row justify-content-around">

      <div className="section-title">
        <h2>Project Samples</h2>
      </div>
      {products.map((product) => (
        <div key={product.index} className="card portfolioCard col p-3 m-2"  data-aos="fade-up" data-aos-delay="200">
          <img src={product.img1} className="card-img-top" alt="" />

          <div className="card-body">
            <h5 className="card-title">{product.projectName}</h5>
            <button className="portfolio-btn" onClick={() => handleClick(product)}>See More</button>
          </div>
       </div>
      ))}
     </div>
     </div>
  </section>
</>
  )
}

export default Portfolio;