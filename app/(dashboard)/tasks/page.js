"use client";

import { useMemo, useState } from "react";
import {
  CalendarDays,
  Check,
  CheckCircle2,
  ChevronDown,
  Circle,
  Clock3,
  Filter,
  MoreHorizontal,
  Plus,
  Search,
  SlidersHorizontal,
  Tag,
} from "lucide-react";

import "./tasks.css";

const starterTasks = [
  {
    id: 1,
    title: "Finish LifeOS dashboard polish",
    project: "LifeOS",
    due: "Today",
    time: "8:00 PM",
    priority: "High",
    status: "todo",
  },
  {
    id: 2,
    title: "Review Supabase authentication flow",
    project: "LifeOS",
    due: "Today",
    time: "9:00 PM",
    priority: "Medium",
    status: "todo",
  },
  {
    id: 3,
    title: "Prepare project presentation",
    project: "College",
    due: "Tomorrow",
    time: "11:00 AM",
    priority: "High",
    status: "todo",
  },
  {
    id: 4,
    title: "Complete 45 minute workout",
    project: "Personal",
    due: "Today",
    time: "6:00 PM",
    priority: "Low",
    status: "done",
  },
  {
    id: 5,
    title: "Read AI notes for 20 minutes",
    project: "Learning",
    due: "Tomorrow",
    time: "7:30 PM",
    priority: "Low",
    status: "todo",
  },
  {
    id: 6,
    title: "Update portfolio project section",
    project: "Portfolio",
    due: "Sep 4",
    time: "5:00 PM",
    priority: "Medium",
    status: "todo",
  },
];

const filters = [
  "All",
  "Today",
  "Upcoming",
  "Completed",
];

