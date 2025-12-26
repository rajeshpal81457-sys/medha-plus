const About = () => {
  return (
    <div className="about-page">
      <section className="about-hero">
        <div className="about-hero-content">
          <h1>About <span className="highlight">MedhaPlus</span></h1>
          <p>Empowering the next generation of learners with accessible, affordable, and high-quality education.</p>
        </div>
      </section>

      <section className="mission-section">
        <div className="mission-container">
          <div className="mission-card">
            <div className="mission-icon">
              <i className="fas fa-bullseye"></i>
            </div>
            <h2>Our Mission</h2>
            <p>To democratize quality education by making it accessible and affordable to every student in India, regardless of their geographical or economic background.</p>
          </div>
          <div className="mission-card">
            <div className="mission-icon">
              <i className="fas fa-eye"></i>
            </div>
            <h2>Our Vision</h2>
            <p>To become India's most trusted educational partner, creating a positive impact on the education system and helping millions achieve their dreams.</p>
          </div>
        </div>
      </section>

      <section className="story-section">
        <h2 className="section-title">Our <span className="highlight">Story</span></h2>
        <div className="story-content">
          <div className="story-image">
            <div className="image-placeholder">
              <i className="fas fa-history"></i>
            </div>
          </div>
          <div className="story-text">
            <h3>From a small classroom to educating millions</h3>
            <p>MedhaPlus was founded in 2025 by a group of passionate educators who believed that quality education should be accessible to every student in India. What started as a small offline coaching center has now transformed into one of India's leading online education platforms.</p>
            <p>Today, we serve over 20k students across the country with comprehensive courses for JEE, NEET, and school curriculum. Our innovative teaching methodology, expert faculty, and student-centric approach have helped thousands of students achieve their dream ranks in competitive exams.</p>
            <p>We continue to innovate and expand our offerings to empower more students in their educational journey.</p>
          </div>
        </div>
      </section>

      <section className="team-section">
        <h2 className="section-title">Meet Our <span className="highlight">Team</span></h2>
        <div className="team-grid">
          <div className="team-member">
            <div className="member-image">
              <i className="fas fa-user-circle"></i>
            </div>
            <h3>Dr. Amit Patel</h3>
            <p>Founder & CEO</p>
            <p className="member-desc">Physics expert with 15+ years of teaching experience</p>
          </div>
          <div className="team-member">
            <div className="member-image">
              <i className="fas fa-user-circle"></i>
            </div>
            <h3>Dr. Priya Sharma</h3>
            <p>Head of Academics</p>
            <p className="member-desc">Chemistry specialist with IIT background</p>
          </div>
          <div className="team-member">
            <div className="member-image">
              <i className="fas fa-user-circle"></i>
            </div>
            <h3>Rahul Verma</h3>
            <p>Technology Lead</p>
            <p className="member-desc">EdTech expert with passion for innovation</p>
          </div>
          <div className="team-member">
            <div className="member-image">
              <i className="fas fa-user-circle"></i>
            </div>
            <h3>Neha Gupta</h3>
            <p>Head of Student Success</p>
            <p className="member-desc">Dedicated to ensuring student achievement</p>
          </div>
        </div>
      </section>

      <section className="values-section">
        <h2 className="section-title">Our <span className="highlight">Values</span></h2>
        <div className="values-grid">
          <div className="value-card">
            <div className="value-icon">
              <i className="fas fa-heart"></i>
            </div>
            <h3>Excellence</h3>
            <p>We are committed to delivering the highest quality education and learning experience.</p>
          </div>
          <div className="value-card">
            <div className="value-icon">
              <i className="fas fa-handshake"></i>
            </div>
            <h3>Integrity</h3>
            <p>We believe in transparency, honesty, and ethical practices in everything we do.</p>
          </div>
          <div className="value-card">
            <div className="value-icon">
              <i className="fas fa-rocket"></i>
            </div>
            <h3>Innovation</h3>
            <p>We constantly innovate to find better ways to help students learn effectively.</p>
          </div>
          <div className="value-card">
            <div className="value-icon">
              <i className="fas fa-users"></i>
            </div>
            <h3>Community</h3>
            <p>We foster a supportive community where every student feels valued and supported.</p>
          </div>
        </div>
      </section>

      <section className="achievements-section">
        <h2 className="section-title">Our <span className="highlight">Achievements</span></h2>
        <div className="achievements-grid">
          <div className="achievement-card">
            <h3>2M+</h3>
            <p>Students Enrolled</p>
          </div>
          <div className="achievement-card">
            <h3>500+</h3>
            <p>Expert Teachers</p>
          </div>
          <div className="achievement-card">
            <h3>10K+</h3>
            <p>Video Lectures</p>
          </div>
          <div className="achievement-card">
            <h3>95%</h3>
            <p>Success Rate</p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About
