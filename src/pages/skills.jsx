const Skills = () => {
  return(
    <section id="skills" className="skills section-bg">
      <div className="container-fluid" data-aos="fade-up">

        <div className="row justify-content-center">
          {/* <div className="flex-wrapper"> */}
                <div className="skill-col col-md-4 p-3">
                    <div className="about-me-img"> </div>
                    <div className="about-me-details">
                        <h4>Languages</h4>
                        <ul className="flex-item-ul2">
                            <li>JavaScript,</li>
                            <li>SQL,</li>
                            <li>Ruby</li>
                          </ul>
                        
                    </div>
                    </div>
                    <div className="skill-col col-md-4 p-3">
                    <div className="about-me-img2"> </div>
                    <div className="about-me-details">
                        <h4>Libraries, Frameworks & Tools</h4>
                        <ul className="flex-item-ul2">
                            <li>React,</li>
                            <li>NextJS,</li>
                            <li>TypeScript,</li>
                            <li>NodeJS</li>
                                     
                          </ul>
                          <ul className="flex-item-ul2">
                            <li className="rails">Ruby On Rails</li>
                            
                          </ul>
                          <ul className="flex-item-ul2">
                          <li>Redux,</li>
                            <li>Agile/Scrum,</li>
                            <li className="rails">MongoDB</li>
                          </ul>
                          <ul className="flex-item-ul2">
                            
                            
                            <li className="rails">Material UI, </li>
                          </ul>
                         
                          <ul className="flex-item-ul2">
                            <li>Bootstrap,</li>
                            <li>Tailwind,</li>
                            <li>GraphQL</li>
                      
                          </ul>
                    </div>
                    </div>
                    <div className="skill-col col-md-4 p-3">
                    <div className="about-me-img3"> </div>
                    <div className="about-me-details">
                        <h4>Techniques</h4>
                        <ul className="flex-item-ul2">
                            <li>MicroServices,</li>
                            <li>TDD,</li>
                            <li>CI/CD</li>
                               
                          </ul>
                          <ul className="flex-item-ul2">
                            <li>Mobile-first development</li>  
                                  
                          </ul>
                          <ul className="flex-item-ul2">
                           
                            <li>Containerization</li>       
                          </ul>
                    </div>
                  </div>
       </div>
       </div>
       {/* </div> */}
    </section>
  )
}

export default Skills