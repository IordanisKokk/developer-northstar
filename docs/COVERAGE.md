# Curriculum coverage and editorial decisions

Reviewed against [Backend Developer](https://roadmap.sh/backend), [AI Engineer](https://roadmap.sh/ai-engineer) and [The Odin Project’s project-based approach](https://www.theodinproject.com/about) on October 29, 2026. They inform coverage and pedagogy; their text is not copied.

## Backend core

| Order / course ID | Coverage | Integration artifact |
| --- | --- | --- |
| 1 `backend-python` | Execution model, GIL/build differences, ownership, asyncio, threads/processes, cancellation, bounded queues | Concurrency laboratory |
| 2 `backend-linux` | Processes, virtual memory, paging, descriptors, limits, signals, syscall diagnosis | Linux incident laboratory |
| 3 `backend-network` | DNS/TCP/TLS, framing, connection pools, deadlines, HTTP semantics, ETags, idempotency | Fault-injected HTTP service |
| 4 `backend-security` | Tenant/object authorization, OAuth, tokens, SSRF, budgets | Threat-modeled document API |
| 5 `backend-transactions` | Constraints, normalization, isolation, locks, deadlocks, migrations, external effects | Concurrent reservation API |
| 6 `backend-postgres` | Plans, indexes, estimates, MVCC, vacuum, WAL, recovery, pooling | Database incident dossier |
| 7 `backend-distributed` | Partial failure, clocks, consistency, replication, retries, fencing | Replication/failure simulator |
| 8 `backend-cache` | Invalidation races, negative caching, single-flight, queueing, stale refresh | Cache-performance experiment |
| 9 `backend-messaging` | Outbox/inbox, acknowledgements, confirms, ordering, leases, retries, poison jobs | Durable job system |
| 10 `backend-reliability` | SLIs/SLOs, overload, graceful degradation, context propagation, cardinality, incidents | Instrumented game day |
| 11 `backend-testing` | Unit/integration/contracts, properties, state machines, fault injection, profiling, load shape | Verification and capacity report |
| 12 `backend-deployment` | Containers, rollout, readiness/liveness, backup restore, infrastructure, architecture, system design | Production backend capstone |

Optional branches: consensus, storage/database engineering, cloud/platform, security, performance and architecture evolution/event sourcing. They have explicit core prerequisites and never block the capstone. Introductory syntax and elementary CRUD/REST are intentionally omitted. Breadth topics such as DNS/TLS and infrastructure-as-code are taught in context; deeper specialist implementation belongs in the optional project or assigned official reading.

## AI core

| Order / course ID | Coverage | Integration artifact |
| --- | --- | --- |
| 1 `ai-foundations` | Tokens, attention, training/inference, sampling, prefill/decode, KV cache | Inference experiments |
| 2 `ai-interfaces` | Provider boundaries, structured output, validation, streaming, stop reasons | Typed provider adapters |
| 3 `ai-tools` | Registry, schemas, dispatch, call IDs, concurrency, permission and result limits | Controlled tool dispatcher |
| 4 `ai-loop` | State machine, action/observation, terminal states, budgets, context selection | Primitive execution loop |
| 5 `ai-mcp` | Host/client/server, versions, discovery, metadata, tools, framing, cancellation, HTTP auth | Versioned MCP adapter |
| 6 `ai-durability` | Events, checkpoints, ambiguous writes, replay, approval waits, workflows | Recoverable orchestration |
| 7 `ai-retrieval` | Chunking, lexical/dense/hybrid, reranking, provenance, access filtering, retrieval metrics | Evaluated retrieval service |
| 8 `ai-memory` | Working/long-term memory, provenance, retention, artifact descriptors, binary hydration | Artifact-backed memory |
| 9 `ai-evaluation` | Held-out data, deterministic scorers, judges, stochastic trials, adversarial fixtures | Repeatable evaluation runner |
| 10 `ai-security` | Injection, confused deputy, exact approval binding, sandboxing, credential scope | Permission and isolation layer |
| 11 `ai-operations` | Traces, redaction, cost, latency, routing, retry/deadline policy | Production game day |
| 12 `ai-capstone` | Interface design, release evidence, framework comparison | Framework-independent Python harness |

Optional branches: multi-agent coordination, advanced retrieval/memory, local serving, multimodal agents, isolation/security, model adaptation and evaluation infrastructure. Core model/API/tool work is framework-independent. LangGraph is examined after implementing persistence and orchestration primitives. The final review compares semantics, including replay and policy boundaries, rather than judging frameworks by feature count.

## Review standard and limitations

Every new concept has a distinct lab and independently authored transfer challenge with its own measurable criterion. Projects include failure/recovery evidence. Estimates include reading, exercises and an integration budget; capstones are open-ended and can take longer. The curriculum prescribes work, not prebuilt solutions: completing a checkbox does not automatically validate the learner’s implementation.

Source links are checked with `tests/check_links.py`; HTTP success proves reachability, not educational correctness or future availability. Official versioned specifications take precedence over SDK examples. Dynamic documentation can change; record the versions used in each learner project. See the quality report for exact verification outcomes and remaining review limits.
