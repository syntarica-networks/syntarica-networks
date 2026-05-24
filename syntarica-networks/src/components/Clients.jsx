import React from 'react'
import './Clients.css'

const Clients = () => {
  const clients = [
    { logo: '🏢', name: 'TechCorp Industries', testimonial: 'Exceptional service and expertise' },
    { logo: '🏭', name: 'Global Manufacturing', testimonial: 'Reliable network solutions' },
    { logo: '🏥', name: 'HealthCare Plus', testimonial: 'Secure and scalable infrastructure' },
    { logo: '🏫', name: 'Education First', testimonial: 'Transformed our digital campus' },
    { logo: '🏪', name: 'Retail Networks', testimonial: 'Seamless integration achieved' },
    { logo: '🏛️', name: 'Government Services', testimonial: 'Trusted partner for critical systems' }
  ]

  return (
    <section id="clients" className="clients">
      <div className="container">
        <h2>Our Clients</h2>
        <div className="clients-grid">
          {clients.map((client, index) => (
            <div key={index} className="client-card">
              <div className="client-logo">{client.logo}</div>
              <h3>{client.name}</h3>
              <p>{client.testimonial}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Clients