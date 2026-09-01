"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import {
  ArrowLeft,
  Check,
  Eye,
  EyeOff,
  Lock,
  Mail,
  Moon,
  Sun,
  User,
} from "lucide-react";
import "./signup.css";

export default function SignupPage() {
  const [theme, setTheme] = useState("dark");
  const [mounted, setMounted] = useState(false);

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

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

    document.documentElement.setAttribute(
      "data-theme",
      newTheme
    );
  }

  function handleSubmit(event) {
    event.preventDefault();

    // Supabase signup will be connected later.
    console.log("Signup submitted");
  }

  return (
    <main className="signup-page">
      <div className="signup-glow signup-glow-one"></div>
      <div className="signup-glow signup-glow-two"></div>

      {/* Header */}

      <header className="signup-header">
        <Link href="/" className="signup-logo">
          <span className="signup-logo-icon">✦</span>
          <span>LifeOS</span>
        </Link>

        <div className="signup-header-actions">
          <button
            type="button"
            className="signup-theme-toggle"
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

          <Link href="/" className="signup-back-home">
            <ArrowLeft size={16} />
            Back to home
          </Link>
        </div>
      </header>

      {/* Main Content */}

      <section className="signup-container">
        {/* Left Side */}

        <div className="signup-intro">
          <div className="signup-badge">
            ✦ START BUILDING YOUR LIFEOS
          </div>

          <h1>
            One place for
            <span> your entire life.</span>
          </h1>

          <p>
            Create your workspace and bring your tasks,
            projects, habits, goals and focus together in
            one intelligent system.
          </p>

          <div className="signup-benefits">
            <div className="signup-benefit">
              <span>
                <Check size={15} />
              </span>

              <div>
                <strong>Plan your day</strong>
                <p>
                  Keep tasks, priorities and deadlines
                  organized.
                </p>
              </div>
            </div>

            <div className="signup-benefit">
              <span>
                <Check size={15} />
              </span>

              <div>
                <strong>Build better habits</strong>
                <p>
                  Track consistency and create routines
                  that last.
                </p>
              </div>
            </div>

            <div className="signup-benefit">
              <span>
                <Check size={15} />
              </span>

              <div>
                <strong>Work with AI</strong>
                <p>
                  Get intelligent help across your LifeOS
                  workspace.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Signup Card */}

        <div className="signup-card">
          <div className="signup-card-heading">
            <div className="signup-mobile-logo">
              ✦
            </div>

            <h2>Create your account</h2>

            <p>
              Start building your personal operating
              system.
            </p>
          </div>

          <form onSubmit={handleSubmit}>
            {/* Name */}

            <div className="signup-form-group">
              <label htmlFor="name">
                Full name
              </label>

              <div className="signup-input-wrapper">
                <User size={18} />

                <input
                  id="name"
                  type="text"
                  placeholder="Your name"
                  autoComplete="name"
                  required
                />
              </div>
            </div>

            {/* Email */}

            <div className="signup-form-group">
              <label htmlFor="email">
                Email address
              </label>

              <div className="signup-input-wrapper">
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

            {/* Password */}

            <div className="signup-form-group">
              <label htmlFor="password">
                Password
              </label>

              <div className="signup-input-wrapper">
                <Lock size={18} />

                <input
                  id="password"
                  type={
                    showPassword
                      ? "text"
                      : "password"
                  }
                  placeholder="Create a password"
                  autoComplete="new-password"
                  minLength={8}
                  required
                />

                <button
                  type="button"
                  className="signup-password-toggle"
                  onClick={() =>
                    setShowPassword(!showPassword)
                  }
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

              <p className="password-hint">
                Use at least 8 characters.
              </p>
            </div>

            {/* Confirm Password */}

            <div className="signup-form-group">
              <label htmlFor="confirm-password">
                Confirm password
              </label>

              <div className="signup-input-wrapper">
                <Lock size={18} />

                <input
                  id="confirm-password"
                  type={
                    showConfirmPassword
                      ? "text"
                      : "password"
                  }
                  placeholder="Repeat your password"
                  autoComplete="new-password"
                  minLength={8}
                  required
                />

                <button
                  type="button"
                  className="signup-password-toggle"
                  onClick={() =>
                    setShowConfirmPassword(
                      !showConfirmPassword
                    )
                  }
                  aria-label={
                    showConfirmPassword
                      ? "Hide password"
                      : "Show password"
                  }
                >
                  {showConfirmPassword ? (
                    <EyeOff size={18} />
                  ) : (
                    <Eye size={18} />
                  )}
                </button>
              </div>
            </div>

            {/* Terms */}

            <div className="signup-terms">
              <label>
                <input type="checkbox" required />

                <span>
                  I agree to the{" "}
                  <a href="#">Terms of Service</a>{" "}
                  and{" "}
                  <a href="#">Privacy Policy</a>.
                </span>
              </label>
            </div>

            <button
              type="submit"
              className="signup-submit"
            >
              Create account
              <span>→</span>
            </button>
          </form>

          <div className="signup-divider">
            <span>or</span>
          </div>

          <button
            type="button"
            className="signup-google-button"
          >
            <span className="signup-google-icon">
              G
            </span>

            Continue with Google
          </button>

          <p className="signup-login-text">
            Already have an account?{" "}
            <Link href="/login">
              Sign in
            </Link>
          </p>
        </div>
      </section>

      <footer className="signup-footer">
        <span>© 2026 LifeOS</span>

        <div>
          <a href="#">Privacy</a>
          <a href="#">Terms</a>
        </div>
      </footer>
    </main>
  );
}