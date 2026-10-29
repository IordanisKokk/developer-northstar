# Northstar — three learning journeys

[Open Northstar](https://iordaniskokk.github.io/developer-northstar/) · [Quality report](QUALITY_REPORT.md) · [Curriculum coverage](docs/COVERAGE.md) · [Publishing](PUBLISHING.md)

A static, browser-local learning platform for an experienced backend engineer building depth in game development, production systems and agent infrastructure. Each track has an ordered core, a dependency graph, optional specializations, original concept explanations, assigned reading, independent challenges and integration projects.

| Track | Core courses | Optional courses | Concept lessons | Projects | Practical assignments |
| --- | ---: | ---: | ---: | ---: | ---: |
| Game Development v4.0 | 20 | 7 | 136 | 27 | 299 |
| Backend Engineering v1.0 | 12 | 6 | 30 | 18 | 78 |
| AI & Agent Engineering v1.0 | 12 | 7 | 31 | 19 | 81 |

New curricula deliberately use fewer, substantial units rather than maximizing lesson counts. A concept lesson contains an original explanation, study outcomes, a focused reading assignment, an experiment, an independent transfer challenge, observable criteria and a knowledge check with review guidance. These are actionable study curricula with external reading, not replacement textbooks. Optional courses are focused depth projects, not gates to core completion.

## Run and edit

Serve this directory with `python -m http.server 8765` and open `http://localhost:8765/`. No backend, database, package installation or build service is required to use the committed site. The generated `northstar-game-standalone.html` retains its historical filename and now includes all three tracks for offline local use; external reading still needs network access.

Canonical production content lives in `data/*.json` (Game), `data/backend/*.json` and `data/ai/*.json`. Edit those files, then run:

```sh
python build_site.py
python tests/validate.py
python tests/validate_tracks.py
node --check assets/app.js
node tests/progress_test.cjs
```

`build_site.py` bundles every track into `assets/data.js` and the standalone HTML. `authoring/` retains the original new-track authoring source and independent assessment rubrics; `python authoring/curricula.py` regenerates the two new tracks and **overwrites direct JSON edits**, so use it only when deliberately editing that authoring source. It never generates or modifies Game Development JSON.

Full browser regression tests use a disposable HTTP origin and synthetic data:

```sh
pip install playwright==1.58.0
python -m playwright install chromium
python tests/platform_browser.py
```

The GitHub Actions validation workflow runs these checks and Chromium tests at desktop and mobile widths. Legacy `browser_smoke.py` and `map_fit_test.py` are historical single-track tests with environment-specific assumptions; `platform_browser.py` supersedes them.

## Progress, privacy and portable backups

Progress, exercise completion, proficiency, notes, branch focus and theme stay in this browser. They are **device-, browser- and origin-specific**. There is no account sync. Private browsing, storage clearing and browser eviction can erase them. Local `file://` copies and the GitHub Pages origin may have different storage.

Use **Export progress** separately for each track before changing device, browser or hosting origin. Select the matching track on the destination and use **Import progress**. Import replaces only that track after validating the file and asking for confirmation. A local pre-import recovery snapshot is saved first; **Recover pre-import state** restores it. This is one recovery slot, not a durable backup or version history. Export important notes regularly. Imports are limited to 10 MB, notes to 100,000 characters each.

Game Development retains `northstar-game-v3-progress`, every original curriculum ID and the `northstar-game-progress` backup format. No migration writes or clears the legacy key. Existing v3/v4 exports can be imported while Game Development is selected; absent newer optional fields receive defaults. Backend and AI use `northstar-backend-v1-progress` and `northstar-ai-v1-progress`, with distinct backup types and ID prefixes. Unrecognized legacy Game IDs are retained for portability rather than silently dropped.

Only code and public curriculum belong in Git. Never commit progress exports, personal notes, credentials or model API keys. The website itself makes no model calls and requires no credentials. Course projects that use cloud/model services are separate learner-built applications; use disposable credentials and set spending limits there.

## Learning approach

The Odin Project informs the read → build → review rhythm; roadmap.sh Backend and AI Engineer roadmaps inform coverage and the branching map. All new explanations and assignments are original. Reading is marked required or optional, with specific sections and a question or implementation purpose. Follow the prescribed core order; branch when a project creates a need. Completion records work performed, while proficiency records a separate self-assessment.

MCP material is pinned to the official **2026-07-28** specification reviewed October 29, 2026. It distinguishes that revision’s per-request metadata and discovery from older initialization/session behavior. SDK support must be checked against the chosen revision. Protocol/model dependencies should be revisited with compatibility fixtures, not silently updated from an unversioned tutorial.

[Original Game v4 guide](docs/GAME_V4.md) and [Game curriculum text](CURRICULUM.md) remain available as historical/reference documents.
