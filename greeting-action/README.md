# Student Greeting Action

Custom JavaScript action built for the GitHub Actions course (Module 7).

## Inputs
| Name | Required | Default | Description |
|---|---|---|---|
| `who-to-greet` | yes | `World` | Who to greet |

## Outputs
| Name | Description |
|---|---|
| `time` | The time the greeting was generated |

## Usage
```yaml
- uses: star-anonymus/github-actions-course/greeting-action@v1.0.0
  with:
    who-to-greet: ${{ github.actor }}
```

## Build
```bash
npm install
npm run build   # bundles index.js + node_modules into dist/index.js with @vercel/ncc
```
