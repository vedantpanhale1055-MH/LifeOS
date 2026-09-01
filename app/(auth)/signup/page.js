"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import {
  ArrowLeft,
  Check,
  Eye,
  EyeOff,
  LoaderCircle,
  Lock,
  Mail,
  Moon,
  Sun,
  User,
} from "lucide-react";

import { supabase } from "../../../lib/supabase/client";
import "./signup.css";

export default function SignupPage() {
  const router = useRouter();

  const [theme, setTheme] = useState("dark");
  const [mounted, setMounted] = useState(false);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] =
    useState("");

  const [showPassword, setShowPassword] =
    useState(false);

  const [
    showConfirmPassword,
    setShowConfirmPassword,
  ] = useState(false);

  const [loading, setLoading] =
    useState(false);

  const [error, setError] =
    useState("");

  const [success, setSuccess] =
    useState("");

  useEffect(() => {
    const savedTheme =
      localStorage.getItem("lifeos-theme") ||
      "dark";

    setTheme(savedTheme);

    document.documentElement.setAttribute(
      "data-theme",
      savedTheme
    );

    setMounted(true);
  }, []);

  function toggleTheme() {
    const newTheme =
      theme === "dark"
        ? "light"
        : "dark";

    setTheme(newTheme);

    localStorage.setItem(
      "lifeos-theme",
      newTheme
    );

    document.documentElement.setAttribute(
      "data-theme",
      newTheme
    );
  }

  async function handleSubmit(event) {
    event.preventDefault();

    setError("");
    setSuccess("");

    if (password.length < 8) {
      setError(
        "Password must contain at least 8 characters."
      );
      return;
    }

    if (password !== confirmPassword) {
      setError(
        "Passwords do not match."
      );
      return;
    }

    setLoading(true);

    try {
      const { data, error: signupError } =
        await supabase.auth.signUp({
          email,
          password,

          options: {
            data: {
              full_name: name,
            },
          },
        });

      if (signupError) {
        setError(signupError.message);
        return;
      }

      if (data.session) {
        router.push("/dashboard");
        router.refresh();
        return;
      }

      setSuccess(
        "Account created! Check your email to confirm your account."
      );
    } catch (err) {
      console.error(err);

      setError(
        "Something went wrong. Please try again."
      );
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="signup-page">
      <div className="signup-glow signup-glow-one" />
      <div className="signup-glow signup-glow-two" />

      <header className="signup-header">
        <Link
          href="/"
          className="signup-logo"
        >
          <span className="signup-logo-icon">
            ✦
          </span>

          <span>LifeOS</span>
        </Link>

        <div className="signup-header-actions">
          <button
            type="button"
            className="signup-theme-toggle"
            onClick={toggleTheme}
            aria-label="Toggle theme"
          >
            {mounted &&
              (theme === "dark" ? (
                <Sun size={18} />
              ) : (
                <Moon size={18} />
              ))}
          </button>

          <Link
            href="/"
            className="signup-back-home"
          >
            <ArrowLeft size={16} />
            Back to home
          </Link>
        </div>
      </header>

      <section className="signup-container">
        <div className="signup-intro">
          <div className="signup-badge">
            ✦ START BUILDING YOUR LIFEOS
          </div>

          <h1>
            One place for
            <span> your entire life.</span>
          </h1>

          <p>
            Create your workspace and bring
            your tasks, projects, habits,
            goals and focus together in one
            intelligent system.
          </p>

          <div className="signup-benefits">
            <div className="signup-benefit">
              <span>
                <Check size={15} />
              </span>

              <div>
                <strong>
                  Plan your day
                </strong>

                <p>
                  Keep tasks, priorities and
                  deadlines organized.
                </p>
              </div>
            </div>

            <div className="signup-benefit">
              <span>
                <Check size={15} />
              </span>

              <div>
                <strong>
                  Build better habits
                </strong>

                <p>
                  Track consistency and create
                  routines that last.
                </p>
              </div>
            </div>

            <div className="signup-benefit">
              <span>
                <Check size={15} />
              </span>

              <div>
                <strong>
                  Work with AI
                </strong>

                <p>
                  Get intelligent help across
                  your LifeOS workspace.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="signup-card">
          <div className="signup-card-heading">
            <div className="signup-mobile-logo">
              ✦
            </div>

            <h2>Create your account</h2>

            <p>
              Start building your personal
              operating system.
            </p>
          </div>

          <form onSubmit={handleSubmit}>
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
                  value={name}
                  onChange={(event) =>
                    setName(
                      event.target.value
                    )
                  }
                  required
                />
              </div>
            </div>

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
                  value={email}
                  onChange={(event) =>
                    setEmail(
                      event.target.value
                    )
                  }
                  required
                />
              </div>
            </div>

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
                  value={password}
                  onChange={(event) =>
                    setPassword(
                      event.target.value
                    )
                  }
                  minLength={8}
                  required
                />

                <button
                  type="button"
                  className="signup-password-toggle"
                  onClick={() =>
                    setShowPassword(
                      !showPassword
                    )
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
                  value={confirmPassword}
                  onChange={(event) =>
                    setConfirmPassword(
                      event.target.value
                    )
                  }
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
                >
                  {showConfirmPassword ? (
                    <EyeOff size={18} />
                  ) : (
                    <Eye size={18} />
                  )}
                </button>
              </div>
            </div>

            <div className="signup-terms">
              <label>
                <input
                  type="checkbox"
                  required
                />

                <span>
                  I agree to the{" "}
                  <a href="#">
                    Terms of Service
                  </a>{" "}
                  and{" "}
                  <a href="#">
                    Privacy Policy
                  </a>
                  .
                </span>
              </label>
            </div>

            {error && (
              <p
                style={{
                  color: "#ff6b6b",
                  fontSize: "12px",
                  marginBottom: "14px",
                }}
              >
                {error}
              </p>
            )}

            {success && (
              <p
                style={{
                  color: "#55d98a",
                  fontSize: "12px",
                  marginBottom: "14px",
                  lineHeight: "1.5",
                }}
              >
                {success}
              </p>
            )}

            <button
              type="submit"
              className="signup-submit"
              disabled={loading}
            >
              {loading ? (
                <>
                  <LoaderCircle
                    size={17}
                    className="signup-spinner"
                  />
                  Creating account...
                </>
              ) : (
                <>
                  Create account
                  <span>→</span>
                </>
              )}
            </button>
          </form>

          <div className="signup-divider">
            <span>or</span>
          </div>

          <button
            type="button"
            className="signup-google-button"
            disabled
            title="Google sign-in will be connected next"
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