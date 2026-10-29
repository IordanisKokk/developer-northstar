# Northstar 4.0 — Complete Game Development Curriculum

A structured learning path for an experienced software engineer learning independent Godot game development. This curriculum is authored as a complete **actionable syllabus**: short original teaching explanations, deliberate reading, multiple practical exercises, and measurable project checks. It is not a replacement for full-length reference books or actual playtesting.

## Study methodology

- The core path is sequential by recommendation, not locked. Start with **Movement Playground**, not a spaceship.
- Read the assigned section; explain the principle; build a guided experiment; then do the independent variation in your own way.
- Each course ends with an integrated practical project. After collision fundamentals, release a deliberately tiny first game.
- Write brief notes about broken hypotheses, fixed bugs and architecture decisions, not just what you read.
- Spend around 5 hours per week on this track when concurrently studying Backend and AI Engineering. Complex projects can exceed estimates.
- Optional branches are choices, not prerequisites for completing a commercial 2D game.
- The capstone evolves through concept, playable vertical slice, playtest, alpha, beta, release candidate, and distribution.

## Core sequence

01. **Godot studio & your first playground** — Learn how to think in scenes and nodes by building an immediately interactive toy rather than copying a full game.
02. **Vectors and expressive 2D movement** — Build intuition for game mathematics by testing contrasting control schemes.
03. **Collisions, interactions and simulation** — Learn to reason about bodies, overlaps, queries and contact responses by building tactile obstacle courses.
04. **Finish a tiny game — the first release** — Ship a tiny but complete game before spending months accumulating features.
05. **Animation and game feel** — Make actions readable and satisfying through timing, motion, effects and sound.
06. **Game code architecture** — Learn how to combine mechanics into changeable systems while avoiding premature frameworks.
07. **Gameplay mechanics and systems** — Turn reusable foundations into small, expressive mechanics, each with explicit rules.
08. **Game design and rapid prototyping** — Learn how rules create decisions, why people keep playing and how to evaluate fun.
09. **Game UI, UX and accessibility** — Build interfaces that explain choices and work for different users and input devices.
10. **Level and encounter design** — Construct places that teach, challenge and guide players through meaningful experiences.
11. **Game AI essentials** — Build understandable enemies that produce interesting situations without needing machine learning.
12. **Randomness and procedural fundamentals** — Use controlled randomness to produce variety without sacrificing solvability or intended design.
13. **Ship one polished microgame** — Practice the complete development cycle in a deliberately small game with beginning, rules and ending.
14. **Debugging, automated checks and performance** — Learn to diagnose actual problems and optimize measurements, not intuitions.
15. **Content pipelines, tooling and collaboration** — Convert prototypes into repeatable production processes without overengineering.
16. **Exploration & Salvage capstone — design and vertical slice** — Turn the existing Godot game into a focused, testable experience rather than an infinite feature backlog.
17. **Playtesting, iteration and audience validation** — Learn from real players before expanding investment in content or marketing.
18. **Complete the full game — production to release candidate** — Transform the validated vertical slice into a complete, stable, content-rich game with tested beginning-to-end progression.
19. **Publishing, promotion and release operations** — Prepare a genuine commercial release, from positioning and demo quality to launch operations.
20. **Indie studio foundations and sustainable development** — Learn the economic and human realities of building an independent studio without assuming instant scale.

## Optional specializations

- **Advanced Game AI & autonomous behavior** — Explore richer enemy decision systems for stealth, tactics and systemic worlds.
- **Advanced Procedural Worlds & Simulation** — Create richly varied sectors while preserving navigability, intent and testability.
- **Rendering, shaders and advanced VFX** — Develop rendering literacy and build atmospheric interactive effects.
- **3D Gameplay Development** — Extend existing gameplay principles into 3D coordinate systems, cameras and spatial interaction.
- **Multiplayer Networking** — Understand authority, replication and latency by building one small networked game.
- **C++, engine internals and data-oriented systems** — Go beyond engine use into native performance and foundational architecture.
- **Narrative, quests and systemic worldbuilding** — Design branching stories and systemic quest states without fragile hardcoded scripting.

## Practical graduation assessments

1. **Unfamiliar mechanic:** implement a new Godot gameplay mechanic from a blank scene with independently chosen architecture; use reference documentation but not a ready-made solution.
2. **System integration:** connect controls, collision, animation, inventory, state and saving with no duplicated subscriptions or data loss.
3. **Debugging:** reproduce and isolate an unfamiliar failure; explain why the fix works and preserve a regression test.
4. **Vertical slice:** have another person complete a representative sonar/salvage/extraction run and observe the risk/reward decisions.
5. **Finished game:** produce a beginning-to-end playable game, validate save compatibility and have an independent tester install and finish a release candidate.

## All lessons and project specifications


## Godot studio & your first playground [Core]

Learn how to think in scenes and nodes by building an immediately interactive toy rather than copying a full game.

**Prerequisites:** None
**Suggested structured study:** 26 hours (not a complete game production budget)

### 1. Start a Movement Playground

Start by making one visible object react to one input. A tiny running scene gives faster feedback than constructing a project-wide architecture.

**Common failures:**

- A square moved with a static offset may seem correct until you change the frame rate.

**Suggested reading:**

