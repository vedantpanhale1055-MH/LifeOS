"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import {
  ArrowLeft,
  Eye,
  EyeOff,
  LoaderCircle,
  Lock,
  Mail,
  Moon,
  Sun,
} from "lucide-react";

import { supabase } from "../../../lib/supabase/client";
import "./login.css";

export default function LoginPage() {
  const router = useRouter();

  const [theme, setTheme] = useState("dark");
  const [mounted, setMounted] =
    useState(false);

  const [
    checkingSession,
    setCheckingSession,
  ] = useState(true);

  const [email, setEmail] =
    useState("");

  const [password, setPassword] =
    useState("");

  const [
    showPassword,
    setShowPassword,
  ] = useState(false);

  const [loading, setLoading] =
    useState(false);

  const [error, setError] =
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

  useEffect(() => {
    async function checkSession() {
      const {
        data: { session },
      } = await supabase.auth.getSession();

      if (session) {
        router.replace("/dashboard");
        return;
      }

      setCheckingSession(false);
    }

    checkSession();

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange(
      (event, session) => {
        if (
          event === "SIGNED_IN" &&
          session
        ) {
          router.replace("/dashboard");
        }
      }
    );

    return () => {
      subscription.unsubscribe();
    };
  }, [router]);

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
    setLoading(true);

    try {
      const {
        data,
        error: loginError,
      } =
        await supabase.auth.signInWithPassword(
          {
            email,
            password,
          }
        );

      if (loginError) {
        setError(loginError.message);
        return;
      }

      if (data.user) {
        router.replace("/dashboard");
        router.refresh();
      }
    } catch (err) {
      console.error(err);

      setError(
        "Something went wrong. Please try again."
      );
    } finally {
      setLoading(false);
    }
  }

  if (checkingSession) {
    return (
      <main
        className="login-page"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <p
          style={{
            color: "var(--text-secondary)",
            fontSize: "12px",
          }}
        >
          Checking your LifeOS session...
        </p>
      </main>
    );
  }

  return (
    <main className="login-page">
      <div className="login-glow login-glow-one"></div>
      <div className="login-glow login-glow-two"></div>

      <header className="login-header">
        <Link
          href="/"
          className="login-logo"
        >
          <span className="login-logo-icon">
            ✦
          </span>

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

          <Link
            href="/"
            className="back-home"
          >
            <ArrowLeft size={16} />
            Back to home
          </Link>
        </div>
      </header>

      <section className="login-container">
        <div className="login-intro">
          <div className="login-badge">
            ✦ YOUR PERSONAL OPERATING SYSTEM
          </div>

          <h1>
            Welcome back to
            <span> LifeOS.</span>
          </h1>

          <p>
            Pick up where you left off. Your
            tasks, projects, goals and daily
            focus are waiting for you.
          </p>

          <div className="login-preview">
            <div className="preview-top">
              <div className="preview-icon">
                ✦
              </div>

              <div>
                <strong>
                  Your day, in one place.
                </strong>

                <span>
                  Stay organized without the
                  noise.
                </span>
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
              Enter your details to continue
              to your workspace.
            </p>
          </div>

          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="email">
                Email address
              </label>

              <div className="input-wrapper">
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

            <div className="form-group">
              <div className="password-label">
                <label htmlFor="password">
                  Password
                </label>

                <a href="#">
                  Forgot password?
                </a>
              </div>

              <div className="input-wrapper">
                <Lock size={18} />

                <input
                  id="password"
                  type={
                    showPassword
                      ? "text"
                      : "password"
                  }
                  placeholder="Enter your password"
                  autoComplete="current-password"
                  value={password}
                  onChange={(event) =>
                    setPassword(
                      event.target.value
                    )
                  }
                  required
                />

                <button
                  type="button"
                  className="password-toggle"
                  onClick={() =>
                    setShowPassword(
                      !showPassword
                    )
                  }
                  aria-label="Toggle password visibility"
                >
                  {showPassword ? (
                    <EyeOff size={18} />
                  ) : (
                    <Eye size={18} />
                  )}
                </button>
              </div>
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

            <button
              type="submit"
              className="login-submit"
              disabled={loading}
            >
              {loading ? (
                <>
                  <LoaderCircle
                    size={17}
                  />
                  Signing in...
                </>
              ) : (
                <>
                  Sign in
                  <span>→</span>
                </>
              )}
            </button>
          </form>

          <p className="signup-text">
            Don&apos;t have an account?{" "}
            <Link href="/signup">
              Create account
            </Link>
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