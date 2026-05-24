import React from 'react'
import './About.css'

const About = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <h2>About Us</h2>
        
        <div className="about-content">
          <div className="about-text">
            <h3>Leading the Digital Revolution</h3>
            <p>
              Syntarica Networks is a pioneering technology company dedicated to transforming businesses through innovative networking solutions. 
              With over a decade of experience, we've helped countless organizations achieve digital excellence.
            </p>
            <p>
              Our team of experts specializes in network infrastructure, cloud services, cybersecurity, and cutting-edge technology integration. 
              We believe in delivering solutions that are not just effective, but scalable and future-proof.
            </p>
            <p>
              From small startups to large enterprises, we partner with businesses to create robust, secure, and efficient network ecosystems 
              that drive growth and innovation in the digital age.
            </p>
          </div>

          {/* Stats on the Right with Sliding Animation */}
          <div className="stats-container">
            <div className="stat-card stat-card-1">
              <div className="stat-number">500+</div>
              <div className="stat-label">Projects Completed</div>
            </div>
            <div className="stat-card stat-card-2">
              <div className="stat-number">200+</div>
              <div className="stat-label">Happy Clients</div>
            </div>
            <div className="stat-card stat-card-3">
              <div className="stat-number">15+</div>
              <div className="stat-label">Years Experience</div>
            </div>
            <div className="stat-card stat-card-4">
              <div className="stat-number">50+</div>
              <div className="stat-label">Expert Team</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About