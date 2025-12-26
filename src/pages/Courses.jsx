import { useState } from 'react'

const Courses = () => {
  const [activeCategory, setActiveCategory] = useState('all')
  
  const courses = [
    { id: 1, title: 'JEE Main Complete Course', category: 'jee', duration: '12 Months', students: '50K+', description: 'Complete preparation for JEE Main with expert faculty, mock tests, and doubt support.' },
    { id: 2, title: 'JEE Advanced Crash Course', category: 'jee', duration: '6 Months', students: '25K+', description: 'Intensive preparation for JEE Advanced with advanced problem-solving techniques.' },
    { id: 3, title: 'NEET UG Complete Course', category: 'neet', duration: '12 Months', students: '45K+', description: 'Comprehensive NEET UG preparation with biology focus and regular tests.' },
    { id: 4, title: 'NEET Revision Course', category: 'neet', duration: '3 Months', students: '30K+', description: 'Rapid revision course for NEET with important topics and previous year papers.' },
    { id: 5, title: 'Class 9 Foundation', category: 'school', duration: '10 Months', students: '40K+', description: 'Strong foundation building for Class 9 students in Science and Mathematics.' },
    { id: 6, title: 'Class 10 Board Preparation', category: 'school', duration: '10 Months', students: '60K+', description: 'Complete preparation for Class 10 board exams with sample papers.' },
    { id: 7, title: 'Class 11 Science', category: 'school', duration: '12 Months', students: '35K+', description: 'In-depth course for Class 11 Physics, Chemistry, and Mathematics.' },
    { id: 8, title: 'Class 12 Board + JEE/NEET', category: 'combined', duration: '12 Months', students: '55K+', description: 'Dual preparation for board exams and competitive exams.' },
  ]
  
  const filteredCourses = activeCategory === 'all' 
    ? courses 
    : courses.filter(course => course.category === activeCategory)

  return (
    <div className="courses-page">
      <section className="courses-hero">
        <div className="courses-hero-content">
          <h1>Our <span className="highlight">Courses</span></h1>
          <p>Choose from a wide range of courses designed by expert educators to help you achieve your goals.</p>
        </div>
      </section>

      <section className="courses-section">
        <div className="courses-container">
          <h2 className="section-title">Explore Our <span className="highlight">Courses</span></h2>
          
          <div className="filter-buttons">
            <button 
              className={`filter-btn ${activeCategory === 'all' ? 'active' : ''}`}
              onClick={() => setActiveCategory('all')}
            >
              All Courses
            </button>
            <button 
              className={`filter-btn ${activeCategory === 'jee' ? 'active' : ''}`}
              onClick={() => setActiveCategory('jee')}
            >
              JEE
            </button>
            <button 
              className={`filter-btn ${activeCategory === 'neet' ? 'active' : ''}`}
              onClick={() => setActiveCategory('neet')}
            >
              NEET
            </button>
            <button 
              className={`filter-btn ${activeCategory === 'school' ? 'active' : ''}`}
              onClick={() => setActiveCategory('school')}
            >
              School
            </button>
            <button 
              className={`filter-btn ${activeCategory === 'combined' ? 'active' : ''}`}
              onClick={() => setActiveCategory('combined')}
            >
              Combined
            </button>
          </div>

          <div className="courses-grid">
            {filteredCourses.map((course) => (
              <div key={course.id} className="course-card">
                <div className="course-header">
                  <div className="course-category">{course.category.toUpperCase()}</div>
                  <div className="course-rating">
                    <i className="fas fa-star"></i>
                    <span>4.8</span>
                  </div>
                </div>
                <h3>{course.title}</h3>
                <p>{course.description}</p>
                <div className="course-details">
                  <div className="detail">
                    <i className="fas fa-clock"></i>
                    <span>{course.duration}</span>
                  </div>
                  <div className="detail">
                    <i className="fas fa-user-graduate"></i>
                    <span>{course.students} Enrolled</span>
                  </div>
                  <div className="detail">
                    <i className="fas fa-video"></i>
                    <span>300+ Lectures</span>
                  </div>
                </div>
                <div className="course-footer">
                  <button className="btn btn-outline">View Details</button>
                  <button className="btn btn-primary">Enroll Now</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="features-section">
        <div className="courses-container">
          <h2 className="section-title">Why Choose <span className="highlight">MedhaPlus</span></h2>
          <div className="features-list">
            <div className="feature-item">
              <div className="feature-icon">
                <i className="fas fa-chalkboard-user"></i>
              </div>
              <div className="feature-text">
                <h3>Expert Faculty</h3>
                <p>Learn from experienced educators with years of teaching expertise.</p>
              </div>
            </div>
            <div className="feature-item">
              <div className="feature-icon">
                <i className="fas fa-check-circle"></i>
              </div>
              <div className="feature-text">
                <h3>Comprehensive Content</h3>
                <p>Complete course curriculum covering all topics and concepts.</p>
              </div>
            </div>
            <div className="feature-item">
              <div className="feature-icon">
                <i className="fas fa-chart-line"></i>
              </div>
              <div className="feature-text">
                <h3>Performance Tracking</h3>
                <p>Regular tests with detailed performance analysis and improvement plans.</p>
              </div>
            </div>
            <div className="feature-item">
              <div className="feature-icon">
                <i className="fas fa-user-friends"></i>
              </div>
              <div className="feature-text">
                <h3>Mentorship</h3>
                <p>Personalized guidance and mentorship from experienced educators.</p>
              </div>
            </div>
            <div className="feature-item">
              <div className="feature-icon">
                <i className="fas fa-mobile-alt"></i>
              </div>
              <div className="feature-text">
                <h3>Mobile App</h3>
                <p>Access courses on our mobile app for learning on the go.</p>
              </div>
            </div>
            <div className="feature-item">
              <div className="feature-icon">
                <i className="fas fa-headset"></i>
              </div>
              <div className="feature-text">
                <h3>24/7 Support</h3>
                <p>Dedicated support team available round the clock to help you.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <h2>Ready to Start Your Learning Journey?</h2>
        <p>Join thousands of students already learning on MedhaPlus</p>
        <button className="btn btn-primary btn-large">
          <i className="fas fa-phone-alt"></i> Book Free Counselling Session
        </button>
      </section>
    </div>
  )
}

export default Courses
