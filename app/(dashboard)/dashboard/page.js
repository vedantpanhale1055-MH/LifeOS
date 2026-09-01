"use client";

import { useEffect, useState } from "react";
import {
  ArrowRight,
  Brain,
  CalendarDays,
  Check,
  CheckCircle2,
  Circle,
  Clock3,
  Flame,
  FolderKanban,
  ListTodo,
  Moon,
  MoreHorizontal,
  Plus,
  Sparkles,
  Sun,
  Target,
  Timer,
  TrendingUp,
} from "lucide-react";
import "./dashboard.css";

export default function DashboardPage() {
  const [theme, setTheme] = useState("dark");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const savedTheme =
      localStorage.getItem("lifeos-theme") || "dark";

    setTheme(savedTheme);

    document.documentElement.setAttribute(
      "data-theme",
      savedTheme
    );

    setMounted(true);
  }, []);

  function toggleTheme() {
    const newTheme =
      theme === "dark" ? "light" : "dark";

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

  const tasks = [
    {
      id: 1,
      title: "Finish LifeOS dashboard",
      project: "LifeOS",
      time: "Today",
      priority: "High",
      completed: false,
    },
    {
      id: 2,
      title: "Review project roadmap",
      project: "Planning",
      time: "2:00 PM",
      priority: "Medium",
      completed: false,
    },
    {
      id: 3,
      title: "30 minute workout",
      project: "Personal",
      time: "6:00 PM",
      priority: "Low",
      completed: true,
    },
  ];

  const habits = [
    {
      name: "Workout",
      streak: 12,
      completed: true,
    },
    {
      name: "Read 20 mins",
      streak: 7,
      completed: true,
    },
    {
      name: "Drink water",
      streak: 5,
      completed: false,
    },
  ];

  return (
    <div className="life-dashboard">
      {/* Top heading */}

      <section className="dashboard-heading">
        <div>
          <p className="dashboard-date">
            Monday · Your daily overview
          </p>

          <h1>
            Good evening
            <span className="dashboard-wave">
              {" "}
              👋
            </span>
          </h1>

          <p className="dashboard-subtitle">
            Here&apos;s what&apos;s happening
            across your LifeOS today.
          </p>
        </div>

        <div className="dashboard-heading-actions">
          <button
            className="dashboard-theme-toggle"
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

          <button className="dashboard-primary-button">
            <Plus size={17} />
            New task
          </button>
        </div>
      </section>

      {/* Overview Cards */}

      <section className="overview-grid">
        <div className="overview-card">
          <div className="overview-icon purple">
            <ListTodo size={19} />
          </div>

          <div className="overview-content">
            <span>Tasks today</span>

            <div className="overview-value">
              8
            </div>

            <p>
              <strong>3</strong> completed
            </p>
          </div>
        </div>

        <div className="overview-card">
          <div className="overview-icon blue">
            <FolderKanban size={19} />
          </div>

          <div className="overview-content">
            <span>Active projects</span>

            <div className="overview-value">
              4
            </div>

            <p>
              <strong>2</strong> on track
            </p>
          </div>
        </div>

        <div className="overview-card">
          <div className="overview-icon orange">
            <Flame size={19} />
          </div>

          <div className="overview-content">
            <span>Best streak</span>

            <div className="overview-value">
              12
            </div>

            <p>days · Workout</p>
          </div>
        </div>

        <div className="overview-card">
          <div className="overview-icon green">
            <Timer size={19} />
          </div>

          <div className="overview-content">
            <span>Focus today</span>

            <div className="overview-value">
              1h 40m
            </div>

            <p>
              <strong>3</strong> sessions
            </p>
          </div>
        </div>
      </section>

      {/* Main Grid */}

      <section className="dashboard-main-grid">
        {/* Tasks */}

        <div className="dashboard-card tasks-card">
          <div className="card-header">
            <div>
              <h2>Today&apos;s tasks</h2>
              <p>
                Keep moving through your day.
              </p>
            </div>

            <button className="card-link">
              View all
              <ArrowRight size={14} />
            </button>
          </div>

          <div className="task-list">
            {tasks.map((task) => (
              <div
                className="dashboard-task"
                key={task.id}
              >
                <button className="task-check">
                  {task.completed ? (
                    <CheckCircle2
                      size={19}
                      className="completed"
                    />
                  ) : (
                    <Circle size={19} />
                  )}
                </button>

                <div className="task-information">
                  <p
                    className={
                      task.completed
                        ? "task-title task-completed"
                        : "task-title"
                    }
                  >
                    {task.title}
                  </p>

                  <div className="task-meta">
                    <span>
                      {task.project}
                    </span>

                    <span>
                      <Clock3 size={11} />
                      {task.time}
                    </span>
                  </div>
                </div>

                <span
                  className={`task-priority ${task.priority.toLowerCase()}`}
                >
                  {task.priority}
                </span>

                <button className="task-more">
                  <MoreHorizontal size={17} />
                </button>
              </div>
            ))}
          </div>

          <button className="add-task-row">
            <Plus size={15} />
            Add task
          </button>
        </div>

        {/* AI Assistant */}

        <div className="dashboard-card ai-dashboard-card">
          <div className="ai-card-glow"></div>

          <div className="ai-card-icon">
            <Sparkles size={22} />
          </div>

          <div className="ai-card-content">
            <span className="ai-label">
              LIFEOS AI
            </span>

            <h2>
              What should you focus on next?
            </h2>

            <p>
              Your AI assistant can analyze
              your tasks, projects and goals
              to help prioritize your day.
            </p>

            <button className="ask-ai-button">
              <Brain size={16} />
              Ask LifeOS AI
              <ArrowRight size={14} />
            </button>
          </div>
        </div>

        {/* Projects */}

        <div className="dashboard-card projects-card">
          <div className="card-header">
            <div>
              <h2>Active projects</h2>

              <p>
                Your current progress.
              </p>
            </div>

            <button className="card-link">
              Projects
              <ArrowRight size={14} />
            </button>
          </div>

          <div className="project-list">
            <div className="dashboard-project">
              <div className="project-top">
                <div>
                  <span className="project-dot purple"></span>
                  <strong>LifeOS</strong>
                </div>

                <span>72%</span>
              </div>

              <div className="project-progress">
                <span
                  style={{
                    width: "72%",
                  }}
                ></span>
              </div>

              <p>9 of 12 tasks completed</p>
            </div>

            <div className="dashboard-project">
              <div className="project-top">
                <div>
                  <span className="project-dot blue"></span>
                  <strong>Portfolio</strong>
                </div>

                <span>45%</span>
              </div>

              <div className="project-progress">
                <span
                  style={{
                    width: "45%",
                  }}
                ></span>
              </div>

              <p>5 of 11 tasks completed</p>
            </div>

            <div className="dashboard-project">
              <div className="project-top">
                <div>
                  <span className="project-dot green"></span>
                  <strong>Learning</strong>
                </div>

                <span>30%</span>
              </div>

              <div className="project-progress">
                <span
                  style={{
                    width: "30%",
                  }}
                ></span>
              </div>

              <p>3 of 10 tasks completed</p>
            </div>
          </div>
        </div>

        {/* Habits */}

        <div className="dashboard-card habits-card">
          <div className="card-header">
            <div>
              <h2>Habits</h2>

              <p>
                Build consistency every day.
              </p>
            </div>

            <Flame
              size={18}
              className="header-flame"
            />
          </div>

          <div className="habit-list">
            {habits.map((habit) => (
              <div
                className="habit-row"
                key={habit.name}
              >
                <div className="habit-check">
                  {habit.completed ? (
                    <Check size={14} />
                  ) : (
                    <Circle size={15} />
                  )}
                </div>

                <div className="habit-info">
                  <strong>{habit.name}</strong>

                  <span>
                    <Flame size={11} />
                    {habit.streak} day streak
                  </span>
                </div>

                <span
                  className={
                    habit.completed
                      ? "habit-status done"
                      : "habit-status"
                  }
                >
                  {habit.completed
                    ? "Done"
                    : "Pending"}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Focus */}

        <div className="dashboard-card focus-card">
          <div className="focus-icon">
            <Target size={20} />
          </div>

          <div className="focus-content">
            <span>FOCUS MODE</span>

            <h2>
              Ready for a focused session?
            </h2>

            <p>
              Remove distractions and work
              on what matters most.
            </p>
          </div>

          <button className="start-focus-button">
            <Timer size={16} />
            Start focus
          </button>
        </div>

        {/* Upcoming */}

        <div className="dashboard-card upcoming-card">
          <div className="card-header">
            <div>
              <h2>Upcoming</h2>

              <p>
                What&apos;s ahead today.
              </p>
            </div>

            <CalendarDays size={18} />
          </div>

          <div className="upcoming-item">
            <div className="upcoming-time">
              <strong>2:00</strong>
              <span>PM</span>
            </div>

            <div className="upcoming-line"></div>

            <div>
              <strong>
                Project review
              </strong>

              <p>
                Review LifeOS progress
              </p>
            </div>
          </div>

          <div className="upcoming-item">
            <div className="upcoming-time">
              <strong>6:00</strong>
              <span>PM</span>
            </div>

            <div className="upcoming-line blue"></div>

            <div>
              <strong>Workout</strong>

              <p>
                Evening training session
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Weekly Progress */}

      <section className="weekly-banner">
        <div className="weekly-icon">
          <TrendingUp size={20} />
        </div>

        <div>
          <span>WEEKLY PROGRESS</span>

          <h3>
            You&apos;re making progress.
          </h3>

          <p>
            18 tasks completed and 6 focus
            sessions this week.
          </p>
        </div>

        <button>
          View insights
          <ArrowRight size={14} />
        </button>
      </section>
    </div>
  );
}