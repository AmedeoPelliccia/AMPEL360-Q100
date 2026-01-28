# GitHub Actions Workflow Contexts and Special Functions Reference

This document provides a comprehensive reference for available contexts and special functions in GitHub Actions workflow files.

## Overview

GitHub Actions workflows can access different contexts at various levels. This reference maps each workflow key to its available contexts and special functions.

## Quick Reference Table

| Workflow Key | Context | Special Functions |
|-------------|---------|------------------|
| run-name | github, inputs, vars | None |
| concurrency | github, inputs, vars | None |
| env | github, secrets, inputs, vars | None |
| jobs.<job_id> | github, needs, strategy, matrix, secrets, inputs, vars | hashFiles(), format(), toJSON(), fromJSON(), contains(), startsWith(), endsWith(), join() |
| jobs.<job_id>.runs-on | github, needs, strategy, matrix, inputs, vars | None |
| jobs.<job_id>.environment | github, needs, strategy, matrix, inputs, vars | None |
| jobs.<job_id>.concurrency | github, needs, strategy, matrix, inputs, vars | None |
| jobs.<job_id>.env | github, needs, strategy, matrix, secrets, inputs, vars | hashFiles() |
| jobs.<job_id>.if | github, needs, strategy, matrix, inputs, vars | always(), success(), failure(), cancelled(), contains(), startsWith(), endsWith(), hashFiles() |
| jobs.<job_id>.steps[*].if | github, needs, strategy, matrix, steps, job, runner, env, secrets, inputs, vars | always(), success(), failure(), cancelled(), hashFiles() |
| jobs.<job_id>.steps[*].env | github, needs, strategy, matrix, job, runner, env, steps, secrets, inputs, vars | hashFiles(), toJSON(), fromJSON() |
| jobs.<job_id>.steps[*].with | github, needs, strategy, matrix, job, runner, env, steps, secrets, inputs, vars | hashFiles(), toJSON(), fromJSON() |
| jobs.<job_id>.strategy.matrix | github, needs, inputs, vars | fromJSON() |
| jobs.<job_id>.outputs | steps | None |

## Workflow-Level Keys

### run-name

Controls the name displayed for workflow runs in the Actions UI.

| Property | Details |
|----------|---------|
| **Available Contexts** | `github`, `inputs`, `vars` |
| **Special Functions** | None |
| **Description** | Sets a custom name for the workflow run |
| **Example** | `run-name: Deploy to ${{ inputs.environment }} by @${{ github.actor }}` |

**Available Context Properties:**
- `github.actor` - User who triggered the workflow
- `github.event_name` - Event that triggered the workflow
- `github.ref` - Branch or tag ref that triggered the workflow
- `inputs.*` - Workflow inputs (for workflow_dispatch)
- `vars.*` - Configuration variables

### concurrency

Controls concurrency for workflow runs to prevent multiple runs from executing simultaneously.

| Property | Details |
|----------|---------|
| **Available Contexts** | `github`, `inputs`, `vars` |
| **Special Functions** | None |
| **Description** | Prevents multiple workflow runs from the same concurrency group from running simultaneously |
| **Example** | `concurrency: deploy-${{ github.ref }}` |

**Available Context Properties:**
- `github.ref` - Branch or tag ref
- `github.head_ref` - Head branch of PR
- `github.event.number` - PR or issue number
- `inputs.*` - Workflow inputs
- `vars.*` - Configuration variables

**Concurrency Options:**
```yaml
concurrency:
  group: ${{ github.workflow }}-${{ github.ref }}
  cancel-in-progress: true
```

### env

Defines environment variables available to all jobs and steps in the workflow.

| Property | Details |
|----------|---------|
| **Available Contexts** | `github`, `secrets`, `inputs`, `vars` |
| **Special Functions** | None |
| **Description** | Sets environment variables for the entire workflow |
| **Example** | `env: NODE_ENV: production` |

**Available Context Properties:**
- `github.*` - All GitHub context properties
- `secrets.*` - Repository and organization secrets
- `inputs.*` - Workflow inputs
- `vars.*` - Configuration variables