export default function TasksPage() {
  const [tasks, setTasks] = useState(starterTasks);
  const [activeFilter, setActiveFilter] = useState("All");
  const [search, setSearch] = useState("");
  const [newTask, setNewTask] = useState("");

  const filteredTasks = useMemo(() => {
    return tasks.filter((task) => {
      const matchesSearch =
        task.title
          .toLowerCase()
          .includes(search.toLowerCase()) ||
        task.project
          .toLowerCase()
          .includes(search.toLowerCase());

      if (!matchesSearch) {
        return false;
      }

      if (activeFilter === "Completed") {
        return task.status === "done";
      }

      if (activeFilter === "Today") {
        return (
          task.due === "Today" &&
          task.status !== "done"
        );
      }

      if (activeFilter === "Upcoming") {
        return (
          task.due !== "Today" &&
          task.status !== "done"
        );
      }

      return true;
    });
  }, [tasks, activeFilter, search]);

  const completedCount = tasks.filter(
    (task) => task.status === "done"
  ).length;

  const todayCount = tasks.filter(
    (task) =>
      task.due === "Today" &&
      task.status !== "done"
  ).length;

  const highPriorityCount = tasks.filter(
    (task) =>
      task.priority === "High" &&
      task.status !== "done"
  ).length;

  function toggleTask(id) {
    setTasks((currentTasks) =>
      currentTasks.map((task) =>
        task.id === id
          ? {
              ...task,
              status:
                task.status === "done"
                  ? "todo"
                  : "done",
            }
          : task
      )
    );
  }

  function addTask(event) {
    event.preventDefault();

    const cleanTask = newTask.trim();

    if (!cleanTask) {
      return;
    }

    setTasks((currentTasks) => [
      {
        id: Date.now(),
        title: cleanTask,
        project: "Inbox",
        due: "Today",
        time: "No time",
        priority: "Medium",
        status: "todo",
      },
      ...currentTasks,
    ]);

    setNewTask("");
  }

  return (
    <div className="tasks-page">
      <section className="tasks-heading">
        <div>
          <p className="tasks-eyebrow">
            TASK MANAGEMENT
          </p>

          <h1>Tasks</h1>

          <p className="tasks-heading-text">
            Capture, organize and complete what
            matters.
          </p>
        </div>

        <button className="tasks-new-button">
          <Plus size={17} />
          New task
        </button>
      </section>

      <section className="tasks-summary-grid">
        <div className="tasks-summary-card">
          <div className="tasks-summary-icon purple">
            <Circle size={18} />
          </div>

          <div>
            <span>Open tasks</span>
            <strong>
              {
                tasks.filter(
                  (task) =>
                    task.status !== "done"
                ).length
              }
            </strong>
          </div>
        </div>

        <div className="tasks-summary-card">
          <div className="tasks-summary-icon blue">
            <CalendarDays size={18} />
          </div>

          <div>
            <span>Due today</span>
            <strong>{todayCount}</strong>
          </div>
        </div>

        <div className="tasks-summary-card">
          <div className="tasks-summary-icon red">
            <Tag size={18} />
          </div>

          <div>
            <span>High priority</span>
            <strong>{highPriorityCount}</strong>
          </div>
        </div>

        <div className="tasks-summary-card">
          <div className="tasks-summary-icon green">
            <CheckCircle2 size={18} />
          </div>

          <div>
            <span>Completed</span>
            <strong>{completedCount}</strong>
          </div>
        </div>
      </section>

      <section className="tasks-toolbar">
        <div className="tasks-filters">
          {filters.map((filter) => (
            <button
              key={filter}
              className={
                activeFilter === filter
                  ? "tasks-filter active"
                  : "tasks-filter"
              }
              onClick={() =>
                setActiveFilter(filter)
              }
            >
              {filter}
            </button>
          ))}
        </div>

        <div className="tasks-toolbar-right">
          <div className="tasks-search">
            <Search size={15} />

            <input
              type="text"
              placeholder="Search tasks..."
              value={search}
              onChange={(event) =>
                setSearch(event.target.value)
              }
            />
          </div>

          <button className="tasks-icon-button">
            <Filter size={16} />
          </button>

          <button className="tasks-icon-button">
            <SlidersHorizontal size={16} />
          </button>
        </div>
      </section>

      <section className="tasks-content-grid">
        <div className="tasks-main-card">
          <form
            className="quick-add-task"
            onSubmit={addTask}
          >
            <div className="quick-add-icon">
              <Plus size={17} />
            </div>

            <input
              value={newTask}
              onChange={(event) =>
                setNewTask(event.target.value)
              }
              placeholder="Add a task and press Enter..."
            />

            <button type="submit">
              Add task
            </button>
          </form>

          <div className="tasks-list-header">
            <span>Task</span>
            <span>Priority</span>
            <span></span>
          </div>

          <div className="full-task-list">
            {filteredTasks.length === 0 ? (
              <div className="tasks-empty-state">
                <CheckCircle2 size={28} />

                <strong>No tasks here</strong>

                <p>
                  Try another filter or add a
                  new task.
                </p>
              </div>
            ) : (
              filteredTasks.map((task) => (
                <div
                  className="full-task-row"
                  key={task.id}
                >
                  <button
                    type="button"
                    className="full-task-check"
                    onClick={() =>
                      toggleTask(task.id)
                    }
                  >
                    {task.status === "done" ? (
                      <CheckCircle2
                        size={20}
                        className="done"
                      />
                    ) : (
                      <Circle size={20} />
                    )}
                  </button>

                  <div className="full-task-main">
                    <p
                      className={
                        task.status === "done"
                          ? "full-task-title completed"
                          : "full-task-title"
                      }
                    >
                      {task.title}
                    </p>

                    <div className="full-task-meta">
                      <span className="task-project-chip">
                        {task.project}
                      </span>

                      <span>
                        <CalendarDays size={12} />
                        {task.due}
                      </span>

                      <span>
                        <Clock3 size={12} />
                        {task.time}
                      </span>
                    </div>
                  </div>

                  <span
                    className={`full-priority ${task.priority.toLowerCase()}`}
                  >
                    {task.priority}
                  </span>

                  <button
                    type="button"
                    className="full-task-more"
                  >
                    <MoreHorizontal size={18} />
                  </button>
                </div>
              ))
            )}
          </div>
        </div>

        <aside className="tasks-side-column">
          <div className="tasks-side-card">
            <div className="tasks-side-card-header">
              <div>
                <span>PROGRESS</span>
                <h2>Today</h2>
              </div>

              <strong>
                {completedCount}/{tasks.length}
              </strong>
            </div>

            <div className="tasks-progress-track">
              <span
                style={{
                  width: `${
                    tasks.length
                      ? Math.round(
                          (completedCount /
                            tasks.length) *
                            100
                        )
                      : 0
                  }%`,
                }}
              ></span>
            </div>

            <p>
              Keep going. Every completed task
              moves your day forward.
            </p>
          </div>

          <div className="tasks-side-card">
            <div className="tasks-side-title">
              <h2>Quick filters</h2>

              <ChevronDown size={16} />
            </div>

            <button
              className="quick-filter-row"
              onClick={() =>
                setActiveFilter("Today")
              }
            >
              <span className="quick-filter-dot purple"></span>
              Today
              <strong>{todayCount}</strong>
            </button>

            <button
              className="quick-filter-row"
              onClick={() =>
                setActiveFilter("Upcoming")
              }
            >
              <span className="quick-filter-dot blue"></span>
              Upcoming
              <strong>
                {
                  tasks.filter(
                    (task) =>
                      task.due !== "Today" &&
                      task.status !== "done"
                  ).length
                }
              </strong>
            </button>

            <button
              className="quick-filter-row"
              onClick={() =>
                setActiveFilter("Completed")
              }
            >
              <span className="quick-filter-dot green"></span>
              Completed
              <strong>{completedCount}</strong>
            </button>
          </div>

          <div className="tasks-tip-card">
            <div className="tasks-tip-icon">
              <Check size={17} />
            </div>

            <div>
              <span>LIFEOS TIP</span>

              <strong>
                Keep today realistic.
              </strong>

              <p>
                A shorter focused list is more
                useful than an overloaded one.
              </p>
            </div>
          </div>
        </aside>
      </section>
    </div>
  );
}