import React from 'react'
import './Services.css'

const Services = () => {
  const services = [
    { icon: '🌐', title: 'Network Solutions', description: 'Enterprise-grade network infrastructure for seamless connectivity and maximum performance.' },
    { icon: '☁️', title: 'Cloud Services', description: 'Scalable cloud solutions with advanced security and 24/7 monitoring.' },
    { icon: '🔒', title: 'Cybersecurity', description: 'Comprehensive security solutions to protect your digital assets and data.' },
    { icon: '📡', title: 'Wireless Networks', description: 'High-speed wireless solutions for offices, campuses, and remote locations.' },
    { icon: '🖥️', title: 'IT Infrastructure', description: 'Complete IT infrastructure design, deployment, and management services.' },
    { icon: '💾', title: 'Data Centers', description: 'State-of-the-art data center solutions with redundant systems.' }
  ]

  return (
    <section id="services" className="services">
      <div className="container">
        <h2>Our Services</h2>

        {/* Rolling Cards Container */}
        <div className="services-rolling-container">
          <div className="services-track">
            {services.map((service, index) => (
              <div key={index} className="rolling-card">
                <div className="service-icon">{service.icon}</div>
                <div className="service-info">
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services