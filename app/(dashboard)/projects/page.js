"use client";

import { useMemo, useState } from "react";
import {
  Plus,
  Search,
  FolderKanban,
  MoreHorizontal,
  CalendarDays,
  CheckCircle2,
  Clock3,
  LayoutGrid,
  List,
  ArrowUpRight,
} from "lucide-react";

import "./projects.css";

const initialProjects = [
  {
    id: 1,
    name: "LifeOS",
    description:
      "Build an intelligent personal operating system for tasks, projects, habits and AI.",
    category: "Development",
    progress: 72,
    tasksDone: 18,
    totalTasks: 25,
    due: "Sep 20",
    status: "Active",
    accent: "purple",
  },
  {
    id: 2,
    name: "Portfolio",
    description:
      "Improve portfolio projects, case studies and overall presentation.",
    category: "Career",
    progress: 48,
    tasksDone: 12,
    totalTasks: 25,
    due: "Sep 15",
    status: "Active",
    accent: "blue",
  },
  {
    id: 3,
    name: "AI Learning",
    description:
      "Learn practical AI concepts and build small projects using LLMs and RAG.",
    category: "Learning",
    progress: 35,
    tasksDone: 7,
    totalTasks: 20,
    due: "Oct 10",
    status: "Active",
    accent: "green",
  },
  {
    id: 4,
    name: "College Semester",
    description:
      "Track assignments, study goals, submissions and semester preparation.",
    category: "College",
    progress: 61,
    tasksDone: 22,
    totalTasks: 36,
    due: "Nov 30",
    status: "Active",
    accent: "orange",
  },
  {
    id: 5,
    name: "Fitness Routine",
    description:
      "Maintain a consistent workout schedule and improve daily activity.",
    category: "Personal",
    progress: 80,
    tasksDone: 16,
    totalTasks: 20,
    due: "Ongoing",
    status: "Active",
    accent: "pink",
  },
];

