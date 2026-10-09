import './App.css'

const features = [
  { number: '01', icon: '✳', title: 'A clear path forward', description: 'Turn big ideas into a focused plan with milestones your whole team can understand.' },
  { number: '02', icon: '↗', title: 'Less busywork, more building', description: 'Keep handoffs, updates, and decisions in one calm workspace that keeps moving.' },
  { number: '03', icon: '◷', title: 'See progress as it happens', description: 'Spot what is on track and what needs attention with a live view of every launch.' },
]

function Brand() {
  return <a className="brand" href="#home" aria-label="LaunchFlow home"><span className="brand-mark" aria-hidden="true">L</span><span>launchflow</span></a>
}

function Navbar() {
  return <header className="site-header"><nav className="nav shell" aria-label="Main navigation"><Brand /><div className="nav-links"><a href="#features">Features</a><a href="#how-it-works">How it works</a><a href="#about">About</a></div><a className="nav-cta" href="#get-started">Get started <span aria-hidden="true">↗</span></a></nav></header>
}

function Hero() {
  return <section className="hero shell" id="home">
    <div className="hero-copy">
      <p className="eyebrow"><span className="eyebrow-dot" /> A better way to bring ideas to life</p>
      <h1>Make your next big thing <span>happen.</span></h1>
      <p className="hero-description">LaunchFlow gives ambitious teams the clarity, momentum, and space to turn a great idea into something real.</p>
      <div className="hero-actions" id="get-started"><a className="button button-primary" href="mailto:hello@launchflow.example">Start building <span aria-hidden="true">↗</span></a><a className="button button-secondary" href="#how-it-works"><span className="play-icon" aria-hidden="true">▶</span> See how it works</a></div>
      <div className="hero-proof"><div className="avatar-stack" aria-hidden="true"><span>A</span><span>M</span><span>J</span><span>+</span></div><p><strong>Made for teams that move.</strong><br />Join 2,000+ teams building with focus.</p></div>
    </div>
    <div className="hero-visual" id="how-it-works" aria-label="LaunchFlow project dashboard preview">
      <div className="visual-glow" /><div className="dashboard-card">
        <div className="dashboard-top"><div className="window-dots"><i /><i /><i /></div><span>launchflow / projects</span><span className="top-menu">•••</span></div>
        <div className="dashboard-body"><div className="dash-sidebar"><div className="side-logo">L</div><span className="side-active">▦</span><span>◷</span><span>▤</span><span>⚙</span></div>
          <div className="dash-content"><div className="dash-heading"><div><small>MONDAY, OCTOBER 12</small><h2>Good morning, Alex <span>✦</span></h2></div><span className="dash-avatar">A</span></div>
            <div className="dash-subhead"><span>Your projects</span><span className="view-all">View all →</span></div>
            <div className="project-row"><div className="project-icon coral">✳</div><div className="project-info"><b>Website relaunch</b><small>8 tasks · Updated 2h ago</small></div><span className="progress-label">72%</span><div className="progress-track"><span style={{ width: '72%' }} /></div></div>
            <div className="project-row"><div className="project-icon lilac">◈</div><div className="project-info"><b>Mobile app v2</b><small>12 tasks · Updated yesterday</small></div><span className="progress-label">48%</span><div className="progress-track"><span style={{ width: '48%' }} /></div></div>
            <div className="project-row"><div className="project-icon mint">↗</div><div className="project-info"><b>Fall campaign</b><small>5 tasks · Updated Oct 8</small></div><span className="progress-label">91%</span><div className="progress-track"><span style={{ width: '91%' }} /></div></div>
            <div className="dash-bottom"><span>✨ &nbsp;Your team is on a roll</span><span>See activity →</span></div>
          </div>
        </div>
      </div>
      <div className="floating-note"><span className="note-check">✓</span><span><b>Milestone complete!</b><small>Website relaunch is on track</small></span></div><div className="floating-spark" aria-hidden="true">✦</div>
    </div>
  </section>
}

function Features() {
  return <section className="features-section" id="features"><div className="shell"><div className="section-heading"><p className="eyebrow">THE FLOW STATE</p><h2>Everything clicks<br />when you work <span>in sync.</span></h2><p>All the little things that make big things possible, finally working together.</p></div>
    <div className="feature-grid">{features.map((feature) => <article className="feature-card" key={feature.number}><div className="feature-top"><span className="feature-icon" aria-hidden="true">{feature.icon}</span><span className="feature-number">{feature.number}</span></div><h3>{feature.title}</h3><p>{feature.description}</p><a href="#get-started" aria-label={`Learn more about ${feature.title}`}>Explore feature <span aria-hidden="true">↗</span></a></article>)}</div>
  </div></section>
}

function Footer() {
  return <footer className="site-footer" id="about"><div className="footer-main shell"><div><Brand /><p>Make room for your best work.</p></div><div className="footer-links"><a href="#features">Features</a><a href="#how-it-works">How it works</a><a href="mailto:hello@launchflow.example">Contact</a></div><a className="footer-cta" href="#get-started">Ready when you are <span aria-hidden="true">↗</span></a></div><div className="footer-bottom shell"><span>© 2026 LaunchFlow. Made for what’s next.</span><span>Thoughtfully built for teams everywhere.</span></div></footer>
}

function App() { return <><Navbar /><main><Hero /><Features /></main><Footer /></> }

export default App
