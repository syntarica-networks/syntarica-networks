import React from 'react'
import './Hero.css'

const Hero = () => {
  return (
    <section id="hero" className="hero">
      {/* Quantum Computing Background Elements */}
      <div className="hero-radial"></div>
      <div className="hero-dark-overlay"></div>

      <div className="container">
        <div className="hero-content">
          <p className="tagline">Transforming Digital Networks</p>
          <h1>
            Syntarica
            <br />
            <span className="highlight">Networks</span>
          </h1>
          <p>
            Delivering cutting-edge networking solutions with innovation and expertise. 
            We empower businesses with robust, scalable, and secure network infrastructure.
          </p>
          <p>
            From enterprise networks to cloud solutions, we build the future of connectivity.
          </p>
          <button className="cta-button" onClick={() => document.getElementById('services').scrollIntoView({ behavior: 'smooth' })}>
            Explore Services
          </button>
        </div>

        <div className="hero-visual">
          {/* Main 3D Ring System */}
          <div className="ring-system">
            <div className="ring-outer"></div>
            <div className="ring-inner"></div>

            {/* Floating Particles in Ring */}
            <div className="ring-particles">
              <div className="particle-dot particle-dot-1"></div>
              <div className="particle-dot particle-dot-2"></div>
              <div className="particle-dot particle-dot-3"></div>
              <div className="particle-dot particle-dot-4"></div>
              <div className="particle-dot particle-dot-5"></div>
              <div className="particle-dot particle-dot-6"></div>
              <div className="particle-dot particle-dot-7"></div>
              <div className="particle-dot particle-dot-8"></div>
            </div>

            {/* 3D Floating Icons */}
            <div className="floating-icon floating-icon-1">🌐</div>
            <div className="floating-icon floating-icon-2">🔗</div>
            <div className="floating-icon floating-icon-3">📡</div>
            <div className="floating-icon floating-icon-4">💻</div>
          </div>

          {/* Additional 3D Cube */}
          <div className="cube-container">
            <div className="cube-face front">🔒</div>
            <div className="cube-face back">📶</div>
            <div className="cube-face right">🌍</div>
            <div className="cube-face left">💡</div>
            <div className="cube-face top">⚡</div>
            <div className="cube-face bottom">🛡️</div>
          </div>

          {/* Glowing Spheres */}
          <div className="sphere-glow sphere-glow-1"></div>
          <div className="sphere-glow sphere-glow-2"></div>
          <div className="sphere-glow sphere-glow-3"></div>
          <div className="sphere-glow sphere-glow-4"></div>
        </div>
      </div>

      {/* Status Indicator */}
      <div className="status-indicator">
        <div className="status-dots">
          <div className="status-dot"></div>
          <div className="status-dot"></div>
          <div className="status-dot"></div>
          <div className="status-dot active"></div>
        </div>
        <div className="status-text">OPTIMIZING_NETWORKS...</div>
      </div>
    </section>
  )
}

export default Hero