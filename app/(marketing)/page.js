"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";
import "./landing.css";

export default function HomePage() {
  const [theme, setTheme] = useState("dark");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("lifeos-theme");

    if (savedTheme) {
      setTheme(savedTheme);
      document.documentElement.setAttribute("data-theme", savedTheme);
    } else {
      document.documentElement.setAttribute("data-theme", "dark");
    }

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
            aria-label="Toggle theme"
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
            <Link href="/signup" className="primary-button">
              Get Started for Free
              <span>→</span>
            </Link>

            <a href="#features" className="secondary-button">
              See how it works
            </a>
          </div>

          <p className="hero-small-text">
            No credit card required · Free to start
          </p>
        </div>

        <div className="hero-visual">
          <div className="orbit">
            <div className="orbit-ring ring-one"></div>
            <div className="orbit-ring ring-two"></div>
            <div className="orbit-ring ring-three"></div>

            <div className="core">
              <div className="core-inner">✦</div>
              <span>LifeOS</span>
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

            <div className="orbit-item assistant">
              <span>✦</span>
              AI Assistant
            </div>
          </div>
        </div>
      </section>

      <section className="stats-section" id="features">
        <div className="stats-intro">
          <p className="stats-label">TRUSTED BY PRODUCTIVE PEOPLE</p>
          <h2>Built for your entire life</h2>

          <div className="users-row">
            <div className="avatars">
              <span>V</span>
              <span>A</span>
              <span>R</span>
              <span>S</span>
            </div>

            <p>
              <strong>10k+</strong> active users
            </p>
          </div>
        </div>

        <div className="stat-card">
          <h3>98%</h3>
          <p>Satisfaction</p>
        </div>

        <div className="stat-card">
          <h3>4.9/5</h3>
          <p>Rating</p>
        </div>

        <div className="stat-card">
          <h3>250k+</h3>
          <p>Tasks Completed</p>
        </div>
      </section>
    </main>
  );
}