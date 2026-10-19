# GitHub Actions Certification — Hands-On Activity

Practical replication of the course *"GitHub Actions Certification – Full Course to PASS the Exam"*.

| Module | Workflow file | What it shows |
|---|---|---|
| 2A | `01-push-pr-triggers.yml` | `push` + `pull_request` on `main` and `dev` |
| 2B | `02-scheduled-cron.yml` | `schedule` with cron `*/5 * * * *` (default branch only) |
| 2C | `03-manual-dispatch.yml` | `workflow_dispatch` with `name`, `greeting`, `data` inputs (UI + `gh workflow run`) |
| 2D | `04-repository-dispatch.yml`, `04b-send-repository-dispatch.yml` | `repository_dispatch` type `custom-webhook` via curl |
| 3 | `05-contexts-conditionals.yml` | context objects, `needs`, `if:` with `contains()`, `success()`, `failure()`, `always()` |
| 4 | `06-vars-secrets-token.yml` | `vars`, `secrets.MY_SECRET` (masked), `secrets.GITHUB_TOKEN` REST + git |
| 5A | `07-multi-os-runners.yml` | Ubuntu, Windows (Choco + PowerShell), macOS (Swift) |
| 5B | `08-self-hosted-runner.yml` | job on `runs-on: self-hosted` |
| 6A | `09-matrix-build.yml` | matrix of OS × Node versions with include/exclude |
| 6B | `10-dependency-caching.yml` | `actions/cache` and `setup-node` cache |
| 6C | `11-service-containers.yml` | PostgreSQL + Redis service containers |
| 7 | `12-custom-js-action.yml` + `greeting-action/` | custom JS action compiled with `@vercel/ncc`, tag `v1.0.0` |

## Custom action (`greeting-action/`)
```
greeting-action/
├── action.yml      # inputs / outputs / runs (node20, dist/index.js)
├── index.js        # uses @actions/core and @actions/github
├── package.json
└── dist/index.js   # single-file bundle built by: npm run build  (ncc)
```