**Example:**
```yaml
env:
  API_URL: ${{ vars.API_URL }}
  API_KEY: ${{ secrets.API_KEY }}
  BRANCH_NAME: ${{ github.ref_name }}
  TRIGGERED_BY: ${{ github.actor }}
```

## Job-Level Keys

### jobs.<job_id>

Defines individual jobs that run in the workflow.

| Property | Details |
|----------|---------|
| **Available Contexts** | `github`, `needs`, `strategy`, `matrix`, `secrets`, `inputs`, `vars` |
| **Special Functions** | `hashFiles()`, `format()`, `toJSON()`, `fromJSON()` |
| **Description** | Configures a job within the workflow |

**Available Context Properties:**
- `github.*` - All GitHub context properties
- `needs.<job_id>.outputs` - Outputs from dependent jobs
- `strategy.job-index` - Current job index in matrix
- `matrix.*` - Matrix strategy values
- `secrets.*` - Repository and organization secrets
- `inputs.*` - Workflow inputs
- `vars.*` - Configuration variables

**Example:**
```yaml
jobs:
  build:
    runs-on: ubuntu-latest
    if: github.event_name == 'push'
    env:
      BUILD_ENV: production
      BRANCH_NAME: ${{ github.ref_name }}
```

**Note:** The `runner` context is not available at job level. Use step-level env to access `runner.os` and similar properties.

### jobs.<job_id>.runs-on

Specifies the type of runner that executes the job.

| Property | Details |
|----------|---------|
| **Available Contexts** | `github`, `needs`, `strategy`, `matrix`, `inputs`, `vars` |
| **Special Functions** | None |
| **Description** | Selects the runner for job execution |
| **Example** | `runs-on: ubuntu-latest` |

**Dynamic Runner Selection:**
```yaml
runs-on: ${{ matrix.os }}
# or
runs-on: ${{ inputs.runner-type }}
```

### jobs.<job_id>.environment

Specifies the environment that the job references.

| Property | Details |
|----------|---------|
| **Available Contexts** | `github`, `needs`, `strategy`, `matrix`, `inputs`, `vars` |
| **Special Functions** | None |
| **Description** | References a deployment environment with protection rules |
| **Example** | `environment: production` |

**With URL:**
```yaml
environment:
  name: ${{ inputs.environment }}
  url: https://app-${{ github.ref_name }}.example.com
```

**Note:** The `url` field is evaluated at job definition time and cannot reference step outputs. Use contexts available at job level (github, needs, strategy, matrix, inputs, vars).

**Environment Protection Rules:**
When a job targets an environment, **deployment protection rules** are enforced before the job starts. Only after passing do **environment secrets and variables** become accessible within that job.

### jobs.<job_id>.concurrency

Controls concurrency at the job level.

| Property | Details |
|----------|---------|
| **Available Contexts** | `github`, `needs`, `strategy`, `matrix`, `inputs`, `vars` |
| **Special Functions** | None |
| **Description** | Limits concurrent job executions |
| **Example** | `concurrency: deploy-${{ matrix.environment }}` |

### jobs.<job_id>.env

Sets environment variables for all steps in the job.

| Property | Details |
|----------|---------|
| **Available Contexts** | `github`, `needs`, `strategy`, `matrix`, `secrets`, `inputs`, `vars` |
| **Special Functions** | `hashFiles()` |
| **Description** | Job-level environment variables |
| **Example** | `env: BUILD_CONFIG: ${{ matrix.config }}` |

### jobs.<job_id>.if

Controls whether the job runs based on a condition.

| Property | Details |
|----------|---------|
| **Available Contexts** | `github`, `needs`, `inputs`, `vars` |
| **Special Functions** | `always()`, `success()`, `failure()`, `cancelled()`, `contains()`, `startsWith()`, `endsWith()` |
| **Description** | Conditional job execution |
| **Example** | `if: github.event_name == 'push' && success()` |

