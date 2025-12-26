import { useState } from 'react'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    course: '',
    message: ''
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    alert('Thank you for your message! We will contact you soon.')
    setFormData({
      name: '',
      email: '',
      phone: '',
      course: '',
      message: ''
    })
  }

  return (
    <div className="contact-page">
      <section className="contact-hero">
        <div className="contact-hero-content">
          <h1>Get in <span className="highlight">Touch</span></h1>
          <p>Have questions? We're here to help. Reach out to us for any inquiries about courses, admissions, or support.</p>
        </div>
      </section>

      <div className="contact-container">
        <section className="contact-form-section">
          <h2 className="section-title">Send us a <span className="highlight">Message</span></h2>
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Full Name *</label>
              <input 
                type="text" 
                id="name" 
                name="name" 
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your full name"
                required 
              />
            </div>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="email">Email Address *</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email" 
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  required 
                />
              </div>
              <div className="form-group">
                <label htmlFor="phone">Phone Number *</label>
                <input 
                  type="tel" 
                  id="phone" 
                  name="phone" 
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Enter your phone number"
                  required 
                />
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="course">Course Interested In</label>
              <select 
                id="course" 
                name="course" 
                value={formData.course}
                onChange={handleChange}
              >
                <option value="">Select a course</option>
                <option value="jee">JEE Main & Advanced</option>
                <option value="neet">NEET UG</option>
                <option value="class9">Class 9 Foundation</option>
                <option value="class10">Class 10 Board Preparation</option>
                <option value="class11">Class 11 Science</option>
                <option value="class12">Class 12 Board + JEE/NEET</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="message">Your Message *</label>
              <textarea 
                id="message" 
                name="message" 
                rows="5"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell us about your requirements or questions"
                required
              />
            </div>
            <button type="submit" className="btn btn-primary btn-large">Send Message</button>
          </form>
        </section>

        <section className="contact-info-section">
          <h2 className="section-title">Contact <span className="highlight">Information</span></h2>
          <div className="contact-info-cards">
            <div className="contact-card">
              <div className="contact-icon">
                <i className="fas fa-map-marker-alt"></i>
              </div>
              <h3>Our Office</h3>
              <p>123 Education Street, Knowledge Park</p>
              <p>Delhi, India - 110001</p>
            </div>
            <div className="contact-card">
              <div className="contact-icon">
                <i className="fas fa-phone-alt"></i>
              </div>
              <h3>Phone Number</h3>
              <p>+91 9876543210</p>
              <p>+91 9123456789</p>
            </div>
            <div className="contact-card">
              <div className="contact-icon">
                <i className="fas fa-envelope"></i>
              </div>
              <h3>Email Address</h3>
              <p>info@medhaplus.com</p>
              <p>support@medhaplus.com</p>
            </div>
            <div className="contact-card">
              <div className="contact-icon">
                <i className="fas fa-clock"></i>
              </div>
              <h3>Working Hours</h3>
              <p>Monday - Saturday: 9 AM to 8 PM</p>
              <p>Sunday: 10 AM to 6 PM</p>
            </div>
          </div>

          <div className="faq-section">
            <h2 className="section-title">Frequently Asked <span className="highlight">Questions</span></h2>
            <div className="faq-list">
              <div className="faq-item">
                <div className="faq-question">
                  <h4>How do I enroll in a course?</h4>
                  <i className="fas fa-chevron-down"></i>
                </div>
                <div className="faq-answer">
                  <p>You can enroll directly from our website by selecting the course and clicking "Enroll Now". Alternatively, you can call our admission helpline for assistance with enrollment.</p>
                </div>
              </div>
              <div className="faq-item">
                <div className="faq-question">
                  <h4>Do you offer demo classes?</h4>
                  <i className="fas fa-chevron-down"></i>
                </div>
                <div className="faq-answer">
                  <p>Yes, we offer free demo classes for all our courses. You can register for a demo class on our website or contact our support team.</p>
                </div>
              </div>
              <div className="faq-item">
                <div className="faq-question">
                  <h4>What is the fee structure?</h4>
                  <i className="fas fa-chevron-down"></i>
                </div>
                <div className="faq-answer">
                  <p>Fee structure varies by course and duration. You can check the course page for detailed pricing or contact our counselors for personalized payment plans.</p>
                </div>
              </div>
              <div className="faq-item">
                <div className="faq-question">
                  <h4>Is there any scholarship available?</h4>
                  <i className="fas fa-chevron-down"></i>
                </div>
                <div className="faq-answer">
                  <p>Yes, we offer merit-based scholarships to deserving students. You can apply for scholarships during enrollment or contact our scholarship cell for more information.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default Contact