export default function ProjectsPage() {
  const [projects, setProjects] =
    useState(initialProjects);

  const [search, setSearch] = useState("");
  const [view, setView] = useState("grid");
  const [showForm, setShowForm] =
    useState(false);

  const [projectName, setProjectName] =
    useState("");

  const filteredProjects = useMemo(() => {
    return projects.filter((project) => {
      const query = search.toLowerCase();

      return (
        project.name
          .toLowerCase()
          .includes(query) ||
        project.category
          .toLowerCase()
          .includes(query)
      );
    });
  }, [projects, search]);

  const averageProgress = projects.length
    ? Math.round(
        projects.reduce(
          (total, project) =>
            total + project.progress,
          0
        ) / projects.length
      )
    : 0;

  const totalTasks = projects.reduce(
    (total, project) =>
      total + project.totalTasks,
    0
  );

  const completedTasks = projects.reduce(
    (total, project) =>
      total + project.tasksDone,
    0
  );

  function addProject(event) {
    event.preventDefault();

    const name = projectName.trim();

    if (!name) return;

    setProjects((current) => [
      {
        id: Date.now(),
        name,
        description:
          "New LifeOS project. Add tasks and start making progress.",
        category: "Personal",
        progress: 0,
        tasksDone: 0,
        totalTasks: 0,
        due: "No deadline",
        status: "Active",
        accent: "purple",
      },
      ...current,
    ]);

    setProjectName("");
    setShowForm(false);
  }

  return (
    <div className="projects-page">
      <header className="projects-header">
        <div>
          <p className="projects-eyebrow">
            YOUR WORKSPACE
          </p>

          <h1>Projects</h1>

          <p className="projects-subtitle">
            Organize your goals into focused,
            actionable projects.
          </p>
        </div>

        <button
          className="new-project-button"
          onClick={() =>
            setShowForm(!showForm)
          }
        >
          <Plus size={17} />
          New project
        </button>
      </header>

      <section className="project-stats">
        <div className="project-stat-card">
          <div className="project-stat-icon purple">
            <FolderKanban size={18} />
          </div>

          <div>
            <span>Active projects</span>
            <strong>{projects.length}</strong>
          </div>
        </div>

        <div className="project-stat-card">
          <div className="project-stat-icon blue">
            <CheckCircle2 size={18} />
          </div>

          <div>
            <span>Tasks completed</span>
            <strong>
              {completedTasks}/{totalTasks}
            </strong>
          </div>
        </div>

        <div className="project-stat-card">
          <div className="project-stat-icon green">
            <ArrowUpRight size={18} />
          </div>

          <div>
            <span>Average progress</span>
            <strong>
              {averageProgress}%
            </strong>
          </div>
        </div>
      </section>

      {showForm && (
        <form
          className="project-create-form"
          onSubmit={addProject}
        >
          <div>
            <span>NEW PROJECT</span>

            <h2>Create a project</h2>
          </div>

          <input
            autoFocus
            value={projectName}
            onChange={(event) =>
              setProjectName(
                event.target.value
              )
            }
            placeholder="Project name..."
          />

          <div className="project-form-actions">
            <button
              type="button"
              className="project-cancel"
              onClick={() =>
                setShowForm(false)
              }
            >
              Cancel
            </button>

            <button
              type="submit"
              className="project-create"
            >
              Create project
            </button>
          </div>
        </form>
      )}

      <section className="projects-toolbar">
        <div className="project-search">
          <Search size={15} />

          <input
            placeholder="Search projects..."
            value={search}
            onChange={(event) =>
              setSearch(event.target.value)
            }
          />
        </div>

        <div className="project-view-switch">
          <button
            className={
              view === "grid"
                ? "active"
                : ""
            }
            onClick={() => setView("grid")}
          >
            <LayoutGrid size={15} />
          </button>

          <button
            className={
              view === "list"
                ? "active"
                : ""
            }
            onClick={() => setView("list")}
          >
            <List size={15} />
          </button>
        </div>
      </section>

      {filteredProjects.length === 0 ? (
        <div className="projects-empty">
          <FolderKanban size={30} />

          <h2>No projects found</h2>

          <p>
            Try another search or create a
            project.
          </p>
        </div>
      ) : (
        <section
          className={
            view === "grid"
              ? "projects-grid"
              : "projects-grid list-view"
          }
        >
          {filteredProjects.map(
            (project) => (
              <article
                className="project-card"
                key={project.id}
              >
                <div
                  className={`project-accent ${project.accent}`}
                />

                <div className="project-card-top">
                  <div
                    className={`project-folder ${project.accent}`}
                  >
                    <FolderKanban
                      size={18}
                    />
                  </div>

                  <button className="project-more">
                    <MoreHorizontal
                      size={18}
                    />
                  </button>
                </div>

                <div className="project-content">
                  <div className="project-category-row">
                    <span>
                      {project.category}
                    </span>

                    <span className="project-status">
                      {project.status}
                    </span>
                  </div>

                  <h2>{project.name}</h2>

                  <p className="project-description">
                    {project.description}
                  </p>
                </div>

                <div className="project-progress-section">
                  <div className="project-progress-info">
                    <span>Progress</span>

                    <strong>
                      {project.progress}%
                    </strong>
                  </div>

                  <div className="project-progress-bar">
                    <span
                      className={
                        project.accent
                      }
                      style={{
                        width: `${project.progress}%`,
                      }}
                    />
                  </div>
                </div>

                <div className="project-card-footer">
                  <div>
                    <CheckCircle2
                      size={13}
                    />

                    <span>
                      {project.tasksDone}/
                      {project.totalTasks}{" "}
                      tasks
                    </span>
                  </div>

                  <div>
                    <CalendarDays
                      size={13}
                    />

                    <span>{project.due}</span>
                  </div>
                </div>
              </article>
            )
          )}
        </section>
      )}

      <section className="projects-bottom">
        <div className="project-focus-card">
          <div className="project-focus-icon">
            <Clock3 size={18} />
          </div>

          <div>
            <span>PROJECT INSIGHT</span>

            <h2>
              LifeOS is your most active
              project.
            </h2>

            <p>
              You&apos;ve completed 18 of 25
              tasks. Keep the momentum going.
            </p>
          </div>

          <button>
            Open project
            <ArrowUpRight size={14} />
          </button>
        </div>
      </section>
    </div>
  );
}