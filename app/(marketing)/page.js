"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";
import "./landing.css";

export default function HomePage() {
  const [theme, setTheme] = useState("dark");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("lifeos-theme") || "dark";

    setTheme(savedTheme);
    document.documentElement.setAttribute("data-theme", savedTheme);
    setMounted(true);
  }, []);

  function toggleTheme() {
    const newTheme = theme === "dark" ? "light" : "dark";

    setTheme(newTheme);
    localStorage.setItem("lifeos-theme", newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
  }

  return (
    <main className="landing-page">
      {/* Navbar */}
      <nav className="navbar">
        <Link href="/" className="logo">
          <span className="logo-icon">✦</span>
          <span>LifeOS</span>
        </Link>

        <div className="nav-links">
          <a href="#product">Product</a>
          <a href="#features">Features</a>
          <a href="#pricing">Pricing</a>
          <a href="#about">About</a>
        </div>

        <div className="nav-actions">
          <button
            className="theme-toggle"
            onClick={toggleTheme}
            aria-label="Toggle light and dark theme"
            title={
              theme === "dark"
                ? "Switch to light mode"
                : "Switch to dark mode"
            }
          >
            {mounted &&
              (theme === "dark" ? (
                <Sun size={18} />
              ) : (
                <Moon size={18} />
              ))}
          </button>

          <Link href="/login" className="signin-link">
            Sign in
          </Link>

          <Link href="/signup" className="get-started-nav">
            Get Started
          </Link>
        </div>
      </nav>

      {/* Hero */}
      <section className="hero" id="product">
        <div className="hero-content">
          <div className="hero-badge">
            ✦ Your intelligent life operating system
          </div>

          <h1>
            Your life.
            <br />
            <span className="purple-text">Organized</span>
            <br />
            <span className="blue-text">Intelligently.</span>
          </h1>

          <p className="hero-description">
            LifeOS brings your tasks, projects, habits, goals, focus and AI
            assistant together in one intelligent workspace built around your
            life.
          </p>

          <div className="hero-buttons">
            <Link href="/signup" className="primary-btn">
              Get Started for Free →
            </Link>

            <a href="#features" className="secondary-btn">
              See how it works
            </a>
          </div>

          <p className="hero-small-text">
            No credit card required · Free to start
          </p>
        </div>

        {/* Orbit Visual */}
        <div className="hero-visual">
          <div className="orbit orbit-one"></div>
          <div className="orbit orbit-two"></div>
          <div className="orbit orbit-three"></div>

          <div className="core">
            <div className="core-inner">
              <span className="core-star">✦</span>
            </div>

            <span className="core-label">LifeOS</span>
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
            <span>◇</span>
            Projects
          </div>

          <div className="orbit-item ai">
            <span>✦</span>
            AI Assistant
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="stats" id="features">
        <div className="trusted">
          <p>Trusted by productive people</p>

          <h2>Built for your entire life</h2>

          <div className="avatar-row">
            <div className="mini-avatar">V</div>
            <div className="mini-avatar">A</div>
            <div className="mini-avatar">R</div>
            <div className="mini-avatar">S</div>

            <span>
              <strong>10k+</strong> active users
            </span>
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