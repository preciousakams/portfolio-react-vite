

const Contact = () => {
  return (
    <section id="contact" className="contact">
    <div className="container" data-aos="fade-up">
    <div className="section-title">
        <h2>Contact</h2>
      </div>
      <div className="row mt-1">

        <div className="col-lg-4">
          <div className="info">
            <div className="address">
              <i className="bi bi-geo-alt"></i>
              <h4>Location:</h4>
              <p>Scotland</p>
            </div>

            <div className="email">
              <i className="bi bi-envelope"></i>
              <h4>Email:</h4>
              <p>preciousakams@yahoo.com</p>
            </div>
          </div>

        </div>
      
        <div className="col-lg-8 mt-5 mt-lg-0">

          <form action="https://formsubmit.co/6f76a1aab0d73d72ecef81f02d68a3ea" method="post" role="form" className="php-email-form">
            <div className="row">
              <div className="col-md-6 form-group">
                <input type="text" name="name" className="form-control" placeholder="Your Name" required />
              </div>
              <div className="col-md-6 form-group mt-3 mt-md-0">
                <input type="email" className="form-control" name="email" placeholder="Your Email" required />
              </div>
            </div>
            <div className="form-group mt-3">
              <input type="text" className="form-control" name="subject" placeholder="Subject" required />
            </div>
            <div className="form-group mt-3">
              <textarea className="form-control" name="message" rows="5" placeholder="Message" required></textarea>
            </div>
            <div className="my-3">
              <div className="loading">Loading</div>
              <div className="error-message"></div>
            </div>
            <input type="hidden" name="_next" value="https://fascinating-pothos-92a983.netlify.app/contactSubmit.html" />
            <input type="hidden" name="_subject" value="New submission!" />
            <input type="hidden" name="_template" value="table" />
            <div className="text-center"><button style={{backgroundColor: '#41173f', color: 'white'}} type="submit">Get In Touch</button></div>
          </form>
        </div>

      </div>

    </div>

  </section>
  )
}

export default Contact;