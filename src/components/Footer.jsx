const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3 className="footer-logo">Medha<span className="logo-plus">Plus</span></h3>
          <p>Empowering students with quality education for a brighter future.</p>
          <div className="social-icons">
            <a href="#"><i className="fab fa-facebook"></i></a>
            <a href="#"><i className="fab fa-twitter"></i></a>
            <a href="#"><i className="fab fa-instagram"></i></a>
            <a href="#"><i className="fab fa-linkedin"></i></a>
            <a href="#"><i className="fab fa-youtube"></i></a>
          </div>
        </div>
        
        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About Us</a></li>
            <li><a href="/courses">Courses</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>
        
        <div className="footer-section">
          <h4>Popular Courses</h4>
          <ul>
            <li><a href="#">JEE Preparation</a></li>
            <li><a href="#">NEET UG</a></li>
            <li><a href="#">Class 9-10</a></li>
            <li><a href="#">Class 11-12</a></li>
          </ul>
        </div>
        
        <div className="footer-section">
          <h4>Contact Info</h4>
          <ul className="contact-info">
            <li><i className="fas fa-map-marker-alt"></i> 123 kolkata Street, kolkata, India</li>
            <li><i className="fas fa-phone"></i> +91 9876543210</li>
            <li><i className="fas fa-envelope"></i> info@medhaplus.com</li>
          </ul>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} MedhaPlus. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer