import React from 'react'
import './Training.css'

const Training = () => {
  const courses = [
    {
      icon: '🎓',
      title: 'Full Stack Web Development',
      duration: '6 Months',
      description: 'Master front-end and back-end development with React, Node.js, and modern databases.'
    },
    {
      icon: '📚',
      title: 'Product Design & UI/UX',
      duration: '4 Months',
      description: 'Learn user-centered design principles, prototyping, and creating intuitive digital experiences.'
    },
    {
      icon: '💼',
      title: 'Project Management',
      duration: '3 Months',
      description: 'Gain expertise in agile methodologies, team coordination, and delivering successful projects.'
    },
    {
      icon: '🔬',
      title: 'Data Science & Analytics',
      duration: '6 Months',
      description: 'Explore data analysis, machine learning, and business intelligence techniques.'
    },
    {
      icon: '📱',
      title: 'Mobile App Development',
      duration: '5 Months',
      description: 'Build native and cross-platform mobile applications for iOS and Android.'
    },
    {
      icon: '☁️',
      title: 'Cloud Computing & DevOps',
      duration: '4 Months',
      description: 'Learn cloud infrastructure, containerization, and continuous deployment practices.'
    }
  ]

  return (
    <section id="training" className="training">
      <div className="container">
        <h2>Student Training Programs</h2>
        <p className="training-description">
          Empower your career with our comprehensive training programs designed to help students 
          master technology skills, gain product knowledge, and develop project-making abilities
        </p>
        <div className="training-grid">
          {courses.map((course, index) => (
            <div key={index} className="training-card">
              <div className="course-icon">{course.icon}</div>
              <div className="course-duration">{course.duration}</div>
              <h3>{course.title}</h3>
              <p>{course.description}</p>
              <button className="learn-more-btn">Learn More</button>
            </div>
          ))}
        </div>
        <div className="training-benefits">
          <div className="benefit-item">
            <div className="benefit-icon">✓</div>
            <h4>Industry-Ready Skills</h4>
            <p>Practical knowledge aligned with current market demands</p>
          </div>
          <div className="benefit-item">
            <div className="benefit-icon">✓</div>
            <h4>Hands-on Projects</h4>
            <p>Real-world project experience to build your portfolio</p>
          </div>
          <div className="benefit-item">
            <div className="benefit-icon">✓</div>
            <h4>Career Guidance</h4>
            <p>Expert mentorship and job placement assistance</p>
          </div>
          <div className="benefit-item">
            <div className="benefit-icon">✓</div>
            <h4>Certification</h4>
            <p>Industry-recognized certificates upon completion</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Training