import Link from "next/link";
import "./landing.css";

export default function HomePage() {
  return (
    <main className="landing-page">

      {/* Navbar */}
      <nav className="navbar">
        <Link href="/" className="logo">
          <div className="logo-icon">✦</div>
          <span>LifeOS</span>
        </Link>

        <div className="nav-links">
          <a href="#product">Product</a>
          <a href="#features">Features</a>
          <a href="#pricing">Pricing</a>
          <a href="#about">About</a>
        </div>

        <div className="nav-actions">
          <Link href="/login" className="signin-link">
            Sign in
          </Link>

          <Link href="/signup" className="get-started-nav">
            Get Started
          </Link>
        </div>
      </nav>

      {/* Hero */}
      <section className="hero">

        <div className="hero-content">
          <div className="hero-badge">
            ✦ Your intelligent life operating system
          </div>

          <h1>
            Your life.
            <br />

            <span className="purple-text">
              Organized
            </span>

            <br />

            <span className="blue-text">
              Intelligently.
            </span>
          </h1>

          <p className="hero-description">
            Plan your day, build habits, focus deeply,
            and let AI organize everything around you.
          </p>

          <div className="hero-buttons">
            <Link href="/signup" className="primary-btn">
              Get Started for Free
            </Link>

            <a href="#features" className="secondary-btn">
              See how it works
            </a>
          </div>

          <p className="hero-small-text">
            No credit card required · Free to start
          </p>
        </div>

        {/* Life Orbit Graphic */}
        <div className="hero-visual">

          <div className="orbit orbit-one"></div>
          <div className="orbit orbit-two"></div>
          <div className="orbit orbit-three"></div>

          <div className="core">
            <div className="core-inner"></div>
          </div>

          <div className="orbit-item habits">
            <span>✓</span>
            Habits
          </div>

          <div className="orbit-item tasks">
            <span>✓</span>
            Tasks
          </div>

          <div className="orbit-item calendar">
            <span>▣</span>
            Calendar
          </div>

          <div className="orbit-item projects">
            <span>◆</span>
            Projects
          </div>

          <div className="orbit-item ai">
            <span>✦</span>
            AI Assistant
          </div>

        </div>
      </section>

      {/* Stats */}
      <section className="stats">

        <div className="trusted">
          <p>Built for your entire life</p>

          <div className="avatar-row">
            <div className="mini-avatar">V</div>
            <div className="mini-avatar">A</div>
            <div className="mini-avatar">R</div>
            <div className="mini-avatar">S</div>

            <span>10k+ active users</span>
          </div>
        </div>

        <div className="stat-item">
          <strong>98%</strong>
          <span>Satisfaction</span>
        </div>

        <div className="stat-item">
          <strong>4.9/5</strong>
          <span>Rating</span>
        </div>

        <div className="stat-item">
          <strong>250k+</strong>
          <span>Tasks Completed</span>
        </div>

      </section>

    </main>
  );
}