# Northstar Game Development — GitHub Pages Edition

[Publishing steps](PUBLISHING.md) · Static site served from the root `index.html`.

> Public curriculum source only. Personal progress is stored in the browser, not the repository.

# Northstar 4.0 — Game Development

A complete **actionable** Godot learning roadmap: 20 sequential core courses, 7 optional specializations, curated external reading, practical exercises and integration projects, and a full independent-game production path. This version is customized for a professional backend engineer learning game development and building an exploration/salvage game. It does not change the Backend or AI Engineering roadmaps.

## Launch

- **Fastest:** double-click `northstar-game-standalone.html` in a browser. The app runs without network services. Online access is needed to open external reading links.
- **Recommended for consistent browser storage:** run `python3 -m http.server 8765 --bind 127.0.0.1` from this folder, then open `http://127.0.0.1:8765`. Or double-click `Launch Northstar.command` on macOS (Python 3 required).
- To use on Windows, open `Launch Northstar.bat` (Python launcher or Python 3 must be installed).
- **Backup progress regularly** using `Export progress` in the left sidebar. Import its JSON backup into another browser or copy of Northstar. Local browser storage is not a durable cross-device sync solution and may vary across `file://` URLs. Export before changing versions.

## What's new since 3.1

- Preserves every v3.1 course, lesson and assignment identifier so an exported 3.1 progress backup can be imported.
- Adds **Finish a tiny game** immediately after 2D physics and before the animation and systems courses.
- Adds movement and physics experiments on inertial ship controls, high-speed asteroid collisions and stable towing joints versus arcade-style constraints.
- Adds a stress-testing project for many moving asteroids.
- Adds **Complete the full game — production to release candidate** after vertical-slice validation and before publishing; a vertical slice is not an entire finished product.
- Expands lesson explanations, highlights misconceptions, adds focused reading, and replaces boilerplate exercise acceptance criteria with practical, topic-specific checks.
- Lesson reader now shows a study sequence, dedicated pitfalls, self-review guidance and evidence requirements.
- Maintains the v3.1 wide, fit-to-width dependency map and course-inspector layout.

## The curriculum

- **20 core courses** spanning fundamentals, game development, practical design, systems, a tiny completed game, a larger finished microgame, debugging, production, full capstone production, publishing, and studio fundamentals.
- **7 optional specializations:** advanced game AI, procedural systems, rendering, 3D, multiplayer, C++/engine development, and narrative systems.
- **163 learning units**: 136 concept lessons + 27 course integration checkpoints.
- **299 practical assignments**, including independent variations and 27 integration projects.
- **84 resource entries**, with 66 distinct resources referenced by lessons. Many links have been selected from official documentation and established teaching materials; not all 84 were individually re-checked live.
- **First assignment:** Movement Playground (top-down square movement). The spaceship physics assignments happen later, once the relevant concepts are taught.

The roadmap supplies short conceptual teaching, curated references, testable exercises and projects for every course. It is a detailed syllabus, **not 163 textbook-length chapters**. Some source links may change over time. Practical outcomes are earned through implementing, testing, understanding and completing the projects, not by checking boxes alone.

## Canonical editable data

- `data/manifest.json` — track identity, stable primary path and goal.
- `data/courses.json` — 27 courses, recommended order, phases and prerequisite links.
- `data/lessons.json` — explanations, reading guides, pitfalls, outcomes, knowledge checks and projects.
- `data/assignments.json` — guided and independent challenges with observable evaluation criteria.
- `data/resources.json` — reference URLs and reading annotations.
- `data/choices.json` — nonexclusive branch decisions.
- `CURRICULUM.md` — complete generated human-readable syllabus.

Edit the canonical JSON files, run validation, and then regenerate the bundled web data:

```bash
python3 tests/validate.py
python3 make_docs.py
python3 build_site.py
```

Do **not** run the original v3 curriculum generator on this project: it would overwrite the revised content. The v4 package intentionally omits that generator.

## Quality checks performed

- Data integrity test: unique IDs, working references, stable v3.1 progress IDs, acyclic course dependencies, consistent recommended order, 299 topic-specific exercise rubrics.
- Static JS syntax test, plus injected-document Chromium smoke tests covering graph/course/lesson navigation, storage behavior, notes, assignment search, branch selections, theme switching and progress export.
- Map fit-width checks at 390, 800, 1024, 1280, 1440 and 1920 pixels.
- **Limitations:** Chromium tests used a browser-injected HTML document and simulated local storage; this is not a native macOS/Windows launch test. Individual exercises have not all been completed in Godot, and not every URL has been independently live-verified. No curriculum can guarantee commercial success or that a complex game will be completed on a particular timeline.

## Goals and provenance

Northstar combines an Odin Project-style sequential learning experience and externally curated reading with a roadmap.sh-inspired dependency graph and optional specializations. Educational text and assignments here are original, with external resources linked, not copied. The roadmap targets Godot 4.x stable, while official online documentation can evolve and should be checked against the installed engine version.
