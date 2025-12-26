import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className="home-page">
      <section className="hero-section">
        <div className="hero-content">
          <h1>Learn Without <span className="highlight">Limits</span></h1>
          <p>India's most loved educational platform for JEE, NEET, and school students. Join 2M+ learners building their future with MedhaPlus.</p>
          <div className="hero-buttons">
            <Link to="/courses" className="btn btn-primary btn-large">Explore Courses</Link>
            <button className="btn btn-outline btn-large">Free Trial</button>
          </div>
          <div className="hero-stats">
            <div className="stat">
              <h3>2M+</h3>
              <p>Students</p>
            </div>
            <div className="stat">
              <h3>500+</h3>
              <p>Expert Teachers</p>
            </div>
            <div className="stat">
              <h3>10K+</h3>
              <p>Video Lectures</p>
            </div>
          </div>
        </div>
        <div className="hero-image">
          <div className="image-placeholder">
            <i className="fas fa-graduation-cap"></i>
          </div>
        </div>
      </section>

      <section className="features-section">
        <h2 className="section-title">Why Choose <span className="highlight">MedhaPlus</span>?</h2>
        <div className="features-container">
          <div className="feature-card">
            <div className="feature-icon">
              <i className="fas fa-book"></i>
            </div>
            <h3>Comprehensive Curriculum</h3>
            <p>Complete courses designed to cover all topics required for competitive exams and board preparation.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">
              <i className="fas fa-video"></i>
            </div>
            <h3>High-Quality Videos</h3>
            <p>Learn from crystal-clear video lectures by expert faculty members with years of experience.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">
              <i className="fas fa-chart-line"></i>
            </div>
            <h3>Progress Tracking</h3>
            <p>Monitor your progress with detailed analytics and personalized recommendations.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">
              <i className="fas fa-headset"></i>
            </div>
            <h3>Expert Support</h3>
            <p>Get instant help from our support team and experienced mentors 24/7.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">
              <i className="fas fa-mobile-alt"></i>
            </div>
            <h3>Learn Anywhere</h3>
            <p>Access your courses anytime, anywhere on any device with our mobile app.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">
              <i className="fas fa-award"></i>
            </div>
            <h3>Proven Results</h3>
            <p>Thousands of students have achieved their goals with MedhaPlus courses.</p>
          </div>
        </div>
      </section>

      <section className="courses-preview">
        <h2 className="section-title">Featured <span className="highlight">Courses</span></h2>
        <div className="courses-preview-grid">
          <div className="preview-card">
            <div className="preview-header">JEE</div>
            <h3>JEE Main Complete Course</h3>
            <p>Comprehensive preparation for JEE Main with expert faculty and doubt support.</p>
            <Link to="/courses" className="btn btn-primary">View Course</Link>
          </div>
          <div className="preview-card">
            <div className="preview-header">NEET</div>
            <h3>NEET UG Complete Course</h3>
            <p>Complete NEET preparation with focus on biology and regular practice tests.</p>
            <Link to="/courses" className="btn btn-primary">View Course</Link>
          </div>
          <div className="preview-card">
            <div className="preview-header">SCHOOL</div>
            <h3>Class 12 Board + JEE/NEET</h3>
            <p>Dual preparation for board exams and competitive exams in one course.</p>
            <Link to="/courses" className="btn btn-primary">View Course</Link>
          </div>
        </div>
      </section>

      <section className="testimonials-section">
        <h2 className="section-title">What Our <span className="highlight">Students</span> Say</h2>
        <div className="testimonials-container">
          <div className="testimonial-card">
            <div className="stars">
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
            </div>
            <p>"MedhaPlus helped me score 98% in my boards. The teachers are amazing and the study material is very comprehensive."</p>
            <div className="testimonial-author">
              <h4>Aisha Sharma</h4>
              <p>Class 12 Student</p>
            </div>
          </div>
          <div className="testimonial-card">
            <div className="stars">
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
            </div>
            <p>"I cleared NEET with an excellent rank thanks to MedhaPlus. The concept clarity is unmatched."</p>
            <div className="testimonial-author">
              <h4>Rajesh Kumar</h4>
              <p>NEET Aspirant</p>
            </div>
          </div>
          <div className="testimonial-card">
            <div className="stars">
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
            </div>
            <p>"The practice tests are extremely useful. I improved my JEE score significantly with MedhaPlus."</p>
            <div className="testimonial-author">
              <h4>Priya Singh</h4>
              <p>JEE Aspirant</p>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <h2>Start Your Free Trial Today!</h2>
        <p>Get access to premium courses for 7 days completely free. No credit card required.</p>
        <button className="btn btn-primary btn-large">Get Free Trial</button>
      </section>
    </div>
  )
}

export default Home
