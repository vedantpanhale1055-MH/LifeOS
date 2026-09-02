import Link from "next/link";

import {
  ArrowRight,
  CalendarDays,
  Check,
  CheckCircle2,
  Circle,
  Clock3,
  Flame,
  FolderKanban,
  MoreHorizontal,
  Plus,
  Sparkles,
  Target,
  Timer,
} from "lucide-react";

import "./dashboard.css";

const tasks = [
  {
    title: "Finish LifeOS dashboard",
    project: "LifeOS",
    time: "Today",
    priority: "High",
    done: false,
  },
  {
    title: "Review project roadmap",
    project: "Planning",
    time: "2:00 PM",
    priority: "Medium",
    done: false,
  },
  {
    title: "30 minute workout",
    project: "Personal",
    time: "6:00 PM",
    priority: "Low",
    done: true,
  },
];

const projects = [
  {
    name: "LifeOS",
    category: "Development",
    progress: 72,
    color: "purple",
  },
  {
    name: "Portfolio",
    category: "Career",
    progress: 48,
    color: "blue",
  },
  {
    name: "AI Learning",
    category: "Learning",
    progress: 35,
    color: "green",
  },
];

const habits = [
  {
    name: "Workout",
    streak: 12,
    done: true,
  },
  {
    name: "Read 20 minutes",
    streak: 6,
    done: true,
  },
  {
    name: "Drink enough water",
    streak: 4,
    done: false,
  },
];