- Required: [Godot: Nodes and Scenes](https://docs.godotengine.org/en/stable/getting_started/step_by_step/nodes_and_scenes.html) — Read **the relevant examples**. Your goal is to explain: Start by making one visible object react to one input. Afterward, test the idea in a throwaway Godot scene; do not copy the tutorial wholesale.
- Optional: [Godot: Step by step](https://docs.godotengine.org/en/stable/getting_started/step_by_step/index.html) — Optional background: compare the examples with your implementation of start a movement playground. Focus on design tradeoffs, not memorizing an API.

**Practice:**


**Try it (guided):** Hands-on: Create your first Movement Playground in a new Godot project: a 2D scene with a colored square that moves with WASD.

Success checks:
- Change the input action in Project Settings; movement should follow the remapped key without code edits.
- Show the guided implementation with one controlled variation; describe why the behavior changes.
- Test this failure mode deliberately: A square moved with a static offset may seem correct until you change the frame rate.

**Build it (independent):** Independent: Build a small movement playground with a start marker and a reset button; include a visible control legend.

Success checks:
- Change the input action in Project Settings; movement should follow the remapped key without code edits.
- Build the extension in a separate scene or script, and explain how its architecture differs from the guided example.
- Test this failure mode deliberately: A square moved with a static offset may seem correct until you change the frame rate.

**Knowledge check:** Explain which node owns input and how to reset the scene.

**Self-review:** A good answer should mention: Start by making one visible object react to one input. A tiny running scene gives faster feedback than constructing a project-wide architecture. It should also distinguish the common failure: A square moved with a static offset may seem correct until you change the frame rate.

---

### 2. Scenes, nodes and reusable instances

A scene is a saved reusable node hierarchy. An instance inherits its structure but can override local properties.

**Common failures:**

- Copying an entire player or obstacle script for each instance creates divergence.

**Suggested reading:**

- Required: [Godot: Creating instances](https://docs.godotengine.org/en/stable/getting_started/step_by_step/instancing.html) — Read **the relevant examples**. Your goal is to explain: A scene is a saved reusable node hierarchy. Afterward, test the idea in a throwaway Godot scene; do not copy the tutorial wholesale.

**Practice:**


**Try it (guided):** Hands-on: Create a reusable obstacle scene and place three different instances.

Success checks:
- Modify the reusable source scene and confirm all three instances inherit the change while per-instance colors remain different.
- Show the guided implementation with one controlled variation; describe why the behavior changes.
- Test this failure mode deliberately: Copying an entire player or obstacle script for each instance creates divergence.

**Build it (independent):** Independent: Build a playground with two distinct interactive scene types, each reused without copying scripts.

Success checks:
- Modify the reusable source scene and confirm all three instances inherit the change while per-instance colors remain different.
- Build the extension in a separate scene or script, and explain how its architecture differs from the guided example.
- Test this failure mode deliberately: Copying an entire player or obstacle script for each instance creates divergence.

**Knowledge check:** What changes when you edit the source scene after instantiating it?

**Self-review:** A good answer should mention: A scene is a saved reusable node hierarchy. An instance inherits its structure but can override local properties. It should also distinguish the common failure: Copying an entire player or obstacle script for each instance creates divergence.

---

### 3. GDScript that communicates intent

GDScript makes intentions readable through typed values, named exports and small functions. Treat names as part of the design.

**Common failures:**

- A script can run while silently depending on fragile child-node names.

**Suggested reading:**

- Required: [Godot: GDScript documentation](https://docs.godotengine.org/en/stable/tutorials/scripting/gdscript/index.html) — Read **the relevant examples**. Your goal is to explain: GDScript makes intentions readable through typed values, named exports and small functions. Afterward, test the idea in a throwaway Godot scene; do not copy the tutorial wholesale.
- Optional: [Godot: Step by step](https://docs.godotengine.org/en/stable/getting_started/step_by_step/index.html) — Optional background: compare the examples with your implementation of gdscript that communicates intent. Focus on design tradeoffs, not memorizing an API.

**Practice:**


**Try it (guided):** Hands-on: Expose movement speed as an exported property and tune it from Inspector.

Success checks:
- Rename a child node deliberately, observe the failure, then update references and explain an alternative less fragile structure.
- Show the guided implementation with one controlled variation; describe why the behavior changes.
- Test this failure mode deliberately: A script can run while silently depending on fragile child-node names.

**Build it (independent):** Independent: Add three character presets as resources or scene variants; compare their feel without editing source code.

Success checks:
- Rename a child node deliberately, observe the failure, then update references and explain an alternative less fragile structure.
- Build the extension in a separate scene or script, and explain how its architecture differs from the guided example.
- Test this failure mode deliberately: A script can run while silently depending on fragile child-node names.

**Knowledge check:** What belongs in the scene, a Resource, or a runtime variable?

**Self-review:** A good answer should mention: GDScript makes intentions readable through typed values, named exports and small functions. Treat names as part of the design. It should also distinguish the common failure: A script can run while silently depending on fragile child-node names.

---

### 4. Input and per-frame updates

Input events describe user action; processing callbacks describe repeated updates. Know which responsibility belongs where.

**Common failures:**

- Reading raw physical keys from every script makes rebinding and keyboard/controller parity harder.

**Suggested reading:**

- Required: [Godot — Input examples](https://docs.godotengine.org/en/stable/tutorials/inputs/input_examples.html) — Read **Input actions and handling**. Your goal is to explain: Input events describe user action; processing callbacks describe repeated updates. Afterward, test the idea in a throwaway Godot scene; do not copy the tutorial wholesale.

**Practice:**


**Try it (guided):** Hands-on: Map WASD and arrow keys to the same actions and add keyboard reset.

Success checks:
- Map and test two input schemes; hold diagonal input and describe when movement is calculated.
- Show the guided implementation with one controlled variation; describe why the behavior changes.
- Test this failure mode deliberately: Reading raw physical keys from every script makes rebinding and keyboard/controller parity harder.

**Build it (independent):** Independent: Display a live velocity/readout overlay and test movement under two frame-rate caps.

Success checks:
- Map and test two input schemes; hold diagonal input and describe when movement is calculated.
- Build the extension in a separate scene or script, and explain how its architecture differs from the guided example.
- Test this failure mode deliberately: Reading raw physical keys from every script makes rebinding and keyboard/controller parity harder.

**Knowledge check:** When should you use event handling rather than checking input each frame?

**Self-review:** A good answer should mention: Input events describe user action; processing callbacks describe repeated updates. Know which responsibility belongs where. It should also distinguish the common failure: Reading raw physical keys from every script makes rebinding and keyboard/controller parity harder.

---

### 5. Signals and scene lifecycle

Signals let a child report an event without knowing its consumer. Scene lifecycle influences when connections and references exist.

**Common failures:**

- Emitting a signal before the listener connects looks like a mysterious missing event.

**Suggested reading:**

- Required: [Godot: Using signals](https://docs.godotengine.org/en/stable/getting_started/step_by_step/signals.html) — Read **the relevant examples**. Your goal is to explain: Signals let a child report an event without knowing its consumer. Afterward, test the idea in a throwaway Godot scene; do not copy the tutorial wholesale.

**Practice:**


**Try it (guided):** Hands-on: Emit a signal whenever the character enters a marked area.

Success checks:
- Add a reset button and a status label; reconnect/reinstantiate the scene twice without duplicate callbacks.
- Show the guided implementation with one controlled variation; describe why the behavior changes.
- Test this failure mode deliberately: Emitting a signal before the listener connects looks like a mysterious missing event.

**Build it (independent):** Independent: Build two interactive floor pads: one changes character color, one increments a counter; connect without hardcoded global lookups.

Success checks:
- Add a reset button and a status label; reconnect/reinstantiate the scene twice without duplicate callbacks.
- Build the extension in a separate scene or script, and explain how its architecture differs from the guided example.
- Test this failure mode deliberately: Emitting a signal before the listener connects looks like a mysterious missing event.

**Knowledge check:** Why is a signal often preferable to making the pad call the HUD directly?

**Self-review:** A good answer should mention: Signals let a child report an event without knowing its consumer. Scene lifecycle influences when connections and references exist. It should also distinguish the common failure: Emitting a signal before the listener connects looks like a mysterious missing event.

---

### 6. Debugging instead of guessing

Use the remote scene tree, inspector, breakpoints and visible debug text to confirm the game state rather than guess.

**Common failures:**

- Randomly changing code while reproducing an error hides the root cause.

**Suggested reading:**

- Required: [Godot: Debugging and profiling](https://docs.godotengine.org/en/stable/tutorials/scripting/debug/index.html) — Read **the relevant examples**. Your goal is to explain: Use the remote scene tree, inspector, breakpoints and visible debug text to confirm the game state rather than guess. Afterward, test the idea in a throwaway Godot scene; do not copy the tutorial wholesale.

**Practice:**


**Try it (guided):** Hands-on: Place a breakpoint on reset and inspect the player position.

Success checks:
- Intentionally break an input mapping, locate the fault through an observable trace, and restore it without rewriting the movement script.
- Show the guided implementation with one controlled variation; describe why the behavior changes.
- Test this failure mode deliberately: Randomly changing code while reproducing an error hides the root cause.

**Build it (independent):** Independent: Intentionally introduce three playground bugs, diagnose each with debugger evidence and record root causes.

Success checks:
- Intentionally break an input mapping, locate the fault through an observable trace, and restore it without rewriting the movement script.
- Build the extension in a separate scene or script, and explain how its architecture differs from the guided example.
- Test this failure mode deliberately: Randomly changing code while reproducing an error hides the root cause.

**Knowledge check:** Which runtime observation would distinguish bad input from bad movement math?

**Self-review:** A good answer should mention: Use the remote scene tree, inspector, breakpoints and visible debug text to confirm the game state rather than guess. It should also distinguish the common failure: Randomly changing code while reproducing an error hides the root cause.

---

### 7. Movement Playground — first iteration

Create a top-down playground with a movable square, labeled controls, configurable walking speed and a reset action. Use placeholder art. Document node responsibilities.

**Suggested reading:**

- Recommended: [Godot: Step by step](https://docs.godotengine.org/en/stable/getting_started/step_by_step/index.html) — Revisit the relevant course sections only when blocked.

**Practice:**


**Movement Playground — first iteration (course_project):** Create a top-down playground with a movable square, labeled controls, configurable walking speed and a reset action. Use placeholder art. Document node responsibilities.

Success checks:
- Remap WASD controls without changing game code.
- Reset after moving twice and confirm both position and UI state reset.
- Instantiate two different objects through reusable scenes.

**Knowledge check:** Which implementation decisions would you change if you rebuilt this project?

**Self-review:** Your review should cite actual design decisions, a reproduced defect, feedback, and one alternative you decided against.

---


## Vectors and expressive 2D movement [Core]

Build intuition for game mathematics by testing contrasting control schemes.

**Prerequisites:** g01-editor
**Suggested structured study:** 28 hours (not a complete game production budget)

### 1. Position, displacement and Vector2

A position is a point in a coordinate space; displacement is a difference between two points. Vector2 can represent direction, velocity and offsets but the units differ.

**Common failures:**

- Confusing global and local coordinates makes followers jump when a parent moves.

**Suggested reading:**

- Required: [Godot: Vector math](https://docs.godotengine.org/en/stable/tutorials/math/vector_math.html) — Read **the relevant examples**. Your goal is to explain: A position is a point in a coordinate space; displacement is a difference between two points. Afterward, test the idea in a throwaway Godot scene; do not copy the tutorial wholesale.
- Optional: [Godot: 2D movement overview](https://docs.godotengine.org/en/stable/tutorials/2d/2d_movement.html) — Optional background: compare the examples with your implementation of position, displacement and vector2. Focus on design tradeoffs, not memorizing an API.

**Practice:**


**Try it (guided):** Hands-on: Draw an arrow from player to mouse pointer; show its coordinates.

Success checks:
- Move and rotate a parent node; correctly draw both the local and global position of a child.
- Show the guided implementation with one controlled variation; describe why the behavior changes.
- Test this failure mode deliberately: Confusing global and local coordinates makes followers jump when a parent moves.

**Build it (independent):** Independent: Build an object-chasing cursor that follows the pointer using a displacement vector; toggle local/global display.

Success checks:
- Move and rotate a parent node; correctly draw both the local and global position of a child.
- Build the extension in a separate scene or script, and explain how its architecture differs from the guided example.
- Test this failure mode deliberately: Confusing global and local coordinates makes followers jump when a parent moves.

**Knowledge check:** How does direction differ from position?

**Self-review:** A good answer should mention: A position is a point in a coordinate space; displacement is a difference between two points. Vector2 can represent direction, velocity and offsets but the units differ. It should also distinguish the common failure: Confusing global and local coordinates makes followers jump when a parent moves.

---

### 2. Magnitude and normalization

Magnitude tells you how long a vector is; normalizing a nonzero vector produces unit length while preserving direction.

**Common failures:**

- Normalization does not change a nonzero vector's direction, and attempting to normalize a zero vector needs care.

**Suggested reading:**

- Required: [Godot: Vector math](https://docs.godotengine.org/en/stable/tutorials/math/vector_math.html) — Read **the relevant examples**. Your goal is to explain: Magnitude tells you how long a vector is; normalizing a nonzero vector produces unit length while preserving direction. Afterward, test the idea in a throwaway Godot scene; do not copy the tutorial wholesale.

**Practice:**


**Try it (guided):** Hands-on: Log input vector length for straight and diagonal movement.

Success checks:
- Compare cardinal and diagonal input and verify both yield the same speed within a small tolerance.
- Show the guided implementation with one controlled variation; describe why the behavior changes.
- Test this failure mode deliberately: Normalization does not change a nonzero vector's direction, and attempting to normalize a zero vector needs care.

**Build it (independent):** Independent: Create a sprint track that accurately compares straight versus diagonal traversal before and after normalization.

Success checks:
- Compare cardinal and diagonal input and verify both yield the same speed within a small tolerance.
- Build the extension in a separate scene or script, and explain how its architecture differs from the guided example.
- Test this failure mode deliberately: Normalization does not change a nonzero vector's direction, and attempting to normalize a zero vector needs care.

**Knowledge check:** For a nonzero vector, what does normalization change, what does it preserve, and how should you handle a zero-length vector?

**Self-review:** A good answer should mention: Magnitude tells you how long a vector is; normalizing a nonzero vector produces unit length while preserving direction. It should also distinguish the common failure: Normalization does not change a nonzero vector's direction, and attempting to normalize a zero vector needs care.

---

### 3. Rotation, angles and trigonometry

Rotation is an angle, and direction can be built from trigonometry or transformed local axes. Godot's positive Y points down on screen.

**Common failures:**

- Mixing degrees and radians or a sprite's visual forward direction makes thrust point sideways.

**Suggested reading:**

- Required: [Godot: 2D movement overview](https://docs.godotengine.org/en/stable/tutorials/2d/2d_movement.html) — Read **the relevant examples**. Your goal is to explain: Rotation is an angle, and direction can be built from trigonometry or transformed local axes. Afterward, test the idea in a throwaway Godot scene; do not copy the tutorial wholesale.

**Practice:**


**Try it (guided):** Hands-on: Make a character point toward the mouse with radians correctly handled.

Success checks:
- Rotate a pointer through a full turn; thrust follows its visible forward direction at four test angles.
- Show the guided implementation with one controlled variation; describe why the behavior changes.
- Test this failure mode deliberately: Mixing degrees and radians or a sprite's visual forward direction makes thrust point sideways.

**Build it (independent):** Independent: Create a radial shooting gallery: rotate a turret, aim and align facing to targets.

Success checks:
- Rotate a pointer through a full turn; thrust follows its visible forward direction at four test angles.
- Build the extension in a separate scene or script, and explain how its architecture differs from the guided example.
- Test this failure mode deliberately: Mixing degrees and radians or a sprite's visual forward direction makes thrust point sideways.

**Knowledge check:** Why can degree/radian confusion look like a broken movement system?

**Self-review:** A good answer should mention: Rotation is an angle, and direction can be built from trigonometry or transformed local axes. Godot's positive Y points down on screen. It should also distinguish the common failure: Mixing degrees and radians or a sprite's visual forward direction makes thrust point sideways.

---

### 4. Velocity, acceleration and drag

Acceleration changes velocity over time; velocity changes position over time. Damping is a design choice, not a generic on/off friction switch.

**Common failures:**

- Multiplying movement by delta twice can produce inconsistent motion; overwriting velocity destroys inertia.

**Suggested reading:**

- Required: [Gaffer on Games — Fix Your Timestep!](https://gafferongames.com/post/fix_your_timestep/) — Read **Fixed timestep and accumulator**. Your goal is to explain: Acceleration changes velocity over time; velocity changes position over time. Afterward, test the idea in a throwaway Godot scene; do not copy the tutorial wholesale.

**Practice:**


**Try it (guided):** Hands-on: Implement instant-start and accelerating movement modes.

Success checks:
- Compare 30, 60 and 120 FPS movement over five simulated seconds and document measured displacement.
- Show the guided implementation with one controlled variation; describe why the behavior changes.
- Test this failure mode deliberately: Multiplying movement by delta twice can produce inconsistent motion; overwriting velocity destroys inertia.

**Build it (independent):** Independent: Create an ice-rink character with tunable drag, and show a velocity arrow that reveals momentum.

Success checks:
- Compare 30, 60 and 120 FPS movement over five simulated seconds and document measured displacement.
- Build the extension in a separate scene or script, and explain how its architecture differs from the guided example.
- Test this failure mode deliberately: Multiplying movement by delta twice can produce inconsistent motion; overwriting velocity destroys inertia.

**Knowledge check:** Why can acceleration and top speed change game feel independently?

**Self-review:** A good answer should mention: Acceleration changes velocity over time; velocity changes position over time. Damping is a design choice, not a generic on/off friction switch. It should also distinguish the common failure: Multiplying movement by delta twice can produce inconsistent motion; overwriting velocity destroys inertia.

---

### 5. Interpolation and smooth follow

Interpolation chooses a position between two values; smoothing needs a time-aware model and an intentional target.

**Common failures:**

- Using a fixed lerp weight each frame changes responsiveness with frame rate.

**Suggested reading:**

- Required: [Godot: Vector math](https://docs.godotengine.org/en/stable/tutorials/math/vector_math.html) — Read **the relevant examples**. Your goal is to explain: Interpolation chooses a position between two values; smoothing needs a time-aware model and an intentional target. Afterward, test the idea in a throwaway Godot scene; do not copy the tutorial wholesale.

**Practice:**


**Try it (guided):** Hands-on: Make a follow-camera with adjustable smoothing.

Success checks:
- Create a camera follower and compare response over multiple FPS caps; avoid overshoot and jitter.
- Show the guided implementation with one controlled variation; describe why the behavior changes.
- Test this failure mode deliberately: Using a fixed lerp weight each frame changes responsiveness with frame rate.

**Build it (independent):** Independent: Build a follow-the-leader toy with three orbiting companions and compare interpolation strategies.

Success checks:
- Create a camera follower and compare response over multiple FPS caps; avoid overshoot and jitter.
- Build the extension in a separate scene or script, and explain how its architecture differs from the guided example.
- Test this failure mode deliberately: Using a fixed lerp weight each frame changes responsiveness with frame rate.

**Knowledge check:** When should a movement value be moved toward a target rather than lerped by a fixed factor?

**Self-review:** A good answer should mention: Interpolation chooses a position between two values; smoothing needs a time-aware model and an intentional target. It should also distinguish the common failure: Using a fixed lerp weight each frame changes responsiveness with frame rate.

---

### 6. Asteroids-style thrust, drift and braking

Spaceflight motion is a designed control model: facing direction sets thrust, velocity preserves inertia and damping shapes the feel. Choose whether ship rotation directly sets heading or changes angular velocity. Neither is inherently more realistic or more fun.

**Common failures:**

- Overwriting velocity every frame removes drift; using degrees directly with radian-based trigonometric functions rotates incorrectly.

**Suggested reading:**

- Required: [Godot: 2D movement overview](https://docs.godotengine.org/en/stable/tutorials/2d/2d_movement.html) — Use the Godot 2D movement guide’s rotation-based movement example as a starting contrast. Implement your own acceleration, angular control and damping rules.

**Practice:**


**Controlled experiment (guided):** Make a physics playground with switchable arcade/direct and inertial thrust modes.

Success checks:
- Ship continues drifting when thrust is released in inertial mode.
- Rotation changes thrust direction at 0, 90, 180 and 270 degrees.
- Motion over equal simulation times is reasonably consistent at 30/60/120 FPS.
- Demonstrate and explain the failure mode: Overwriting velocity every frame removes drift; using degrees directly with radian-based trigonometric functions rotates incorrectly.

**Independent transfer (independent):** From a blank scene, implement a second ship type with independently tuned mass-like acceleration and turn rates.

Success checks:
- Ship continues drifting when thrust is released in inertial mode.
- Rotation changes thrust direction at 0, 90, 180 and 270 degrees.
- Motion over equal simulation times is reasonably consistent at 30/60/120 FPS.
- Demonstrate and explain the failure mode: Overwriting velocity every frame removes drift; using degrees directly with radian-based trigonometric functions rotates incorrectly.

**Knowledge check:** Which engineering or game-design tradeoff matters most in this experiment?

**Self-review:** Spaceflight motion is a designed control model: facing direction sets thrust, velocity preserves inertia and damping shapes the feel. Choose whether ship rotation directly sets heading or changes angular velocity. Neither is inherently more realistic or more fun.

---

### 7. Movement Playground — motion lab

Extend the same playground with walking, slippery, dash and analog-feel modes plus small debug visualizations.

**Suggested reading:**

- Recommended: [Godot: 2D movement overview](https://docs.godotengine.org/en/stable/tutorials/2d/2d_movement.html) — Revisit the relevant course sections only when blocked.

**Practice:**


**Movement Playground — motion lab (course_project):** Extend the same playground with walking, slippery, dash and analog-feel modes plus small debug visualizations.

Success checks:
- Measure movement distance at simulated 30/60/120 FPS and compare.
- Ship, eight-way movement and follow camera each have distinct tuned parameters.
- Correctly handle zero input and diagonal normalization.

**Knowledge check:** Which implementation decisions would you change if you rebuilt this project?

**Self-review:** Your review should cite actual design decisions, a reproduced defect, feedback, and one alternative you decided against.

---


## Collisions, interactions and simulation [Core]

Learn to reason about bodies, overlaps, queries and contact responses by building tactile obstacle courses.

**Prerequisites:** g02-math
**Suggested structured study:** 33 hours (not a complete game production budget)

### 1. Shapes, layers and masks

A collision shape is geometry; a layer says what the body belongs to and a mask says what it checks. Draw a collision table before clicking checkboxes.

**Common failures:**

- Putting everything on every layer produces hard-to-debug overlaps and unintended contact.

**Suggested reading:**

- Required: [Godot: Physics documentation](https://docs.godotengine.org/en/stable/tutorials/physics/index.html) — Read **the relevant examples**. Your goal is to explain: A collision shape is geometry; a layer says what the body belongs to and a mask says what it checks. Afterward, test the idea in a throwaway Godot scene; do not copy the tutorial wholesale.

**Practice:**


**Try it (guided):** Hands-on: Add walls and collision shapes to the movement playground.

Success checks:
- Create three categories and verify exactly which pairs block, trigger or ignore each other.
- Show the guided implementation with one controlled variation; describe why the behavior changes.
- Test this failure mode deliberately: Putting everything on every layer produces hard-to-debug overlaps and unintended contact.

**Build it (independent):** Independent: Create colored doors that accept specific types of actors based on collision-layer rules.

Success checks:
- Create three categories and verify exactly which pairs block, trigger or ignore each other.
- Build the extension in a separate scene or script, and explain how its architecture differs from the guided example.
- Test this failure mode deliberately: Putting everything on every layer produces hard-to-debug overlaps and unintended contact.

**Knowledge check:** What is the difference between belonging to a layer and detecting a layer?

**Self-review:** A good answer should mention: A collision shape is geometry; a layer says what the body belongs to and a mask says what it checks. Draw a collision table before clicking checkboxes. It should also distinguish the common failure: Putting everything on every layer produces hard-to-debug overlaps and unintended contact.

---

### 2. CharacterBody2D contact behavior

CharacterBody2D gives explicitly controlled movement and collision response. Sliding, floor flags and movement modes are behavior, not universal physics.

**Common failures:**

- Treating move_and_slide as a generic rigid-body solver leads to incorrect expectations.

**Suggested reading:**

- Required: [Godot — CharacterBody2D](https://docs.godotengine.org/en/stable/classes/class_characterbody2d.html) — Read **move_and_slide and velocity**. Your goal is to explain: CharacterBody2D gives explicitly controlled movement and collision response. Afterward, test the idea in a throwaway Godot scene; do not copy the tutorial wholesale.

**Practice:**


**Try it (guided):** Hands-on: Make the character slide along a sloped or angled wall.

Success checks:
- Slide along a wall and into corners at varying speed; no tunneling or stuck motion in your tested range.
- Show the guided implementation with one controlled variation; describe why the behavior changes.
- Test this failure mode deliberately: Treating move_and_slide as a generic rigid-body solver leads to incorrect expectations.

**Build it (independent):** Independent: Build a maze that includes tight corners, moving blockers and a wall-slide mechanic.

Success checks:
- Slide along a wall and into corners at varying speed; no tunneling or stuck motion in your tested range.
- Build the extension in a separate scene or script, and explain how its architecture differs from the guided example.
- Test this failure mode deliberately: Treating move_and_slide as a generic rigid-body solver leads to incorrect expectations.

**Knowledge check:** Why does directly changing transform position bypass useful collision solving?

**Self-review:** A good answer should mention: CharacterBody2D gives explicitly controlled movement and collision response. Sliding, floor flags and movement modes are behavior, not universal physics. It should also distinguish the common failure: Treating move_and_slide as a generic rigid-body solver leads to incorrect expectations.

---

### 3. Areas and overlap events

Area2D detects occupancy and overlaps without being a solid wall. Signals have entry/exit semantics affected by collision configuration.

**Common failures:**

- A trigger that only uses body_entered can fail to reset when the player leaves.

**Suggested reading:**

- Required: [Godot — Area2D](https://docs.godotengine.org/en/stable/classes/class_area2d.html) — Read **body_entered and body_exited**. Your goal is to explain: Area2D detects occupancy and overlaps without being a solid wall. Afterward, test the idea in a throwaway Godot scene; do not copy the tutorial wholesale.
- Optional: [Godot: Physics documentation](https://docs.godotengine.org/en/stable/tutorials/physics/index.html) — Optional background: compare the examples with your implementation of areas and overlap events. Focus on design tradeoffs, not memorizing an API.

**Practice:**


**Try it (guided):** Hands-on: Create a pressure plate that opens a door while occupied.

Success checks:
- Build an entrance switch that activates on entry and resets on exit, including re-entry after scene reload.
- Show the guided implementation with one controlled variation; describe why the behavior changes.
- Test this failure mode deliberately: A trigger that only uses body_entered can fail to reset when the player leaves.

**Build it (independent):** Independent: Implement a mini museum of triggers: healing pad, hazard, checkpoint, and pickup; test re-entry and exit events.

Success checks:
- Build an entrance switch that activates on entry and resets on exit, including re-entry after scene reload.
- Build the extension in a separate scene or script, and explain how its architecture differs from the guided example.
- Test this failure mode deliberately: A trigger that only uses body_entered can fail to reset when the player leaves.

**Knowledge check:** What behavior belongs on an Area versus a physics body?

**Self-review:** A good answer should mention: Area2D detects occupancy and overlaps without being a solid wall. Signals have entry/exit semantics affected by collision configuration. It should also distinguish the common failure: A trigger that only uses body_entered can fail to reset when the player leaves.

---

### 4. Rigid bodies and impulses

Rigid bodies respond to forces, impulses, mass and damping. Simulated objects should not be manually teleported every frame.

**Common failures:**

- Applying impulses every physics tick is different from a one-shot impulse; it adds continuous momentum.

**Suggested reading:**

- Required: [Godot — RigidBody2D](https://docs.godotengine.org/en/stable/classes/class_rigidbody2d.html) — Read **apply_central_impulse and CCDMode**. Your goal is to explain: Rigid bodies respond to forces, impulses, mass and damping. Afterward, test the idea in a throwaway Godot scene; do not copy the tutorial wholesale.

**Practice:**


**Try it (guided):** Hands-on: Push a crate using an impulse and compare masses.

Success checks:
- Push two different masses with an equal impulse, then show their velocity changes and explain the result.
- Show the guided implementation with one controlled variation; describe why the behavior changes.
- Test this failure mode deliberately: Applying impulses every physics tick is different from a one-shot impulse; it adds continuous momentum.

**Build it (independent):** Independent: Build a tiny bowling alley with objects of varied mass and friction.

Success checks:
- Push two different masses with an equal impulse, then show their velocity changes and explain the result.
- Build the extension in a separate scene or script, and explain how its architecture differs from the guided example.
- Test this failure mode deliberately: Applying impulses every physics tick is different from a one-shot impulse; it adds continuous momentum.

**Knowledge check:** How does a one-time impulse differ from a continuously applied force?

**Self-review:** A good answer should mention: Rigid bodies respond to forces, impulses, mass and damping. Simulated objects should not be manually teleported every frame. It should also distinguish the common failure: Applying impulses every physics tick is different from a one-shot impulse; it adds continuous momentum.

---

### 5. Raycasts and precise queries

Raycasts query along a segment; shape queries cover volume. These can assist targeting, interaction, visibility and fast-object checks.

**Common failures:**

- Checking distance alone ignores walls, and a raycast hit depends on masks and exceptions.

**Suggested reading:**

- Required: [Godot — Ray-casting](https://docs.godotengine.org/en/stable/tutorials/physics/ray-casting.html) — Read **RayCast2D usage**. Your goal is to explain: Raycasts query along a segment; shape queries cover volume. Afterward, test the idea in a throwaway Godot scene; do not copy the tutorial wholesale.

**Practice:**


**Try it (guided):** Hands-on: Show a visible ray from player to cursor that colors on impact.

Success checks:
- Place a wall between player and target; line of sight becomes blocked and returns when moved aside.
- Show the guided implementation with one controlled variation; describe why the behavior changes.
- Test this failure mode deliberately: Checking distance alone ignores walls, and a raycast hit depends on masks and exceptions.

**Build it (independent):** Independent: Make a flashlight puzzle where walls obstruct beams and switches respond only when visible.

Success checks:
- Place a wall between player and target; line of sight becomes blocked and returns when moved aside.
- Build the extension in a separate scene or script, and explain how its architecture differs from the guided example.
- Test this failure mode deliberately: Checking distance alone ignores walls, and a raycast hit depends on masks and exceptions.

**Knowledge check:** Why is distance alone insufficient to prove line of sight?

**Self-review:** A good answer should mention: Raycasts query along a segment; shape queries cover volume. These can assist targeting, interaction, visibility and fast-object checks. It should also distinguish the common failure: Checking distance alone ignores walls, and a raycast hit depends on masks and exceptions.

---

### 6. Fast asteroids, impulses and continuous collision detection

A moving body can cross a narrow collider between discrete physics updates. Shape and motion choice, physics frequency and continuous collision detection have performance and correctness tradeoffs.

**Common failures:**

- Checking overlaps only at the current position can miss fast contact; enabling CCD on everything needlessly raises the physics cost.

**Suggested reading:**

- Required: [Godot — RigidBody2D](https://docs.godotengine.org/en/stable/classes/class_rigidbody2d.html) — Compare collision response using the RigidBody2D reference. Look for CCDMode and force/impulse semantics.

**Practice:**


**Controlled experiment (guided):** Fire fast moving projectiles at thin walls and record contact rates without and with CCD.

Success checks:
- Projectiles cannot pass through the tested wall under the chosen speed range.
- Equal impulses produce different velocity changes for unequal masses.
- Compare collision reliability and physics cost with CCD off versus on.
- Demonstrate and explain the failure mode: Checking overlaps only at the current position can miss fast contact; enabling CCD on everything needlessly raises the physics cost.

**Independent transfer (independent):** Design a stress test of 50 moving rocks using selective CCD where needed, then profile the physics impact.

Success checks:
- Projectiles cannot pass through the tested wall under the chosen speed range.
- Equal impulses produce different velocity changes for unequal masses.
- Compare collision reliability and physics cost with CCD off versus on.
- Demonstrate and explain the failure mode: Checking overlaps only at the current position can miss fast contact; enabling CCD on everything needlessly raises the physics cost.

**Knowledge check:** Which engineering or game-design tradeoff matters most in this experiment?

**Self-review:** A moving body can cross a narrow collider between discrete physics updates. Shape and motion choice, physics frequency and continuous collision detection have performance and correctness tradeoffs.

---

### 7. Towing, joints and stable attachment

A tow line is a constraint between two moving entities. Godot joints are one solution; a controlled distance constraint or arcade follow behavior may produce a better feel. Stability depends on collision geometry, mass ratios, forces and update rules.

**Common failures:**

- Teleporting a simulated rigid body each frame can inject energy and create jitter; an unconstrained tether can stretch or snap unfairly.

**Suggested reading:**

- Required: [Godot — PinJoint2D](https://docs.godotengine.org/en/stable/classes/class_pinjoint2d.html) — Read the PinJoint2D reference and physics overview. First prototype a real joint, then compare with an intentionally simplified arcade tether.

**Practice:**


**Controlled experiment (guided):** Attach a crate to a controllable player and steer around an L-shaped wall.

Success checks:
- Repeated attach/detach never leaves duplicate joints.
- Cargo behaves predictably around obstacles and during fast turns.
- Document why the chosen physical or arcade approach best serves the game.
- Demonstrate and explain the failure mode: Teleporting a simulated rigid body each frame can inject energy and create jitter; an unconstrained tether can stretch or snap unfairly.

**Independent transfer (independent):** From a blank scene, support switching cargo masses, detach/reattach and a capped towing speed in one consistent control scheme.

Success checks:
- Repeated attach/detach never leaves duplicate joints.
- Cargo behaves predictably around obstacles and during fast turns.
- Document why the chosen physical or arcade approach best serves the game.
- Demonstrate and explain the failure mode: Teleporting a simulated rigid body each frame can inject energy and create jitter; an unconstrained tether can stretch or snap unfairly.

**Knowledge check:** Which engineering or game-design tradeoff matters most in this experiment?

**Self-review:** A tow line is a constraint between two moving entities. Godot joints are one solution; a controlled distance constraint or arcade follow behavior may produce a better feel. Stability depends on collision geometry, mass ratios, forces and update rules.

---

### 8. Collision Carnival

Create a four-room playground featuring walls, triggers, pushable crates and line-of-sight puzzles.

**Suggested reading:**

- Recommended: [Godot: 2D movement overview](https://docs.godotengine.org/en/stable/tutorials/2d/2d_movement.html) — Revisit the relevant course sections only when blocked.

**Practice:**


**Collision Carnival (course_project):** Create a four-room playground featuring walls, triggers, pushable crates and line-of-sight puzzles.

Success checks:
- Wall, sensor and crate use intentionally distinct collision masks.
- Test corner contact, fast movement and a moving blocker.
- Reset interaction states after object exits trigger.

**Knowledge check:** Which implementation decisions would you change if you rebuilt this project?

**Self-review:** Your review should cite actual design decisions, a reproduced defect, feedback, and one alternative you decided against.

---


## Finish a tiny game — the first release [Core]

Ship a tiny but complete game before spending months accumulating features.

**Prerequisites:** g03-physics
**Suggested structured study:** 23 hours (not a complete game production budget)

### 1. One rule and a tiny goal

A tiny game should be described in one sentence with one win condition and one way to fail. Remove every mechanic that does not serve that promise.

**Common failures:**

- Adding mechanics before the first complete loop postpones finishing.

**Suggested reading:**

- Required: [Game Design Concepts — Early Design Process](https://gamedesignconcepts.wordpress.com/2009/07/09/level-4-the-early-stages-of-the-design-process/) — Read Iterative process and constraints. As you read, identify one idea you can directly apply to this task: One rule and a tiny goal. Test that idea through the guided assignment.

**Practice:**


**Try it (guided):** Describe a 60-second game involving movement and one obstacle.

Success checks:
- A new player explains the goal and failure condition without a verbal tutorial.
- Adding mechanics before the first complete loop postpones finishing.

**Independent extension (independent):** Create a second alternative rule, test both quickly and select one.

Success checks:
- A new player explains the goal and failure condition without a verbal tutorial.
- Prove the extension works in a fresh scene and explain how it differs from the guided task.

**Knowledge check:** When would you apply one rule and a tiny goal and what can go wrong?

**Self-review:** A complete response explains A tiny game should be described in one sentence with one win condition and one way to fail. Remove every mechanic that does not serve that promise. and flags Adding mechanics before the first complete loop postpones finishing.

---

### 2. Start, win, lose and restart

A complete game has recognizable entry, active play, success, failure and replay states. These transitions are gameplay logic, not just menus.

**Common failures:**

- Resetting only the player position leaves timers, score and enemies stale.

**Suggested reading:**

- Required: [Game Programming Patterns: State](https://gameprogrammingpatterns.com/state.html) — Study the relevant implementation or design section; pay particular attention to: A complete game has recognizable entry, active play, success, failure and replay states. These transitions are gameplay logic, not just menus.

**Practice:**


**Try it (guided):** Implement a five-state loop with an explicit restart.

Success checks:
- Five consecutive playthroughs reset every variable and never duplicate a listener.
- Resetting only the player position leaves timers, score and enemies stale.

**Independent extension (independent):** Add a pause/restart flow without breaking the win screen.

Success checks:
- Five consecutive playthroughs reset every variable and never duplicate a listener.
- Prove the extension works in a fresh scene and explain how it differs from the guided task.

**Knowledge check:** When would you apply start, win, lose and restart and what can go wrong?

**Self-review:** A complete response explains A complete game has recognizable entry, active play, success, failure and replay states. These transitions are gameplay logic, not just menus. and flags Resetting only the player position leaves timers, score and enemies stale.

---

### 3. One readable difficulty curve

Difficulty should increase by asking for better decisions or execution, not by surprising the player unfairly.

**Common failures:**

- Changing hazards while teaching controls makes initial failures incomprehensible.

**Suggested reading:**

- Required: [Game Design Concepts — Mechanics and Dynamics](https://gamedesignconcepts.wordpress.com/2009/07/13/level-5-mechanics-and-dynamics/) — Read MDA; rules and emergent behaviors. As you read, identify one idea you can directly apply to this task: One readable difficulty curve. Test that idea through the guided assignment.

**Practice:**


**Try it (guided):** Build a 90-second challenge with two successive hazard variations.

Success checks:
- A first-time tester survives an introductory moment and then encounters a clearly tougher challenge.
- Changing hazards while teaching controls makes initial failures incomprehensible.

**Independent extension (independent):** Allow a difficulty modifier without changing the win/fail architecture.

Success checks:
- A first-time tester survives an introductory moment and then encounters a clearly tougher challenge.
- Prove the extension works in a fresh scene and explain how it differs from the guided task.

**Knowledge check:** When would you apply one readable difficulty curve and what can go wrong?

**Self-review:** A complete response explains Difficulty should increase by asking for better decisions or execution, not by surprising the player unfairly. and flags Changing hazards while teaching controls makes initial failures incomprehensible.

---

### 4. Observe a first-time player

Silent observation reveals what players misunderstand before you explain the controls or goal.

**Common failures:**

- Coaching the test invalidates evidence about the design.

**Suggested reading:**

- Required: [Game Design Concepts — Early Design Process](https://gamedesignconcepts.wordpress.com/2009/07/09/level-4-the-early-stages-of-the-design-process/) — Read Iterative process and constraints. As you read, identify one idea you can directly apply to this task: Observe a first-time player. Test that idea through the guided assignment.

**Practice:**


**Try it (guided):** Give the prototype to someone for five minutes and take timestamped notes.

Success checks:
- Record three moments of hesitation and fix one based on observed behavior.
- Coaching the test invalidates evidence about the design.

**Independent extension (independent):** Repeat the test after one change and compare the outcome.

Success checks:
- Record three moments of hesitation and fix one based on observed behavior.
- Prove the extension works in a fresh scene and explain how it differs from the guided task.

**Knowledge check:** When would you apply observe a first-time player and what can go wrong?

**Self-review:** A complete response explains Silent observation reveals what players misunderstand before you explain the controls or goal. and flags Coaching the test invalidates evidence about the design.

---

### 5. Package and share a build

A playable artifact must run without your editor, assets folder or developer explanation. Export errors are part of production work.

**Common failures:**

- Running in the editor is not evidence the export works on another machine.

**Suggested reading:**

- Required: [Godot — Exporting projects](https://docs.godotengine.org/en/stable/tutorials/export/exporting_projects.html) — Study the relevant implementation or design section; pay particular attention to: A playable artifact must run without your editor, assets folder or developer explanation. Export errors are part of production work.

**Practice:**


**Try it (guided):** Export a desktop build and test it from a fresh folder.

Success checks:
- A second person launches the exported build and reaches the ending without your assistance.
- Running in the editor is not evidence the export works on another machine.

**Independent extension (independent):** Make a versioned release with a short changelog and simple controls README.

Success checks:
- A second person launches the exported build and reaches the ending without your assistance.
- Prove the extension works in a fresh scene and explain how it differs from the guided task.

**Knowledge check:** When would you apply package and share a build and what can go wrong?

**Self-review:** A complete response explains A playable artifact must run without your editor, assets folder or developer explanation. Export errors are part of production work. and flags Running in the editor is not evidence the export works on another machine.

---

### 6. The One-Minute Escape

Build and share a complete five-minute-or-less obstacle escape game. It needs one mechanic, a title/start screen, a clear objective, success, failure, retry, and a real exported build.

**Suggested reading:**

- Recommended: [Game Design Concepts — Introduction](https://gamedesignconcepts.wordpress.com/) — Revisit reference material only for concepts you cannot explain; design the integration independently.

**Practice:**


**The One-Minute Escape (course_project):** Build and share a complete five-minute-or-less obstacle escape game. It needs one mechanic, a title/start screen, a clear objective, success, failure, retry, and a real exported build.

Success checks:
- A first-time player finishes or fails without explanation.
- Repeated restart cleans state correctly.
- Shareable export launches on a second machine.

**Knowledge check:** What did the project teach you about scope, implementation ownership and failure recovery?

**Self-review:** Name a design choice, an actual bug and a measured improvement.

---


## Animation and game feel [Core]

Make actions readable and satisfying through timing, motion, effects and sound.

**Prerequisites:** g03b-tinygame
**Suggested structured study:** 23 hours (not a complete game production budget)

### 1. Frames, keyframes and easing

Animation is a sequence of readable states and timed changes. Timing, anticipation and easing influence perceived weight.

**Common failures:**

- Smooth interpolation everywhere can make impacts feel mushy and unresponsive.

**Suggested reading:**

- Required: [Godot: Animation introduction](https://docs.godotengine.org/en/stable/tutorials/animation/introduction.html) — Read **the relevant examples**. Your goal is to explain: Animation is a sequence of readable states and timed changes. Afterward, test the idea in a throwaway Godot scene; do not copy the tutorial wholesale.

**Practice:**


**Try it (guided):** Hands-on: Animate a bouncing coin with squash-and-stretch keyframes.

Success checks:
- Animate the same impact using linear and eased timing, then compare which communicates force more clearly.
- Show the guided implementation with one controlled variation; describe why the behavior changes.
- Test this failure mode deliberately: Smooth interpolation everywhere can make impacts feel mushy and unresponsive.

**Build it (independent):** Independent: Give the player distinct idle and moving animations and compare timing variations.

Success checks:
- Animate the same impact using linear and eased timing, then compare which communicates force more clearly.
- Build the extension in a separate scene or script, and explain how its architecture differs from the guided example.
- Test this failure mode deliberately: Smooth interpolation everywhere can make impacts feel mushy and unresponsive.

**Knowledge check:** What changes in how heavy an object feels when its ease curve changes?

**Self-review:** A good answer should mention: Animation is a sequence of readable states and timed changes. Timing, anticipation and easing influence perceived weight. It should also distinguish the common failure: Smooth interpolation everywhere can make impacts feel mushy and unresponsive.

---

### 2. AnimatedSprite2D and sprite sheets

Sprite sheets store frames; AnimatedSprite2D plays visual sequences but should not own the rules of combat or movement.

**Common failures:**

- Using animation playback state as the only source of gameplay truth couples visuals to rules.

**Suggested reading:**

- Required: [Godot: 2D sprite animation](https://docs.godotengine.org/en/stable/tutorials/2d/2d_sprite_animation.html) — Read **the relevant examples**. Your goal is to explain: Sprite sheets store frames; AnimatedSprite2D plays visual sequences but should not own the rules of combat or movement. Afterward, test the idea in a throwaway Godot scene; do not copy the tutorial wholesale.

**Practice:**


**Try it (guided):** Hands-on: Create an idle and walk loop with placeholder sprites.

Success checks:
- Trigger idle/walk/hit animation from an explicit gameplay state and verify all three can transition back.
- Show the guided implementation with one controlled variation; describe why the behavior changes.
- Test this failure mode deliberately: Using animation playback state as the only source of gameplay truth couples visuals to rules.

**Build it (independent):** Independent: Build a four-direction character with directional walking animations and no flicker on direction changes.

Success checks:
- Trigger idle/walk/hit animation from an explicit gameplay state and verify all three can transition back.
- Build the extension in a separate scene or script, and explain how its architecture differs from the guided example.
- Test this failure mode deliberately: Using animation playback state as the only source of gameplay truth couples visuals to rules.

**Knowledge check:** How should animation choice respond when movement magnitude approaches zero?

**Self-review:** A good answer should mention: Sprite sheets store frames; AnimatedSprite2D plays visual sequences but should not own the rules of combat or movement. It should also distinguish the common failure: Using animation playback state as the only source of gameplay truth couples visuals to rules.

---

### 3. AnimationPlayer and Tweens

AnimationPlayer drives authored property changes; Tweens are convenient for dynamic one-off interpolations. Choose according to reuse and interruption behavior.

**Common failures:**

- Spawning unlimited tweens on repeated input can leave competing animations running.

**Suggested reading:**

- Required: [Godot — Tween reference](https://docs.godotengine.org/en/stable/classes/class_tween.html) — Read **Creation and kill methods**. Your goal is to explain: AnimationPlayer drives authored property changes; Tweens are convenient for dynamic one-off interpolations. Afterward, test the idea in a throwaway Godot scene; do not copy the tutorial wholesale.
- Optional: [Godot: Animation introduction](https://docs.godotengine.org/en/stable/tutorials/animation/introduction.html) — Optional background: compare the examples with your implementation of animationplayer and tweens. Focus on design tradeoffs, not memorizing an API.

**Practice:**


**Try it (guided):** Hands-on: Animate a door, chest or platform opening.

Success checks:
- Spam an interaction input and confirm a cancelled/replaced tween leaves the object in a valid end state.
- Show the guided implementation with one controlled variation; describe why the behavior changes.
- Test this failure mode deliberately: Spawning unlimited tweens on repeated input can leave competing animations running.

**Build it (independent):** Independent: Make three interactive props with unique anticipation, impact and settle timings.

Success checks:
- Spam an interaction input and confirm a cancelled/replaced tween leaves the object in a valid end state.
- Build the extension in a separate scene or script, and explain how its architecture differs from the guided example.
- Test this failure mode deliberately: Spawning unlimited tweens on repeated input can leave competing animations running.

**Knowledge check:** When is an AnimationPlayer preferable to a runtime Tween?

**Self-review:** A good answer should mention: AnimationPlayer drives authored property changes; Tweens are convenient for dynamic one-off interpolations. Choose according to reuse and interruption behavior. It should also distinguish the common failure: Spawning unlimited tweens on repeated input can leave competing animations running.

---

### 4. Animation state and transitions

AnimationTree combines and transitions animations, but transitions must follow game-state decisions and avoid rapid flicker.

**Common failures:**

- Mutually contradictory state updates can cause endlessly restarting animation transitions.

**Suggested reading:**

- Required: [Godot: Using AnimationTree](https://docs.godotengine.org/en/stable/tutorials/animation/animation_tree.html) — Read **the relevant examples**. Your goal is to explain: AnimationTree combines and transitions animations, but transitions must follow game-state decisions and avoid rapid flicker. Afterward, test the idea in a throwaway Godot scene; do not copy the tutorial wholesale.

**Practice:**


**Try it (guided):** Hands-on: Implement idle, run and hurt animation transitions.

Success checks:
- Switch walking direction quickly, stop and restart; animation states remain coherent without stuck poses.
- Show the guided implementation with one controlled variation; describe why the behavior changes.
- Test this failure mode deliberately: Mutually contradictory state updates can cause endlessly restarting animation transitions.

**Build it (independent):** Independent: Build an animation-debug overlay showing chosen state and transition, including interrupted actions.

Success checks:
- Switch walking direction quickly, stop and restart; animation states remain coherent without stuck poses.
- Build the extension in a separate scene or script, and explain how its architecture differs from the guided example.
- Test this failure mode deliberately: Mutually contradictory state updates can cause endlessly restarting animation transitions.

**Knowledge check:** What happens if hurt and movement request contradictory animations?

**Self-review:** A good answer should mention: AnimationTree combines and transitions animations, but transitions must follow game-state decisions and avoid rapid flicker. It should also distinguish the common failure: Mutually contradictory state updates can cause endlessly restarting animation transitions.

---

### 5. Particles, audio and hit feedback

Particles and audio reinforce actions when they follow the correct event and timing. Feedback should be legible even without polished artwork.

**Common failures:**

- More screen shake and particles do not necessarily improve clarity; they can obscure hazards.

**Suggested reading:**

- Required: [Godot — 2D particle systems](https://docs.godotengine.org/en/stable/tutorials/2d/particle_systems_2d.html) — Read **GPUParticles2D parameters**. Your goal is to explain: Particles and audio reinforce actions when they follow the correct event and timing. Afterward, test the idea in a throwaway Godot scene; do not copy the tutorial wholesale.

**Practice:**


**Try it (guided):** Hands-on: Add a soft landing dust puff and footstep sound.

Success checks:
- Make a hit visible and audible, add an accessibility toggle for shake, and retest with audio muted.
- Show the guided implementation with one controlled variation; describe why the behavior changes.
- Test this failure mode deliberately: More screen shake and particles do not necessarily improve clarity; they can obscure hazards.

**Build it (independent):** Independent: Create a hit-feedback lab with adjustable shake, flash, particles and sound; test subtle versus excessive feedback.

Success checks:
- Make a hit visible and audible, add an accessibility toggle for shake, and retest with audio muted.
- Build the extension in a separate scene or script, and explain how its architecture differs from the guided example.
- Test this failure mode deliberately: More screen shake and particles do not necessarily improve clarity; they can obscure hazards.

**Knowledge check:** Which feedback conveys essential information versus pure decoration?

**Self-review:** A good answer should mention: Particles and audio reinforce actions when they follow the correct event and timing. Feedback should be legible even without polished artwork. It should also distinguish the common failure: More screen shake and particles do not necessarily improve clarity; they can obscure hazards.

---

### 6. Animated Training Dummy

Build a small practice room with idle, walk, dash, interact and hit reactions plus accessible feedback settings.

**Suggested reading:**

- Recommended: [Godot: Animation introduction](https://docs.godotengine.org/en/stable/tutorials/animation/introduction.html) — Revisit the relevant course sections only when blocked.

**Practice:**


**Animated Training Dummy (course_project):** Build a small practice room with idle, walk, dash, interact and hit reactions plus accessible feedback settings.

Success checks:
- Switch between idle, movement and reaction with no stuck poses.
- Quick repeated input cancels conflicting tweens cleanly.
- A reduced-motion setting suppresses shake but preserves hit readability.

**Knowledge check:** Which implementation decisions would you change if you rebuilt this project?

**Self-review:** Your review should cite actual design decisions, a reproduced defect, feedback, and one alternative you decided against.

---


## Game code architecture [Core]

Learn how to combine mechanics into changeable systems while avoiding premature frameworks.

**Prerequisites:** g04-animation
**Suggested structured study:** 26 hours (not a complete game production budget)

### 1. Define responsibility boundaries

A scene or script should own a clear responsibility and expose a narrow contract. Architecture is a tool for change, not a diagramming contest.

**Common failures:**

- A single GameManager handling every input, inventory, enemy and menu creates hidden dependencies.

**Suggested reading:**

- Required: [Godot — Scene Organization](https://docs.godotengine.org/en/stable/tutorials/best_practices/scene_organization.html) — Read Communication between reusable scenes. As you read, identify one idea you can directly apply to this task: Define responsibility boundaries. Test that idea through the guided assignment.
- Optional: [Game Programming Patterns: Contents](https://gameprogrammingpatterns.com/contents.html) — Optional background: compare the examples with your implementation of define responsibility boundaries. Focus on design tradeoffs, not memorizing an API.

**Practice:**


**Try it (guided):** Hands-on: Sketch responsibility boundaries for your movement playground.

Success checks:
- Split a two-purpose script into separate components; modify one mechanic without changing the other.
- Show the guided implementation with one controlled variation; describe why the behavior changes.
- Test this failure mode deliberately: A single GameManager handling every input, inventory, enemy and menu creates hidden dependencies.

**Build it (independent):** Independent: Refactor player input, movement and animation into clearly separated responsibilities and explain the resulting trade-offs.

Success checks:
- Split a two-purpose script into separate components; modify one mechanic without changing the other.
- Build the extension in a separate scene or script, and explain how its architecture differs from the guided example.
- Test this failure mode deliberately: A single GameManager handling every input, inventory, enemy and menu creates hidden dependencies.

**Knowledge check:** What data must the player own versus the world or UI?

**Self-review:** A good answer should mention: A scene or script should own a clear responsibility and expose a narrow contract. Architecture is a tool for change, not a diagramming contest. It should also distinguish the common failure: A single GameManager handling every input, inventory, enemy and menu creates hidden dependencies.

---

### 2. Finite-state machines

A finite-state machine has named states and guarded transitions. State is explicit so invalid transitions can be rejected.

**Common failures:**

- Several independent booleans can permit impossible combinations, such as dead and sprinting.

**Suggested reading:**

- Required: [Game Programming Patterns: State](https://gameprogrammingpatterns.com/state.html) — Read **the relevant examples**. Your goal is to explain: A finite-state machine has named states and guarded transitions. Afterward, test the idea in a throwaway Godot scene; do not copy the tutorial wholesale.

**Practice:**


**Try it (guided):** Hands-on: Add player states: normal, stunned and disabled.

Success checks:
- List all legal transitions; demonstrate an invalid transition being rejected and logged.
- Show the guided implementation with one controlled variation; describe why the behavior changes.
- Test this failure mode deliberately: Several independent booleans can permit impossible combinations, such as dead and sprinting.

**Build it (independent):** Independent: Build a traffic-control room where switches change an NPC between wait, roam and flee states.

Success checks:
- List all legal transitions; demonstrate an invalid transition being rejected and logged.
- Build the extension in a separate scene or script, and explain how its architecture differs from the guided example.
- Test this failure mode deliberately: Several independent booleans can permit impossible combinations, such as dead and sprinting.

**Knowledge check:** What invalid combinations does a state machine prevent?

**Self-review:** A good answer should mention: A finite-state machine has named states and guarded transitions. State is explicit so invalid transitions can be rejected. It should also distinguish the common failure: Several independent booleans can permit impossible combinations, such as dead and sprinting.

---

### 3. Signals, commands and event flow

Signals and commands model different flows: events say something happened; commands request a change. Neither should become a universal hidden bus.

**Common failures:**

- Using global events for everything makes call sites and effects difficult to trace.

**Suggested reading:**

- Required: [Godot — Scene Organization](https://docs.godotengine.org/en/stable/tutorials/best_practices/scene_organization.html) — Read Communication between reusable scenes. As you read, identify one idea you can directly apply to this task: Signals, commands and event flow. Test that idea through the guided assignment.
- Optional: [Game Programming Patterns: Contents](https://gameprogrammingpatterns.com/contents.html) — Optional background: compare the examples with your implementation of signals, commands and event flow. Focus on design tradeoffs, not memorizing an API.

**Practice:**


**Try it (guided):** Hands-on: Make pickup events update a counter without direct HUD coupling.

Success checks:
- Trigger a door using a switch; document who owns the state and trace the event from input to result.
- Show the guided implementation with one controlled variation; describe why the behavior changes.
- Test this failure mode deliberately: Using global events for everything makes call sites and effects difficult to trace.

**Build it (independent):** Independent: Implement a single gameplay event that updates audio, UI and quest progress without importing those modules into the object.

Success checks:
- Trigger a door using a switch; document who owns the state and trace the event from input to result.
- Build the extension in a separate scene or script, and explain how its architecture differs from the guided example.
- Test this failure mode deliberately: Using global events for everything makes call sites and effects difficult to trace.

**Knowledge check:** Who owns a game event and when should listeners respond?

**Self-review:** A good answer should mention: Signals and commands model different flows: events say something happened; commands request a change. Neither should become a universal hidden bus. It should also distinguish the common failure: Using global events for everything makes call sites and effects difficult to trace.

---

### 4. Composition and data-driven content

Composition and data-driven resources let designers customize behavior without making cloned subclasses for every item.

**Common failures:**

- Editing global Resource instances unintentionally can make two objects share mutable state.

**Suggested reading:**

- Required: [Godot — Best Practices](https://docs.godotengine.org/en/stable/tutorials/best_practices/index.html) — Read Scene organization; autoloads versus nodes. As you read, identify one idea you can directly apply to this task: Composition and data-driven content. Test that idea through the guided assignment.

**Practice:**


**Try it (guided):** Hands-on: Create a shared interactable component for chest and switch.

Success checks:
- Create three gadgets from one behavior script and distinct resource data; runtime changes to one do not mutate the others.
- Show the guided implementation with one controlled variation; describe why the behavior changes.
- Test this failure mode deliberately: Editing global Resource instances unintentionally can make two objects share mutable state.

**Build it (independent):** Independent: Build three enemies from configurable data assets with different speed, detection and visuals but shared movement logic.

Success checks:
- Create three gadgets from one behavior script and distinct resource data; runtime changes to one do not mutate the others.
- Build the extension in a separate scene or script, and explain how its architecture differs from the guided example.
- Test this failure mode deliberately: Editing global Resource instances unintentionally can make two objects share mutable state.

**Knowledge check:** How do you decide whether variants require a subclass or configuration?

**Self-review:** A good answer should mention: Composition and data-driven resources let designers customize behavior without making cloned subclasses for every item. It should also distinguish the common failure: Editing global Resource instances unintentionally can make two objects share mutable state.

---

### 5. Save/load and durable identity

Save systems serialize stable data and identifiers rather than raw live node references. Loading requires migrations, validation and defaults.

**Common failures:**

- Persisting NodePath references to dynamically generated objects breaks after scenes reorganize.

**Suggested reading:**

- Required: [Godot — Saving games](https://docs.godotengine.org/en/stable/tutorials/io/saving_games.html) — Read **Persist object state**. Your goal is to explain: Save systems serialize stable data and identifiers rather than raw live node references. Afterward, test the idea in a throwaway Godot scene; do not copy the tutorial wholesale.

**Practice:**


**Try it (guided):** Hands-on: Save player position and one unlocked door, then reload.

Success checks:
- Save, close, reopen and load an inventory; handle missing and extra fields without a crash.
- Show the guided implementation with one controlled variation; describe why the behavior changes.
- Test this failure mode deliberately: Persisting NodePath references to dynamically generated objects breaks after scenes reorganize.

**Build it (independent):** Independent: Build two scenes with collectible objects that remain collected across saves, handling missing and duplicated IDs.

Success checks:
- Save, close, reopen and load an inventory; handle missing and extra fields without a crash.
- Build the extension in a separate scene or script, and explain how its architecture differs from the guided example.
- Test this failure mode deliberately: Persisting NodePath references to dynamically generated objects breaks after scenes reorganize.

**Knowledge check:** What breaks when saved data uses transient node paths?

**Self-review:** A good answer should mention: Save systems serialize stable data and identifiers rather than raw live node references. Loading requires migrations, validation and defaults. It should also distinguish the common failure: Persisting NodePath references to dynamically generated objects breaks after scenes reorganize.

---

### 6. Architecture checkpoint and refactor

Refactoring improves changeability when backed by behavioral checks, not just fewer lines of code.

**Common failures:**

- A refactor that changes output has silently changed game rules.

**Suggested reading:**

- Required: [Game Programming Patterns: Event Queue](https://gameprogrammingpatterns.com/event-queue.html) — Read **the relevant examples**. Your goal is to explain: Refactoring improves changeability when backed by behavioral checks, not just fewer lines of code. Afterward, test the idea in a throwaway Godot scene; do not copy the tutorial wholesale.

**Practice:**


**Try it (guided):** Hands-on: Write a short architecture note identifying boundaries and responsibilities.

Success checks:
- Write a short regression checklist, refactor a system, and show the same inputs yield the same outcomes.
- Show the guided implementation with one controlled variation; describe why the behavior changes.
- Test this failure mode deliberately: A refactor that changes output has silently changed game rules.

**Build it (independent):** Independent: Add a new collectible, door type and feedback effect without editing unrelated systems; log which files changed.

Success checks:
- Write a short regression checklist, refactor a system, and show the same inputs yield the same outcomes.
- Build the extension in a separate scene or script, and explain how its architecture differs from the guided example.
- Test this failure mode deliberately: A refactor that changes output has silently changed game rules.

**Knowledge check:** Can you trace input through simulation, signals, view and persistence?

**Self-review:** A good answer should mention: Refactoring improves changeability when backed by behavioral checks, not just fewer lines of code. It should also distinguish the common failure: A refactor that changes output has silently changed game rules.

---

### 7. Interaction Arcade — architecture integration

Create a five-room mini-game with movement, collisions, animated interactions, inventory and scene changes. Explicitly define responsibilities and boundaries.

**Suggested reading:**

- Recommended: [Game Programming Patterns: State](https://gameprogrammingpatterns.com/state.html) — Revisit the relevant course sections only when blocked.

**Practice:**


**Interaction Arcade — architecture integration (course_project):** Create a five-room mini-game with movement, collisions, animated interactions, inventory and scene changes. Explicitly define responsibilities and boundaries.

Success checks:
- The inventory, controls and scene transitions share no global mutable god-object.
- Saving/loading preserves interaction state across two scenes.
- One interface change is tested without modifying unrelated systems.

**Knowledge check:** Which implementation decisions would you change if you rebuilt this project?

**Self-review:** Your review should cite actual design decisions, a reproduced defect, feedback, and one alternative you decided against.

---


## Gameplay mechanics and systems [Core]

Turn reusable foundations into small, expressive mechanics, each with explicit rules.

**Prerequisites:** g05-architecture
**Suggested structured study:** 23 hours (not a complete game production budget)

### 1. Interactions with explicit contracts

An interaction contract defines range, eligibility, feedback and what happens on success or failure. Make rules discoverable.

**Common failures:**

- Using direct property manipulation from unrelated objects can bypass access rules.

**Suggested reading:**

- Required: [Godot — Scene groups](https://docs.godotengine.org/en/stable/tutorials/scripting/groups.html) — Read **Group calls and scene-tree methods**. Your goal is to explain: An interaction contract defines range, eligibility, feedback and what happens on success or failure. Afterward, test the idea in a throwaway Godot scene; do not copy the tutorial wholesale.
- Optional: [Game Programming Patterns: Contents](https://gameprogrammingpatterns.com/contents.html) — Optional background: compare the examples with your implementation of interactions with explicit contracts. Focus on design tradeoffs, not memorizing an API.

**Practice:**


**Try it (guided):** Hands-on: Create an interact prompt that appears only in range.

Success checks:
- Interact with two object types through one common interface; invalid interactions explain why they failed.
- Show the guided implementation with one controlled variation; describe why the behavior changes.
- Test this failure mode deliberately: Using direct property manipulation from unrelated objects can bypass access rules.

**Build it (independent):** Independent: Build a vending machine, locked gate and lever that share interface conventions but have distinct rules.

Success checks:
- Interact with two object types through one common interface; invalid interactions explain why they failed.
- Build the extension in a separate scene or script, and explain how its architecture differs from the guided example.
- Test this failure mode deliberately: Using direct property manipulation from unrelated objects can bypass access rules.

**Knowledge check:** What should happen when an interaction becomes unavailable during input?

**Self-review:** A good answer should mention: An interaction contract defines range, eligibility, feedback and what happens on success or failure. Make rules discoverable. It should also distinguish the common failure: Using direct property manipulation from unrelated objects can bypass access rules.

---

### 2. Health, damage and invulnerability

Damage systems require clear order: collision, hit eligibility, invulnerability, damage application, feedback and death.

**Common failures:**

- The same hitbox may apply damage every frame if not gated intentionally.

**Suggested reading:**

- Required: [Godot: Physics documentation](https://docs.godotengine.org/en/stable/tutorials/physics/index.html) — Read **the relevant examples**. Your goal is to explain: Damage systems require clear order: collision, hit eligibility, invulnerability, damage application, feedback and death. Afterward, test the idea in a throwaway Godot scene; do not copy the tutorial wholesale.

**Practice:**


**Try it (guided):** Hands-on: Build a health bar and a predictable hazard.

Success checks:
- One collision delivers exactly one hit during the designed window; repeated contact obeys cooldown rules.
- Show the guided implementation with one controlled variation; describe why the behavior changes.
- Test this failure mode deliberately: The same hitbox may apply damage every frame if not gated intentionally.

**Build it (independent):** Independent: Create a laser corridor with damage cooldown and clear hit feedback; prevent instant repeat damage.

Success checks:
- One collision delivers exactly one hit during the designed window; repeated contact obeys cooldown rules.
- Build the extension in a separate scene or script, and explain how its architecture differs from the guided example.
- Test this failure mode deliberately: The same hitbox may apply damage every frame if not gated intentionally.

**Knowledge check:** Why does collision contact not always equal one unit of damage?

**Self-review:** A good answer should mention: Damage systems require clear order: collision, hit eligibility, invulnerability, damage application, feedback and death. It should also distinguish the common failure: The same hitbox may apply damage every frame if not gated intentionally.

---

### 3. Inventory and items

An inventory tracks item identity, quantity, constraints and ownership; the UI is a view, not the source of truth.

**Common failures:**

- Using visible slot labels as the authoritative inventory breaks when the UI closes.

**Suggested reading:**

- Required: [Godot — Resources](https://docs.godotengine.org/en/stable/tutorials/scripting/resources.html) — Read **Resource lifecycle and instances**. Your goal is to explain: An inventory tracks item identity, quantity, constraints and ownership; the UI is a view, not the source of truth. Afterward, test the idea in a throwaway Godot scene; do not copy the tutorial wholesale.
- Optional: [Game Programming Patterns: Contents](https://gameprogrammingpatterns.com/contents.html) — Optional background: compare the examples with your implementation of inventory and items. Focus on design tradeoffs, not memorizing an API.

**Practice:**


**Try it (guided):** Hands-on: Implement pickup, drop and inventory list.

Success checks:
- Add, stack, consume and reject over-capacity items with the inventory UI closed, then reopen it accurately.
- Show the guided implementation with one controlled variation; describe why the behavior changes.
- Test this failure mode deliberately: Using visible slot labels as the authoritative inventory breaks when the UI closes.

**Build it (independent):** Independent: Build a pack-rat puzzle with limited carrying capacity and at least one tradeoff.

Success checks:
- Add, stack, consume and reject over-capacity items with the inventory UI closed, then reopen it accurately.
- Build the extension in a separate scene or script, and explain how its architecture differs from the guided example.
- Test this failure mode deliberately: Using visible slot labels as the authoritative inventory breaks when the UI closes.

**Knowledge check:** What invariants should always hold after moving items?

**Self-review:** A good answer should mention: An inventory tracks item identity, quantity, constraints and ownership; the UI is a view, not the source of truth. It should also distinguish the common failure: Using visible slot labels as the authoritative inventory breaks when the UI closes.

---

### 4. Cooldowns, abilities and resources

Cooldowns and resources define valid ability use over time. Distinguish elapsed cooldown, cost, interruption and failure feedback.

**Common failures:**

- A cooldown that resets on every key press can prevent abilities from ever becoming available.

**Suggested reading:**

- Required: [Game Programming Patterns: State](https://gameprogrammingpatterns.com/state.html) — Read **the relevant examples**. Your goal is to explain: Cooldowns and resources define valid ability use over time. Afterward, test the idea in a throwaway Godot scene; do not copy the tutorial wholesale.

**Practice:**


**Try it (guided):** Hands-on: Implement dash with a cooldown display.

Success checks:
- Spam an ability and show exactly which invocations succeed, fail and regenerate resource.
- Show the guided implementation with one controlled variation; describe why the behavior changes.
- Test this failure mode deliberately: A cooldown that resets on every key press can prevent abilities from ever becoming available.

**Build it (independent):** Independent: Add two powers sharing an energy pool; tune them so each has a meaningful use case.

Success checks:
- Spam an ability and show exactly which invocations succeed, fail and regenerate resource.
- Build the extension in a separate scene or script, and explain how its architecture differs from the guided example.
- Test this failure mode deliberately: A cooldown that resets on every key press can prevent abilities from ever becoming available.

**Knowledge check:** What happens if two abilities are triggered during the same frame?

**Self-review:** A good answer should mention: Cooldowns and resources define valid ability use over time. Distinguish elapsed cooldown, cost, interruption and failure feedback. It should also distinguish the common failure: A cooldown that resets on every key press can prevent abilities from ever becoming available.

---

### 5. Progression and upgrade balancing

Upgrades alter game parameters and thereby player decisions. A useful economy needs sinks, meaningful tradeoffs and boundaries.

**Common failures:**

- Exponential power upgrades without testing can trivialize later encounters.

**Suggested reading:**

- Required: [Game Design Concepts — Game Design Concepts archive](https://gamedesignconcepts.wordpress.com/2009/07/) — Read **Selected game design lessons**. Your goal is to explain: Upgrades alter game parameters and thereby player decisions. Afterward, test the idea in a throwaway Godot scene; do not copy the tutorial wholesale.

**Practice:**


**Try it (guided):** Hands-on: Add one upgrade affecting dash distance.

Success checks:
- Compare two upgrade paths with the same budget and show each has a measurable advantage and cost.
- Show the guided implementation with one controlled variation; describe why the behavior changes.
- Test this failure mode deliberately: Exponential power upgrades without testing can trivialize later encounters.

**Build it (independent):** Independent: Design a three-choice upgrade station where no option strictly dominates the other two.

Success checks:
- Compare two upgrade paths with the same budget and show each has a measurable advantage and cost.
- Build the extension in a separate scene or script, and explain how its architecture differs from the guided example.
- Test this failure mode deliberately: Exponential power upgrades without testing can trivialize later encounters.

**Knowledge check:** How can a stronger number reduce interesting decisions?

**Self-review:** A good answer should mention: Upgrades alter game parameters and thereby player decisions. A useful economy needs sinks, meaningful tradeoffs and boundaries. It should also distinguish the common failure: Exponential power upgrades without testing can trivialize later encounters.

---

### 6. Gadget Workshop

Build a room where you combine a grappler, dash, hazards, pickups and one puzzle using reusable components.

**Suggested reading:**

- Recommended: [Game Programming Patterns: Component](https://gameprogrammingpatterns.com/component.html) — Revisit the relevant course sections only when blocked.

**Practice:**


**Gadget Workshop (course_project):** Build a room where you combine a grappler, dash, hazards, pickups and one puzzle using reusable components.

Success checks:
- Two gadgets use one consistent interaction contract.
- Health and cooldown systems behave correctly under input spamming.
- Inventory data remains correct even with the UI closed.

**Knowledge check:** Which implementation decisions would you change if you rebuilt this project?

**Self-review:** Your review should cite actual design decisions, a reproduced defect, feedback, and one alternative you decided against.

---


## Game design and rapid prototyping [Core]

Learn how rules create decisions, why people keep playing and how to evaluate fun.

**Prerequisites:** g06-mechanics
**Suggested structured study:** 23 hours (not a complete game production budget)

### 1. Mechanics, dynamics and player goals

A mechanic is a player action governed by rules; dynamics arise as rules interact over time. Start from the decision you want the player to make.

**Common failures:**

- A feature list is not the same thing as a playable loop.

**Suggested reading:**

- Required: [Game Design Concepts — Mechanics and Dynamics](https://gamedesignconcepts.wordpress.com/2009/07/13/level-5-mechanics-and-dynamics/) — Read MDA; rules and emergent behaviors. As you read, identify one idea you can directly apply to this task: Mechanics, dynamics and player goals. Test that idea through the guided assignment.
- Optional: [Game Maker’s Toolkit](https://gamemakerstoolkit.com/) — Optional background: compare the examples with your implementation of mechanics, dynamics and player goals. Focus on design tradeoffs, not memorizing an API.

**Practice:**


**Try it (guided):** Hands-on: Explain the core verb and objective of three favorite games.

Success checks:
- Write a one-sentence player promise and test whether a mechanic actually supports it.
- Show the guided implementation with one controlled variation; describe why the behavior changes.
- Test this failure mode deliberately: A feature list is not the same thing as a playable loop.

**Build it (independent):** Independent: Prototype two rule variations around the same movement mechanic, one competitive and one exploratory.

Success checks:
- Write a one-sentence player promise and test whether a mechanic actually supports it.
- Build the extension in a separate scene or script, and explain how its architecture differs from the guided example.
- Test this failure mode deliberately: A feature list is not the same thing as a playable loop.

**Knowledge check:** What changes in player behavior when only the goal changes?

**Self-review:** A good answer should mention: A mechanic is a player action governed by rules; dynamics arise as rules interact over time. Start from the decision you want the player to make. It should also distinguish the common failure: A feature list is not the same thing as a playable loop.

---

### 2. Core loops and meaningful decisions

A core loop ties decisions, actions, consequences and renewed choices together. Risk/reward only works when both are legible.

**Common failures:**

- Random punishment without advance information feels arbitrary rather than tense.

**Suggested reading:**

- Required: [Game Design Concepts — Mechanics and Dynamics](https://gamedesignconcepts.wordpress.com/2009/07/13/level-5-mechanics-and-dynamics/) — Read MDA; rules and emergent behaviors. As you read, identify one idea you can directly apply to this task: Core loops and meaningful decisions. Test that idea through the guided assignment.

**Practice:**


**Try it (guided):** Hands-on: Diagram a 30-second loop with action, outcome and new choice.

Success checks:
- Build two choices with clear tradeoffs and observe whether a tester understands the consequences.
- Show the guided implementation with one controlled variation; describe why the behavior changes.
- Test this failure mode deliberately: Random punishment without advance information feels arbitrary rather than tense.

**Build it (independent):** Independent: Build a tiny collect-or-exit room that forces a risk/reward decision at least twice.

Success checks:
- Build two choices with clear tradeoffs and observe whether a tester understands the consequences.
- Build the extension in a separate scene or script, and explain how its architecture differs from the guided example.
- Test this failure mode deliberately: Random punishment without advance information feels arbitrary rather than tense.

**Knowledge check:** Can the best choice always be calculated without tradeoffs?

**Self-review:** A good answer should mention: A core loop ties decisions, actions, consequences and renewed choices together. Risk/reward only works when both are legible. It should also distinguish the common failure: Random punishment without advance information feels arbitrary rather than tense.

---

### 3. Difficulty and challenge curves

Challenge is affected by knowledge, execution, randomness and recoverability, not only enemy health.

**Common failures:**

- Increasing damage alone often creates frustration instead of interesting difficulty.

**Suggested reading:**

- Required: [Game Design Concepts — Game Design Concepts archive](https://gamedesignconcepts.wordpress.com/2009/07/) — Read **Selected game design lessons**. Your goal is to explain: Challenge is affected by knowledge, execution, randomness and recoverability, not only enemy health. Afterward, test the idea in a throwaway Godot scene; do not copy the tutorial wholesale.
- Optional: [Game Maker’s Toolkit](https://gamemakerstoolkit.com/) — Optional background: compare the examples with your implementation of difficulty and challenge curves. Focus on design tradeoffs, not memorizing an API.

**Practice:**


**Try it (guided):** Hands-on: Make three difficulty variants by changing one variable.

Success checks:
- Tune one encounter for novice and experienced testers using at least two variables, recording results.
- Show the guided implementation with one controlled variation; describe why the behavior changes.
- Test this failure mode deliberately: Increasing damage alone often creates frustration instead of interesting difficulty.

**Build it (independent):** Independent: Build a hazard gauntlet that introduces mechanics safely before combining them.

Success checks:
- Tune one encounter for novice and experienced testers using at least two variables, recording results.
- Build the extension in a separate scene or script, and explain how its architecture differs from the guided example.
- Test this failure mode deliberately: Increasing damage alone often creates frustration instead of interesting difficulty.

**Knowledge check:** What distinguishes difficult from confusing?

**Self-review:** A good answer should mention: Challenge is affected by knowledge, execution, randomness and recoverability, not only enemy health. It should also distinguish the common failure: Increasing damage alone often creates frustration instead of interesting difficulty.

---

### 4. Balancing with observation

Balancing is an empirical process: form a hypothesis, measure an outcome, change one important variable and compare.

**Common failures:**

- Changing five tuning variables at once prevents learning which change helped.

**Suggested reading:**

- Required: [Game Design Concepts — Early Design Process](https://gamedesignconcepts.wordpress.com/2009/07/09/level-4-the-early-stages-of-the-design-process/) — Read Iterative process and constraints. As you read, identify one idea you can directly apply to this task: Balancing with observation. Test that idea through the guided assignment.

**Practice:**


**Try it (guided):** Hands-on: Run three timed playtests changing one variable each.

Success checks:
- Run three controlled balance iterations and record goal, observation, adjustment and outcome.
- Show the guided implementation with one controlled variation; describe why the behavior changes.
- Test this failure mode deliberately: Changing five tuning variables at once prevents learning which change helped.

**Build it (independent):** Independent: Create a spreadsheet-free tuning log with hypothesis, change, observation and conclusion for a prototype.

Success checks:
- Run three controlled balance iterations and record goal, observation, adjustment and outcome.
- Build the extension in a separate scene or script, and explain how its architecture differs from the guided example.
- Test this failure mode deliberately: Changing five tuning variables at once prevents learning which change helped.

**Knowledge check:** How can a change that improves win rate still reduce fun?

**Self-review:** A good answer should mention: Balancing is an empirical process: form a hypothesis, measure an outcome, change one important variable and compare. It should also distinguish the common failure: Changing five tuning variables at once prevents learning which change helped.

---

### 5. Rapid experiments and cutting scope

Prototypes answer questions cheaply, and scope cuts protect the important experience. The exercise asks you to demonstrate the difference between expected behavior and an observed edge case.

**Common failures:**

- High fidelity early can make you reluctant to discard bad mechanics.

**Suggested reading:**

- Required: [Game Design Concepts — Early Design Process](https://gamedesignconcepts.wordpress.com/2009/07/09/level-4-the-early-stages-of-the-design-process/) — Read Iterative process and constraints. As you read, identify one idea you can directly apply to this task: Rapid experiments and cutting scope. Test that idea through the guided assignment.

**Practice:**


**Try it (guided):** Hands-on: Write a one-sentence hypothesis for a 30-minute mechanic test.

Success checks:
- Create two low-cost variants, test both with someone else and delete the weaker approach.
- Show the guided implementation with one controlled variation; describe why the behavior changes.
- Test this failure mode deliberately: High fidelity early can make you reluctant to discard bad mechanics.

**Build it (independent):** Independent: Make a deliberately ugly prototype, collect evidence, and cut one attractive but nonessential feature.

Success checks:
- Create two low-cost variants, test both with someone else and delete the weaker approach.
- Build the extension in a separate scene or script, and explain how its architecture differs from the guided example.
- Test this failure mode deliberately: High fidelity early can make you reluctant to discard bad mechanics.

**Knowledge check:** What decision does your prototype enable you to make?

**Self-review:** A good answer should mention: Prototypes answer questions cheaply, and scope cuts protect the important experience. It should also distinguish the common failure: High fidelity early can make you reluctant to discard bad mechanics.

---

### 6. One-Mechanic Challenge Collection

Prototype three entirely different games around a single core verb; playtest two and choose one to iterate.

**Suggested reading:**

- Recommended: [Game Design Concepts — Ian Schreiber](https://gamedesignconcepts.wordpress.com/2009/07/) — Revisit the relevant course sections only when blocked.

**Practice:**


**One-Mechanic Challenge Collection (course_project):** Prototype three entirely different games around a single core verb; playtest two and choose one to iterate.

Success checks:
- A tester can state the core decision after one round.
- At least two variations were prototyped and compared.
- A feature was cut or changed based on playtest evidence.

**Knowledge check:** Which implementation decisions would you change if you rebuilt this project?

**Self-review:** Your review should cite actual design decisions, a reproduced defect, feedback, and one alternative you decided against.

---


## Game UI, UX and accessibility [Core]

Build interfaces that explain choices and work for different users and input devices.

**Prerequisites:** g06-mechanics
**Suggested structured study:** 23 hours (not a complete game production budget)

### 1. HUD hierarchy and readability

HUD elements should display information that supports immediate decisions, ranked by urgency and frequency.

**Common failures:**

- Showing every internal stat at all times creates noise and hides danger signals.

**Suggested reading:**

- Required: [Godot — Control node](https://docs.godotengine.org/en/stable/classes/class_control.html) — Read **Focus and mouse filtering**. Your goal is to explain: HUD elements should display information that supports immediate decisions, ranked by urgency and frequency. Afterward, test the idea in a throwaway Godot scene; do not copy the tutorial wholesale.
- Optional: [Game Accessibility Guidelines](https://gameaccessibilityguidelines.com/) — Optional background: compare the examples with your implementation of hud hierarchy and readability. Focus on design tradeoffs, not memorizing an API.

**Practice:**


**Try it (guided):** Hands-on: Create a minimal HUD for energy, objective and inventory capacity.

Success checks:
- Play with a minimal HUD and verify a new player can identify health, objective and risk without prompting.
- Show the guided implementation with one controlled variation; describe why the behavior changes.
- Test this failure mode deliberately: Showing every internal stat at all times creates noise and hides danger signals.

**Build it (independent):** Independent: Redesign a cluttered HUD into an information hierarchy and test at small window size.

Success checks:
- Play with a minimal HUD and verify a new player can identify health, objective and risk without prompting.
- Build the extension in a separate scene or script, and explain how its architecture differs from the guided example.
- Test this failure mode deliberately: Showing every internal stat at all times creates noise and hides danger signals.

**Knowledge check:** Which numbers belong on the main HUD versus a pause menu?

**Self-review:** A good answer should mention: HUD elements should display information that supports immediate decisions, ranked by urgency and frequency. It should also distinguish the common failure: Showing every internal stat at all times creates noise and hides danger signals.

---

### 2. Menus and input focus

Menus need explicit input focus and predictable controller/keyboard navigation, including cancellation and disabled states.

**Common failures:**

- Mouse-only navigation excludes gamepad use and often breaks keyboard flow.

**Suggested reading:**

- Required: [Godot: GUI tutorials](https://docs.godotengine.org/en/stable/tutorials/ui/index.html) — Read **the relevant examples**. Your goal is to explain: Menus need explicit input focus and predictable controller/keyboard navigation, including cancellation and disabled states. Afterward, test the idea in a throwaway Godot scene; do not copy the tutorial wholesale.

**Practice:**


**Try it (guided):** Hands-on: Build a settings panel navigable without a mouse.

Success checks:
- Navigate a menu entirely by keyboard/gamepad, including opening, canceling and returning focus correctly.
- Show the guided implementation with one controlled variation; describe why the behavior changes.
- Test this failure mode deliberately: Mouse-only navigation excludes gamepad use and often breaks keyboard flow.

**Build it (independent):** Independent: Create a pause menu with focus restoration and remappable controls.

Success checks:
- Navigate a menu entirely by keyboard/gamepad, including opening, canceling and returning focus correctly.
- Build the extension in a separate scene or script, and explain how its architecture differs from the guided example.
- Test this failure mode deliberately: Mouse-only navigation excludes gamepad use and often breaks keyboard flow.

**Knowledge check:** What should retain focus when a modal closes?

**Self-review:** A good answer should mention: Menus need explicit input focus and predictable controller/keyboard navigation, including cancellation and disabled states. It should also distinguish the common failure: Mouse-only navigation excludes gamepad use and often breaks keyboard flow.

---

### 3. Tutorialization without lectures

Good tutorials reveal mechanics when needed and let the player learn by doing, not by reading a wall of text.

**Common failures:**

- A tutorial that interrupts every new action can kill pacing.

**Suggested reading:**

- Required: [Game Accessibility Guidelines](https://gameaccessibilityguidelines.com/) — Read **the relevant examples**. Your goal is to explain: Good tutorials reveal mechanics when needed and let the player learn by doing, not by reading a wall of text. Afterward, test the idea in a throwaway Godot scene; do not copy the tutorial wholesale.

**Practice:**


**Try it (guided):** Hands-on: Design a 20-second learn-by-doing interaction.

Success checks:
- Onboard a tester using contextual prompts and record which interactions still require explanation.
- Show the guided implementation with one controlled variation; describe why the behavior changes.
- Test this failure mode deliberately: A tutorial that interrupts every new action can kill pacing.

**Build it (independent):** Independent: Create a two-room tutorial with no instructional wall of text; observe whether a tester learns controls.

Success checks:
- Onboard a tester using contextual prompts and record which interactions still require explanation.
- Build the extension in a separate scene or script, and explain how its architecture differs from the guided example.
- Test this failure mode deliberately: A tutorial that interrupts every new action can kill pacing.

**Knowledge check:** Which instructional prompt can you remove without reducing comprehension?

**Self-review:** A good answer should mention: Good tutorials reveal mechanics when needed and let the player learn by doing, not by reading a wall of text. It should also distinguish the common failure: A tutorial that interrupts every new action can kill pacing.

---

### 4. Accessible settings and feedback

Accessibility includes readable contrast, remappable inputs, scalable text, non-color cues and alternatives to motion effects.

**Common failures:**

- Color alone cannot reliably communicate a gameplay state for everyone.

**Suggested reading:**

- Required: [Game Accessibility Guidelines](https://gameaccessibilityguidelines.com/) — Read **the relevant examples**. Your goal is to explain: Accessibility includes readable contrast, remappable inputs, scalable text, non-color cues and alternatives to motion effects. Afterward, test the idea in a throwaway Godot scene; do not copy the tutorial wholesale.

**Practice:**


**Try it (guided):** Hands-on: Add text-scale and reduced-shake toggles.

Success checks:
- Implement two accessibility settings and verify they persist and change actual game behavior.
- Show the guided implementation with one controlled variation; describe why the behavior changes.
- Test this failure mode deliberately: Color alone cannot reliably communicate a gameplay state for everyone.

**Build it (independent):** Independent: Make important alert cues readable with sound disabled and color filters simulated.

Success checks:
- Implement two accessibility settings and verify they persist and change actual game behavior.
- Build the extension in a separate scene or script, and explain how its architecture differs from the guided example.
- Test this failure mode deliberately: Color alone cannot reliably communicate a gameplay state for everyone.

**Knowledge check:** What critical information disappears if audio is muted?

**Self-review:** A good answer should mention: Accessibility includes readable contrast, remappable inputs, scalable text, non-color cues and alternatives to motion effects. It should also distinguish the common failure: Color alone cannot reliably communicate a gameplay state for everyone.

---

### 5. User testing of interfaces

Usability testing observes actions, failures and hesitation instead of asking only whether players liked the UI.

**Common failures:**

- A developer-led explanation masks usability defects.

**Suggested reading:**

- Required: [Game Accessibility Guidelines](https://gameaccessibilityguidelines.com/) — Read **the relevant examples**. Your goal is to explain: Usability testing observes actions, failures and hesitation instead of asking only whether players liked the UI. Afterward, test the idea in a throwaway Godot scene; do not copy the tutorial wholesale.

**Practice:**


**Try it (guided):** Hands-on: Record where one tester pauses or clicks incorrectly.

Success checks:
- Observe a player without coaching; list the first three misunderstandings and revise the interface.
- Show the guided implementation with one controlled variation; describe why the behavior changes.
- Test this failure mode deliberately: A developer-led explanation masks usability defects.

**Build it (independent):** Independent: Run a three-task usability session and fix the highest-impact obstacle without changing game mechanics.

Success checks:
- Observe a player without coaching; list the first three misunderstandings and revise the interface.
- Build the extension in a separate scene or script, and explain how its architecture differs from the guided example.
- Test this failure mode deliberately: A developer-led explanation masks usability defects.

**Knowledge check:** How do you distinguish navigation friction from gameplay difficulty?

**Self-review:** A good answer should mention: Usability testing observes actions, failures and hesitation instead of asking only whether players liked the UI. It should also distinguish the common failure: A developer-led explanation masks usability defects.

---

### 6. Controller-Friendly Inventory

Make an inventory, settings screen and concise tutorial that work with mouse, keyboard and gamepad.

**Suggested reading:**

- Recommended: [Game Accessibility Guidelines](https://gameaccessibilityguidelines.com/) — Revisit the relevant course sections only when blocked.

**Practice:**


**Controller-Friendly Inventory (course_project):** Make an inventory, settings screen and concise tutorial that work with mouse, keyboard and gamepad.

Success checks:
- Every primary action is possible without a mouse.
- The UI communicates risk and goal without a voice explanation.
- At least two accessibility preferences persist after restart.

**Knowledge check:** Which implementation decisions would you change if you rebuilt this project?

**Self-review:** Your review should cite actual design decisions, a reproduced defect, feedback, and one alternative you decided against.

---


## Level and encounter design [Core]

Construct places that teach, challenge and guide players through meaningful experiences.

**Prerequisites:** g07-design, g08-ui
**Suggested structured study:** 23 hours (not a complete game production budget)

### 1. Spatial readability and wayfinding

Players infer paths from shapes, contrast, landmarks and affordances. Wayfinding is part of level design.

**Common failures:**

- Making everything equally bright makes important interactables hard to identify.

**Suggested reading:**

- Required: [Game Design Concepts — Game Design Concepts archive](https://gamedesignconcepts.wordpress.com/2009/07/) — Read **Selected game design lessons**. Your goal is to explain: Players infer paths from shapes, contrast, landmarks and affordances. Afterward, test the idea in a throwaway Godot scene; do not copy the tutorial wholesale.
- Optional: [Game Design Concepts — Ian Schreiber](https://gamedesignconcepts.wordpress.com/2009/07/) — Optional background: compare the examples with your implementation of spatial readability and wayfinding. Focus on design tradeoffs, not memorizing an API.

**Practice:**


**Try it (guided):** Hands-on: Build a room with one clearly visible objective.

Success checks:
- Place a player at three spawn points and test whether the exit is discoverable without verbal guidance.
- Show the guided implementation with one controlled variation; describe why the behavior changes.
- Test this failure mode deliberately: Making everything equally bright makes important interactables hard to identify.

**Build it (independent):** Independent: Create two routes through a level, one obvious and one rewarding exploration, using lighting and landmarks.

Success checks:
- Place a player at three spawn points and test whether the exit is discoverable without verbal guidance.
- Build the extension in a separate scene or script, and explain how its architecture differs from the guided example.
- Test this failure mode deliberately: Making everything equally bright makes important interactables hard to identify.

**Knowledge check:** Where does the player look first when entering a new space?

**Self-review:** A good answer should mention: Players infer paths from shapes, contrast, landmarks and affordances. Wayfinding is part of level design. It should also distinguish the common failure: Making everything equally bright makes important interactables hard to identify.

---

### 2. Level progression grammar

A level can teach, vary and test one mechanic using a repeatable progression grammar. The exercise asks you to demonstrate the difference between expected behavior and an observed edge case.

**Common failures:**

- Introducing several brand-new hazards simultaneously obscures what the player should learn.

**Suggested reading:**

- Required: [Game Design Concepts — Game Design Concepts archive](https://gamedesignconcepts.wordpress.com/2009/07/) — Read **Selected game design lessons**. Your goal is to explain: A level can teach, vary and test one mechanic using a repeatable progression grammar. Afterward, test the idea in a throwaway Godot scene; do not copy the tutorial wholesale.

**Practice:**


**Try it (guided):** Hands-on: Write a five-beat level sequence.

Success checks:
- Build three rooms: safe introduction, interesting combination, then constrained mastery test.
- Show the guided implementation with one controlled variation; describe why the behavior changes.
- Test this failure mode deliberately: Introducing several brand-new hazards simultaneously obscures what the player should learn.

**Build it (independent):** Independent: Build a five-room sequence around dash, push or raycast interactions.

Success checks:
- Build three rooms: safe introduction, interesting combination, then constrained mastery test.
- Build the extension in a separate scene or script, and explain how its architecture differs from the guided example.
- Test this failure mode deliberately: Introducing several brand-new hazards simultaneously obscures what the player should learn.

**Knowledge check:** Which room checks understanding rather than copying the previous solution?

**Self-review:** A good answer should mention: A level can teach, vary and test one mechanic using a repeatable progression grammar. It should also distinguish the common failure: Introducing several brand-new hazards simultaneously obscures what the player should learn.

---

### 3. Encounters and enemy placement

Encounters combine geometry, enemy placement, resources and escape routes to produce decisions.

**Common failures:**

- Spawning more enemies is not automatically a richer encounter.

**Suggested reading:**

- Required: [Game Design Concepts — Game Design Concepts archive](https://gamedesignconcepts.wordpress.com/2009/07/) — Read **Selected game design lessons**. Your goal is to explain: Encounters combine geometry, enemy placement, resources and escape routes to produce decisions. Afterward, test the idea in a throwaway Godot scene; do not copy the tutorial wholesale.
- Optional: [Game Design Concepts — Ian Schreiber](https://gamedesignconcepts.wordpress.com/2009/07/) — Optional background: compare the examples with your implementation of encounters and enemy placement. Focus on design tradeoffs, not memorizing an API.

**Practice:**


**Try it (guided):** Hands-on: Build an arena with cover and two enemy entry points.

Success checks:
- Change only cover and hazard placement; observe how a previously trivial enemy becomes tactically interesting.
- Show the guided implementation with one controlled variation; describe why the behavior changes.
- Test this failure mode deliberately: Spawning more enemies is not automatically a richer encounter.

**Build it (independent):** Independent: Design three encounters using identical enemies but different geometry and spawn timing.

Success checks:
- Change only cover and hazard placement; observe how a previously trivial enemy becomes tactically interesting.
- Build the extension in a separate scene or script, and explain how its architecture differs from the guided example.
- Test this failure mode deliberately: Spawning more enemies is not automatically a richer encounter.

**Knowledge check:** How did layout change strategy despite identical NPC logic?

**Self-review:** A good answer should mention: Encounters combine geometry, enemy placement, resources and escape routes to produce decisions. It should also distinguish the common failure: Spawning more enemies is not automatically a richer encounter.

---

### 4. Pacing and tension

Pacing alternates attention, tension and relief. Silence and recovery are design tools. The exercise asks you to demonstrate the difference between expected behavior and an observed edge case.

**Common failures:**

- Continuous maximum intensity makes stakes feel flat.

**Suggested reading:**

- Required: [Game Design Concepts — Game Design Concepts archive](https://gamedesignconcepts.wordpress.com/2009/07/) — Read **Selected game design lessons**. Your goal is to explain: Pacing alternates attention, tension and relief. Afterward, test the idea in a throwaway Godot scene; do not copy the tutorial wholesale.

**Practice:**


**Try it (guided):** Hands-on: Mark peaks and rests on a 10-minute level timeline.

Success checks:
- Create a five-minute route with a deliberate calm section and two escalating peaks.
- Show the guided implementation with one controlled variation; describe why the behavior changes.
- Test this failure mode deliberately: Continuous maximum intensity makes stakes feel flat.

**Build it (independent):** Independent: Create a tension arc using only obstacles, ambience and recovery zones.

Success checks:
- Create a five-minute route with a deliberate calm section and two escalating peaks.
- Build the extension in a separate scene or script, and explain how its architecture differs from the guided example.
- Test this failure mode deliberately: Continuous maximum intensity makes stakes feel flat.

**Knowledge check:** Where should the player regain control and reflect?

**Self-review:** A good answer should mention: Pacing alternates attention, tension and relief. Silence and recovery are design tools. It should also distinguish the common failure: Continuous maximum intensity makes stakes feel flat.

---

### 5. Iterating from playtest traces

Player paths, retries and hesitations reveal design problems better than designer intuition alone.

**Common failures:**

- Assuming a failed player is inattentive can hide broken visual communication.

**Suggested reading:**

- Required: [Game Design Concepts — Game Design Concepts archive](https://gamedesignconcepts.wordpress.com/2009/07/) — Read **Selected game design lessons**. Your goal is to explain: Player paths, retries and hesitations reveal design problems better than designer intuition alone. Afterward, test the idea in a throwaway Godot scene; do not copy the tutorial wholesale.

**Practice:**


**Try it (guided):** Hands-on: Track the player route through a test level.

Success checks:
- Mark three observed points of confusion on a map, revise one and retest.
- Show the guided implementation with one controlled variation; describe why the behavior changes.
- Test this failure mode deliberately: Assuming a failed player is inattentive can hide broken visual communication.

**Build it (independent):** Independent: Revise one confusing encounter based on playtest evidence and compare the second run.

Success checks:
- Mark three observed points of confusion on a map, revise one and retest.
- Build the extension in a separate scene or script, and explain how its architecture differs from the guided example.
- Test this failure mode deliberately: Assuming a failed player is inattentive can hide broken visual communication.

**Knowledge check:** Did the revision change behavior or only increase visual decoration?

**Self-review:** A good answer should mention: Player paths, retries and hesitations reveal design problems better than designer intuition alone. It should also distinguish the common failure: Assuming a failed player is inattentive can hide broken visual communication.

---

### 6. Five-Room Design Gauntlet

Design a short level that introduces, practices, twists, combines and tests one mechanic.

**Suggested reading:**

- Recommended: [Game Maker’s Toolkit](https://gamemakerstoolkit.com/) — Revisit the relevant course sections only when blocked.

**Practice:**


**Five-Room Design Gauntlet (course_project):** Design a short level that introduces, practices, twists, combines and tests one mechanic.

Success checks:
- The same mechanic is introduced, combined and tested across five rooms.
- A new tester can find the objective without being told the route.
- One observed confusion caused a documented map revision.

**Knowledge check:** Which implementation decisions would you change if you rebuilt this project?

**Self-review:** Your review should cite actual design decisions, a reproduced defect, feedback, and one alternative you decided against.

---


## Game AI essentials [Core]

Build understandable enemies that produce interesting situations without needing machine learning.

**Prerequisites:** g05-architecture, g09-level
**Suggested structured study:** 23 hours (not a complete game production budget)

### 1. Behavior state machines

State machines are often enough for believable game enemies when transitions are observable and clear.

**Common failures:**

- Multiple contradictory state flags can make an enemy oscillate or freeze.

**Suggested reading:**

- Required: [Game Programming Patterns: State](https://gameprogrammingpatterns.com/state.html) — Read **the relevant examples**. Your goal is to explain: State machines are often enough for believable game enemies when transitions are observable and clear. Afterward, test the idea in a throwaway Godot scene; do not copy the tutorial wholesale.
- Optional: [Red Blob Games: A* Introduction](https://www.redblobgames.com/pathfinding/a-star/introduction.html) — Optional background: compare the examples with your implementation of behavior state machines. Focus on design tradeoffs, not memorizing an API.

**Practice:**


**Try it (guided):** Hands-on: Make a guard alternate between patrol and wait states.

Success checks:
- Show the active state in a debug overlay while the enemy patrols, searches and chases.
- Show the guided implementation with one controlled variation; describe why the behavior changes.
- Test this failure mode deliberately: Multiple contradictory state flags can make an enemy oscillate or freeze.

**Build it (independent):** Independent: Introduce a suspicious state triggered by noise with clear reentry and timeout rules.

Success checks:
- Show the active state in a debug overlay while the enemy patrols, searches and chases.
- Build the extension in a separate scene or script, and explain how its architecture differs from the guided example.
- Test this failure mode deliberately: Multiple contradictory state flags can make an enemy oscillate or freeze.

**Knowledge check:** What priority rule applies when two transitions are valid?

**Self-review:** A good answer should mention: State machines are often enough for believable game enemies when transitions are observable and clear. It should also distinguish the common failure: Multiple contradictory state flags can make an enemy oscillate or freeze.

---

### 2. Sight, sound and suspicion

Perception converts stimuli into knowledge with memory and decay. Seeing a player and hearing a noise are different kinds of evidence.

**Common failures:**

- Instantly knowing the player position after a noise makes stealth feel unfair.

**Suggested reading:**

- Required: [Godot — Ray-casting](https://docs.godotengine.org/en/stable/tutorials/physics/ray-casting.html) — Read **RayCast2D usage**. Your goal is to explain: Perception converts stimuli into knowledge with memory and decay. Afterward, test the idea in a throwaway Godot scene; do not copy the tutorial wholesale.

**Practice:**


**Try it (guided):** Hands-on: Implement radius detection with a debug ring.

Success checks:
- Hide behind cover, emit a sound, and prove the enemy searches the last known source rather than tracking you magically.
- Show the guided implementation with one controlled variation; describe why the behavior changes.
- Test this failure mode deliberately: Instantly knowing the player position after a noise makes stealth feel unfair.

**Build it (independent):** Independent: Build a guard with separate hearing and wall-blocked sight plus progressive suspicion.

Success checks:
- Hide behind cover, emit a sound, and prove the enemy searches the last known source rather than tracking you magically.
- Build the extension in a separate scene or script, and explain how its architecture differs from the guided example.
- Test this failure mode deliberately: Instantly knowing the player position after a noise makes stealth feel unfair.

**Knowledge check:** Why does line of sight alone not make believable detection?

**Self-review:** A good answer should mention: Perception converts stimuli into knowledge with memory and decay. Seeing a player and hearing a noise are different kinds of evidence. It should also distinguish the common failure: Instantly knowing the player position after a noise makes stealth feel unfair.

---

### 3. Steering and pursuit

Steering computes desired motion and corrects it for arrival, hazards and other actors. The exercise asks you to demonstrate the difference between expected behavior and an observed edge case.

**Common failures:**

- Always accelerating toward a target can create overshoot or jitter.

**Suggested reading:**

- Required: [Godot: Vector math](https://docs.godotengine.org/en/stable/tutorials/math/vector_math.html) — Read **the relevant examples**. Your goal is to explain: Steering computes desired motion and corrects it for arrival, hazards and other actors. Afterward, test the idea in a throwaway Godot scene; do not copy the tutorial wholesale.
- Optional: [Red Blob Games: A* Introduction](https://www.redblobgames.com/pathfinding/a-star/introduction.html) — Optional background: compare the examples with your implementation of steering and pursuit. Focus on design tradeoffs, not memorizing an API.

**Practice:**


**Try it (guided):** Hands-on: Create a follower that slows before reaching its target.

Success checks:
- Chase a moving player around corners and arrive without visible trembling at the target.
- Show the guided implementation with one controlled variation; describe why the behavior changes.
- Test this failure mode deliberately: Always accelerating toward a target can create overshoot or jitter.

**Build it (independent):** Independent: Build a chase arena where one enemy pursues and another maintains a preferred distance.

Success checks:
- Chase a moving player around corners and arrive without visible trembling at the target.
- Build the extension in a separate scene or script, and explain how its architecture differs from the guided example.
- Test this failure mode deliberately: Always accelerating toward a target can create overshoot or jitter.

**Knowledge check:** What produces overshooting or oscillation around targets?

**Self-review:** A good answer should mention: Steering computes desired motion and corrects it for arrival, hazards and other actors. It should also distinguish the common failure: Always accelerating toward a target can create overshoot or jitter.

---

### 4. Navigation and obstacles

Navigation provides paths; movement still needs steering and recovery if paths become invalid.

**Common failures:**

- Treating a nav path as guaranteed produces stuck enemies near dynamic obstacles.

**Suggested reading:**

- Required: [Red Blob Games: A* Introduction](https://www.redblobgames.com/pathfinding/a-star/introduction.html) — Read **the relevant examples**. Your goal is to explain: Navigation provides paths; movement still needs steering and recovery if paths become invalid. Afterward, test the idea in a throwaway Godot scene; do not copy the tutorial wholesale.

**Practice:**


**Try it (guided):** Hands-on: Give a guard an obstacle-aware route through a maze.

Success checks:
- Block a path after planning and show the enemy retries or fails gracefully.
- Show the guided implementation with one controlled variation; describe why the behavior changes.
- Test this failure mode deliberately: Treating a nav path as guaranteed produces stuck enemies near dynamic obstacles.

**Build it (independent):** Independent: Create an enemy that navigates to the last heard sound origin then resumes patrol if unsuccessful.

Success checks:
- Block a path after planning and show the enemy retries or fails gracefully.
- Build the extension in a separate scene or script, and explain how its architecture differs from the guided example.
- Test this failure mode deliberately: Treating a nav path as guaranteed produces stuck enemies near dynamic obstacles.

**Knowledge check:** Why can a valid path still look unnatural in motion?

**Self-review:** A good answer should mention: Navigation provides paths; movement still needs steering and recovery if paths become invalid. It should also distinguish the common failure: Treating a nav path as guaranteed produces stuck enemies near dynamic obstacles.

---

### 5. AI debugging and fairness

AI debugging explains decisions: sensory input, memory, state, target and chosen action. The exercise asks you to demonstrate the difference between expected behavior and an observed edge case.

**Common failures:**

- An opaque AI is difficult to tune even when its code is correct.

**Suggested reading:**

- Required: [Godot: Debugging and profiling](https://docs.godotengine.org/en/stable/tutorials/scripting/debug/index.html) — Read **the relevant examples**. Your goal is to explain: AI debugging explains decisions: sensory input, memory, state, target and chosen action. Afterward, test the idea in a throwaway Godot scene; do not copy the tutorial wholesale.

**Practice:**


**Try it (guided):** Hands-on: Expose current state, target and last seen position as labels.

Success checks:
- Display sensory state and current goal; reproduce a suspicious choice with deterministic conditions.
- Show the guided implementation with one controlled variation; describe why the behavior changes.
- Test this failure mode deliberately: An opaque AI is difficult to tune even when its code is correct.

**Build it (independent):** Independent: Record and fix three AI edge cases: corner stuck, repeated alert, and lost-player search loop.

Success checks:
- Display sensory state and current goal; reproduce a suspicious choice with deterministic conditions.
- Build the extension in a separate scene or script, and explain how its architecture differs from the guided example.
- Test this failure mode deliberately: An opaque AI is difficult to tune even when its code is correct.

**Knowledge check:** How does readable enemy intent affect perceived fairness?

**Self-review:** A good answer should mention: AI debugging explains decisions: sensory input, memory, state, target and chosen action. It should also distinguish the common failure: An opaque AI is difficult to tune even when its code is correct.

---

### 6. Museum Night Guard

One guard patrols, hears a bell, investigates, spots the player, pursues and gives up intelligently.

**Suggested reading:**

- Recommended: [Game Programming Patterns: State](https://gameprogrammingpatterns.com/state.html) — Revisit the relevant course sections only when blocked.

**Practice:**


**Museum Night Guard (course_project):** One guard patrols, hears a bell, investigates, spots the player, pursues and gives up intelligently.

Success checks:
- Guard searches last-known location after losing line of sight.
- A debug overlay exposes state, target and stimulus.
- Dynamic obstacles do not create a permanent stuck behavior.

**Knowledge check:** Which implementation decisions would you change if you rebuilt this project?

**Self-review:** Your review should cite actual design decisions, a reproduced defect, feedback, and one alternative you decided against.

---


## Randomness and procedural fundamentals [Core]

Use controlled randomness to produce variety without sacrificing solvability or intended design.

**Prerequisites:** g09-level
**Suggested structured study:** 23 hours (not a complete game production budget)

### 1. Random number generators and seeds

A random seed makes generated outcomes reproducible; a generator must control where and when random draws occur.

**Common failures:**

- Accidentally sharing global random state causes unrelated systems to change a level layout.

**Suggested reading:**

- Required: [Godot — Resources](https://docs.godotengine.org/en/stable/tutorials/scripting/resources.html) — Read **Resource lifecycle and instances**. Your goal is to explain: A random seed makes generated outcomes reproducible; a generator must control where and when random draws occur. Afterward, test the idea in a throwaway Godot scene; do not copy the tutorial wholesale.
- Optional: [Red Blob Games — Breadth First Search](https://www.redblobgames.com/pathfinding/a-star/introduction.html) — Optional background: compare the examples with your implementation of random number generators and seeds. Focus on design tradeoffs, not memorizing an API.

**Practice:**


**Try it (guided):** Hands-on: Spawn coins from a random seed and print the seed.

Success checks:
- Generate the same sector twice from one seed and compare the resulting entities and layout.
- Show the guided implementation with one controlled variation; describe why the behavior changes.
- Test this failure mode deliberately: Accidentally sharing global random state causes unrelated systems to change a level layout.

**Build it (independent):** Independent: Build a replayable loot room; entering the same seed reproduces every placement.

Success checks:
- Generate the same sector twice from one seed and compare the resulting entities and layout.
- Build the extension in a separate scene or script, and explain how its architecture differs from the guided example.
- Test this failure mode deliberately: Accidentally sharing global random state causes unrelated systems to change a level layout.

**Knowledge check:** Why is recording the seed essential when debugging procedural content?

**Self-review:** A good answer should mention: A random seed makes generated outcomes reproducible; a generator must control where and when random draws occur. It should also distinguish the common failure: Accidentally sharing global random state causes unrelated systems to change a level layout.

---

### 2. Distributions and weighted choices

Probability weights need normalization and a testable expected distribution. Variety does not imply fairness.

**Common failures:**

- Sampling weighted rewards without inspecting frequency can create unintended scarcity.

**Suggested reading:**

- Required: [Godot: Vector math](https://docs.godotengine.org/en/stable/tutorials/math/vector_math.html) — Read **the relevant examples**. Your goal is to explain: Probability weights need normalization and a testable expected distribution. Afterward, test the idea in a throwaway Godot scene; do not copy the tutorial wholesale.

**Practice:**


**Try it (guided):** Hands-on: Make a weighted loot table with three rarity tiers.

Success checks:
- Generate 10,000 samples and compare measured proportions with the configured weights.
- Show the guided implementation with one controlled variation; describe why the behavior changes.
- Test this failure mode deliberately: Sampling weighted rewards without inspecting frequency can create unintended scarcity.

**Build it (independent):** Independent: Simulate 1,000 loot rolls and compare frequencies against intended weights.

Success checks:
- Generate 10,000 samples and compare measured proportions with the configured weights.
- Build the extension in a separate scene or script, and explain how its architecture differs from the guided example.
- Test this failure mode deliberately: Sampling weighted rewards without inspecting frequency can create unintended scarcity.

**Knowledge check:** How can a statistically fair system feel unfair in short runs?

**Self-review:** A good answer should mention: Probability weights need normalization and a testable expected distribution. Variety does not imply fairness. It should also distinguish the common failure: Sampling weighted rewards without inspecting frequency can create unintended scarcity.

---

### 3. Tile grids and room connectivity

Graphs represent room connections while grids represent spatial layout; a traversable level must satisfy both.

**Common failures:**

- A pretty tile map can contain unreachable extraction or blocked mandatory loot.

**Suggested reading:**

- Required: [Red Blob Games — Breadth First Search](https://www.redblobgames.com/pathfinding/a-star/introduction.html) — Read **Breadth-first search illustrations**. Your goal is to explain: Graphs represent room connections while grids represent spatial layout; a traversable level must satisfy both. Afterward, test the idea in a throwaway Godot scene; do not copy the tutorial wholesale.

**Practice:**


**Try it (guided):** Hands-on: Generate a simple rectangular room with walls and doors.

Success checks:
- Run a flood-fill or graph test and verify the critical objective is reachable.
- Show the guided implementation with one controlled variation; describe why the behavior changes.
- Test this failure mode deliberately: A pretty tile map can contain unreachable extraction or blocked mandatory loot.

**Build it (independent):** Independent: Generate rooms with random obstacles and reject layouts where the exit is blocked.

Success checks:
- Run a flood-fill or graph test and verify the critical objective is reachable.
- Build the extension in a separate scene or script, and explain how its architecture differs from the guided example.
- Test this failure mode deliberately: A pretty tile map can contain unreachable extraction or blocked mandatory loot.

**Knowledge check:** How do you prove reachability rather than only checking visual appearance?

**Self-review:** A good answer should mention: Graphs represent room connections while grids represent spatial layout; a traversable level must satisfy both. It should also distinguish the common failure: A pretty tile map can contain unreachable extraction or blocked mandatory loot.

---

### 4. Rule-based and constrained generation

Constraint-based generation assembles candidates and rejects or repairs those that violate important rules.

**Common failures:**

- Rerolling forever until a good map appears can cause generation stalls.

**Suggested reading:**

- Required: [Game Programming Patterns — Spatial Partition](https://gameprogrammingpatterns.com/spatial-partition.html) — Read **Grid partition examples**. Your goal is to explain: Constraint-based generation assembles candidates and rejects or repairs those that violate important rules. Afterward, test the idea in a throwaway Godot scene; do not copy the tutorial wholesale.

**Practice:**


**Try it (guided):** Hands-on: Require an entrance, reward and safe zone in every level.

Success checks:
- Run 500 seeds under a fixed budget with no invalid maps or unbounded retries.
- Show the guided implementation with one controlled variation; describe why the behavior changes.
- Test this failure mode deliberately: Rerolling forever until a good map appears can cause generation stalls.

**Build it (independent):** Independent: Make a map with distinct high-risk and low-risk routes and at least one optional reward.

Success checks:
- Run 500 seeds under a fixed budget with no invalid maps or unbounded retries.
- Build the extension in a separate scene or script, and explain how its architecture differs from the guided example.
- Test this failure mode deliberately: Rerolling forever until a good map appears can cause generation stalls.

**Knowledge check:** What constraints are necessary versus aesthetic preferences?

**Self-review:** A good answer should mention: Constraint-based generation assembles candidates and rejects or repairs those that violate important rules. It should also distinguish the common failure: Rerolling forever until a good map appears can cause generation stalls.

---

### 5. Procedural QA and reproducibility

Procedural QA needs a seed log, invariants and intentionally adversarial configurations. The exercise asks you to demonstrate the difference between expected behavior and an observed edge case.

**Common failures:**

- Testing only the first pleasant-looking map misses rare catastrophic layouts.

**Suggested reading:**

- Required: [Godot: Debugging and profiling](https://docs.godotengine.org/en/stable/tutorials/scripting/debug/index.html) — Read **the relevant examples**. Your goal is to explain: Procedural QA needs a seed log, invariants and intentionally adversarial configurations. Afterward, test the idea in a throwaway Godot scene; do not copy the tutorial wholesale.

**Practice:**


**Try it (guided):** Hands-on: Generate 100 maps and count invalid ones.

Success checks:
- Replay five failing seeds from saved logs and show the bug is fixed for all of them.
- Show the guided implementation with one controlled variation; describe why the behavior changes.
- Test this failure mode deliberately: Testing only the first pleasant-looking map misses rare catastrophic layouts.

**Build it (independent):** Independent: Write automated invariants for connectivity, overlap and expected spawn counts over many seeds.

Success checks:
- Replay five failing seeds from saved logs and show the bug is fixed for all of them.
- Build the extension in a separate scene or script, and explain how its architecture differs from the guided example.
- Test this failure mode deliberately: Testing only the first pleasant-looking map misses rare catastrophic layouts.

**Knowledge check:** What does zero failures in 100 seeds prove—and not prove?

**Self-review:** A good answer should mention: Procedural QA needs a seed log, invariants and intentionally adversarial configurations. It should also distinguish the common failure: Testing only the first pleasant-looking map misses rare catastrophic layouts.

---

### 6. Seeded Treasure Rooms

Generate many compact treasure rooms with fair entrances, distinct rewards and a reproducible seed.

**Suggested reading:**

- Recommended: [Godot: Scripting documentation](https://docs.godotengine.org/en/stable/tutorials/scripting/index.html) — Revisit the relevant course sections only when blocked.

**Practice:**


**Seeded Treasure Rooms (course_project):** Generate many compact treasure rooms with fair entrances, distinct rewards and a reproducible seed.

Success checks:
- Identical seeds yield identical critical room/layout data.
- 500 generated rooms satisfy reachability and spawn-safety invariants.
- Invalid constraints result in bounded failure, not infinite retries.

**Knowledge check:** Which implementation decisions would you change if you rebuilt this project?

**Self-review:** Your review should cite actual design decisions, a reproduced defect, feedback, and one alternative you decided against.

---


## Ship one polished microgame [Core]

Practice the complete development cycle in a deliberately small game with beginning, rules and ending.

**Prerequisites:** g04-animation, g07-design, g08-ui, g09-level, g10-ai
**Suggested structured study:** 23 hours (not a complete game production budget)

### 1. Define a one-page game specification

A one-page specification states the experience, audience, controls, completion goal, failure state and non-goals.

**Common failures:**

- Starting from an open-ended feature wish list makes finishing impossible.

**Suggested reading:**

- Required: [Game Design Concepts — Introduction](https://gamedesignconcepts.wordpress.com/) — Read **Design vs implementation**. Your goal is to explain: A one-page specification states the experience, audience, controls, completion goal, failure state and non-goals. Afterward, test the idea in a throwaway Godot scene; do not copy the tutorial wholesale.
- Optional: [Game Design Concepts — Ian Schreiber](https://gamedesignconcepts.wordpress.com/2009/07/) — Optional background: compare the examples with your implementation of define a one-page game specification. Focus on design tradeoffs, not memorizing an API.

**Practice:**


**Try it (guided):** Hands-on: Write a one-page specification with non-goals.

Success checks:
- Write and respect a feature budget; every implemented feature supports the core promise.
- Show the guided implementation with one controlled variation; describe why the behavior changes.
- Test this failure mode deliberately: Starting from an open-ended feature wish list makes finishing impossible.

**Build it (independent):** Independent: Cut an imagined 20-feature game down to one player action, one complication and one success state.

Success checks:
- Write and respect a feature budget; every implemented feature supports the core promise.
- Build the extension in a separate scene or script, and explain how its architecture differs from the guided example.
- Test this failure mode deliberately: Starting from an open-ended feature wish list makes finishing impossible.

**Knowledge check:** Which feature can you remove without breaking the promised experience?

**Self-review:** A good answer should mention: A one-page specification states the experience, audience, controls, completion goal, failure state and non-goals. It should also distinguish the common failure: Starting from an open-ended feature wish list makes finishing impossible.

---

### 2. Integrate without regression

Integration means subsystems must cooperate under transitions, restarts, cancellation and errors.

**Common failures:**

- Mechanics can each work separately while restart leaves stale state or duplicate signals.

**Suggested reading:**

- Required: [Game Programming Patterns: Component](https://gameprogrammingpatterns.com/component.html) — Read **the relevant examples**. Your goal is to explain: Integration means subsystems must cooperate under transitions, restarts, cancellation and errors. Afterward, test the idea in a throwaway Godot scene; do not copy the tutorial wholesale.

**Practice:**


**Try it (guided):** Hands-on: Merge movement, pickup and hazards in one scene.

Success checks:
- Play five consecutive sessions, including death, reset and scene reload, without state leakage.
- Show the guided implementation with one controlled variation; describe why the behavior changes.
- Test this failure mode deliberately: Mechanics can each work separately while restart leaves stale state or duplicate signals.

**Build it (independent):** Independent: Add pause/restart and prove neither corrupts state after repeated game overs.

Success checks:
- Play five consecutive sessions, including death, reset and scene reload, without state leakage.
- Build the extension in a separate scene or script, and explain how its architecture differs from the guided example.
- Test this failure mode deliberately: Mechanics can each work separately while restart leaves stale state or duplicate signals.

**Knowledge check:** Which new failures arise only after separate mechanics interact?

**Self-review:** A good answer should mention: Integration means subsystems must cooperate under transitions, restarts, cancellation and errors. It should also distinguish the common failure: Mechanics can each work separately while restart leaves stale state or duplicate signals.

---

### 3. Playtest comprehension

Playtesting reveals whether players understand mechanics without your guidance. The exercise asks you to demonstrate the difference between expected behavior and an observed edge case.

**Common failures:**

- Explaining controls aloud during a test invalidates observations about onboarding.

**Suggested reading:**

- Required: [Game Design Concepts — Game Design Concepts archive](https://gamedesignconcepts.wordpress.com/2009/07/) — Read **Selected game design lessons**. Your goal is to explain: Playtesting reveals whether players understand mechanics without your guidance. Afterward, test the idea in a throwaway Godot scene; do not copy the tutorial wholesale.
- Optional: [Game Design Concepts — Ian Schreiber](https://gamedesignconcepts.wordpress.com/2009/07/) — Optional background: compare the examples with your implementation of playtest comprehension. Focus on design tradeoffs, not memorizing an API.

**Practice:**


**Try it (guided):** Hands-on: Run one first-time-player session without explaining controls.

Success checks:
- Observe three first-time players; identify recurring confusion and fix the most consequential issue.
- Show the guided implementation with one controlled variation; describe why the behavior changes.
- Test this failure mode deliberately: Explaining controls aloud during a test invalidates observations about onboarding.

**Build it (independent):** Independent: Conduct five short playtests and rank fixes by frequency and severity.

Success checks:
- Observe three first-time players; identify recurring confusion and fix the most consequential issue.
- Build the extension in a separate scene or script, and explain how its architecture differs from the guided example.
- Test this failure mode deliberately: Explaining controls aloud during a test invalidates observations about onboarding.

**Knowledge check:** What evidence differentiates confusing controls from an intentional challenge?

**Self-review:** A good answer should mention: Playtesting reveals whether players understand mechanics without your guidance. It should also distinguish the common failure: Explaining controls aloud during a test invalidates observations about onboarding.

---

### 4. Polish and freeze scope

Polish is readability and consistency, not endless decoration. A scope freeze converts a prototype into a deliverable.

**Common failures:**

- Adding one more feature at the end increases bugs and delays release.

**Suggested reading:**

- Required: [Game Design Concepts — Game Design Concepts archive](https://gamedesignconcepts.wordpress.com/2009/07/) — Read **Selected game design lessons**. Your goal is to explain: Polish is readability and consistency, not endless decoration. Afterward, test the idea in a throwaway Godot scene; do not copy the tutorial wholesale.

**Practice:**


**Try it (guided):** Hands-on: Replace unclear visuals and reduce response delay.

Success checks:
- Freeze features, run a regression checklist and address only severe defects before packaging.
- Show the guided implementation with one controlled variation; describe why the behavior changes.
- Test this failure mode deliberately: Adding one more feature at the end increases bugs and delays release.

**Build it (independent):** Independent: Create a prioritized polish list then freeze features for a final test build.

Success checks:
- Freeze features, run a regression checklist and address only severe defects before packaging.
- Build the extension in a separate scene or script, and explain how its architecture differs from the guided example.
- Test this failure mode deliberately: Adding one more feature at the end increases bugs and delays release.

**Knowledge check:** How do you detect polishing work that does not improve player experience?

**Self-review:** A good answer should mention: Polish is readability and consistency, not endless decoration. A scope freeze converts a prototype into a deliverable. It should also distinguish the common failure: Adding one more feature at the end increases bugs and delays release.

---

### 5. Export and release a playable build

A releasable build should open on someone else's machine with sane defaults and a complete start/end loop.

**Common failures:**

- Running only in the Godot editor is not a finished game artifact.

**Suggested reading:**

- Required: [Godot — Exporting projects](https://docs.godotengine.org/en/stable/tutorials/export/exporting_projects.html) — Read **Export templates and presets**. Your goal is to explain: A releasable build should open on someone else's machine with sane defaults and a complete start/end loop. Afterward, test the idea in a throwaway Godot scene; do not copy the tutorial wholesale.

**Practice:**


**Try it (guided):** Hands-on: Export a desktop build and launch it independently.

Success checks:
- Export a build and have someone unfamiliar play it from start through ending without developer assistance.
- Show the guided implementation with one controlled variation; describe why the behavior changes.
- Test this failure mode deliberately: Running only in the Godot editor is not a finished game artifact.

**Build it (independent):** Independent: Give the build to someone else and fix an installation or input problem they encounter.

Success checks:
- Export a build and have someone unfamiliar play it from start through ending without developer assistance.
- Build the extension in a separate scene or script, and explain how its architecture differs from the guided example.
- Test this failure mode deliberately: Running only in the Godot editor is not a finished game artifact.

**Knowledge check:** What assumptions did the editor hide that broke the exported game?

**Self-review:** A good answer should mention: A releasable build should open on someone else's machine with sane defaults and a complete start/end loop. It should also distinguish the common failure: Running only in the Godot editor is not a finished game artifact.

---

### 6. The Thirty-Minute Heist

Finish a complete 5–10 minute top-down microgame: enter a museum, collect one artifact, avoid a guard and escape. It may reuse earlier exercises but must be independently playable.

**Suggested reading:**

- Recommended: [Godot: Official Demo Projects](https://github.com/godotengine/godot-demo-projects) — Revisit the relevant course sections only when blocked.

**Practice:**


**The Thirty-Minute Heist (course_project):** Finish a complete 5–10 minute top-down microgame: enter a museum, collect one artifact, avoid a guard and escape. It may reuse earlier exercises but must be independently playable.

Success checks:
- A first-time player can finish the game from menu to end screen.
- Restart after losing does not duplicate objects or callbacks.
- Provide a packaged playable build, not just the editor project.

**Knowledge check:** Which implementation decisions would you change if you rebuilt this project?

**Self-review:** Your review should cite actual design decisions, a reproduced defect, feedback, and one alternative you decided against.

---


## Debugging, automated checks and performance [Core]

Learn to diagnose actual problems and optimize measurements, not intuitions.

**Prerequisites:** g12-microgame
**Suggested structured study:** 28 hours (not a complete game production budget)

### 1. Reproduction, logs and breakpoints

Debugging begins with a reliable reproduction and a hypothesis; use logs, breakpoints and minimal test scenes.

**Common failures:**

- Changing many variables at once makes a defect appear fixed without understanding the cause.

**Suggested reading:**

- Required: [Godot: Debugging and profiling](https://docs.godotengine.org/en/stable/tutorials/scripting/debug/index.html) — Read **the relevant examples**. Your goal is to explain: Debugging begins with a reliable reproduction and a hypothesis; use logs, breakpoints and minimal test scenes. Afterward, test the idea in a throwaway Godot scene; do not copy the tutorial wholesale.
- Optional: [Godot: Optimizing projects](https://docs.godotengine.org/en/stable/tutorials/performance/index.html) — Optional background: compare the examples with your implementation of reproduction, logs and breakpoints. Focus on design tradeoffs, not memorizing an API.

**Practice:**


**Try it (guided):** Hands-on: Write a bug report for a wall-collision edge case.

Success checks:
- Record reproduction steps, isolate one root cause and show a regression check before/after the fix.
- Show the guided implementation with one controlled variation; describe why the behavior changes.
- Test this failure mode deliberately: Changing many variables at once makes a defect appear fixed without understanding the cause.

**Build it (independent):** Independent: Build a small scene with a hidden timing bug; isolate the failure through logging and breakpoints.

Success checks:
- Record reproduction steps, isolate one root cause and show a regression check before/after the fix.
- Build the extension in a separate scene or script, and explain how its architecture differs from the guided example.
- Test this failure mode deliberately: Changing many variables at once makes a defect appear fixed without understanding the cause.

**Knowledge check:** What minimal input sequence reproduces the issue?

**Self-review:** A good answer should mention: Debugging begins with a reliable reproduction and a hypothesis; use logs, breakpoints and minimal test scenes. It should also distinguish the common failure: Changing many variables at once makes a defect appear fixed without understanding the cause.

---

### 2. Profiling the frame

A frame budget divides time across simulation, scripting, physics and rendering. Measure rather than guess bottlenecks.

**Common failures:**

- High CPU usage alone does not tell you what causes a frame spike.

**Suggested reading:**

- Required: [Godot — The Profiler](https://docs.godotengine.org/en/stable/tutorials/scripting/debug/the_profiler.html) — Read **Profiler monitors and capture**. Your goal is to explain: A frame budget divides time across simulation, scripting, physics and rendering. Afterward, test the idea in a throwaway Godot scene; do not copy the tutorial wholesale.

**Practice:**


**Try it (guided):** Hands-on: Record a baseline profile during crowded gameplay.

Success checks:
- Capture before/after profiling data for an induced slowdown and identify the responsible subsystem.
- Show the guided implementation with one controlled variation; describe why the behavior changes.
- Test this failure mode deliberately: High CPU usage alone does not tell you what causes a frame spike.

**Build it (independent):** Independent: Add 200 moving props, identify the actual expensive subsystem and test a measured fix.

Success checks:
- Capture before/after profiling data for an induced slowdown and identify the responsible subsystem.
- Build the extension in a separate scene or script, and explain how its architecture differs from the guided example.
- Test this failure mode deliberately: High CPU usage alone does not tell you what causes a frame spike.

**Knowledge check:** Why is average FPS often inadequate for identifying stutters?

**Self-review:** A good answer should mention: A frame budget divides time across simulation, scripting, physics and rendering. Measure rather than guess bottlenecks. It should also distinguish the common failure: High CPU usage alone does not tell you what causes a frame spike.

---

### 3. Memory and allocation behavior

Object lifetime and allocation churn affect memory and stutter. Pool only after measuring a real need.

**Common failures:**

- Creating a pool for every object introduces complexity without benefits.

**Suggested reading:**

- Required: [Game Programming Patterns: Object Pool](https://gameprogrammingpatterns.com/object-pool.html) — Read **the relevant examples**. Your goal is to explain: Object lifetime and allocation churn affect memory and stutter. Afterward, test the idea in a throwaway Godot scene; do not copy the tutorial wholesale.
- Optional: [Godot: Optimizing projects](https://docs.godotengine.org/en/stable/tutorials/performance/index.html) — Optional background: compare the examples with your implementation of memory and allocation behavior. Focus on design tradeoffs, not memorizing an API.

**Practice:**


**Try it (guided):** Hands-on: Track spawned objects during repeated restarts.

Success checks:
- Profile a spawning scene and compare allocation and frame-time behavior before and after one targeted change.
- Show the guided implementation with one controlled variation; describe why the behavior changes.
- Test this failure mode deliberately: Creating a pool for every object introduces complexity without benefits.

**Build it (independent):** Independent: Create a particle or projectile stress test and compare allocation patterns with and without reuse.

Success checks:
- Profile a spawning scene and compare allocation and frame-time behavior before and after one targeted change.
- Build the extension in a separate scene or script, and explain how its architecture differs from the guided example.
- Test this failure mode deliberately: Creating a pool for every object introduces complexity without benefits.

**Knowledge check:** When can object pooling make code worse rather than better?

**Self-review:** A good answer should mention: Object lifetime and allocation churn affect memory and stutter. Pool only after measuring a real need. It should also distinguish the common failure: Creating a pool for every object introduces complexity without benefits.

---

### 4. Rendering and draw cost

Rendering performance depends on overdraw, materials, particle counts, batching and GPU workload.

**Common failures:**

- Reducing node count may not improve performance if fill rate is the bottleneck.

**Suggested reading:**

- Required: [Godot: Optimizing projects](https://docs.godotengine.org/en/stable/tutorials/performance/index.html) — Read **the relevant examples**. Your goal is to explain: Rendering performance depends on overdraw, materials, particle counts, batching and GPU workload. Afterward, test the idea in a throwaway Godot scene; do not copy the tutorial wholesale.

**Practice:**


**Try it (guided):** Hands-on: Profile a scene with and without dense particles.

Success checks:
- Compare a VFX-heavy scene before/after reducing a known rendering cost while keeping gameplay equivalent.
- Show the guided implementation with one controlled variation; describe why the behavior changes.
- Test this failure mode deliberately: Reducing node count may not improve performance if fill rate is the bottleneck.

**Build it (independent):** Independent: Build a before/after performance capture for lights or shader effects at multiple resolutions.

Success checks:
- Compare a VFX-heavy scene before/after reducing a known rendering cost while keeping gameplay equivalent.
- Build the extension in a separate scene or script, and explain how its architecture differs from the guided example.
- Test this failure mode deliberately: Reducing node count may not improve performance if fill rate is the bottleneck.

**Knowledge check:** How do you distinguish CPU script cost from GPU rendering cost?

**Self-review:** A good answer should mention: Rendering performance depends on overdraw, materials, particle counts, batching and GPU workload. It should also distinguish the common failure: Reducing node count may not improve performance if fill rate is the bottleneck.

---

### 5. Regression suites and smoke testing

Automated regression checks protect repeatable rules, while exploratory tests reveal the unexpected.

**Common failures:**

- One end-to-end happy-path test misses edge cases like corrupt saves and invalid states.

**Suggested reading:**

- Required: [Godot — GDScript language reference (assertions and error handling)](https://docs.godotengine.org/en/stable/tutorials/scripting/gdscript/gdscript_basics.html) — Read **assert and error handling**. Your goal is to explain: Automated regression checks protect repeatable rules, while exploratory tests reveal the unexpected. Afterward, test the idea in a throwaway Godot scene; do not copy the tutorial wholesale.

**Practice:**


**Try it (guided):** Hands-on: Write a ten-step manual smoke checklist.

Success checks:
- Create tests for at least three previously observed defects and confirm they fail before the fix.
- Show the guided implementation with one controlled variation; describe why the behavior changes.
- Test this failure mode deliberately: One end-to-end happy-path test misses edge cases like corrupt saves and invalid states.

**Build it (independent):** Independent: Automate a data/logic test and run a manual smoke pass on exported builds after an architecture refactor.

Success checks:
- Create tests for at least three previously observed defects and confirm they fail before the fix.
- Build the extension in a separate scene or script, and explain how its architecture differs from the guided example.
- Test this failure mode deliberately: One end-to-end happy-path test misses edge cases like corrupt saves and invalid states.

**Knowledge check:** What should be tested at unit level versus end-to-end gameplay?

**Self-review:** A good answer should mention: Automated regression checks protect repeatable rules, while exploratory tests reveal the unexpected. It should also distinguish the common failure: One end-to-end happy-path test misses edge cases like corrupt saves and invalid states.

---

### 6. Stress-testing hundreds of moving objects

Performance evaluation should scale entity counts until the scene crosses a stated frame-time budget. Physics cost, rendering cost and script cost must be measured separately before selecting an optimization.

**Common failures:**

- Reducing draw calls will not fix a physics-solver bottleneck; changing code without a controlled baseline hides improvements.

**Suggested reading:**

- Required: [Godot — The Profiler](https://docs.godotengine.org/en/stable/tutorials/scripting/debug/the_profiler.html) — Use Godot’s profiler, monitors and optimization documentation. Record frame-time percentiles rather than one optimistic FPS number.

**Practice:**


**Controlled experiment (guided):** Spawn 50, 100 and 300 drifting asteroids and capture CPU/physics times.

Success checks:
- Report entity counts, worst-case frame times and physics time with the same hardware settings.
- No duplicate state or missing colliders after despawn/respawn.
- An optimization produces a measured improvement without changing required behavior.
- Demonstrate and explain the failure mode: Reducing draw calls will not fix a physics-solver bottleneck; changing code without a controlled baseline hides improvements.

**Independent transfer (independent):** Build a spatial activity/respawn policy and compare performance and behavior against the original scene.

Success checks:
- Report entity counts, worst-case frame times and physics time with the same hardware settings.
- No duplicate state or missing colliders after despawn/respawn.
- An optimization produces a measured improvement without changing required behavior.
- Demonstrate and explain the failure mode: Reducing draw calls will not fix a physics-solver bottleneck; changing code without a controlled baseline hides improvements.

**Knowledge check:** Which engineering or game-design tradeoff matters most in this experiment?

**Self-review:** Performance evaluation should scale entity counts until the scene crosses a stated frame-time budget. Physics cost, rendering cost and script cost must be measured separately before selecting an optimization.

---

### 7. Break and Repair Lab

Inject five bugs and one expensive feature into your microgame, then produce a concise defect and performance report.

**Suggested reading:**

- Recommended: [Godot: Debugging and profiling](https://docs.godotengine.org/en/stable/tutorials/scripting/debug/index.html) — Revisit the relevant course sections only when blocked.

**Practice:**


**Break and Repair Lab (course_project):** Inject five bugs and one expensive feature into your microgame, then produce a concise defect and performance report.

Success checks:
- Reproduce and fix at least three bugs with regression checks.
- Benchmark frame-time before/after one optimization.
- Explain the observed bottleneck from profiler evidence.

**Knowledge check:** Which implementation decisions would you change if you rebuilt this project?

**Self-review:** Your review should cite actual design decisions, a reproduced defect, feedback, and one alternative you decided against.

---


## Content pipelines, tooling and collaboration [Core]

Convert prototypes into repeatable production processes without overengineering.

**Prerequisites:** g12-microgame
**Suggested structured study:** 23 hours (not a complete game production budget)

### 1. Asset import and provenance

Imported assets bring resolution, filtering, naming, licensing and provenance decisions that affect builds.

**Common failures:**

- Downloading a free-looking asset doesn't automatically grant commercial redistribution rights.

**Suggested reading:**

- Required: [Kenney: Game Assets](https://kenney.nl/assets) — Read **the relevant examples**. Your goal is to explain: Imported assets bring resolution, filtering, naming, licensing and provenance decisions that affect builds. Afterward, test the idea in a throwaway Godot scene; do not copy the tutorial wholesale.
- Optional: [Godot: Exporting projects](https://docs.godotengine.org/en/stable/tutorials/export/index.html) — Optional background: compare the examples with your implementation of asset import and provenance. Focus on design tradeoffs, not memorizing an API.

**Practice:**


**Try it (guided):** Hands-on: Import a tiny coherent asset pack and track attribution.

Success checks:
- Import assets with documented source and license; verify the project still builds after moving its folder.
- Show the guided implementation with one controlled variation; describe why the behavior changes.
- Test this failure mode deliberately: Downloading a free-looking asset doesn't automatically grant commercial redistribution rights.

**Build it (independent):** Independent: Set up an art drop folder and replace placeholder assets without editing game rules.

Success checks:
- Import assets with documented source and license; verify the project still builds after moving its folder.
- Build the extension in a separate scene or script, and explain how its architecture differs from the guided example.
- Test this failure mode deliberately: Downloading a free-looking asset doesn't automatically grant commercial redistribution rights.

**Knowledge check:** What information must be recorded before shipping a downloaded asset?

**Self-review:** A good answer should mention: Imported assets bring resolution, filtering, naming, licensing and provenance decisions that affect builds. It should also distinguish the common failure: Downloading a free-looking asset doesn't automatically grant commercial redistribution rights.

---

### 2. Project organization and version control

Version control should record coherent changes and ignore generated caches; binary assets need intentional handling.

**Common failures:**

- Committing Godot import caches and editor state can bloat or destabilize the repo.

**Suggested reading:**

- Required: [Godot — Best Practices](https://docs.godotengine.org/en/stable/tutorials/best_practices/index.html) — Read Scene organization; autoloads versus nodes. As you read, identify one idea you can directly apply to this task: Project organization and version control. Test that idea through the guided assignment.

**Practice:**


**Try it (guided):** Hands-on: Write an engine-appropriate .gitignore and commit the microgame.

Success checks:
- Clone into a fresh directory, import and run without relying on your original workstation.
- Show the guided implementation with one controlled variation; describe why the behavior changes.
- Test this failure mode deliberately: Committing Godot import caches and editor state can bloat or destabilize the repo.

**Build it (independent):** Independent: Clone the project into a new folder and verify clean rebuild/import without missing assets.

Success checks:
- Clone into a fresh directory, import and run without relying on your original workstation.
- Build the extension in a separate scene or script, and explain how its architecture differs from the guided example.
- Test this failure mode deliberately: Committing Godot import caches and editor state can bloat or destabilize the repo.

**Knowledge check:** Which generated files should never be version-controlled?

**Self-review:** A good answer should mention: Version control should record coherent changes and ignore generated caches; binary assets need intentional handling. It should also distinguish the common failure: Committing Godot import caches and editor state can bloat or destabilize the repo.

---

### 3. Designer-friendly tooling

Designer-facing tooling makes iteration faster by exposing safe, typed configuration and useful visual feedback.

**Common failures:**

- Hardcoding all tunable values forces a programmer to edit scripts for balance.

**Suggested reading:**

- Required: [Godot — Resources](https://docs.godotengine.org/en/stable/tutorials/scripting/resources.html) — Read **Resource lifecycle and instances**. Your goal is to explain: Designer-facing tooling makes iteration faster by exposing safe, typed configuration and useful visual feedback. Afterward, test the idea in a throwaway Godot scene; do not copy the tutorial wholesale.
- Optional: [Godot: Exporting projects](https://docs.godotengine.org/en/stable/tutorials/export/index.html) — Optional background: compare the examples with your implementation of designer-friendly tooling. Focus on design tradeoffs, not memorizing an API.

**Practice:**


**Try it (guided):** Hands-on: Expose encounter parameters in the Inspector.

Success checks:
- Change enemy speed, reward and behavior through exported properties/resources without changing scripts.
- Show the guided implementation with one controlled variation; describe why the behavior changes.
- Test this failure mode deliberately: Hardcoding all tunable values forces a programmer to edit scripts for balance.

**Build it (independent):** Independent: Create a level authoring helper that validates doors, spawns and checkpoints before play.

Success checks:
- Change enemy speed, reward and behavior through exported properties/resources without changing scripts.
- Build the extension in a separate scene or script, and explain how its architecture differs from the guided example.
- Test this failure mode deliberately: Hardcoding all tunable values forces a programmer to edit scripts for balance.

**Knowledge check:** What editing operation should designers perform without touching code?

**Self-review:** A good answer should mention: Designer-facing tooling makes iteration faster by exposing safe, typed configuration and useful visual feedback. It should also distinguish the common failure: Hardcoding all tunable values forces a programmer to edit scripts for balance.

---

### 4. Build and release automation

Build automation should reproduce exports, smoke-check them and attach version information.

**Common failures:**

- A build that depends on unrecorded local export templates is not reproducible.

**Suggested reading:**

- Required: [Godot — Exporting projects](https://docs.godotengine.org/en/stable/tutorials/export/exporting_projects.html) — Read **Export templates and presets**. Your goal is to explain: Build automation should reproduce exports, smoke-check them and attach version information. Afterward, test the idea in a throwaway Godot scene; do not copy the tutorial wholesale.

**Practice:**


**Try it (guided):** Hands-on: Write a documented build checklist.

Success checks:
- Document export prerequisites and reproduce a build from a clean checkout.
- Show the guided implementation with one controlled variation; describe why the behavior changes.
- Test this failure mode deliberately: A build that depends on unrecorded local export templates is not reproducible.

**Build it (independent):** Independent: Make a script producing a versioned desktop build and checksums from a clean project.

Success checks:
- Document export prerequisites and reproduce a build from a clean checkout.
- Build the extension in a separate scene or script, and explain how its architecture differs from the guided example.
- Test this failure mode deliberately: A build that depends on unrecorded local export templates is not reproducible.

**Knowledge check:** How do you establish exactly which commit produced a build?

**Self-review:** A good answer should mention: Build automation should reproduce exports, smoke-check them and attach version information. It should also distinguish the common failure: A build that depends on unrecorded local export templates is not reproducible.

---

### 5. Creative collaboration and handoffs

Creative collaboration needs clear briefs, review milestones, source asset conventions and feedback protocols.

**Common failures:**

- Vague requests for 'more atmosphere' create endless revision loops.

**Suggested reading:**

- Required: [Game Design Concepts — Game Design Concepts archive](https://gamedesignconcepts.wordpress.com/2009/07/) — Read **Selected game design lessons**. Your goal is to explain: Creative collaboration needs clear briefs, review milestones, source asset conventions and feedback protocols. Afterward, test the idea in a throwaway Godot scene; do not copy the tutorial wholesale.

**Practice:**


**Try it (guided):** Hands-on: Write a one-page brief for a hit-effect animator.

Success checks:
- Write a one-page art/audio brief, receive a mock deliverable, review against acceptance criteria.
- Show the guided implementation with one controlled variation; describe why the behavior changes.
- Test this failure mode deliberately: Vague requests for 'more atmosphere' create endless revision loops.

**Build it (independent):** Independent: Simulate an art handoff with constraints, acceptance examples and review iterations.

Success checks:
- Write a one-page art/audio brief, receive a mock deliverable, review against acceptance criteria.
- Build the extension in a separate scene or script, and explain how its architecture differs from the guided example.
- Test this failure mode deliberately: Vague requests for 'more atmosphere' create endless revision loops.

**Knowledge check:** How can a good specification leave room for creative judgment?

**Self-review:** A good answer should mention: Creative collaboration needs clear briefs, review milestones, source asset conventions and feedback protocols. It should also distinguish the common failure: Vague requests for 'more atmosphere' create endless revision loops.

---

### 6. One-Week Content Sprint

Add a coherent new mini-area to the microgame, document its assets and release a tested build.

**Suggested reading:**

- Recommended: [Godot: Scripting documentation](https://docs.godotengine.org/en/stable/tutorials/scripting/index.html) — Revisit the relevant course sections only when blocked.

**Practice:**


**One-Week Content Sprint (course_project):** Add a coherent new mini-area to the microgame, document its assets and release a tested build.

Success checks:
- Reproduce an export from a clean clone.
- Document asset sources and licenses.
- Change one content item using data/config without code modification.

**Knowledge check:** Which implementation decisions would you change if you rebuilt this project?

**Self-review:** Your review should cite actual design decisions, a reproduced defect, feedback, and one alternative you decided against.

---


## Exploration & Salvage capstone — design and vertical slice [Core]

Turn the existing Godot game into a focused, testable experience rather than an infinite feature backlog.

**Prerequisites:** g10-ai, g11-world, g13-testing, g14-production
**Suggested structured study:** 45 hours (not a complete game production budget)

### 1. Define the player promise and scope

The player promise is a narrow statement of the repeated experience, not an inventory of all possible features.

**Common failures:**

- Building every dreamed-of mechanic before proving the loop consumes production runway.

**Suggested reading:**

- Required: [Game Design Concepts — Early Design Process](https://gamedesignconcepts.wordpress.com/2009/07/09/level-4-the-early-stages-of-the-design-process/) — Read Iterative process and constraints. As you read, identify one idea you can directly apply to this task: Define the player promise and scope. Test that idea through the guided assignment.
- Optional: [Game Design Concepts — Ian Schreiber](https://gamedesignconcepts.wordpress.com/2009/07/) — Optional background: compare the examples with your implementation of define the player promise and scope. Focus on design tradeoffs, not memorizing an API.

**Practice:**


**Try it (guided):** Hands-on: Write a one-sentence promise for the salvage game.

Success checks:
- Demonstrate one extraction run that expresses the promise in under 20 minutes.
- Show the guided implementation with one controlled variation; describe why the behavior changes.
- Test this failure mode deliberately: Building every dreamed-of mechanic before proving the loop consumes production runway.

**Build it (independent):** Independent: Reduce the first slice to a single sector, one meaningful sonar tradeoff and one extraction result.

Success checks:
- Demonstrate one extraction run that expresses the promise in under 20 minutes.
- Build the extension in a separate scene or script, and explain how its architecture differs from the guided example.
- Test this failure mode deliberately: Building every dreamed-of mechanic before proving the loop consumes production runway.

**Knowledge check:** What must a player experience to understand your game’s identity?

**Self-review:** A good answer should mention: The player promise is a narrow statement of the repeated experience, not an inventory of all possible features. It should also distinguish the common failure: Building every dreamed-of mechanic before proving the loop consumes production runway.

---

### 2. Sonar as a risk-reward mechanic

Sonar should reveal useful information while creating a readable cost, such as alerting enemies.

**Common failures:**

- A hidden danger penalty makes the sonar mechanic feel arbitrary.

**Suggested reading:**

- Required: [Godot — Ray-casting](https://docs.godotengine.org/en/stable/tutorials/physics/ray-casting.html) — Read **RayCast2D usage**. Your goal is to explain: Sonar should reveal useful information while creating a readable cost, such as alerting enemies. Afterward, test the idea in a throwaway Godot scene; do not copy the tutorial wholesale.

**Practice:**


**Try it (guided):** Hands-on: Show a hidden item only after a sonar ping.

Success checks:
- Run playtests with sonar on/off; players can describe what was gained and what risk was introduced.
- Show the guided implementation with one controlled variation; describe why the behavior changes.
- Test this failure mode deliberately: A hidden danger penalty makes the sonar mechanic feel arbitrary.

**Build it (independent):** Independent: Link sonar noise to one enemy’s awareness and tune the interval that creates real tension.

Success checks:
- Run playtests with sonar on/off; players can describe what was gained and what risk was introduced.
- Build the extension in a separate scene or script, and explain how its architecture differs from the guided example.
- Test this failure mode deliberately: A hidden danger penalty makes the sonar mechanic feel arbitrary.

**Knowledge check:** What would stop players spamming sonar without thinking?

**Self-review:** A good answer should mention: Sonar should reveal useful information while creating a readable cost, such as alerting enemies. It should also distinguish the common failure: A hidden danger penalty makes the sonar mechanic feel arbitrary.

---

### 3. Salvage, towing and extraction

Towing needs defined attachment rules, speed limits, collision response, loss conditions and fairness.

**Common failures:**

- A jittery joint simulation may be realistic but mechanically worse than controlled arcade towing.

**Suggested reading:**

- Required: [Godot — PinJoint2D](https://docs.godotengine.org/en/stable/classes/class_pinjoint2d.html) — Read **body_a/body_b constraints**. Your goal is to explain: Towing needs defined attachment rules, speed limits, collision response, loss conditions and fairness. Afterward, test the idea in a throwaway Godot scene; do not copy the tutorial wholesale.
- Optional: [Game Design Concepts — Ian Schreiber](https://gamedesignconcepts.wordpress.com/2009/07/) — Optional background: compare the examples with your implementation of salvage, towing and extraction. Focus on design tradeoffs, not memorizing an API.

**Practice:**


**Try it (guided):** Hands-on: Build one salvage pickup and drop-off flow.

Success checks:
- Compare a physical and simplified tether under turns, corners, mass differences and quick detachment.
- Show the guided implementation with one controlled variation; describe why the behavior changes.
- Test this failure mode deliberately: A jittery joint simulation may be realistic but mechanically worse than controlled arcade towing.

**Build it (independent):** Independent: Create a bulky piece of salvage that slows navigation and increases detection risk.

Success checks:
- Compare a physical and simplified tether under turns, corners, mass differences and quick detachment.
- Build the extension in a separate scene or script, and explain how its architecture differs from the guided example.
- Test this failure mode deliberately: A jittery joint simulation may be realistic but mechanically worse than controlled arcade towing.

**Knowledge check:** When does friction make choices deeper versus annoying?

**Self-review:** A good answer should mention: Towing needs defined attachment rules, speed limits, collision response, loss conditions and fairness. It should also distinguish the common failure: A jittery joint simulation may be realistic but mechanically worse than controlled arcade towing.

---

### 4. System integration and state ownership

Persistent entity identity, scene ownership and clear event flow keep progression consistent across procedural sectors.

**Common failures:**

- Recreating generated items without stable IDs can duplicate loot on load.

**Suggested reading:**

- Required: [Godot — Saving games](https://docs.godotengine.org/en/stable/tutorials/io/saving_games.html) — Read **Persist object state**. Your goal is to explain: Persistent entity identity, scene ownership and clear event flow keep progression consistent across procedural sectors. Afterward, test the idea in a throwaway Godot scene; do not copy the tutorial wholesale.

**Practice:**


**Try it (guided):** Hands-on: Draw an event map for one sonar-to-enemy-to-player interaction.

Success checks:
- Cross sectors twice and reload a save; collected salvage stays collected and removed enemies do not respawn unexpectedly.
- Show the guided implementation with one controlled variation; describe why the behavior changes.
- Test this failure mode deliberately: Recreating generated items without stable IDs can duplicate loot on load.

**Build it (independent):** Independent: Integrate sonar, pursuit, salvage and extraction; add a new enemy reaction without modifying sonar rendering.

Success checks:
- Cross sectors twice and reload a save; collected salvage stays collected and removed enemies do not respawn unexpectedly.
- Build the extension in a separate scene or script, and explain how its architecture differs from the guided example.
- Test this failure mode deliberately: Recreating generated items without stable IDs can duplicate loot on load.

**Knowledge check:** Can one feature be changed without requiring unrelated scripts to know its details?

**Self-review:** A good answer should mention: Persistent entity identity, scene ownership and clear event flow keep progression consistent across procedural sectors. It should also distinguish the common failure: Recreating generated items without stable IDs can duplicate loot on load.

---

### 5. Vertical slice readiness

A vertical slice demonstrates intended quality in a narrow but representative segment; it is not the full game.

**Common failures:**

- Counting a polished tutorial scene as production-ready misrepresents scope.

**Suggested reading:**

- Required: [Game Design Concepts — Game Design Concepts archive](https://gamedesignconcepts.wordpress.com/2009/07/) — Read **Selected game design lessons**. Your goal is to explain: A vertical slice demonstrates intended quality in a narrow but representative segment; it is not the full game. Afterward, test the idea in a throwaway Godot scene; do not copy the tutorial wholesale.

**Practice:**


**Try it (guided):** Hands-on: Write entry and exit criteria for the slice.

Success checks:
- One tester completes the run, understands the sonar tradeoff and reports whether they would replay it.
- Show the guided implementation with one controlled variation; describe why the behavior changes.
- Test this failure mode deliberately: Counting a polished tutorial scene as production-ready misrepresents scope.

**Build it (independent):** Independent: Build a clean first-time player experience, conduct five playtests and log top three repairs.

Success checks:
- One tester completes the run, understands the sonar tradeoff and reports whether they would replay it.
- Build the extension in a separate scene or script, and explain how its architecture differs from the guided example.
- Test this failure mode deliberately: Counting a polished tutorial scene as production-ready misrepresents scope.

**Knowledge check:** What part of the slice demonstrates a viable commercial game rather than a tech demo?

**Self-review:** A good answer should mention: A vertical slice demonstrates intended quality in a narrow but representative segment; it is not the full game. It should also distinguish the common failure: Counting a polished tutorial scene as production-ready misrepresents scope.

---

### 6. Exploration & Salvage — playable vertical slice

Ship a 20–30 minute representative slice with sonar risk/reward, salvage, at least one enemy threat, extraction, cohesive feedback and recorded external feedback.

**Suggested reading:**

- Recommended: [Godot: Official Demo Projects](https://github.com/godotengine/godot-demo-projects) — Revisit the relevant course sections only when blocked.

**Practice:**


**Exploration & Salvage — playable vertical slice (course_project):** Ship a 20–30 minute representative slice with sonar risk/reward, salvage, at least one enemy threat, extraction, cohesive feedback and recorded external feedback.

Success checks:
- The sonar mechanic offers a visible gain and cost in a complete run.
- Towing survives high-speed turns, contacts and quick release.
- Save/load and sector transitions preserve persistent world changes.

**Knowledge check:** Which implementation decisions would you change if you rebuilt this project?

**Self-review:** Your review should cite actual design decisions, a reproduced defect, feedback, and one alternative you decided against.

---


## Playtesting, iteration and audience validation [Core]

Learn from real players before expanding investment in content or marketing.

**Prerequisites:** g15-capstone
**Suggested structured study:** 23 hours (not a complete game production budget)

### 1. Recruiting and running useful playtests

Playtest recruitment should represent likely players, and the task should be observed rather than coached.

**Common failures:**

- Friends may praise a concept while avoiding hard criticism.

**Suggested reading:**

- Required: [Game Design Concepts — Game Design Concepts archive](https://gamedesignconcepts.wordpress.com/2009/07/) — Read **Selected game design lessons**. Your goal is to explain: Playtest recruitment should represent likely players, and the task should be observed rather than coached. Afterward, test the idea in a throwaway Godot scene; do not copy the tutorial wholesale.
- Optional: [Game Design Concepts — Ian Schreiber](https://gamedesignconcepts.wordpress.com/2009/07/) — Optional background: compare the examples with your implementation of recruiting and running useful playtests. Focus on design tradeoffs, not memorizing an API.

**Practice:**


**Try it (guided):** Hands-on: Write a script for a 15-minute first-time-player session.

Success checks:
- Observe at least three testers who did not help design the game and capture task completion.
- Show the guided implementation with one controlled variation; describe why the behavior changes.
- Test this failure mode deliberately: Friends may praise a concept while avoiding hard criticism.

**Build it (independent):** Independent: Run three sessions with observers silent, recording confusion, retries and abandonment.

Success checks:
- Observe at least three testers who did not help design the game and capture task completion.
- Build the extension in a separate scene or script, and explain how its architecture differs from the guided example.
- Test this failure mode deliberately: Friends may praise a concept while avoiding hard criticism.

**Knowledge check:** Why can friends’ encouraging feedback mask confusion?

**Self-review:** A good answer should mention: Playtest recruitment should represent likely players, and the task should be observed rather than coached. It should also distinguish the common failure: Friends may praise a concept while avoiding hard criticism.

---

### 2. Qualitative versus quantitative signals

Qualitative notes explain confusion and motivation; quantitative measures show frequency and magnitude.

**Common failures:**

- A small sample can produce misleading percentages or overconfident conclusions.

**Suggested reading:**

- Required: [Game Design Concepts — Game Design Concepts archive](https://gamedesignconcepts.wordpress.com/2009/07/) — Read **Selected game design lessons**. Your goal is to explain: Qualitative notes explain confusion and motivation; quantitative measures show frequency and magnitude. Afterward, test the idea in a throwaway Godot scene; do not copy the tutorial wholesale.

**Practice:**


**Try it (guided):** Hands-on: Track time-to-first-salvage and failed extractions.

Success checks:
- Track times, deaths and sonar use alongside quotes, then state sample-size limits.
- Show the guided implementation with one controlled variation; describe why the behavior changes.
- Test this failure mode deliberately: A small sample can produce misleading percentages or overconfident conclusions.

**Build it (independent):** Independent: Compare event logs against participant explanations to identify one conflicting signal.

Success checks:
- Track times, deaths and sonar use alongside quotes, then state sample-size limits.
- Build the extension in a separate scene or script, and explain how its architecture differs from the guided example.
- Test this failure mode deliberately: A small sample can produce misleading percentages or overconfident conclusions.

**Knowledge check:** What can’t a five-person playtest establish statistically?

**Self-review:** A good answer should mention: Qualitative notes explain confusion and motivation; quantitative measures show frequency and magnitude. It should also distinguish the common failure: A small sample can produce misleading percentages or overconfident conclusions.

---

### 3. Prioritizing changes

Fixing every comment is impossible; prioritize evidence, severity, development cost and design intent.

**Common failures:**

- One vocal tester can pull the game away from its core premise.

**Suggested reading:**

- Required: [Game Design Concepts — Early Design Process](https://gamedesignconcepts.wordpress.com/2009/07/09/level-4-the-early-stages-of-the-design-process/) — Read Iterative process and constraints. As you read, identify one idea you can directly apply to this task: Prioritizing changes. Test that idea through the guided assignment.
- Optional: [Game Design Concepts — Ian Schreiber](https://gamedesignconcepts.wordpress.com/2009/07/) — Optional background: compare the examples with your implementation of prioritizing changes. Focus on design tradeoffs, not memorizing an API.

**Practice:**


**Try it (guided):** Hands-on: Sort observations by blocker, friction and cosmetic issue.

Success checks:
- Rank issues by observed severity and choose no more than three changes for a new test.
- Show the guided implementation with one controlled variation; describe why the behavior changes.
- Test this failure mode deliberately: One vocal tester can pull the game away from its core premise.

**Build it (independent):** Independent: Choose one high-impact repair, implement it and repeat the same test scenario.

Success checks:
- Rank issues by observed severity and choose no more than three changes for a new test.
- Build the extension in a separate scene or script, and explain how its architecture differs from the guided example.
- Test this failure mode deliberately: One vocal tester can pull the game away from its core premise.

**Knowledge check:** What result would cause you to reverse a change?

**Self-review:** A good answer should mention: Fixing every comment is impossible; prioritize evidence, severity, development cost and design intent. It should also distinguish the common failure: One vocal tester can pull the game away from its core premise.

---

### 4. Validating the game premise

Validation tests whether players understand and enjoy the core risk/reward, not whether they like the trailer.

**Common failures:**

- Wishlists or compliments alone don't prove the gameplay is engaging.

**Suggested reading:**

- Required: [Game Design Concepts — Game Design Concepts archive](https://gamedesignconcepts.wordpress.com/2009/07/) — Read **Selected game design lessons**. Your goal is to explain: Validation tests whether players understand and enjoy the core risk/reward, not whether they like the trailer. Afterward, test the idea in a throwaway Godot scene; do not copy the tutorial wholesale.

**Practice:**


**Try it (guided):** Hands-on: Write three distinct one-sentence pitches and show them to testers.

Success checks:
- Run two designs with the same group or comparable groups and record observable choices and replay intent.
- Show the guided implementation with one controlled variation; describe why the behavior changes.
- Test this failure mode deliberately: Wishlists or compliments alone don't prove the gameplay is engaging.

**Build it (independent):** Independent: Prototype two variants of the sonar tension and compare voluntary replay behavior.

Success checks:
- Run two designs with the same group or comparable groups and record observable choices and replay intent.
- Build the extension in a separate scene or script, and explain how its architecture differs from the guided example.
- Test this failure mode deliberately: Wishlists or compliments alone don't prove the gameplay is engaging.

**Knowledge check:** Which feedback signals interest rather than politeness?

**Self-review:** A good answer should mention: Validation tests whether players understand and enjoy the core risk/reward, not whether they like the trailer. It should also distinguish the common failure: Wishlists or compliments alone don't prove the gameplay is engaging.

---

### 5. Decision gates and scope cuts

A decision gate asks whether to continue, narrow, redesign or stop, given evidence and resources.

**Common failures:**

- Sunk cost is not evidence that a feature deserves more effort.

**Suggested reading:**

- Required: [Game Design Concepts — Game Design Concepts archive](https://gamedesignconcepts.wordpress.com/2009/07/) — Read **Selected game design lessons**. Your goal is to explain: A decision gate asks whether to continue, narrow, redesign or stop, given evidence and resources. Afterward, test the idea in a throwaway Godot scene; do not copy the tutorial wholesale.

**Practice:**


**Try it (guided):** Hands-on: Define three minimum exit criteria before expanding sectors.

Success checks:
- Write a go/no-go memo with success thresholds, results, limitations and scope adjustments.
- Show the guided implementation with one controlled variation; describe why the behavior changes.
- Test this failure mode deliberately: Sunk cost is not evidence that a feature deserves more effort.

**Build it (independent):** Independent: Write a go/no-go memo with evidence, remaining risks, next milestone and cut list.

Success checks:
- Write a go/no-go memo with success thresholds, results, limitations and scope adjustments.
- Build the extension in a separate scene or script, and explain how its architecture differs from the guided example.
- Test this failure mode deliberately: Sunk cost is not evidence that a feature deserves more effort.

**Knowledge check:** What evidence justifies spending another six months on the concept?

**Self-review:** A good answer should mention: A decision gate asks whether to continue, narrow, redesign or stop, given evidence and resources. It should also distinguish the common failure: Sunk cost is not evidence that a feature deserves more effort.

---

### 6. Playtest Evidence Report

Test your vertical slice with a diverse set of fresh players; produce a prioritized action plan grounded in observations.

**Suggested reading:**

- Recommended: [Game Accessibility Guidelines](https://gameaccessibilityguidelines.com/) — Revisit the relevant course sections only when blocked.

**Practice:**


**Playtest Evidence Report (course_project):** Test your vertical slice with a diverse set of fresh players; produce a prioritized action plan grounded in observations.

Success checks:
- Observe three independent testers without coaching.
- Document at least three recurring failures with severity and evidence.
- Write a justified go/narrow/pivot decision memo.

**Knowledge check:** Which implementation decisions would you change if you rebuilt this project?

**Self-review:** Your review should cite actual design decisions, a reproduced defect, feedback, and one alternative you decided against.

---


## Complete the full game — production to release candidate [Core]

Transform the validated vertical slice into a complete, stable, content-rich game with tested beginning-to-end progression.

**Prerequisites:** g16-validation
**Suggested structured study:** 45 hours (not a complete game production budget)

### 1. Define the production contract

Production begins by naming the minimum complete game: all systems, content types, expected run length, exclusions and dependencies. New ideas become tradeoffs rather than automatic tasks.

**Common failures:**

- Treating the slice as an estimate for every remaining hour hides content production cost.

**Suggested reading:**

- Required: [Game Design Concepts — Early Design Process](https://gamedesignconcepts.wordpress.com/2009/07/09/level-4-the-early-stages-of-the-design-process/) — Read Iterative process and constraints. As you read, identify one idea you can directly apply to this task: Define the production contract. Test that idea through the guided assignment.

**Practice:**


**Try it (guided):** Write a release scope statement and estimate each content category separately.

Success checks:
- Write a feature/content budget, explicit non-goals, and a cut-order list you are willing to follow.
- Treating the slice as an estimate for every remaining hour hides content production cost.

**Independent extension (independent):** Shrink the game by 25% while preserving the core promise; justify cuts.

Success checks:
- Write a feature/content budget, explicit non-goals, and a cut-order list you are willing to follow.
- Prove the extension works in a fresh scene and explain how it differs from the guided task.

**Knowledge check:** When would you apply define the production contract and what can go wrong?

**Self-review:** A complete response explains Production begins by naming the minimum complete game: all systems, content types, expected run length, exclusions and dependencies. New ideas become tradeoffs rather than automatic tasks. and flags Treating the slice as an estimate for every remaining hour hides content production cost.

---

### 2. Build a playable production schedule

Milestones should be defined by demonstrable builds, not vague percentages. Use short playable increments and inspect integration risk regularly.

**Common failures:**

- Assigning dates without capacity or buffers turns plans into wishful thinking.

**Suggested reading:**

- Required: [Game Programming Patterns: Contents](https://gameprogrammingpatterns.com/contents.html) — Study the relevant implementation or design section; pay particular attention to: Milestones should be defined by demonstrable builds, not vague percentages. Use short playable increments and inspect integration risk regularly.

**Practice:**


**Try it (guided):** Create milestone definitions for alpha, beta and release candidate.

Success checks:
- Each milestone produces a versioned build with a testable start/end path.
- Assigning dates without capacity or buffers turns plans into wishful thinking.

**Independent extension (independent):** Create a scenario plan for a month of reduced development hours.

Success checks:
- Each milestone produces a versioned build with a testable start/end path.
- Prove the extension works in a fresh scene and explain how it differs from the guided task.

**Knowledge check:** When would you apply build a playable production schedule and what can go wrong?

**Self-review:** A complete response explains Milestones should be defined by demonstrable builds, not vague percentages. Use short playable increments and inspect integration risk regularly. and flags Assigning dates without capacity or buffers turns plans into wishful thinking.

---

### 3. Create content without bespoke code for everything

A productive content pipeline uses reusable scene templates, typed configuration and quick validation. Content volume is a separate cost from building the mechanic once.

**Common failures:**

- Copy-paste scenes with script edits make balancing and bug fixes expensive.

**Suggested reading:**

- Required: [Godot — Resources](https://docs.godotengine.org/en/stable/tutorials/scripting/resources.html) — Study the relevant implementation or design section; pay particular attention to: A productive content pipeline uses reusable scene templates, typed configuration and quick validation. Content volume is a separate cost from building the mechanic once.

**Practice:**


**Try it (guided):** Build and validate a small sector or encounter content authoring template.

Success checks:
- Add five distinct playable sectors from templates without changing their core scripts.
- Copy-paste scenes with script edits make balancing and bug fixes expensive.

**Independent extension (independent):** Replace one hand-authored encounter with an equivalent data-driven configuration.

Success checks:
- Add five distinct playable sectors from templates without changing their core scripts.
- Prove the extension works in a fresh scene and explain how it differs from the guided task.

**Knowledge check:** When would you apply create content without bespoke code for everything and what can go wrong?

**Self-review:** A complete response explains A productive content pipeline uses reusable scene templates, typed configuration and quick validation. Content volume is a separate cost from building the mechanic once. and flags Copy-paste scenes with script edits make balancing and bug fixes expensive.

---

### 4. Reach a start-to-finish alpha

Alpha means the whole game loop, progression and ending are playable, even with rough placeholder assets and known defects. Every required route must exist.

**Common failures:**

- A beautiful isolated sequence is not evidence of a full playable game.

**Suggested reading:**

- Required: [Godot — Exporting projects](https://docs.godotengine.org/en/stable/tutorials/export/exporting_projects.html) — Study the relevant implementation or design section; pay particular attention to: Alpha means the whole game loop, progression and ending are playable, even with rough placeholder assets and known defects. Every required route must exist.

**Practice:**


**Try it (guided):** Build an end-to-end alpha with temporary content and record a full playthrough.

Success checks:
- A fresh profile can finish a complete game run from initial menu to ending without developer intervention.
- A beautiful isolated sequence is not evidence of a full playable game.

**Independent extension (independent):** Use an unfamiliar tester and fix the first progress-blocking defect.

Success checks:
- A fresh profile can finish a complete game run from initial menu to ending without developer intervention.
- Prove the extension works in a fresh scene and explain how it differs from the guided task.

**Knowledge check:** When would you apply reach a start-to-finish alpha and what can go wrong?

**Self-review:** A complete response explains Alpha means the whole game loop, progression and ending are playable, even with rough placeholder assets and known defects. Every required route must exist. and flags A beautiful isolated sequence is not evidence of a full playable game.

---

### 5. Content complete and regression-focused beta

Beta is about stabilizing feature-complete content, polishing experience and reducing severity of outstanding bugs rather than growing scope.

**Common failures:**

- Adding new systems during beta resets the stabilization clock.

**Suggested reading:**

- Required: [Godot: Debugging and profiling](https://docs.godotengine.org/en/stable/tutorials/scripting/debug/index.html) — Study the relevant implementation or design section; pay particular attention to: Beta is about stabilizing feature-complete content, polishing experience and reducing severity of outstanding bugs rather than growing scope.

**Practice:**


**Try it (guided):** Freeze feature additions and run regression tests over full runs.

Success checks:
- All intended release content is reachable; no known critical save-loss or progress-blocking defect remains.
- Adding new systems during beta resets the stabilization clock.

**Independent extension (independent):** Run an overnight or scripted repeated playthrough stress test and fix one recurring defect.

Success checks:
- All intended release content is reachable; no known critical save-loss or progress-blocking defect remains.
- Prove the extension works in a fresh scene and explain how it differs from the guided task.

**Knowledge check:** When would you apply content complete and regression-focused beta and what can go wrong?

**Self-review:** A complete response explains Beta is about stabilizing feature-complete content, polishing experience and reducing severity of outstanding bugs rather than growing scope. and flags Adding new systems during beta resets the stabilization clock.

---

### 6. Versioned saves and failure recovery

Save formats evolve while content and systems change. Explicit versioning, safe writes, fallback defaults and migrations protect player progress.

**Common failures:**

- A newly added field can silently break older save files.

**Suggested reading:**

- Required: [Godot — Saving games](https://docs.godotengine.org/en/stable/tutorials/io/saving_games.html) — Study the relevant implementation or design section; pay particular attention to: Save formats evolve while content and systems change. Explicit versioning, safe writes, fallback defaults and migrations protect player progress.

**Practice:**


**Try it (guided):** Add schema version metadata and a deterministic migration/test fixture.

Success checks:
- Load a save created by a prior version, a truncated save and a missing optional field without irrecoverable user data loss.
- A newly added field can silently break older save files.

**Independent extension (independent):** Simulate interrupted writes and verify backup or recoverability behavior.

Success checks:
- Load a save created by a prior version, a truncated save and a missing optional field without irrecoverable user data loss.
- Prove the extension works in a fresh scene and explain how it differs from the guided task.

**Knowledge check:** When would you apply versioned saves and failure recovery and what can go wrong?

**Self-review:** A complete response explains Save formats evolve while content and systems change. Explicit versioning, safe writes, fallback defaults and migrations protect player progress. and flags A newly added field can silently break older save files.

---

### 7. Release candidate and external installation

A release candidate is a specifically identified build tested for distribution, settings, inputs, accessibility, performance and critical paths.

**Common failures:**

- A release candidate that only runs on the developer laptop is not release-ready.

**Suggested reading:**

- Required: [Steamworks — Release Process](https://partner.steamgames.com/documentation/releasing) — Study the relevant implementation or design section; pay particular attention to: A release candidate is a specifically identified build tested for distribution, settings, inputs, accessibility, performance and critical paths.

**Practice:**


**Try it (guided):** Build a versioned release candidate with a concise test matrix.

Success checks:
- A tester installs a fresh export, loads a previous save, finishes the game and submits a defect report.
- A release candidate that only runs on the developer laptop is not release-ready.

**Independent extension (independent):** Run a simulated day-one hotfix and prove rollback to the previous build is possible.

Success checks:
- A tester installs a fresh export, loads a previous save, finishes the game and submits a defect report.
- Prove the extension works in a fresh scene and explain how it differs from the guided task.

**Knowledge check:** When would you apply release candidate and external installation and what can go wrong?

**Self-review:** A complete response explains A release candidate is a specifically identified build tested for distribution, settings, inputs, accessibility, performance and critical paths. and flags A release candidate that only runs on the developer laptop is not release-ready.

---

### 8. Complete Game Production — Ship It Test

Take the exploration/salvage experience from vertical slice through alpha, content-complete beta and a versioned, externally tested release candidate. Document scope, feature freeze, playthrough results and unresolved defects.

**Suggested reading:**

- Recommended: [Game Design Concepts — Game Design Concepts archive](https://gamedesignconcepts.wordpress.com/2009/07/) — Revisit reference material only for concepts you cannot explain; design the integration independently.

**Practice:**


**Complete Game Production — Ship It Test (course_project):** Take the exploration/salvage experience from vertical slice through alpha, content-complete beta and a versioned, externally tested release candidate. Document scope, feature freeze, playthrough results and unresolved defects.

Success checks:
- Complete a beginning-to-end run on a fresh profile.
- Validate a previous-version and interrupted save.
- Independent tester installs and finishes the candidate build.
- Feature scope is frozen and critical issues are triaged.

**Knowledge check:** What did the project teach you about scope, implementation ownership and failure recovery?

**Self-review:** Name a design choice, an actual bug and a measured improvement.

---


## Publishing, promotion and release operations [Core]

Prepare a genuine commercial release, from positioning and demo quality to launch operations.

**Prerequisites:** g16b-fullproduction
**Suggested structured study:** 23 hours (not a complete game production budget)

### 1. Positioning and market research

Positioning connects a recognizable hook to a target audience and comparable games. The exercise asks you to demonstrate the difference between expected behavior and an observed edge case.

**Common failures:**

- Describing a game only as 'action exploration' hides what makes it distinctive.

**Suggested reading:**

- Required: [Steamworks: Coming Soon](https://partner.steamgames.com/doc/store/coming_soon) — Read **the relevant examples**. Your goal is to explain: Positioning connects a recognizable hook to a target audience and comparable games. Afterward, test the idea in a throwaway Godot scene; do not copy the tutorial wholesale.
- Optional: [Steamworks: Documentation](https://partner.steamgames.com/doc/home) — Optional background: compare the examples with your implementation of positioning and market research. Focus on design tradeoffs, not memorizing an API.

**Practice:**


**Try it (guided):** Hands-on: Write three positioning sentences for the salvage game.

Success checks:
- Write a short pitch that conveys the sonar tradeoff without relying on a genre list.
- Show the guided implementation with one controlled variation; describe why the behavior changes.
- Test this failure mode deliberately: Describing a game only as 'action exploration' hides what makes it distinctive.

**Build it (independent):** Independent: Compare ten neighboring Steam games by audience, hook, presentation and price band; identify a defensible niche.

Success checks:
- Write a short pitch that conveys the sonar tradeoff without relying on a genre list.
- Build the extension in a separate scene or script, and explain how its architecture differs from the guided example.
- Test this failure mode deliberately: Describing a game only as 'action exploration' hides what makes it distinctive.

**Knowledge check:** What makes your game easy to recognize in five seconds?

**Self-review:** A good answer should mention: Positioning connects a recognizable hook to a target audience and comparable games. It should also distinguish the common failure: Describing a game only as 'action exploration' hides what makes it distinctive.

---

### 2. Steam page and visual communication

A store page needs accurate screenshots, concise copy, tags, trailer and accessible promises.

**Common failures:**

- A cinematic trailer that misrepresents actual gameplay creates distrust.

**Suggested reading:**

- Required: [Steamworks: Coming Soon](https://partner.steamgames.com/doc/store/coming_soon) — Read **the relevant examples**. Your goal is to explain: A store page needs accurate screenshots, concise copy, tags, trailer and accessible promises. Afterward, test the idea in a throwaway Godot scene; do not copy the tutorial wholesale.

**Practice:**


**Try it (guided):** Hands-on: Draft a short description and capsule mood board.

Success checks:
- Show representative gameplay within the opening moments and verify every advertised feature works.
- Show the guided implementation with one controlled variation; describe why the behavior changes.
- Test this failure mode deliberately: A cinematic trailer that misrepresents actual gameplay creates distrust.

**Build it (independent):** Independent: Prepare store copy, screenshots and a 45-second trailer storyboard centered on gameplay.

Success checks:
- Show representative gameplay within the opening moments and verify every advertised feature works.
- Build the extension in a separate scene or script, and explain how its architecture differs from the guided example.
- Test this failure mode deliberately: A cinematic trailer that misrepresents actual gameplay creates distrust.

**Knowledge check:** What visual evidence backs each claim in your description?

**Self-review:** A good answer should mention: A store page needs accurate screenshots, concise copy, tags, trailer and accessible promises. It should also distinguish the common failure: A cinematic trailer that misrepresents actual gameplay creates distrust.

---

### 3. Demos, festivals and wishlists

Demos and festivals need a stable slice with useful analytics and clear progression into the full game.

**Common failures:**

- A demo with save corruption or a dead end can destroy confidence.

**Suggested reading:**

- Required: [Steamworks: Demos](https://partner.steamgames.com/doc/store/application/demos) — Read **the relevant examples**. Your goal is to explain: Demos and festivals need a stable slice with useful analytics and clear progression into the full game. Afterward, test the idea in a throwaway Godot scene; do not copy the tutorial wholesale.
- Optional: [Steamworks: Documentation](https://partner.steamgames.com/doc/home) — Optional background: compare the examples with your implementation of demos, festivals and wishlists. Focus on design tradeoffs, not memorizing an API.

**Practice:**


**Try it (guided):** Hands-on: Define which content a demo should include and omit.

Success checks:
- Create a fresh-install demo and validate start, exit, replay, settings and uninstall behavior.
- Show the guided implementation with one controlled variation; describe why the behavior changes.
- Test this failure mode deliberately: A demo with save corruption or a dead end can destroy confidence.

**Build it (independent):** Independent: Create a demo release checklist and choose a sensible feedback channel and versioning strategy.

Success checks:
- Create a fresh-install demo and validate start, exit, replay, settings and uninstall behavior.
- Build the extension in a separate scene or script, and explain how its architecture differs from the guided example.
- Test this failure mode deliberately: A demo with save corruption or a dead end can destroy confidence.

**Knowledge check:** When is a demo too early to represent your game fairly?

**Self-review:** A good answer should mention: Demos and festivals need a stable slice with useful analytics and clear progression into the full game. It should also distinguish the common failure: A demo with save corruption or a dead end can destroy confidence.

---

### 4. Pricing, localization and accessibility

Pricing and localization require an audience and cost model; accessibility adds required work, not an afterthought.

**Common failures:**

- Using one reference game as the entire pricing strategy ignores audience and content differences.

**Suggested reading:**

- Required: [Steamworks: Documentation](https://partner.steamgames.com/doc/home) — Read **the relevant examples**. Your goal is to explain: Pricing and localization require an audience and cost model; accessibility adds required work, not an afterthought. Afterward, test the idea in a throwaway Godot scene; do not copy the tutorial wholesale.

**Practice:**


**Try it (guided):** Hands-on: Create a cost-benefit table for three supported languages.

Success checks:
- Compare multiple peers and make a pricing decision with documented tradeoffs.
- Show the guided implementation with one controlled variation; describe why the behavior changes.
- Test this failure mode deliberately: Using one reference game as the entire pricing strategy ignores audience and content differences.

**Build it (independent):** Independent: Draft an accessibility/localization test matrix and a price rationale using comparable games.

Success checks:
- Compare multiple peers and make a pricing decision with documented tradeoffs.
- Build the extension in a separate scene or script, and explain how its architecture differs from the guided example.
- Test this failure mode deliberately: Using one reference game as the entire pricing strategy ignores audience and content differences.

**Knowledge check:** Why is translation not equivalent to complete localization?

**Self-review:** A good answer should mention: Pricing and localization require an audience and cost model; accessibility adds required work, not an afterthought. It should also distinguish the common failure: Using one reference game as the entire pricing strategy ignores audience and content differences.

---

### 5. Launch operations and support

Launch operations include reproducible builds, store checks, announcement assets, support channels and rollback plans.

**Common failures:**

- Relying on a single local build file creates last-minute risk.

**Suggested reading:**

- Required: [Steamworks — Release Process](https://partner.steamgames.com/documentation/releasing) — Read **Store presence, build checklist, launch**. Your goal is to explain: Launch operations include reproducible builds, store checks, announcement assets, support channels and rollback plans. Afterward, test the idea in a throwaway Godot scene; do not copy the tutorial wholesale.

**Practice:**


**Try it (guided):** Hands-on: Write a day-one support and issue triage plan.

Success checks:
- Run a release rehearsal and show a signed-off checklist plus a tested critical hotfix path.
- Show the guided implementation with one controlled variation; describe why the behavior changes.
- Test this failure mode deliberately: Relying on a single local build file creates last-minute risk.

**Build it (independent):** Independent: Simulate a critical release bug: rollback, hotfix, public communication and retrospective.

Success checks:
- Run a release rehearsal and show a signed-off checklist plus a tested critical hotfix path.
- Build the extension in a separate scene or script, and explain how its architecture differs from the guided example.
- Test this failure mode deliberately: Relying on a single local build file creates last-minute risk.

**Knowledge check:** What signals should trigger an urgent hotfix versus a later patch?

**Self-review:** A good answer should mention: Launch operations include reproducible builds, store checks, announcement assets, support channels and rollback plans. It should also distinguish the common failure: Relying on a single local build file creates last-minute risk.

---

### 6. Launch Readiness Package

Create a polished but mock/preview-ready store kit and demo rollout plan; never submit or spend money without an explicit decision.

**Suggested reading:**

- Recommended: [Steamworks: Documentation](https://partner.steamgames.com/doc/home) — Revisit the relevant course sections only when blocked.

**Practice:**


**Launch Readiness Package (course_project):** Create a polished but mock/preview-ready store kit and demo rollout plan; never submit or spend money without an explicit decision.

Success checks:
- Store claims and captured footage match the shipped demo.
- Test a fresh-install demo and recovery from a failed save.
- Run a dry-release checklist and rollback/hotfix simulation.

**Knowledge check:** Which implementation decisions would you change if you rebuilt this project?

**Self-review:** Your review should cite actual design decisions, a reproduced defect, feedback, and one alternative you decided against.

---


## Indie studio foundations and sustainable development [Core]

Learn the economic and human realities of building an independent studio without assuming instant scale.

**Prerequisites:** g17-publishing
**Suggested structured study:** 23 hours (not a complete game production budget)

### 1. Scope and sustainable planning

Sustainable planning uses conservative scope and time budgets, not optimism about a hit launch.

**Common failures:**

- Counting unpaid overtime as free labor hides true project cost.

**Suggested reading:**

- Required: [Game Design Concepts — Game Design Concepts archive](https://gamedesignconcepts.wordpress.com/2009/07/) — Read **Selected game design lessons**. Your goal is to explain: Sustainable planning uses conservative scope and time budgets, not optimism about a hit launch. Afterward, test the idea in a throwaway Godot scene; do not copy the tutorial wholesale.
- Optional: [Steamworks: Documentation](https://partner.steamgames.com/doc/home) — Optional background: compare the examples with your implementation of scope and sustainable planning. Focus on design tradeoffs, not memorizing an API.

**Practice:**


**Try it (guided):** Hands-on: Estimate hours for a small game and label major unknowns.

Success checks:
- Compare best/base/worst schedules and document personal runway assumptions.
- Show the guided implementation with one controlled variation; describe why the behavior changes.
- Test this failure mode deliberately: Counting unpaid overtime as free labor hides true project cost.

**Build it (independent):** Independent: Create pessimistic, expected and optimistic milestone plans without assuming unpaid collaborators.

Success checks:
- Compare best/base/worst schedules and document personal runway assumptions.
- Build the extension in a separate scene or script, and explain how its architecture differs from the guided example.
- Test this failure mode deliberately: Counting unpaid overtime as free labor hides true project cost.

**Knowledge check:** Which assumption most threatens your schedule?

**Self-review:** A good answer should mention: Sustainable planning uses conservative scope and time budgets, not optimism about a hit launch. It should also distinguish the common failure: Counting unpaid overtime as free labor hides true project cost.

---

### 2. Budgets and revenue reality

A game budget has development, contractor, marketing, tooling, legal and post-launch costs.

**Common failures:**

- Gross store revenue is not take-home income after platform fees, taxes and refunds.

**Suggested reading:**

- Required: [Steamworks: Documentation](https://partner.steamgames.com/doc/home) — Read **the relevant examples**. Your goal is to explain: A game budget has development, contractor, marketing, tooling, legal and post-launch costs. Afterward, test the idea in a throwaway Godot scene; do not copy the tutorial wholesale.

**Practice:**


**Try it (guided):** Hands-on: List fixed and variable costs for a first release.

Success checks:
- Produce a budget with explicit assumptions and a break-even sensitivity table.
- Show the guided implementation with one controlled variation; describe why the behavior changes.
- Test this failure mode deliberately: Gross store revenue is not take-home income after platform fees, taxes and refunds.

**Build it (independent):** Independent: Model three sales outcomes with fees and expenses clearly separated from personal income.

Success checks:
- Produce a budget with explicit assumptions and a break-even sensitivity table.
- Build the extension in a separate scene or script, and explain how its architecture differs from the guided example.
- Test this failure mode deliberately: Gross store revenue is not take-home income after platform fees, taxes and refunds.

**Knowledge check:** What sales number would make a second game possible?

**Self-review:** A good answer should mention: A game budget has development, contractor, marketing, tooling, legal and post-launch costs. It should also distinguish the common failure: Gross store revenue is not take-home income after platform fees, taxes and refunds.

---

### 3. Collaborators, contracts and ownership

Collaborators need clear IP ownership, delivery criteria, payment, credit and exit agreements.

**Common failures:**

- An informal revenue-share promise can cause ownership conflict when the project grows.

**Suggested reading:**

- Required: [Game Accessibility Guidelines](https://gameaccessibilityguidelines.com/) — Read **the relevant examples**. Your goal is to explain: Collaborators need clear IP ownership, delivery criteria, payment, credit and exit agreements. Afterward, test the idea in a throwaway Godot scene; do not copy the tutorial wholesale.
- Optional: [Steamworks: Documentation](https://partner.steamgames.com/doc/home) — Optional background: compare the examples with your implementation of collaborators, contracts and ownership. Focus on design tradeoffs, not memorizing an API.

**Practice:**


**Try it (guided):** Hands-on: Write a hypothetical artist brief with acceptance criteria.

Success checks:
- Draft a collaboration checklist and identify issues requiring professional legal advice.
- Show the guided implementation with one controlled variation; describe why the behavior changes.
- Test this failure mode deliberately: An informal revenue-share promise can cause ownership conflict when the project grows.

**Build it (independent):** Independent: Draft a negotiation checklist covering IP, attribution, milestones, payment and departure terms for professional review.

Success checks:
- Draft a collaboration checklist and identify issues requiring professional legal advice.
- Build the extension in a separate scene or script, and explain how its architecture differs from the guided example.
- Test this failure mode deliberately: An informal revenue-share promise can cause ownership conflict when the project grows.

**Knowledge check:** Which promises are too important to leave verbal?

**Self-review:** A good answer should mention: Collaborators need clear IP ownership, delivery criteria, payment, credit and exit agreements. It should also distinguish the common failure: An informal revenue-share promise can cause ownership conflict when the project grows.

---

### 4. Publishers, grants and funding tradeoffs

Publishers and grants trade capital for obligations, milestones, rights or reporting requirements.

**Common failures:**

- A grant application is not a funding plan until awarded.

**Suggested reading:**

- Required: [Steamworks: Documentation](https://partner.steamgames.com/doc/home) — Read **the relevant examples**. Your goal is to explain: Publishers and grants trade capital for obligations, milestones, rights or reporting requirements. Afterward, test the idea in a throwaway Godot scene; do not copy the tutorial wholesale.

**Practice:**


**Try it (guided):** Hands-on: Compare self-funding and hypothetical publisher funding.

Success checks:
- Compare self-funding and publisher scenarios with obligations and failure cases.
- Show the guided implementation with one controlled variation; describe why the behavior changes.
- Test this failure mode deliberately: A grant application is not a funding plan until awarded.

**Build it (independent):** Independent: Build a decision matrix for funding paths with risk, rights, runway and milestones.

Success checks:
- Compare self-funding and publisher scenarios with obligations and failure cases.
- Build the extension in a separate scene or script, and explain how its architecture differs from the guided example.
- Test this failure mode deliberately: A grant application is not a funding plan until awarded.

**Knowledge check:** What rights or deadlines would you refuse to trade?

**Self-review:** A good answer should mention: Publishers and grants trade capital for obligations, milestones, rights or reporting requirements. It should also distinguish the common failure: A grant application is not a funding plan until awarded.

---

### 5. Studio strategy and next project

A small studio needs a recognizable design thesis, production discipline and a pipeline beyond its first game.

**Common failures:**

- Hiring people before identifying repeatable demand increases burn without stability.

**Suggested reading:**

- Required: [Game Design Concepts — Game Design Concepts archive](https://gamedesignconcepts.wordpress.com/2009/07/) — Read **Selected game design lessons**. Your goal is to explain: A small studio needs a recognizable design thesis, production discipline and a pipeline beyond its first game. Afterward, test the idea in a throwaway Godot scene; do not copy the tutorial wholesale.

**Practice:**


**Try it (guided):** Hands-on: Write lessons learned from the first game, even as a hypothetical.

Success checks:
- Write a feasible first-18-month studio plan with a small-team staffing decision tree.
- Show the guided implementation with one controlled variation; describe why the behavior changes.
- Test this failure mode deliberately: Hiring people before identifying repeatable demand increases burn without stability.

**Build it (independent):** Independent: Plan the second project based on demonstrated reusable capabilities, audience feedback and realistic team capacity.

Success checks:
- Write a feasible first-18-month studio plan with a small-team staffing decision tree.
- Build the extension in a separate scene or script, and explain how its architecture differs from the guided example.
- Test this failure mode deliberately: Hiring people before identifying repeatable demand increases burn without stability.

**Knowledge check:** What would prove your studio can ship repeatedly rather than once?

**Self-review:** A good answer should mention: A small studio needs a recognizable design thesis, production discipline and a pipeline beyond its first game. It should also distinguish the common failure: Hiring people before identifying repeatable demand increases burn without stability.

---

### 6. Studio Feasibility Brief

Write a ten-page maximum studio plan for a small Thessaloniki-based team, including one title, cost scenarios, milestones and decision gates.

**Suggested reading:**

- Recommended: [Steamworks: Documentation](https://partner.steamgames.com/doc/home) — Revisit the relevant course sections only when blocked.

**Practice:**


**Studio Feasibility Brief (course_project):** Write a ten-page maximum studio plan for a small Thessaloniki-based team, including one title, cost scenarios, milestones and decision gates.

Success checks:
- Show a realistic cash and production-budget scenario.
- Document IP and contributor ownership questions.
- Produce a feasible low-burn first-project staffing and production plan.

**Knowledge check:** Which implementation decisions would you change if you rebuilt this project?

**Self-review:** Your review should cite actual design decisions, a reproduced defect, feedback, and one alternative you decided against.

---


## Advanced Game AI & autonomous behavior [Optional]

Explore richer enemy decision systems for stealth, tactics and systemic worlds.

**Prerequisites:** g10-ai
**Suggested structured study:** 20 hours (not a complete game production budget)

### 1. Behavior trees and reusable tasks

Behavior trees organize decisions as reusable tasks and condition checks; they are not inherently smarter than finite-state machines.

**Common failures:**

- A huge behavior tree without debug instrumentation is worse than a small transparent FSM.

**Suggested reading:**

- Required: [Game Programming Patterns: State](https://gameprogrammingpatterns.com/state.html) — Read **the relevant examples**. Your goal is to explain: Behavior trees organize decisions as reusable tasks and condition checks; they are not inherently smarter than finite-state machines. Afterward, test the idea in a throwaway Godot scene; do not copy the tutorial wholesale.

**Practice:**


**Try it (guided):** Hands-on: Create a selector for search, chase and return actions.

Success checks:
- Implement the same guard behavior using two architectures and compare readability and tuning effort.
- Show the guided implementation with one controlled variation; describe why the behavior changes.
- Test this failure mode deliberately: A huge behavior tree without debug instrumentation is worse than a small transparent FSM.

**Build it (independent):** Independent: Build an inspectable tree with interruptible investigation and recovery branches.

Success checks:
- Implement the same guard behavior using two architectures and compare readability and tuning effort.
- Build the extension in a separate scene or script, and explain how its architecture differs from the guided example.
- Test this failure mode deliberately: A huge behavior tree without debug instrumentation is worse than a small transparent FSM.

**Knowledge check:** When does a tree become harder to reason about than a state machine?

**Self-review:** A good answer should mention: Behavior trees organize decisions as reusable tasks and condition checks; they are not inherently smarter than finite-state machines. It should also distinguish the common failure: A huge behavior tree without debug instrumentation is worse than a small transparent FSM.

---

### 2. Utility-driven decision making

Utility AI scores available actions and can produce fluid priorities if normalization and hysteresis are deliberate.

**Common failures:**

- Without hysteresis, equally scored actions may flicker every tick.

**Suggested reading:**

- Required: [Game Programming Patterns: State](https://gameprogrammingpatterns.com/state.html) — Read **the relevant examples**. Your goal is to explain: Utility AI scores available actions and can produce fluid priorities if normalization and hysteresis are deliberate. Afterward, test the idea in a throwaway Godot scene; do not copy the tutorial wholesale.

**Practice:**


**Try it (guided):** Hands-on: Score chase, retreat and guard using health and distance.

Success checks:
- Vary health, danger and reward inputs and show smooth action switching with a debug score display.
- Show the guided implementation with one controlled variation; describe why the behavior changes.
- Test this failure mode deliberately: Without hysteresis, equally scored actions may flicker every tick.

**Build it (independent):** Independent: Create three NPC archetypes from utility curves and expose their decisions on screen.

Success checks:
- Vary health, danger and reward inputs and show smooth action switching with a debug score display.
- Build the extension in a separate scene or script, and explain how its architecture differs from the guided example.
- Test this failure mode deliberately: Without hysteresis, equally scored actions may flicker every tick.

**Knowledge check:** Why can tiny score differences produce unstable switching?

**Self-review:** A good answer should mention: Utility AI scores available actions and can produce fluid priorities if normalization and hysteresis are deliberate. It should also distinguish the common failure: Without hysteresis, equally scored actions may flicker every tick.

---

### 3. Group tactics and coordination

Group AI needs shared information and local independence so individual agents don't become synchronized robots.

**Common failures:**

- Broadcasting perfect player coordinates to all enemies creates unfair omniscience.

**Suggested reading:**

- Required: [Godot — 2D Navigation](https://docs.godotengine.org/en/stable/tutorials/navigation/) — Read **2D navigation topic overview**. Your goal is to explain: Group AI needs shared information and local independence so individual agents don't become synchronized robots. Afterward, test the idea in a throwaway Godot scene; do not copy the tutorial wholesale.

**Practice:**


**Try it (guided):** Hands-on: Make one enemy warn a nearby ally about noise.

Success checks:
- Two guards communicate a discovered location with limited delay and stale-information rules.
- Show the guided implementation with one controlled variation; describe why the behavior changes.
- Test this failure mode deliberately: Broadcasting perfect player coordinates to all enemies creates unfair omniscience.

**Build it (independent):** Independent: Design squad behavior with a scout and blocker while limiting shared knowledge.

Success checks:
- Two guards communicate a discovered location with limited delay and stale-information rules.
- Build the extension in a separate scene or script, and explain how its architecture differs from the guided example.
- Test this failure mode deliberately: Broadcasting perfect player coordinates to all enemies creates unfair omniscience.

**Knowledge check:** How do you prevent instant telepathic enemy coordination?

**Self-review:** A good answer should mention: Group AI needs shared information and local independence so individual agents don't become synchronized robots. It should also distinguish the common failure: Broadcasting perfect player coordinates to all enemies creates unfair omniscience.

---

### 4. Testing emergent enemy behavior

Emergent behavior requires seedable scenarios, state capture and explicit invariant checks.

**Common failures:**

- A one-off exciting encounter can conceal rare pathing deadlocks.

**Suggested reading:**

- Required: [Godot: Debugging and profiling](https://docs.godotengine.org/en/stable/tutorials/scripting/debug/index.html) — Read **the relevant examples**. Your goal is to explain: Emergent behavior requires seedable scenarios, state capture and explicit invariant checks. Afterward, test the idea in a throwaway Godot scene; do not copy the tutorial wholesale.

**Practice:**


**Try it (guided):** Hands-on: Record and replay an AI failure with a chosen seed.

Success checks:
- Replay 100 scripted scenarios and produce a short taxonomy of unexpected behaviors.
- Show the guided implementation with one controlled variation; describe why the behavior changes.
- Test this failure mode deliberately: A one-off exciting encounter can conceal rare pathing deadlocks.

**Build it (independent):** Independent: Run repeated simulation scenarios and flag stuck agents, unreachable goals and state thrashing.

Success checks:
- Replay 100 scripted scenarios and produce a short taxonomy of unexpected behaviors.
- Build the extension in a separate scene or script, and explain how its architecture differs from the guided example.
- Test this failure mode deliberately: A one-off exciting encounter can conceal rare pathing deadlocks.

**Knowledge check:** What behavior metrics indicate AI quality beyond kill rate?

**Self-review:** A good answer should mention: Emergent behavior requires seedable scenarios, state capture and explicit invariant checks. It should also distinguish the common failure: A one-off exciting encounter can conceal rare pathing deadlocks.

---

### 5. Adaptive Patrol Sandbox

Create three agents with different priorities that cooperate, investigate and respond predictably to events.

**Suggested reading:**

- Recommended: [Godot: Navigation overview](https://docs.godotengine.org/en/stable/tutorials/navigation/index.html) — Revisit the relevant course sections only when blocked.

**Practice:**


**Adaptive Patrol Sandbox (course_project):** Create three agents with different priorities that cooperate, investigate and respond predictably to events.

Success checks:
- Compare a behavior tree with an FSM on one repeated scenario.
- Show decisions and sensory state via debug overlays.
- Replay recorded edge-case encounters deterministically.

**Knowledge check:** Which implementation decisions would you change if you rebuilt this project?

**Self-review:** Your review should cite actual design decisions, a reproduced defect, feedback, and one alternative you decided against.

---


## Advanced Procedural Worlds & Simulation [Optional]

Create richly varied sectors while preserving navigability, intent and testability.

**Prerequisites:** g11-world
**Suggested structured study:** 20 hours (not a complete game production budget)

### 1. Room graphs and spatial partitioning

Spatial partitions and graphs encode traversability and layout constraints independent of art placement.

**Common failures:**

- Choosing random rooms without checking connectedness creates dead ends or isolated goals.

**Suggested reading:**

- Required: [Game Programming Patterns — Spatial Partition](https://gameprogrammingpatterns.com/spatial-partition.html) — Read **Grid partition examples**. Your goal is to explain: Spatial partitions and graphs encode traversability and layout constraints independent of art placement. Afterward, test the idea in a throwaway Godot scene; do not copy the tutorial wholesale.

**Practice:**


**Try it (guided):** Hands-on: Generate a minimal connected room graph.

Success checks:
- Partition a map into regions and prove all required terminals connect through allowed doors.
- Show the guided implementation with one controlled variation; describe why the behavior changes.
- Test this failure mode deliberately: Choosing random rooms without checking connectedness creates dead ends or isolated goals.

**Build it (independent):** Independent: Place rooms on a grid from graph topology and prove entrance-exit reachability.

Success checks:
- Partition a map into regions and prove all required terminals connect through allowed doors.
- Build the extension in a separate scene or script, and explain how its architecture differs from the guided example.
- Test this failure mode deliberately: Choosing random rooms without checking connectedness creates dead ends or isolated goals.

**Knowledge check:** Where should graph edges exist before carving corridors?

**Self-review:** A good answer should mention: Spatial partitions and graphs encode traversability and layout constraints independent of art placement. It should also distinguish the common failure: Choosing random rooms without checking connectedness creates dead ends or isolated goals.

---

### 2. Noise and thematic clustering

Noise fields provide continuous variation, but raw noise does not guarantee playability or an interesting risk curve.

**Common failures:**

- Pretty noise-driven clutter can block player movement.

**Suggested reading:**

- Required: [Red Blob Games — Breadth First Search](https://www.redblobgames.com/pathfinding/a-star/introduction.html) — Read **Breadth-first search illustrations**. Your goal is to explain: Noise fields provide continuous variation, but raw noise does not guarantee playability or an interesting risk curve. Afterward, test the idea in a throwaway Godot scene; do not copy the tutorial wholesale.

**Practice:**


**Try it (guided):** Hands-on: Generate a 2D noise heatmap for danger.

Success checks:
- Generate 100 noisy sectors with a clear navigable corridor and measurable hazard density.
- Show the guided implementation with one controlled variation; describe why the behavior changes.
- Test this failure mode deliberately: Pretty noise-driven clutter can block player movement.

**Build it (independent):** Independent: Create clustered salvage zones and compare against uniform random placement.

Success checks:
- Generate 100 noisy sectors with a clear navigable corridor and measurable hazard density.
- Build the extension in a separate scene or script, and explain how its architecture differs from the guided example.
- Test this failure mode deliberately: Pretty noise-driven clutter can block player movement.

**Knowledge check:** Why do noise-generated maps often feel repetitive?

**Self-review:** A good answer should mention: Noise fields provide continuous variation, but raw noise does not guarantee playability or an interesting risk curve. It should also distinguish the common failure: Pretty noise-driven clutter can block player movement.

---

### 3. Generation grammars and constraints

Constraint grammars make a level obey gameplay rules and thematic intent. The exercise asks you to demonstrate the difference between expected behavior and an observed edge case.

**Common failures:**

- Infinite regeneration loops can emerge when constraints are contradictory.

**Suggested reading:**

- Required: [Red Blob Games: A* Introduction](https://www.redblobgames.com/pathfinding/a-star/introduction.html) — Read **the relevant examples**. Your goal is to explain: Constraint grammars make a level obey gameplay rules and thematic intent. Afterward, test the idea in a throwaway Godot scene; do not copy the tutorial wholesale.

**Practice:**


**Try it (guided):** Hands-on: Add two distinct room templates with placement rules.

Success checks:
- Detect unsatisfiable constraints, emit a useful warning and fall back safely.
- Show the guided implementation with one controlled variation; describe why the behavior changes.
- Test this failure mode deliberately: Infinite regeneration loops can emerge when constraints are contradictory.

**Build it (independent):** Independent: Generate sectors with required landmarks and a risk-reward detour using constraints.

Success checks:
- Detect unsatisfiable constraints, emit a useful warning and fall back safely.
- Build the extension in a separate scene or script, and explain how its architecture differs from the guided example.
- Test this failure mode deliberately: Infinite regeneration loops can emerge when constraints are contradictory.

**Knowledge check:** Which invariants cannot be delegated to randomness?

**Self-review:** A good answer should mention: Constraint grammars make a level obey gameplay rules and thematic intent. It should also distinguish the common failure: Infinite regeneration loops can emerge when constraints are contradictory.

---

### 4. Simulating systemic ecology

Systemic worlds become interesting when entities interact under simple, observable local rules.

**Common failures:**

- Adding many simulated actors without impact on choices only increases CPU cost.

**Suggested reading:**

- Required: [Game Programming Patterns — Spatial Partition](https://gameprogrammingpatterns.com/spatial-partition.html) — Read **Grid partition examples**. Your goal is to explain: Systemic worlds become interesting when entities interact under simple, observable local rules. Afterward, test the idea in a throwaway Godot scene; do not copy the tutorial wholesale.

**Practice:**


**Try it (guided):** Hands-on: Simulate resource depletion over a timed run.

Success checks:
- Build a small ecological interaction and compare player decisions with and without it.
- Show the guided implementation with one controlled variation; describe why the behavior changes.
- Test this failure mode deliberately: Adding many simulated actors without impact on choices only increases CPU cost.

**Build it (independent):** Independent: Build predators, scavengers and salvage competing over a small map, then test stability.

Success checks:
- Build a small ecological interaction and compare player decisions with and without it.
- Build the extension in a separate scene or script, and explain how its architecture differs from the guided example.
- Test this failure mode deliberately: Adding many simulated actors without impact on choices only increases CPU cost.

**Knowledge check:** How do you distinguish emergence from uncontrolled noise?

**Self-review:** A good answer should mention: Systemic worlds become interesting when entities interact under simple, observable local rules. It should also distinguish the common failure: Adding many simulated actors without impact on choices only increases CPU cost.

---

### 5. Procedural Sector Laboratory

Generate varied navigable salvage sectors with threat bands, deterministic bugs and readable routes.

**Suggested reading:**

- Recommended: [Red Blob Games: Grids](https://www.redblobgames.com/grids/hexagons/) — Revisit the relevant course sections only when blocked.

**Practice:**


**Procedural Sector Laboratory (course_project):** Generate varied navigable salvage sectors with threat bands, deterministic bugs and readable routes.

Success checks:
- Generate 500 traversable seeded layouts.
- Reproduce any failing seed and bound generation runtime.
- Demonstrate distinct spatial/risk distributions across themes.

**Knowledge check:** Which implementation decisions would you change if you rebuilt this project?

**Self-review:** Your review should cite actual design decisions, a reproduced defect, feedback, and one alternative you decided against.

---


## Rendering, shaders and advanced VFX [Optional]

Develop rendering literacy and build atmospheric interactive effects.

**Prerequisites:** g04-animation, g13-testing
**Suggested structured study:** 20 hours (not a complete game production budget)

### 1. How the 2D rendering pipeline works

The 2D rendering path turns scene data into pixels through transforms, canvas items and compositing.

**Common failures:**

- Confusing world-space and screen-space offsets makes effects drift with the camera.

**Suggested reading:**

- Required: [Godot: 2D tutorials](https://docs.godotengine.org/en/stable/tutorials/2d/index.html) — Read **the relevant examples**. Your goal is to explain: The 2D rendering path turns scene data into pixels through transforms, canvas items and compositing. Afterward, test the idea in a throwaway Godot scene; do not copy the tutorial wholesale.

**Practice:**


**Try it (guided):** Hands-on: Diagram how a sprite reaches the screen.

Success checks:
- Draw one effect in local space and one in screen space; explain the difference while moving the camera.
- Show the guided implementation with one controlled variation; describe why the behavior changes.
- Test this failure mode deliberately: Confusing world-space and screen-space offsets makes effects drift with the camera.

**Build it (independent):** Independent: Rebuild a layered scene and explain which objects receive the same material and light.

Success checks:
- Draw one effect in local space and one in screen space; explain the difference while moving the camera.
- Build the extension in a separate scene or script, and explain how its architecture differs from the guided example.
- Test this failure mode deliberately: Confusing world-space and screen-space offsets makes effects drift with the camera.

**Knowledge check:** What part of this pipeline is simulated on CPU versus executed on GPU?

**Self-review:** A good answer should mention: The 2D rendering path turns scene data into pixels through transforms, canvas items and compositing. It should also distinguish the common failure: Confusing world-space and screen-space offsets makes effects drift with the camera.

---

### 2. CanvasItem shader fundamentals

CanvasItem shaders process vertices, fragments and optionally light. Uniforms make effects configurable.

**Common failures:**

- Recomputing an effect on the CPU when a simple shader suffices can be costly and complex.

**Suggested reading:**

- Required: [Godot — CanvasItem shader](https://docs.godotengine.org/en/stable/tutorials/shaders/shader_reference/canvas_item_shader.html) — Read **fragment() and uniforms**. Your goal is to explain: CanvasItem shaders process vertices, fragments and optionally light. Afterward, test the idea in a throwaway Godot scene; do not copy the tutorial wholesale.

**Practice:**


**Try it (guided):** Hands-on: Tint an object based on UV coordinates.

Success checks:
- Implement an animated sonar ring with tunable radius, feather and color, with a CPU fallback concept.
- Show the guided implementation with one controlled variation; describe why the behavior changes.
- Test this failure mode deliberately: Recomputing an effect on the CPU when a simple shader suffices can be costly and complex.

**Build it (independent):** Independent: Implement an animated reveal ring using time, distance and configurable color.

Success checks:
- Implement an animated sonar ring with tunable radius, feather and color, with a CPU fallback concept.
- Build the extension in a separate scene or script, and explain how its architecture differs from the guided example.
- Test this failure mode deliberately: Recomputing an effect on the CPU when a simple shader suffices can be costly and complex.

**Knowledge check:** Why does a shader’s coordinate space determine its shape?

**Self-review:** A good answer should mention: CanvasItem shaders process vertices, fragments and optionally light. Uniforms make effects configurable. It should also distinguish the common failure: Recomputing an effect on the CPU when a simple shader suffices can be costly and complex.

---

### 3. Lighting, color and compositing

Lighting and color support readability, mood and spatial understanding; they must remain legible at different display settings.

**Common failures:**

- A dark scene that hides enemies can destroy fairness.

**Suggested reading:**

- Required: [Godot — 2D Lights and Shadows](https://docs.godotengine.org/en/stable/tutorials/2d/2d_lights_and_shadows.html) — Read **Light2D and occluders**. Your goal is to explain: Lighting and color support readability, mood and spatial understanding; they must remain legible at different display settings. Afterward, test the idea in a throwaway Godot scene; do not copy the tutorial wholesale.

**Practice:**


**Try it (guided):** Hands-on: Make a light that tracks the player.

Success checks:
- Test important interactables under dark and bright settings; preserve silhouettes and contrast.
- Show the guided implementation with one controlled variation; describe why the behavior changes.
- Test this failure mode deliberately: A dark scene that hides enemies can destroy fairness.

**Build it (independent):** Independent: Create two versions of a shadowy room, one atmospheric but readable and one illegible; compare playtests.

Success checks:
- Test important interactables under dark and bright settings; preserve silhouettes and contrast.
- Build the extension in a separate scene or script, and explain how its architecture differs from the guided example.
- Test this failure mode deliberately: A dark scene that hides enemies can destroy fairness.

**Knowledge check:** What information must remain visible in darkness?

**Self-review:** A good answer should mention: Lighting and color support readability, mood and spatial understanding; they must remain legible at different display settings. It should also distinguish the common failure: A dark scene that hides enemies can destroy fairness.

---

### 4. Profiling VFX and drawing

VFX have measurable costs from overdraw, material variations and heavy fragment work. The exercise asks you to demonstrate the difference between expected behavior and an observed edge case.

**Common failures:**

- More particle emitters can overwhelm an older laptop without improving the feel.

**Suggested reading:**

- Required: [Godot — The Profiler](https://docs.godotengine.org/en/stable/tutorials/scripting/debug/the_profiler.html) — Read **Profiler monitors and capture**. Your goal is to explain: VFX have measurable costs from overdraw, material variations and heavy fragment work. Afterward, test the idea in a throwaway Godot scene; do not copy the tutorial wholesale.

**Practice:**


**Try it (guided):** Hands-on: Measure a scene before and after adding glow/particles.

Success checks:
- Profile a 100-effect stress scene, optimize one bottleneck and preserve a visual quality target.
- Show the guided implementation with one controlled variation; describe why the behavior changes.
- Test this failure mode deliberately: More particle emitters can overwhelm an older laptop without improving the feel.

**Build it (independent):** Independent: Optimize a multi-effect sonar scene without changing the perceived cue.

Success checks:
- Profile a 100-effect stress scene, optimize one bottleneck and preserve a visual quality target.
- Build the extension in a separate scene or script, and explain how its architecture differs from the guided example.
- Test this failure mode deliberately: More particle emitters can overwhelm an older laptop without improving the feel.

**Knowledge check:** How do you confirm a GPU-bound effect has improved?

**Self-review:** A good answer should mention: VFX have measurable costs from overdraw, material variations and heavy fragment work. It should also distinguish the common failure: More particle emitters can overwhelm an older laptop without improving the feel.

---

### 5. Sonar Visualization Toolkit

Build configurable sonar rings, reveal masks and underwater atmosphere effects with performance measurements.

**Suggested reading:**

- Recommended: [The Book of Shaders](https://thebookofshaders.com/) — Revisit the relevant course sections only when blocked.

**Practice:**


**Sonar Visualization Toolkit (course_project):** Build configurable sonar rings, reveal masks and underwater atmosphere effects with performance measurements.

Success checks:
- Render a configurable sonar effect and test camera transformations.
- Compare GPU frame-times for original and optimized effect.
- Ensure high-contrast game cues under two visual settings.

**Knowledge check:** Which implementation decisions would you change if you rebuilt this project?

**Self-review:** Your review should cite actual design decisions, a reproduced defect, feedback, and one alternative you decided against.

---


## 3D Gameplay Development [Optional]

Extend existing gameplay principles into 3D coordinate systems, cameras and spatial interaction.

**Prerequisites:** g03-physics, g09-level
**Suggested structured study:** 20 hours (not a complete game production budget)

### 1. 3D spaces, vectors and transforms

Three-dimensional transformations combine translation, orientation and scale across local and world coordinate spaces.

**Common failures:**

- Copying 2D assumptions about axes causes reversed directions and camera errors.

**Suggested reading:**

- Required: [Godot: Introduction to 3D](https://docs.godotengine.org/en/stable/tutorials/3d/introduction_to_3d.html) — Read **the relevant examples**. Your goal is to explain: Three-dimensional transformations combine translation, orientation and scale across local and world coordinate spaces. Afterward, test the idea in a throwaway Godot scene; do not copy the tutorial wholesale.

**Practice:**


**Try it (guided):** Hands-on: Visualize forward, up and right vectors in 3D.

Success checks:
- Place and orient objects in three coordinate frames and convert a direction correctly.
- Show the guided implementation with one controlled variation; describe why the behavior changes.
- Test this failure mode deliberately: Copying 2D assumptions about axes causes reversed directions and camera errors.

**Build it (independent):** Independent: Move a 3D actor between local and world directions while displaying coordinate axes.

Success checks:
- Place and orient objects in three coordinate frames and convert a direction correctly.
- Build the extension in a separate scene or script, and explain how its architecture differs from the guided example.
- Test this failure mode deliberately: Copying 2D assumptions about axes causes reversed directions and camera errors.

**Knowledge check:** Why is camera-relative movement not equal to world-axis movement?

**Self-review:** A good answer should mention: Three-dimensional transformations combine translation, orientation and scale across local and world coordinate spaces. It should also distinguish the common failure: Copying 2D assumptions about axes causes reversed directions and camera errors.

---

### 2. 3D camera systems

A 3D camera's view and projection define what players can see and how screen coordinates relate to the world.

**Common failures:**

- Treating screen pixels as world coordinates makes targeting miss.

**Suggested reading:**

- Required: [Godot: Introduction to 3D](https://docs.godotengine.org/en/stable/tutorials/3d/introduction_to_3d.html) — Read **the relevant examples**. Your goal is to explain: A 3D camera's view and projection define what players can see and how screen coordinates relate to the world. Afterward, test the idea in a throwaway Godot scene; do not copy the tutorial wholesale.

**Practice:**


**Try it (guided):** Hands-on: Build mouse-look or right-stick orbit.

Success checks:
- Ray-pick a marked object at near/far depths across different window sizes.
- Show the guided implementation with one controlled variation; describe why the behavior changes.
- Test this failure mode deliberately: Treating screen pixels as world coordinates makes targeting miss.

**Build it (independent):** Independent: Create a third-person camera with obstacle collision and tunable sensitivity.

Success checks:
- Ray-pick a marked object at near/far depths across different window sizes.
- Build the extension in a separate scene or script, and explain how its architecture differs from the guided example.
- Test this failure mode deliberately: Treating screen pixels as world coordinates makes targeting miss.

**Knowledge check:** What creates disorienting camera jumps near geometry?

**Self-review:** A good answer should mention: A 3D camera's view and projection define what players can see and how screen coordinates relate to the world. It should also distinguish the common failure: Treating screen pixels as world coordinates makes targeting miss.

---

### 3. 3D physics and interaction

3D physics adds contact, rigid-body dynamics and volumetric navigation constraints. The exercise asks you to demonstrate the difference between expected behavior and an observed edge case.

**Common failures:**

- A 2D collision approach may not generalize to slopes and vertical obstacles.

**Suggested reading:**

- Required: [Godot: Physics documentation](https://docs.godotengine.org/en/stable/tutorials/physics/index.html) — Read **the relevant examples**. Your goal is to explain: 3D physics adds contact, rigid-body dynamics and volumetric navigation constraints. Afterward, test the idea in a throwaway Godot scene; do not copy the tutorial wholesale.

**Practice:**


**Try it (guided):** Hands-on: Add a cube pickup using a 3D raycast.

Success checks:
- Build a ramp, step and moving platform test course with documented collision behavior.
- Show the guided implementation with one controlled variation; describe why the behavior changes.
- Test this failure mode deliberately: A 2D collision approach may not generalize to slopes and vertical obstacles.

**Build it (independent):** Independent: Build a small obstacle route with jumping, ramps and interaction.

Success checks:
- Build a ramp, step and moving platform test course with documented collision behavior.
- Build the extension in a separate scene or script, and explain how its architecture differs from the guided example.
- Test this failure mode deliberately: A 2D collision approach may not generalize to slopes and vertical obstacles.

**Knowledge check:** What changes about picking targets with a perspective camera?

**Self-review:** A good answer should mention: 3D physics adds contact, rigid-body dynamics and volumetric navigation constraints. It should also distinguish the common failure: A 2D collision approach may not generalize to slopes and vertical obstacles.

---

### 4. Animation and 3D presentation

Animation blends poses and root motion can influence character control. The exercise asks you to demonstrate the difference between expected behavior and an observed edge case.

**Common failures:**

- Mixing scripted and root-driven motion incorrectly causes sliding feet.

**Suggested reading:**

- Required: [Godot: Using AnimationTree](https://docs.godotengine.org/en/stable/tutorials/animation/animation_tree.html) — Read **the relevant examples**. Your goal is to explain: Animation blends poses and root motion can influence character control. Afterward, test the idea in a throwaway Godot scene; do not copy the tutorial wholesale.

**Practice:**


**Try it (guided):** Hands-on: Connect idle and walk animation states.

Success checks:
- Compare a root-motion and scripted-motion traversal and explain tradeoffs.
- Show the guided implementation with one controlled variation; describe why the behavior changes.
- Test this failure mode deliberately: Mixing scripted and root-driven motion incorrectly causes sliding feet.

**Build it (independent):** Independent: Build a traversing character with smooth direction transitions and clear landing feedback.

Success checks:
- Compare a root-motion and scripted-motion traversal and explain tradeoffs.
- Build the extension in a separate scene or script, and explain how its architecture differs from the guided example.
- Test this failure mode deliberately: Mixing scripted and root-driven motion incorrectly causes sliding feet.

**Knowledge check:** How does locomotion mismatch cause foot sliding?

**Self-review:** A good answer should mention: Animation blends poses and root motion can influence character control. It should also distinguish the common failure: Mixing scripted and root-driven motion incorrectly causes sliding feet.

---

### 5. 3D Traversal Museum

Create a short third-person or first-person space with obstacles, interaction and clear feedback.

**Suggested reading:**

- Recommended: [Godot: Introduction to 3D](https://docs.godotengine.org/en/stable/tutorials/3d/introduction_to_3d.html) — Revisit the relevant course sections only when blocked.

**Practice:**


**3D Traversal Museum (course_project):** Create a short third-person or first-person space with obstacles, interaction and clear feedback.

Success checks:
- Third-person traversal works around ramps and different elevations.
- Camera remains usable across several aspect ratios.
- Report math and camera-space errors encountered and resolved.

**Knowledge check:** Which implementation decisions would you change if you rebuilt this project?

**Self-review:** Your review should cite actual design decisions, a reproduced defect, feedback, and one alternative you decided against.

---


## Multiplayer Networking [Optional]

Understand authority, replication and latency by building one small networked game.

**Prerequisites:** g05-architecture
**Suggested structured study:** 20 hours (not a complete game production budget)

### 1. Authority and game state

Authoritative state determines who may decide outcomes, not merely who sends messages. The exercise asks you to demonstrate the difference between expected behavior and an observed edge case.

**Common failures:**

- Clients that directly award their own score enable trivial cheating.

**Suggested reading:**

- Required: [Godot: High-level multiplayer](https://docs.godotengine.org/en/stable/tutorials/networking/high_level_multiplayer.html) — Read **the relevant examples**. Your goal is to explain: Authoritative state determines who may decide outcomes, not merely who sends messages. Afterward, test the idea in a throwaway Godot scene; do not copy the tutorial wholesale.

**Practice:**


**Try it (guided):** Hands-on: Draw authority ownership for player input, scoring and world state.

Success checks:
- Simulate two peers and demonstrate unauthorized point changes being rejected.
- Show the guided implementation with one controlled variation; describe why the behavior changes.
- Test this failure mode deliberately: Clients that directly award their own score enable trivial cheating.

**Build it (independent):** Independent: Create a networked movement prototype in which clients cannot award themselves score.

Success checks:
- Simulate two peers and demonstrate unauthorized point changes being rejected.
- Build the extension in a separate scene or script, and explain how its architecture differs from the guided example.
- Test this failure mode deliberately: Clients that directly award their own score enable trivial cheating.

**Knowledge check:** Why can trusting client position invite cheating?

**Self-review:** A good answer should mention: Authoritative state determines who may decide outcomes, not merely who sends messages. It should also distinguish the common failure: Clients that directly award their own score enable trivial cheating.

---

### 2. Replication and event synchronization

Replication selectively sends state and events while respecting packet order and unreliable transport.

**Common failures:**

- Broadcasting every field every frame scales badly and still fails under loss.

**Suggested reading:**

- Required: [Godot: High-level multiplayer](https://docs.godotengine.org/en/stable/tutorials/networking/high_level_multiplayer.html) — Read **the relevant examples**. Your goal is to explain: Replication selectively sends state and events while respecting packet order and unreliable transport. Afterward, test the idea in a throwaway Godot scene; do not copy the tutorial wholesale.

**Practice:**


**Try it (guided):** Hands-on: Synchronize positions and a pickup.

Success checks:
- Synchronize two players under induced packet loss and describe data sent each tick.
- Show the guided implementation with one controlled variation; describe why the behavior changes.
- Test this failure mode deliberately: Broadcasting every field every frame scales badly and still fails under loss.

**Build it (independent):** Independent: Implement a networked door with reliable state transition and lossy movement updates.

Success checks:
- Synchronize two players under induced packet loss and describe data sent each tick.
- Build the extension in a separate scene or script, and explain how its architecture differs from the guided example.
- Test this failure mode deliberately: Broadcasting every field every frame scales badly and still fails under loss.

**Knowledge check:** Which event cannot safely be lost?

**Self-review:** A good answer should mention: Replication selectively sends state and events while respecting packet order and unreliable transport. It should also distinguish the common failure: Broadcasting every field every frame scales badly and still fails under loss.

---

### 3. Interpolation and prediction

Prediction improves local responsiveness but requires reconciliation with authoritative state.

**Common failures:**

- Applying server updates without reconciling can teleport the client erratically.

**Suggested reading:**

- Required: [Godot: High-level multiplayer](https://docs.godotengine.org/en/stable/tutorials/networking/high_level_multiplayer.html) — Read **the relevant examples**. Your goal is to explain: Prediction improves local responsiveness but requires reconciliation with authoritative state. Afterward, test the idea in a throwaway Godot scene; do not copy the tutorial wholesale.

**Practice:**


**Try it (guided):** Hands-on: Simulate 150 ms latency for remote movement.

Success checks:
- Simulate 150ms latency and compare movement with and without prediction.
- Show the guided implementation with one controlled variation; describe why the behavior changes.
- Test this failure mode deliberately: Applying server updates without reconciling can teleport the client erratically.

**Build it (independent):** Independent: Compare snap, interpolation and locally predicted movement in a two-client demo.

Success checks:
- Simulate 150ms latency and compare movement with and without prediction.
- Build the extension in a separate scene or script, and explain how its architecture differs from the guided example.
- Test this failure mode deliberately: Applying server updates without reconciling can teleport the client erratically.

**Knowledge check:** How can correction artifacts be reduced without lying about authority?

**Self-review:** A good answer should mention: Prediction improves local responsiveness but requires reconciliation with authoritative state. It should also distinguish the common failure: Applying server updates without reconciling can teleport the client erratically.

---

### 4. Recovery, disconnects and testing

Disconnects, reconnects and duplicate packets must leave the world in a coherent state. The exercise asks you to demonstrate the difference between expected behavior and an observed edge case.

**Common failures:**

- Assuming clean disconnects leads to ghosts and stale ownership.

**Suggested reading:**

- Required: [Godot: High-level multiplayer](https://docs.godotengine.org/en/stable/tutorials/networking/high_level_multiplayer.html) — Read **the relevant examples**. Your goal is to explain: Disconnects, reconnects and duplicate packets must leave the world in a coherent state. Afterward, test the idea in a throwaway Godot scene; do not copy the tutorial wholesale.

**Practice:**


**Try it (guided):** Hands-on: Handle player disconnect without leaving orphan entities.

Success checks:
- Force a mid-match disconnect and reconnect; no duplicated player or reward remains.
- Show the guided implementation with one controlled variation; describe why the behavior changes.
- Test this failure mode deliberately: Assuming clean disconnects leads to ghosts and stale ownership.

**Build it (independent):** Independent: Test join/leave/reconnect with latency and log authoritative outcomes.

Success checks:
- Force a mid-match disconnect and reconnect; no duplicated player or reward remains.
- Build the extension in a separate scene or script, and explain how its architecture differs from the guided example.
- Test this failure mode deliberately: Assuming clean disconnects leads to ghosts and stale ownership.

**Knowledge check:** What state must persist to support safe reconnection?

**Self-review:** A good answer should mention: Disconnects, reconnects and duplicate packets must leave the world in a coherent state. It should also distinguish the common failure: Assuming clean disconnects leads to ghosts and stale ownership.

---

### 5. Two-Player Tag

Build a cooperative or competitive two-player tag arena with clear authority and simulated latency.

**Suggested reading:**

- Recommended: [Godot: High-level multiplayer](https://docs.godotengine.org/en/stable/tutorials/networking/high_level_multiplayer.html) — Revisit the relevant course sections only when blocked.

**Practice:**


**Two-Player Tag (course_project):** Build a cooperative or competitive two-player tag arena with clear authority and simulated latency.

Success checks:
- Authority rejects invalid or duplicate game actions.
- Simulated packet loss does not corrupt match results.
- Disconnect/reconnect does not leave ghost actors.

**Knowledge check:** Which implementation decisions would you change if you rebuilt this project?

**Self-review:** Your review should cite actual design decisions, a reproduced defect, feedback, and one alternative you decided against.

---


## C++, engine internals and data-oriented systems [Optional]

Go beyond engine use into native performance and foundational architecture.

**Prerequisites:** g13-testing
**Suggested structured study:** 20 hours (not a complete game production budget)

### 1. Modern C++ ownership and lifetime

Modern C++ expresses ownership, lifetimes and value semantics that strongly influence native engine safety.

**Common failures:**

- Returning pointers to temporary objects can appear to work until memory is reused.

**Suggested reading:**

- Required: [LearnCpp — modern C++](https://www.learncpp.com/) — Read **the relevant examples**. Your goal is to explain: Modern C++ expresses ownership, lifetimes and value semantics that strongly influence native engine safety. Afterward, test the idea in a throwaway Godot scene; do not copy the tutorial wholesale.

**Practice:**


**Try it (guided):** Hands-on: Implement a small owning object collection in modern C++.

Success checks:
- Create a tiny RAII-managed entity store and verify lifetime with sanitizers.
- Show the guided implementation with one controlled variation; describe why the behavior changes.
- Test this failure mode deliberately: Returning pointers to temporary objects can appear to work until memory is reused.

**Build it (independent):** Independent: Build an object registry with deterministic creation/removal and sanitizers.

Success checks:
- Create a tiny RAII-managed entity store and verify lifetime with sanitizers.
- Build the extension in a separate scene or script, and explain how its architecture differs from the guided example.
- Test this failure mode deliberately: Returning pointers to temporary objects can appear to work until memory is reused.

**Knowledge check:** Which references become invalid after container growth?

**Self-review:** A good answer should mention: Modern C++ expresses ownership, lifetimes and value semantics that strongly influence native engine safety. It should also distinguish the common failure: Returning pointers to temporary objects can appear to work until memory is reused.

---

### 2. Writing a tiny simulation loop

A minimal simulation loop needs an explicit fixed update step, input sampling and a separate draw pass.

**Common failures:**

- A variable simulation step can destabilize a physics approximation.

**Suggested reading:**

- Required: [Gaffer on Games — Fix Your Timestep!](https://gafferongames.com/post/fix_your_timestep/) — Read **Fixed timestep and accumulator**. Your goal is to explain: A minimal simulation loop needs an explicit fixed update step, input sampling and a separate draw pass. Afterward, test the idea in a throwaway Godot scene; do not copy the tutorial wholesale.

**Practice:**


**Try it (guided):** Hands-on: Build a fixed-step console simulation with elapsed time.

Success checks:
- Compare variable and fixed-step results under irregular time deltas and record divergence.
- Show the guided implementation with one controlled variation; describe why the behavior changes.
- Test this failure mode deliberately: A variable simulation step can destabilize a physics approximation.

**Build it (independent):** Independent: Add independent rendering frequency and reproduce jitter under uneven frame intervals.

Success checks:
- Compare variable and fixed-step results under irregular time deltas and record divergence.
- Build the extension in a separate scene or script, and explain how its architecture differs from the guided example.
- Test this failure mode deliberately: A variable simulation step can destabilize a physics approximation.

**Knowledge check:** Why should physics simulation frequency be controlled?

**Self-review:** A good answer should mention: A minimal simulation loop needs an explicit fixed update step, input sampling and a separate draw pass. It should also distinguish the common failure: A variable simulation step can destabilize a physics approximation.

---

### 3. Data layout and locality

Data layout affects cache locality and throughput under repeated iteration. The exercise asks you to demonstrate the difference between expected behavior and an observed edge case.

**Common failures:**

- An object-oriented layout isn't automatically optimal for millions of simple entities.

**Suggested reading:**

- Required: [Game Programming Patterns: Object Pool](https://gameprogrammingpatterns.com/object-pool.html) — Read **the relevant examples**. Your goal is to explain: Data layout affects cache locality and throughput under repeated iteration. Afterward, test the idea in a throwaway Godot scene; do not copy the tutorial wholesale.

**Practice:**


**Try it (guided):** Hands-on: Benchmark array of structs versus struct of arrays for moving objects.

Success checks:
- Benchmark array-of-structures and structure-of-arrays updates under the same workload.
- Show the guided implementation with one controlled variation; describe why the behavior changes.
- Test this failure mode deliberately: An object-oriented layout isn't automatically optimal for millions of simple entities.

**Build it (independent):** Independent: Build a 50,000-agent update kernel with reproducible performance comparisons.

Success checks:
- Benchmark array-of-structures and structure-of-arrays updates under the same workload.
- Build the extension in a separate scene or script, and explain how its architecture differs from the guided example.
- Test this failure mode deliberately: An object-oriented layout isn't automatically optimal for millions of simple entities.

**Knowledge check:** When is better cache locality irrelevant to the bottleneck?

**Self-review:** A good answer should mention: Data layout affects cache locality and throughput under repeated iteration. It should also distinguish the common failure: An object-oriented layout isn't automatically optimal for millions of simple entities.

---

### 4. Engine architecture and rendering concepts

Engine architecture separates game rules, assets, platform IO and renderer contracts. The exercise asks you to demonstrate the difference between expected behavior and an observed edge case.

**Common failures:**

- Tightly coupling rendering to simulation makes headless tests impossible.

**Suggested reading:**

- Required: [Game Programming Patterns: Game Loop](https://gameprogrammingpatterns.com/game-loop.html) — Read **the relevant examples**. Your goal is to explain: Engine architecture separates game rules, assets, platform IO and renderer contracts. Afterward, test the idea in a throwaway Godot scene; do not copy the tutorial wholesale.

**Practice:**


**Try it (guided):** Hands-on: Draw an update/render/resource graph for a simple engine.

Success checks:
- Run the same simulation headlessly and with a simple visual renderer, obtaining identical states.
- Show the guided implementation with one controlled variation; describe why the behavior changes.
- Test this failure mode deliberately: Tightly coupling rendering to simulation makes headless tests impossible.

**Build it (independent):** Independent: Design a tiny modular engine architecture on paper and implement only one measured subsystem.

Success checks:
- Run the same simulation headlessly and with a simple visual renderer, obtaining identical states.
- Build the extension in a separate scene or script, and explain how its architecture differs from the guided example.
- Test this failure mode deliberately: Tightly coupling rendering to simulation makes headless tests impossible.

**Knowledge check:** Which abstraction would be premature for your current indie games?

**Self-review:** A good answer should mention: Engine architecture separates game rules, assets, platform IO and renderer contracts. It should also distinguish the common failure: Tightly coupling rendering to simulation makes headless tests impossible.

---

### 5. Native Simulation Kernel

Create a small C++ simulation of moving agents with profiling and correctness tests, optionally surfaced in Godot.

**Suggested reading:**

- Recommended: [LearnCpp — modern C++](https://www.learncpp.com/) — Revisit the relevant course sections only when blocked.

**Practice:**


**Native Simulation Kernel (course_project):** Create a small C++ simulation of moving agents with profiling and correctness tests, optionally surfaced in Godot.

Success checks:
- The simulation runs without any renderer.
- Compare fixed and variable-step behavior with irregular deltas.
- Demonstrate ownership safety and basic data-layout benchmarks.

**Knowledge check:** Which implementation decisions would you change if you rebuilt this project?

**Self-review:** Your review should cite actual design decisions, a reproduced defect, feedback, and one alternative you decided against.

---


## Narrative, quests and systemic worldbuilding [Optional]

Design branching stories and systemic quest states without fragile hardcoded scripting.

**Prerequisites:** g06-mechanics, g09-level
**Suggested structured study:** 20 hours (not a complete game production budget)

### 1. Quest state and dependency graphs

Quests are explicit state machines with prerequisites, outcomes and completion rules. The exercise asks you to demonstrate the difference between expected behavior and an observed edge case.

**Common failures:**

- Using ad hoc scene flags makes quests break after reload or out-of-order events.

**Suggested reading:**

- Required: [Game Programming Patterns: State](https://gameprogrammingpatterns.com/state.html) — Read **the relevant examples**. Your goal is to explain: Quests are explicit state machines with prerequisites, outcomes and completion rules. Afterward, test the idea in a throwaway Godot scene; do not copy the tutorial wholesale.

**Practice:**


**Try it (guided):** Hands-on: Draw a five-node quest graph with one optional step.

Success checks:
- Finish a multi-stage quest, save halfway and resume with correct state.
- Show the guided implementation with one controlled variation; describe why the behavior changes.
- Test this failure mode deliberately: Using ad hoc scene flags makes quests break after reload or out-of-order events.

**Build it (independent):** Independent: Implement a two-route quest with fail-safe reentry and save/load.

Success checks:
- Finish a multi-stage quest, save halfway and resume with correct state.
- Build the extension in a separate scene or script, and explain how its architecture differs from the guided example.
- Test this failure mode deliberately: Using ad hoc scene flags makes quests break after reload or out-of-order events.

**Knowledge check:** What happens if an item is collected before the quest starts?

**Self-review:** A good answer should mention: Quests are explicit state machines with prerequisites, outcomes and completion rules. It should also distinguish the common failure: Using ad hoc scene flags makes quests break after reload or out-of-order events.

---

### 2. Dialogue and branching consequences

Dialogue choices map to outcomes that must remain consistent with world state. The exercise asks you to demonstrate the difference between expected behavior and an observed edge case.

**Common failures:**

- Narrative branches can reference events the player never triggered.

**Suggested reading:**

- Required: [Game Programming Patterns: State](https://gameprogrammingpatterns.com/state.html) — Read **the relevant examples**. Your goal is to explain: Dialogue choices map to outcomes that must remain consistent with world state. Afterward, test the idea in a throwaway Godot scene; do not copy the tutorial wholesale.

**Practice:**


**Try it (guided):** Hands-on: Build a two-choice conversation that changes NPC state.

Success checks:
- Test every choice from each reachable narrative state, including cancelled dialogue.
- Show the guided implementation with one controlled variation; describe why the behavior changes.
- Test this failure mode deliberately: Narrative branches can reference events the player never triggered.

**Build it (independent):** Independent: Make a branching dialogue scene with one persistent later consequence.

Success checks:
- Test every choice from each reachable narrative state, including cancelled dialogue.
- Build the extension in a separate scene or script, and explain how its architecture differs from the guided example.
- Test this failure mode deliberately: Narrative branches can reference events the player never triggered.

**Knowledge check:** Why is storing choice effects in UI button handlers fragile?

**Self-review:** A good answer should mention: Dialogue choices map to outcomes that must remain consistent with world state. It should also distinguish the common failure: Narrative branches can reference events the player never triggered.

---

### 3. Environmental storytelling

Environmental storytelling communicates events and relationships through space and props. The exercise asks you to demonstrate the difference between expected behavior and an observed edge case.

**Common failures:**

- Overexplaining a room through text can destroy discovery.

**Suggested reading:**

- Required: [Game Design Concepts — Game Design Concepts archive](https://gamedesignconcepts.wordpress.com/2009/07/) — Read **Selected game design lessons**. Your goal is to explain: Environmental storytelling communicates events and relationships through space and props. Afterward, test the idea in a throwaway Godot scene; do not copy the tutorial wholesale.

**Practice:**


**Try it (guided):** Hands-on: Tell a story using three props and no dialogue.

Success checks:
- Build one room that communicates its history without any dialogue boxes.
- Show the guided implementation with one controlled variation; describe why the behavior changes.
- Test this failure mode deliberately: Overexplaining a room through text can destroy discovery.

**Build it (independent):** Independent: Build an abandoned room whose layout and object states imply an event, then test interpretation.

Success checks:
- Build one room that communicates its history without any dialogue boxes.
- Build the extension in a separate scene or script, and explain how its architecture differs from the guided example.
- Test this failure mode deliberately: Overexplaining a room through text can destroy discovery.

**Knowledge check:** What did players infer that you never explicitly stated?

**Self-review:** A good answer should mention: Environmental storytelling communicates events and relationships through space and props. It should also distinguish the common failure: Overexplaining a room through text can destroy discovery.

---

### 4. Systemic quests and testing

Systemic quests combine dynamic world events with stable constraints and failure recovery. The exercise asks you to demonstrate the difference between expected behavior and an observed edge case.

**Common failures:**

- A randomly assigned objective might be impossible in a generated sector.

**Suggested reading:**

- Required: [Red Blob Games — Breadth First Search](https://www.redblobgames.com/pathfinding/a-star/introduction.html) — Read **Breadth-first search illustrations**. Your goal is to explain: Systemic quests combine dynamic world events with stable constraints and failure recovery. Afterward, test the idea in a throwaway Godot scene; do not copy the tutorial wholesale.

**Practice:**


**Try it (guided):** Hands-on: List five surprising ways a player can approach a quest.

Success checks:
- Generate 100 quest instances and verify objectives remain reachable and completable.
- Show the guided implementation with one controlled variation; describe why the behavior changes.
- Test this failure mode deliberately: A randomly assigned objective might be impossible in a generated sector.

**Build it (independent):** Independent: Create and run a quest-state test matrix covering out-of-order actions.

Success checks:
- Generate 100 quest instances and verify objectives remain reachable and completable.
- Build the extension in a separate scene or script, and explain how its architecture differs from the guided example.
- Test this failure mode deliberately: A randomly assigned objective might be impossible in a generated sector.

**Knowledge check:** How can branching stories remain testable as content grows?

**Self-review:** A good answer should mention: Systemic quests combine dynamic world events with stable constraints and failure recovery. It should also distinguish the common failure: A randomly assigned objective might be impossible in a generated sector.

---

### 5. Abandoned Outpost Story

Build a compact outpost with two discoverable story threads and branching, persisted consequences.

**Suggested reading:**

- Recommended: [Game Programming Patterns: State](https://gameprogrammingpatterns.com/state.html) — Revisit the relevant course sections only when blocked.

**Practice:**


**Abandoned Outpost Story (course_project):** Build a compact outpost with two discoverable story threads and branching, persisted consequences.

Success checks:
- Quest state survives save/load and interrupted dialogue.
- At least one branch changes world behavior.
- 100 procedural quest variants are reachable and finishable.

**Knowledge check:** Which implementation decisions would you change if you rebuilt this project?

**Self-review:** Your review should cite actual design decisions, a reproduced defect, feedback, and one alternative you decided against.

---