**Common Patterns:**
```yaml
if: github.ref == 'refs/heads/main'
if: contains(github.event.head_commit.message, '[deploy]')
if: needs.build.result == 'success'
if: always()  # Run even if previous jobs failed
```

### jobs.<job_id>.steps[*].if

Controls whether a step runs based on a condition.

| Property | Details |
|----------|---------|
| **Available Contexts** | `github`, `needs`, `strategy`, `matrix`, `steps`, `job`, `runner`, `env`, `secrets`, `inputs`, `vars` |
| **Special Functions** | `always()`, `success()`, `failure()`, `cancelled()`, `hashFiles()` |
| **Description** | Conditional step execution |
| **Example** | `if: failure()` |

**Available Additional Context Properties:**
- `steps.<step_id>.outputs` - Outputs from previous steps
- `steps.<step_id>.outcome` - Result before continue-on-error
- `steps.<step_id>.conclusion` - Final result after continue-on-error
- `job.status` - Current job status
- `runner.os` - Operating system of runner

### jobs.<job_id>.steps[*].env

Sets environment variables for a specific step.

| Property | Details |
|----------|---------|
| **Available Contexts** | `github`, `needs`, `strategy`, `matrix`, `job`, `runner`, `env`, `steps`, `secrets`, `inputs`, `vars` |
| **Special Functions** | `hashFiles()`, `toJSON()`, `fromJSON()` |
| **Description** | Step-level environment variables |
| **Example** | `env: RESULT: ${{ steps.test.outputs.result }}` |

### jobs.<job_id>.steps[*].with

Provides input parameters to an action.

| Property | Details |
|----------|---------|
| **Available Contexts** | `github`, `needs`, `strategy`, `matrix`, `job`, `runner`, `env`, `steps`, `secrets`, `inputs`, `vars` |
| **Special Functions** | `hashFiles()`, `toJSON()`, `fromJSON()` |
| **Description** | Action input parameters |
| **Example** | `with: node-version: ${{ matrix.node }}` |

### jobs.<job_id>.strategy.matrix

Defines a matrix strategy for running multiple job variations.

| Property | Details |
|----------|---------|
| **Available Contexts** | `github`, `needs`, `inputs`, `vars` |
| **Special Functions** | `fromJSON()` |
| **Description** | Matrix build strategy |
| **Example** | See below |

**Example:**
```yaml
strategy:
  matrix:
    os: [ubuntu-latest, windows-latest, macos-latest]
    node: [14, 16, 18]
    include:
      - os: ubuntu-latest
        node: 20
    exclude:
      - os: macos-latest
        node: 14
```

**Dynamic Matrix:**
```yaml
strategy:
  matrix: ${{ fromJSON(needs.setup.outputs.matrix) }}
```

### jobs.<job_id>.outputs

Defines outputs that can be used by dependent jobs.

| Property | Details |
|----------|---------|
| **Available Contexts** | `steps` |
| **Special Functions** | None |
| **Description** | Makes step outputs available to other jobs |
| **Example** | `outputs: version: ${{ steps.get-version.outputs.version }}` |

## Special Functions Reference

**All functions below are available anywhere expressions are evaluated** (for example in `if`, `env`, `with`, and many job/step keys), provided the referenced **context** exists at that point in evaluation.

### Status Check Functions

| Function | Description | Returns | Example |
|----------|-------------|---------|---------|
| `success()` | Returns true if none of the previous steps have failed | Boolean | `if: success()` |
| `always()` | Returns true even if previous steps failed or were cancelled | Boolean | `if: always()` |
| `failure()` | Returns true if any previous step failed | Boolean | `if: failure()` |
| `cancelled()` | Returns true if the workflow was cancelled | Boolean | `if: cancelled()` |

### String Functions

