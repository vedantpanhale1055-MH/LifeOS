"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import {
  ArrowLeft,
  Eye,
  EyeOff,
  Lock,
  Mail,
  Moon,
  Sun,
} from "lucide-react";
import "./login.css";

export default function LoginPage() {
  const [theme, setTheme] = useState("dark");
  const [mounted, setMounted] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

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

  function handleSubmit(event) {
    event.preventDefault();

    // Supabase authentication will be connected later.
    console.log("Login submitted");
  }

  return (
    <main className="login-page">
      <div className="login-glow login-glow-one"></div>
      <div className="login-glow login-glow-two"></div>

      <header className="login-header">
        <Link href="/" className="login-logo">
          <span className="login-logo-icon">✦</span>
          <span>LifeOS</span>
        </Link>

        <div className="login-header-actions">
          <button
            type="button"
            className="login-theme-toggle"
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

          <Link href="/" className="back-home">
            <ArrowLeft size={16} />
            Back to home
          </Link>
        </div>
      </header>

      <section className="login-container">
        <div className="login-intro">
          <div className="login-badge">✦ YOUR PERSONAL OPERATING SYSTEM</div>

          <h1>
            Welcome back to
            <span> LifeOS.</span>
          </h1>

          <p>
            Pick up where you left off. Your tasks, projects, goals and daily
            focus are waiting for you.
          </p>

          <div className="login-preview">
            <div className="preview-top">
              <div className="preview-icon">✦</div>

              <div>
                <strong>Your day, in one place.</strong>
                <span>Stay organized without the noise.</span>
              </div>
            </div>

            <div className="preview-items">
              <div>
                <span className="preview-dot purple"></span>
                Tasks
              </div>

              <div>
                <span className="preview-dot blue"></span>
                Projects
              </div>

              <div>
                <span className="preview-dot green"></span>
                Habits
              </div>
            </div>
          </div>
        </div>

        <div className="login-card">
          <div className="login-card-heading">
            <div className="mobile-login-logo">
              <span>✦</span>
            </div>

            <h2>Sign in</h2>

            <p>
              Enter your details to continue to your workspace.
            </p>
          </div>

          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="email">Email address</label>

              <div className="input-wrapper">
                <Mail size={18} />

                <input
                  id="email"
                  type="email"
                  placeholder="you@example.com"
                  autoComplete="email"
                  required
                />
              </div>
            </div>

            <div className="form-group">
              <div className="password-label">
                <label htmlFor="password">Password</label>

                <Link href="/forgot-password">
                  Forgot password?
                </Link>
              </div>

              <div className="input-wrapper">
                <Lock size={18} />

                <input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password"
                  autoComplete="current-password"
                  required
                />

                <button
                  type="button"
                  className="password-toggle"
                  onClick={() => setShowPassword(!showPassword)}
                  aria-label={
                    showPassword
                      ? "Hide password"
                      : "Show password"
                  }
                >
                  {showPassword ? (
                    <EyeOff size={18} />
                  ) : (
                    <Eye size={18} />
                  )}
                </button>
              </div>
            </div>

            <div className="remember-row">
              <label>
                <input type="checkbox" />
                <span>Remember me</span>
              </label>
            </div>

            <button type="submit" className="login-submit">
              Sign in
              <span>→</span>
            </button>
          </form>

          <div className="login-divider">
            <span>or</span>
          </div>

          <button type="button" className="google-button">
            <span className="google-icon">G</span>
            Continue with Google
          </button>

          <p className="signup-text">
            Don&apos;t have an account?{" "}
            <Link href="/signup">Create account</Link>
          </p>
        </div>
      </section>

      <footer className="login-footer">
        <span>© 2026 LifeOS</span>

        <div>
          <a href="#">Privacy</a>
          <a href="#">Terms</a>
        </div>
      </footer>
    </main>
  );
}