export default function DashboardPage() {
  return (
    <div className="life-dashboard">
      <div className="dashboard-page-title">
        <div>
          <span>OVERVIEW</span>

          <h1>Today</h1>
        </div>

        <p>
          Monday, 2 September 2026
        </p>
      </div>

      {/* STATS */}

      <section className="dashboard-stats">
        <article className="stat-card stat-purple">
          <div className="stat-icon">
            <CheckCircle2 size={20} />
          </div>

          <div className="stat-label">
            Tasks today
          </div>

          <strong>8</strong>

          <p>
            <span>3 completed</span>
            out of 8 tasks
          </p>
        </article>

        <article className="stat-card stat-blue">
          <div className="stat-icon">
            <FolderKanban size={20} />
          </div>

          <div className="stat-label">
            Active projects
          </div>

          <strong>4</strong>

          <p>
            <span>2 on track</span>
            this week
          </p>
        </article>

        <article className="stat-card stat-orange">
          <div className="stat-icon">
            <Flame size={20} />
          </div>

          <div className="stat-label">
            Best streak
          </div>

          <strong>12 days</strong>

          <p>
            Workout habit
          </p>
        </article>

        <article className="stat-card stat-green">
          <div className="stat-icon">
            <Timer size={20} />
          </div>

          <div className="stat-label">
            Focus today
          </div>

          <strong>1h 40m</strong>

          <p>
            <span>3 sessions</span>
            completed
          </p>
        </article>
      </section>

      {/* MAIN */}

      <section className="dashboard-layout">
        <div className="dashboard-main-column">

          {/* TASKS */}

          <article className="dashboard-section">
            <header className="section-header">
              <div>
                <h2>Today&apos;s tasks</h2>

                <p>
                  What needs your attention
                  today.
                </p>
              </div>

              <Link href="/tasks">
                View all
                <ArrowRight size={14} />
              </Link>
            </header>

            <div className="dashboard-task-list">
              {tasks.map((task) => (
                <div
                  className="dashboard-task"
                  key={task.title}
                >
                  <button
                    type="button"
                    className={
                      task.done
                        ? "task-circle done"
                        : "task-circle"
                    }
                  >
                    {task.done ? (
                      <Check size={13} />
                    ) : (
                      <Circle size={18} />
                    )}
                  </button>

                  <div className="dashboard-task-info">
                    <strong
                      className={
                        task.done
                          ? "task-done-text"
                          : ""
                      }
                    >
                      {task.title}
                    </strong>

                    <div>
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

                  <button
                    type="button"
                    className="task-more"
                  >
                    <MoreHorizontal
                      size={17}
                    />
                  </button>
                </div>
              ))}
            </div>

            <button
              type="button"
              className="dashboard-add-row"
            >
              <Plus size={14} />
              Add task
            </button>
          </article>

          {/* PROJECTS */}

          <article className="dashboard-section">
            <header className="section-header">
              <div>
                <h2>Active projects</h2>

                <p>
                  Progress across your current
                  work.
                </p>
              </div>

              <Link href="/projects">
                View all
                <ArrowRight size={14} />
              </Link>
            </header>

            <div className="project-table">
              {projects.map((project) => (
                <div
                  className="project-table-row"
                  key={project.name}
                >
                  <div
                    className={`project-table-icon ${project.color}`}
                  >
                    <FolderKanban
                      size={16}
                    />
                  </div>

                  <div className="project-table-name">
                    <strong>
                      {project.name}
                    </strong>

                    <span>
                      {project.category}
                    </span>
                  </div>

                  <div className="project-table-progress">
                    <div>
                      <span>Progress</span>

                      <strong>
                        {project.progress}%
                      </strong>
                    </div>

                    <div className="project-progress-track">
                      <span
                        className={
                          project.color
                        }
                        style={{
                          width: `${project.progress}%`,
                        }}
                      />
                    </div>
                  </div>

                  <ArrowRight
                    size={14}
                    className="project-arrow"
                  />
                </div>
              ))}
            </div>
          </article>
        </div>

        {/* RIGHT COLUMN */}

        <aside className="dashboard-side-column">

          {/* AI */}

          <article className="dashboard-ai-card">
            <div className="dashboard-ai-icon">
              <Sparkles size={20} />
            </div>

            <span>LIFEOS AI</span>

            <h2>
              What should you focus on next?
            </h2>

            <p>
              Get a simple priority based on
              your tasks, projects and goals.
            </p>

            <button type="button">
              Ask LifeOS AI

              <ArrowRight size={14} />
            </button>
          </article>

          {/* HABITS */}

          <article className="dashboard-section habits-section">
            <header className="section-header">
              <div>
                <h2>Habits</h2>

                <p>
                  Build consistency every day.
                </p>
              </div>

              <Flame
                size={17}
                className="habit-header-icon"
              />
            </header>

            <div className="habit-dashboard-list">
              {habits.map((habit) => (
                <div
                  className="habit-dashboard-row"
                  key={habit.name}
                >
                  <div
                    className={
                      habit.done
                        ? "habit-state done"
                        : "habit-state"
                    }
                  >
                    {habit.done ? (
                      <Check size={12} />
                    ) : (
                      <Circle size={16} />
                    )}
                  </div>

                  <span>
                    {habit.name}
                  </span>

                  <strong>
                    <Flame size={12} />
                    {habit.streak}
                  </strong>
                </div>
              ))}
            </div>
          </article>

          {/* FOCUS */}

          <article className="dashboard-section focus-section">
            <header className="section-header">
              <div>
                <h2>Focus session</h2>

                <p>
                  Ready for deep work?
                </p>
              </div>
            </header>

            <div className="focus-content">
              <div className="focus-symbol">
                <Target size={20} />
              </div>

              <div>
                <strong>25 minutes</strong>

                <span>
                  Default focus timer
                </span>
              </div>

              <button>
                Start
              </button>
            </div>
          </article>

          {/* UPCOMING */}

          <article className="dashboard-section">
            <header className="section-header">
              <div>
                <h2>Upcoming</h2>
                <p>Next on your schedule.</p>
              </div>

              <CalendarDays size={17} />
            </header>

            <div className="upcoming-item">
              <div className="upcoming-date">
                <span>SEP</span>
                <strong>03</strong>
              </div>

              <div>
                <strong>
                  Project presentation
                </strong>

                <span>
                  11:00 AM
                </span>
              </div>
            </div>
          </article>
        </aside>
      </section>
    </div>
  );
}