| Function | Description | Example |
|----------|-------------|---------|
| `contains(search, item)` | Returns true if search contains item | `contains(github.event.head_commit.message, '[skip ci]')` |
| `startsWith(search, prefix)` | Returns true if search starts with prefix | `startsWith(github.ref, 'refs/tags/')` |
| `endsWith(search, suffix)` | Returns true if search ends with suffix | `endsWith(github.ref, '/main')` |
| `format(string, replaceValue0, ...)` | Formats string with placeholders | `format('Hello {0} {1}', 'World', '!')` |
| `join(array, separator)` | Joins array elements | `join(matrix.os, ', ')` |
| `split(string, separator)` | Splits string into array | `split(github.ref, '/')` |
| `length(value)` | Returns length of string or array | `length(github.event.commits)` |

### Data Manipulation Functions

| Function | Description | Example |
|----------|-------------|---------|
| `toJSON(value)` | Converts value to JSON | `toJSON(github.event)` |
| `fromJSON(value)` | Parses JSON string | `fromJSON(needs.setup.outputs.matrix)` |

### File System Functions

| Function | Description | Example |
|----------|-------------|---------|
| `hashFiles(pattern)` | Returns SHA-256 hash of files matching pattern | `hashFiles('**/package-lock.json')` |

**Hash Pattern Examples:**
```yaml
# Single pattern
${{ hashFiles('**/package-lock.json') }}

# Multiple patterns
${{ hashFiles('**/package-lock.json', '**/yarn.lock') }}

# Complex pattern
${{ hashFiles('**/*.go', 'go.sum') }}
```

## Context Object Reference

### github Context

The `github` context contains information about the workflow run and the event that triggered it.

**Key Properties:**
- `github.actor` - Username of the user who triggered the workflow
- `github.event_name` - Name of the event (push, pull_request, etc.)
- `github.ref` - Fully-formed ref (refs/heads/main, refs/tags/v1.0.0)
- `github.ref_name` - Short ref name (main, v1.0.0)
- `github.sha` - Commit SHA that triggered the workflow
- `github.repository` - Owner and repository name (owner/repo)
- `github.repository_owner` - Owner username or organization
- `github.workflow` - Workflow name
- `github.run_id` - Unique workflow run ID
- `github.run_number` - Unique run number for workflow
- `github.job` - Job ID

### needs Context

Available in jobs that depend on other jobs.

**Properties:**
- `needs.<job_id>.result` - Result of dependent job (success, failure, cancelled, skipped)
- `needs.<job_id>.outputs.<output_name>` - Output from dependent job

### strategy Context

Available in jobs using a matrix strategy.

**Properties:**
- `strategy.fail-fast` - Whether fail-fast is enabled
- `strategy.job-index` - Index of current job in matrix
- `strategy.job-total` - Total number of jobs in matrix

### matrix Context

Available when using a matrix strategy.

**Properties:**
- `matrix.<key>` - Value for the current matrix iteration
- All keys defined in the matrix are available

### steps Context

Available after a step has run.

**Properties:**
- `steps.<step_id>.outputs.<output_name>` - Output from previous step
- `steps.<step_id>.outcome` - Outcome before continue-on-error (success, failure, cancelled, skipped)
- `steps.<step_id>.conclusion` - Final result after continue-on-error

### runner Context

Information about the runner executing the job.

**Properties:**
- `runner.os` - Operating system (Linux, Windows, macOS)
- `runner.arch` - Architecture (X64, ARM64)
- `runner.name` - Name of the runner
- `runner.temp` - Path to temporary directory
- `runner.tool_cache` - Path to tool cache directory

### env Context

Contains environment variables set in the workflow, job, or step.

**Usage:**
```yaml
env:
  MY_VAR: value

steps:
  - run: echo ${{ env.MY_VAR }}
```

### secrets Context

Contains secrets configured in the repository or organization.

**Usage:**
```yaml
env:
  API_TOKEN: ${{ secrets.API_TOKEN }}
```

**Note:** Secrets are not available in workflow run logs and are redacted automatically.

### inputs Context

Available for workflows triggered by `workflow_dispatch` or `workflow_call`.

**Usage:**
```yaml
on:
  workflow_dispatch:
    inputs:
      environment:
        description: 'Environment to deploy to'
        required: true
        type: choice
        options:
          - development
          - staging
          - production

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - run: echo "Deploying to ${{ inputs.environment }}"
```

