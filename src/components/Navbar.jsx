import { Link } from 'react-router-dom'
import { useState } from 'react'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="nav-logo">
          <Link to="/">
            <span className="logo-text">Medha<span className="logo-plus">Plus</span></span>
          </Link>
        </div>
        
        <div className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
          <Link to="/" onClick={() => setIsMenuOpen(false)}>Home</Link>
          <Link to="/about" onClick={() => setIsMenuOpen(false)}>About Us</Link>
          <Link to="/courses" onClick={() => setIsMenuOpen(false)}>Courses</Link>
          <Link to="/contact" onClick={() => setIsMenuOpen(false)}>Contact</Link>
        </div>
        
        <div className="nav-buttons">
          <button className="btn btn-login">Login</button>
          <button className="btn btn-primary">Sign Up</button>
          <div className="mobile-menu-btn" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <i className={`fas ${isMenuOpen ? 'fa-times' : 'fa-bars'}`}></i>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar