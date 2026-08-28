# Contributing to LifeOS

LifeOS is currently a solo portfolio project, but this guide keeps the workflow consistent for future contributors (including future-me).

## Getting Started

1. Fork or clone the repository
2. Install dependencies: `npm install`
3. Copy environment variables: `cp .env.example .env`
4. Run the dev server: `npm run dev`

## Branching

- `main` — always deployable
- `feature/<short-description>` — new features
- `fix/<short-description>` — bug fixes
- `chore/<short-description>` — tooling, config, non-functional changes

## Commit Messages

Follow [Conventional Commits](https://www.conventionalcommits.org/):

```
feat: add habit streak calculation
fix: correct task due-date timezone bug
chore: update dependencies
docs: update README setup steps
refactor: extract AI tool validation into shared util
test: add unit tests for budget calculations
```

## Pull Requests

- Keep PRs scoped to a single feature or fix
- Reference related issues where applicable
- Ensure lint, type-check, and tests pass before requesting review
- Update relevant docs (`README.md`, `/docs`) when behavior changes

## Code Style

- TypeScript strict mode
- Tailwind CSS utility classes; avoid inline styles
- Co-locate feature logic under `/features/<feature-name>/`
- Shared logic goes in `/lib` or `/hooks`

## AI Tool Development

Any new AI tool (`create_task`, `reschedule_tasks`, etc.) must:

1. Define a validated input/output schema
2. Pass through the permission-tier check (Read / Create / Modify / Destructive)
3. Log the action to `ai_actions` on execution
4. Include a corresponding unit test for validation logic

## Testing

```bash
npm run lint
npm run type-check
npm run test
```

E2E tests use Playwright — run with `npm run test:e2e`.

## Reporting Issues

Open a GitHub issue with:
- Expected vs. actual behavior
- Steps to reproduce
- Screenshots if UI-related