### vars Context

Contains configuration variables configured in the repository or organization.

**Usage:**
```yaml
env:
  API_URL: ${{ vars.API_URL }}
```

## Best Practices

### 1. Use Appropriate Contexts

Only use contexts that are available at the level where you're working. Using unavailable contexts will cause workflow errors.

### 2. Secure Sensitive Data

Always use `secrets` context for sensitive data, never hardcode credentials:

```yaml
# ✅ Good
env:
  API_KEY: ${{ secrets.API_KEY }}

# ❌ Bad
env:
  API_KEY: abc123secret
```

### 3. Use Configuration Variables

Use `vars` context for non-sensitive configuration:

```yaml
env:
  API_URL: ${{ vars.API_URL }}
  LOG_LEVEL: ${{ vars.LOG_LEVEL }}
```

### 4. Cache Dependencies

Use `hashFiles()` for cache keys:

```yaml
- uses: actions/cache@v3
  with:
    path: ~/.npm
    key: ${{ runner.os }}-node-${{ hashFiles('**/package-lock.json') }}
    restore-keys: |
      ${{ runner.os }}-node-
```

### 5. Matrix Strategies

Use matrix for testing multiple configurations:

```yaml
strategy:
  matrix:
    os: [ubuntu-latest, windows-latest]
    node: [14, 16, 18]
  fail-fast: false
```

### 6. Conditional Execution

Use `if` conditions to control job and step execution:

```yaml
jobs:
  deploy:
    if: github.ref == 'refs/heads/main' && github.event_name == 'push'
    runs-on: ubuntu-latest
```

### 7. Job Dependencies

Use `needs` to create job dependencies:

```yaml
jobs:
  build:
    runs-on: ubuntu-latest
    outputs:
      version: ${{ steps.version.outputs.version }}
    steps:
      - id: version
        run: echo "version=1.0.0" >> $GITHUB_OUTPUT

  deploy:
    needs: build
    runs-on: ubuntu-latest
    steps:
      - run: echo "Deploying version ${{ needs.build.outputs.version }}"
```

## Common Patterns

### Dynamic Workflow Names

```yaml
run-name: Deploy to ${{ inputs.environment }} by @${{ github.actor }}
```

### Environment-Specific Deployments

```yaml
jobs:
  deploy:
    environment:
      name: ${{ github.ref_name == 'main' && 'production' || 'staging' }}
      url: https://app-${{ github.ref_name }}.example.com
```

### Conditional Step Execution

```yaml
steps:
  - name: Run tests
    run: npm test
    
  - name: Upload coverage
    if: success()
    uses: codecov/codecov-action@v3
    
  - name: Notify on failure
    if: failure()
    run: echo "Tests failed!"
```

### Matrix with Exclusions

```yaml
strategy:
  matrix:
    os: [ubuntu-latest, windows-latest, macos-latest]
    node: [14, 16, 18]
    exclude:
      - os: macos-latest
        node: 14
    include:
      - os: ubuntu-latest
        node: 20
        experimental: true
```

### Reusable Workflows

```yaml
# caller.yml
jobs:
  call-workflow:
    uses: ./.github/workflows/reusable.yml
    with:
      environment: production
    secrets:
      token: ${{ secrets.TOKEN }}

# reusable.yml
on:
  workflow_call:
    inputs:
      environment:
        required: true
        type: string
    secrets:
      token:
        required: true
```

## References

- [GitHub Actions Documentation](https://docs.github.com/en/actions)
- [Workflow Syntax Reference](https://docs.github.com/en/actions/using-workflows/workflow-syntax-for-github-actions)
- [Contexts Reference](https://docs.github.com/en/actions/learn-github-actions/contexts)
- [Expressions Reference](https://docs.github.com/en/actions/learn-github-actions/expressions)

## Related Documentation

- [Link Validation Strategy](./LINK_VALIDATION.md) - Repository link validation workflows
- [API Validation](./api-endpoints.json) - API endpoint validation configuration
