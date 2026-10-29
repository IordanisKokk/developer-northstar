# Northstar three-track implementation — quality report

Reviewed October 29, 2026. This report distinguishes implementation evidence from learner mastery or third-party guarantees.

## Content and compatibility

| Track | Core / optional courses | Concepts / integration projects | Assignments | Resources |
| --- | --- | --- | ---: | ---: |
| Game Development v4.0 | 20 / 7 | 136 / 27 | 299 | 84 |
| Backend Engineering v1.0 | 12 / 6 | 30 / 18 | 78 | 25 |
| AI & Agent Engineering v1.0 | 12 / 7 | 31 / 19 | 81 | 27 |

All six original Game JSON files are byte-for-byte equal to baseline commit `53307c2ac9d9ad36da4810238da948447e79f25a`. Existing lesson/course/assignment IDs, dependencies, reading, explanations and branch data are preserved. The original browser key and backup type remain in use. The shared viewer changes presentation and adds tracks without migrating or clearing Game data.

New lessons contain original explanations, outcomes, directed reading, hands-on labs, distinct independent challenges and knowledge checks. Every independent challenge has an authored, observable outcome separate from the guided lab. Every course ends in a scoped integration project, including optional courses. The Backend capstone integrates transactional behavior, durable jobs, security, load, observability, release and recovery. The AI capstone requires a framework-independent Python loop, tools, MCP, durable state, context/retrieval/memory, budgets, permissions, traces and repeatable evaluations.

The [coverage review](docs/COVERAGE.md) maps requirements to concrete course IDs. Broad subjects are deliberately grouped into substantial units rather than split into numerous thin lessons. The platform is a sequenced guide with original summaries and external study, not a complete textbook or a claim that every optional specialization is an exhaustive standalone degree course.

## Automated checks

- Original Game editorial/graph validator: passed.
- Cross-track IDs, complete references and unique ownership: passed.
- Course and lesson dependency cycles, prerequisite ordering and optional/core separation: passed.
- New concept depth, assigned reading, assessment criteria and effort consistency: passed.
- Byte-for-byte Game preservation and generated bundle/source consistency: passed.
- JavaScript syntax: passed.
- Actual viewer progress validator executed in Node VM for all tracks: passed legacy defaults, round trips, invalid field types, unsafe IDs and namespace rejection.
- Regenerating committed assets produces no diff in CI.

## Real-browser verification

[Chromium CI run 40901720136](https://github.com/IordanisKokk/developer-northstar/actions/runs/40901720136) passed all major flows at **1440 px desktop** and **390 px mobile** for each track:

- Unified homepage and track switching; all 27/18/19 graph nodes present.
- Fit-to-width without horizontal clipping, zoom/reset and graph inspector open/close.
- Ordered course/lesson navigation, lesson details, assessments and answer guidance.
- Scoped course/lesson search, assignment search and project filtering.
- Completion, exercise status, proficiency, notes and specialization persistence after reload.
- Light/dark appearance and persistence.
- Export, replacement import, pre-import recovery, cross-track rejection and legacy Game backup restoration.
- Synthetic notes containing markup remain text; no page errors.

CI emits six screenshots as a `browser-qa` artifact. Interactive cloud-browser review additionally exercised the shared homepage, original Game graph, Backend and AI navigation and persisted notes, graph inspection, search, branches, themes and export. The cloud file-picker import attempt timed out; the separate real-Chromium CI import/export/recovery suite passed. The suite uses isolated synthetic state, never user progress.

Initial CI failures were test infrastructure issues: shallow checkout omitted the historical preservation baseline, and a theme assertion failed to recognize the default CSS light theme after reload. The workflow now fetches history and the assertion handles the documented default. These changes did not relax curriculum or state-integrity checks.

## Research and link review

Reviewed roadmap.sh Backend/AI coverage and The Odin Project’s learning-by-building model. Assigned sources emphasize official docs/specifications, university/author material and primary implementations. MCP is pinned to the official 2026-07-28 revision, including current metadata/discovery and explicit legacy compatibility boundaries. Python profiler reading uses the current profiling documentation and asks learners to match their runtime version.

All **49 unique assigned URLs** returned HTTP 200 in the final direct HTTP check retained in `tests/link-report.json`. A Stanford textbook endpoint returned 503 and was replaced as required reading with Microsoft’s accessible retrieval-design/evaluation guide. A Hugging Face unversioned generation URL returned 404 and was replaced with its reachable official `main/en` page. That page is development documentation: match APIs to the installed Transformers version rather than assuming source examples apply to every release. HTTP 200 is reachability evidence, not a guarantee that future content remains unchanged.

## Data safety and deployment

Persistence is browser-local and scoped by track. Backups validate type, namespace and field shapes before replacement. A pre-import snapshot is written successfully before the current state is changed. The recovery slot is local and not a durable substitute for portable exports. UI strings are escaped; no model tokens, study notes or personal exports belong in the repository.

The application remains static HTML/CSS/JS plus canonical JSON and a Python bundler. No server/database, mandatory hosted build service or new runtime dependency was added. CI is a validation convenience; the committed assets run on GitHub Pages without it.

The existing published root returned **HTTP 200** before merge. That was the original Game deployment. The feature PR is deliberately unmerged pending owner review/authorization. Verification of the three-track **published** deployment must occur after authorized merge, using the actual Pages build and HTTP/browser checks. This report does not claim that deployment is complete.

## Remaining limits

Curriculum exercises and capstones are learner tasks; their implementations were not built as part of this platform change. Estimates are planning budgets, and substantial projects can take longer. Browser QA covers Chromium desktop/mobile layouts; Safari, Firefox and physical mobile devices were not tested. Documentation links and evolving protocol/model APIs require periodic maintenance. The original Game quality report is retained in `docs/GAME_QUALITY_REPORT.md` as historical evidence.
