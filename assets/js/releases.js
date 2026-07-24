window.OSML_PHASES = [
  {
    id: "foundation",
    label: "Digital Twin Foundation",
    range: "v0.1–v0.9",
    description: "From two-body orbit propagation to a browser mission-control console and reliability engineering.",
    accent: "cyan"
  },
  {
    id: "mission",
    label: "Mission Engineering",
    range: "v1.0–v1.9",
    description: "Acceptance evidence, independent validation, hardware bridges, constellations, autonomy, Earth observation, and a local data cube.",
    accent: "violet"
  },
  {
    id: "platform",
    label: "Service Platform",
    range: "v2.0–v2.6",
    description: "Production-shaped APIs, workers, governance, zero trust, supply-chain controls, observability, and resilience.",
    accent: "amber"
  },
  {
    id: "distributed",
    label: "Distributed Operations",
    range: "v2.7–v2.9",
    description: "Tracing, autoscaling, multi-region active-active execution, consistency, quotas, and data-sovereignty controls.",
    accent: "green"
  },
  {
    id: "assurance",
    label: "Orchestration & Assurance",
    range: "v3.0–v3.1",
    description: "Replayable mission workflows, human authority, cryptographic approvals, bounded authorization, migration, and safety invariants.",
    accent: "rose"
  }
];

window.OSML_RELEASES = [
  {
    version: "0.1.0", date: "2026-07-19", phase: "foundation", title: "Orbital simulation baseline",
    summary: "Established the first end-to-end CubeSat analysis path: mission configuration, state initialization, two-body dynamics, ground tracks, and reproducible outputs.",
    features: ["YAML mission loader", "Classical elements to Cartesian state", "RK4 two-body propagation", "CSV and PNG artifacts", "VS Code setup scripts"],
    evidence: ["First deterministic mission run", "Ground-track visualization"],
    image: "ground-track.webp", demo: null, tags: ["orbit", "python", "simulation"]
  },
  {
    version: "0.2.0", date: "2026-07-19", phase: "foundation", title: "Perturbations, Sun, and ground contact",
    summary: "Added J2 perturbation, Earth rotation, eclipse analysis, WGS-84 stations, and sampled contact-window extraction.",
    features: ["J2 propagation mode", "GMST-aware Earth rotation", "Solar direction and eclipse model", "Ground-station elevation history", "Contact windows"],
    evidence: ["14 automated tests", "J2 versus two-body divergence report"],
    image: "ground-track.webp", demo: null, tags: ["j2", "eclipse", "ground-station"]
  },
  {
    version: "0.2.1", date: "2026-07-19", phase: "foundation", title: "Python 3.13 and Windows hardening",
    summary: "Removed the runtime pandas dependency and made visualization, environment repair, and import checks more reliable on a home PC.",
    features: ["Standard-library CSV output", "Headless Matplotlib backend", "Windows virtual-environment repair", "Python 3.13-compatible dependencies"],
    evidence: ["Dependency-light runtime"],
    image: "ground-track.webp", demo: null, tags: ["windows", "python-3.13", "maintenance"], patch: true
  },
  {
    version: "0.3.0", date: "2026-07-19", phase: "foundation", title: "Earth-observation payload planning",
    summary: "Introduced targets, optical payload geometry, access windows, daylight constraints, cloud blocking, image storage, and revisit analysis.",
    features: ["Optical camera model", "Target access and daylight filtering", "Imaging conflict handling", "Cloud-block simulation", "Target revisit analysis"],
    evidence: ["22 automated tests", "India-focused coverage and imaging timeline"],
    image: "ground-track.webp", demo: null, tags: ["payload", "imaging", "coverage"]
  },
  {
    version: "0.3.1", date: "2026-07-20", phase: "foundation", title: "Vectorized geometry performance fix",
    summary: "Replaced per-sample ground-station calculations with vectorized geometry to improve VS Code debugging and full-scenario performance.",
    features: ["Vectorized ECI-to-ECEF conversion", "Cached WGS-84 station vectors", "Batch ground-track generation", "Scalar-versus-vector regression tests"],
    evidence: ["Performance regression coverage"],
    image: "ground-track.webp", demo: null, tags: ["performance", "vectorization", "maintenance"], patch: true
  },
  {
    version: "0.4.0", date: "2026-07-20", phase: "foundation", title: "Power-system digital twin",
    summary: "Connected solar generation, battery energy, operational loads, safe-mode entry, recovery, and power-aware payload decisions.",
    features: ["Solar-array generation", "Battery state-of-charge integration", "Operating loads", "Hysteretic safe mode", "Power-aware image suppression"],
    evidence: ["29 automated tests", "10,081-state seven-day scenario"],
    image: "power-balance.webp", demo: null, tags: ["eps", "battery", "safe-mode"]
  },
  {
    version: "0.5.0", date: "2026-07-20", phase: "foundation", title: "Communications and payload downlink",
    summary: "Added an S-band link budget, adaptive data rates, power-aware station selection, downlink accounting, and onboard storage deletion.",
    features: ["Free-space path loss", "C/N₀ and Eb/N₀", "Adaptive downlink rates", "Pass capacity accounting", "Payload-storage updates"],
    evidence: ["33 automated tests", "14 data-carrying passes"],
    image: "link-margin.webp", demo: null, tags: ["communications", "rf", "downlink"]
  },
  {
    version: "0.6.0", date: "2026-07-20", phase: "foundation", title: "Attitude determination and control",
    summary: "Introduced quaternion references, detumbling, sensor noise, reaction-wheel control, momentum unloading, and pointing-aware imaging.",
    features: ["Nadir, target, station, and Sun pointing", "Reaction-wheel PD control", "Magnetic momentum dumping", "Body-rate monitoring", "Pointing requirements"],
    evidence: ["38 automated tests", "Maximum wheel momentum tracked against limit"],
    image: "attitude-modes.webp", demo: null, tags: ["adcs", "quaternion", "control"]
  },
  {
    version: "0.7.0", date: "2026-07-20", phase: "foundation", title: "Autonomous flight software",
    summary: "Added a state-machine flight-software layer with command authentication, fault injection, watchdog recovery, and structured telemetry.",
    features: ["Flight-software state machine", "Authenticated commands", "Watchdog reset", "Deterministic fault injection", "CRC-32 telemetry"],
    evidence: ["Fault, command, state, and watchdog histories"],
    image: "flight-software.webp", demo: null, tags: ["flight-software", "faults", "telemetry"]
  },
  {
    version: "0.8.0", date: "2026-07-22", phase: "foundation", title: "Browser mission control",
    summary: "Created the first self-contained operator dashboard with synchronized telemetry, alarms, pass scheduling, operations timeline, and planning-only commands.",
    features: ["Interactive HTML dashboard", "Telemetry cursor", "Alarm console", "Priority pass scheduler", "Command-plan export"],
    evidence: ["47 automated tests", "Self-contained mission-control dashboard"],
    image: "mission-control.webp", demo: "demos/mission-control.html", tags: ["dashboard", "operations", "html"]
  },
  {
    version: "0.9.0", date: "2026-07-22", phase: "foundation", title: "Reliability engineering",
    summary: "Added FMEA, Monte Carlo mission-success analysis, anomaly detection, a risk register, and a mission-objective fault tree.",
    features: ["12-row FMEA", "Seeded Monte Carlo campaign", "Anomaly detection", "Risk matrix", "Fault tree"],
    evidence: ["52 automated tests", "1,000-trial reliability scenario"],
    image: "risk-matrix.webp", demo: "demos/reliability.html", tags: ["reliability", "fmea", "monte-carlo"]
  },
  {
    version: "1.0.0", date: "2026-07-23", phase: "mission", title: "Portfolio-ready acceptance release",
    summary: "Consolidated the digital twin into a traceable release with machine-readable requirements, analytical benchmarks, manifests, and a verification report.",
    features: ["Requirements catalogue", "Traceability matrix", "Analytical benchmarks", "SHA-256 artifact manifest", "Acceptance CLI"],
    evidence: ["Automated PASS/FAIL release gate", "Verification badge and HTML report"],
    image: "orbit-validation.webp", demo: null, tags: ["verification", "requirements", "release"]
  },
  {
    version: "1.1.0", date: "2026-07-23", phase: "mission", title: "Independent validation and HIL telemetry",
    summary: "Cross-validated the RK4 orbit model with an independent propagator and added a dependency-light UDP hardware-in-the-loop telemetry path.",
    features: ["Universal-variable reference propagator", "Aligned orbit comparison", "OSML-HIL/1 UDP telemetry", "CRC and sequence validation", "External-tool schemas"],
    evidence: ["Independent orbit error report", "HIL loopback validation"],
    image: "orbit-validation.webp", demo: null, tags: ["validation", "hil", "udp"]
  },
  {
    version: "1.1.1", date: "2026-07-23", phase: "mission", title: "External comparison kit",
    summary: "Turned interchange artifacts into practical GMAT, Orekit, and custom-reference validation workflows with normalized reports.",
    features: ["GMAT script and batch workflow", "Orekit Maven adapter", "Report normalizer", "HTML/PNG/CSV comparison evidence", "VS Code tasks"],
    evidence: ["Executable external-comparison workflows"],
    image: "orbit-validation.webp", demo: null, tags: ["gmat", "orekit", "interoperability"], patch: true
  },
  {
    version: "1.1.2", date: "2026-07-23", phase: "mission", title: "Orekit Windows workflow repair",
    summary: "Hardened the Windows Orekit workflow with a local Maven Wrapper, Java 17 configuration, safe path handling, and prerequisite diagnostics.",
    features: ["Project-local Maven Wrapper", "Java 17 compiler profile", "Path-safe environment handoff", "Native exit-code checks"],
    evidence: ["Windows maintenance release"],
    image: "orbit-validation.webp", demo: null, tags: ["orekit", "windows", "maintenance"], patch: true
  },
  {
    version: "1.2.0", date: "2026-07-23", phase: "mission", title: "Home-lab hardware bridge",
    summary: "Connected the software to USB/UART and embedded-device workflows through command, acknowledgement, Raspberry Pi, and ESP32 examples.",
    features: ["OSML-CMD/1 commands", "OSML-ACK/1 acknowledgements", "USB/UART telemetry", "Raspberry Pi gateway", "ESP32 firmware example"],
    evidence: ["Four-command localhost bridge validation"],
    image: "hardware-bridge.webp", demo: null, tags: ["hardware", "serial", "raspberry-pi"]
  },
  {
    version: "1.3.0", date: "2026-07-23", phase: "mission", title: "Constellation operations",
    summary: "Extended the single spacecraft into a Walker-style constellation with coordinated imaging, revisit analysis, crosslinks, and network connectivity.",
    features: ["Configurable Walker constellation", "Coordinated imaging", "Revisit improvement", "Inter-satellite links", "Gateway availability"],
    evidence: ["Constellation dashboard", "Network and coverage histories"],
    image: "constellation.webp", demo: "demos/constellation.html", tags: ["constellation", "crosslink", "scheduling"]
  },
  {
    version: "1.4.0", date: "2026-07-23", phase: "mission", title: "Conjunction safety and replanning",
    summary: "Added deterministic conjunction screening, avoidance trade studies, blackout windows, utility-based tasking, and outage-aware replanning.",
    features: ["Conjunction catalogue", "Risk scoring", "Avoidance trade space", "Maneuver blackout windows", "Autonomous replanning"],
    evidence: ["Conjunction safety dashboard", "Post-maneuver utility evidence"],
    image: "conjunction.webp", demo: "demos/constellation-safety.html", tags: ["ssa", "conjunction", "replanning"]
  },
  {
    version: "1.5.0", date: "2026-07-23", phase: "mission", title: "Onboard autonomy and edge intelligence",
    summary: "Introduced explainable event detection, resource-aware onboard actions, autonomous reprioritization, and edge-compute trade studies.",
    features: ["Scene-feature surrogates", "Flood-event probability", "Downlink/defer/discard/review policy", "Autonomous priorities", "Edge latency and energy"],
    evidence: ["Autonomy dashboard", "Executable autonomy requirements"],
    image: "onboard-autonomy.webp", demo: "demos/onboard-autonomy.html", tags: ["autonomy", "edge-ai", "explainability"]
  },
  {
    version: "1.6.0", date: "2026-07-23", phase: "mission", title: "Calibrated Earth observation",
    summary: "Connected the mission to georeferenced raster processing, spectral indices, flood classification, validation metrics, and open-data discovery.",
    features: ["GeoTIFF ingestion", "Reflectance calibration", "NDWI/MNDWI/NDVI", "Flood classification", "STAC discovery"],
    evidence: ["Confusion matrix and IoU", "Ground-truth validation figure"],
    image: "earth-observation.webp", demo: "demos/earth-observation.html", tags: ["remote-sensing", "geotiff", "stac"]
  },
  {
    version: "1.7.0", date: "2026-07-23", phase: "mission", title: "Multi-date disaster analysis",
    summary: "Added image co-registration, optical/SAR fusion, cloud-aware flood change detection, progression mapping, and reference validation.",
    features: ["Multi-date co-registration", "SAR VV/VH fixtures", "Cloud-aware optical/SAR fusion", "Flood progression", "Temporal validation"],
    evidence: ["Optical/SAR fusion figure", "Multi-date change dashboard"],
    image: "optical-sar.webp", demo: null, tags: ["sar", "change-detection", "disaster"]
  },
  {
    version: "1.8.0", date: "2026-07-23", phase: "mission", title: "Flood time-series processing",
    summary: "Extended the analysis to six dates with sub-pixel registration, SAR speckle filtering, incidence normalization, persistence mapping, and time-series validation.",
    features: ["Six-date ingestion", "Sub-pixel registration", "Lee-style SAR filtering", "Water persistence", "Time-series metrics"],
    evidence: ["Deterministic offline fixture", "Flood time-series figure"],
    image: "flood-timeseries.webp", demo: null, tags: ["timeseries", "sar", "persistence"]
  },
  {
    version: "1.9.0", date: "2026-07-23", phase: "mission", title: "Operational geospatial data cube",
    summary: "Added local discovery, indexing, querying, provenance, idempotent processing jobs, STAC-like export, and derived-product execution.",
    features: ["SQLite scene catalogue", "Spatial/temporal search", "Idempotent indexing", "Fingerprinted jobs", "STAC-like export"],
    evidence: ["Local data-cube dashboard", "Integrity and provenance fields"],
    image: "datacube.webp", demo: "demos/datacube.html", tags: ["datacube", "sqlite", "provenance"]
  },
  {
    version: "2.0.0", date: "2026-07-23", phase: "platform", title: "Service-oriented mission platform",
    summary: "Converted the local data-cube workflow into a FastAPI service with STAC-aligned discovery, a persistent worker queue, metrics, and container assets.",
    features: ["FastAPI REST service", "STAC-aligned endpoints", "Background worker queue", "SQLite/PostgreSQL modes", "Docker and Prometheus"],
    evidence: ["OpenAPI documentation", "API and worker deployment assets"],
    image: "platform.webp", demo: "demos/platform.html", tags: ["fastapi", "stac", "services"]
  },
  {
    version: "2.1.0", date: "2026-07-23", phase: "platform", title: "Platform hardening",
    summary: "Added S3-compatible storage, COG generation, worker leases, signed webhooks, role-scoped access, and verified backup and recovery.",
    features: ["S3-compatible object storage", "GDAL COG output", "Expiring worker leases", "HMAC webhooks", "Backup and restore"],
    evidence: ["18/18 integrated checks", "122 automated tests"],
    image: "platform.webp", demo: "demos/platform.html", tags: ["s3", "cog", "recovery"]
  },
  {
    version: "2.2.0", date: "2026-07-24", phase: "platform", title: "Identity and governance",
    summary: "Added OIDC-shaped identity validation, tenant isolation, encrypted secrets, immutable objects, and hash-chained API audit events.",
    features: ["JWT/JWKS validation", "Tenant isolation", "Encrypted secret metadata", "Hash-chained audit", "Immutable object versions"],
    evidence: ["Governance validation dashboard", "Audit-chain verification"],
    image: "governance.webp", demo: "demos/governance.html", tags: ["oidc", "multi-tenant", "audit"]
  },
  {
    version: "2.3.0", date: "2026-07-24", phase: "platform", title: "Security platform",
    summary: "Introduced PostgreSQL row-level-security policy assets, secret-key rotation, service credentials, policy-as-code, signed audit export, and regional recovery simulation.",
    features: ["Tenant RLS policies", "Secret-key rotation", "Scoped service JWTs", "Deny-first policy engine", "Signed audit exports"],
    evidence: ["135 automated tests", "Security validation dashboard"],
    image: "security.webp", demo: "demos/security.html", tags: ["rls", "policy-as-code", "service-identity"]
  },
  {
    version: "2.4.0", date: "2026-07-24", phase: "platform", title: "Zero-trust integration",
    summary: "Added external policy decisions, asymmetric workload identity, managed-KMS-shaped encryption, an RLS integration harness, and automated attack regression.",
    features: ["OPA-compatible policy client", "Ed25519 workload identity", "Envelope encryption", "PostgreSQL RLS harness", "Attack regression suite"],
    evidence: ["60/60 integrated checks", "142 tests and 11/11 attacks blocked"],
    image: "zero-trust.webp", demo: "demos/zero-trust.html", tags: ["zero-trust", "opa", "kms"]
  },
  {
    version: "2.5.0", date: "2026-07-24", phase: "platform", title: "Software supply-chain security",
    summary: "Added SBOM generation, reproducible source archives, provenance evidence, detached signatures, dependency policy gates, advisories, and secret scanning.",
    features: ["CycloneDX SBOM", "Reproducible builds", "in-toto provenance", "Ed25519 artifact signatures", "Dependency and secret gates"],
    evidence: ["9/9 supply-chain gates", "149 automated tests"],
    image: "supply-chain.webp", demo: "demos/supply-chain.html", tags: ["sbom", "provenance", "supply-chain"]
  },
  {
    version: "2.6.0", date: "2026-07-24", phase: "platform", title: "Observability and resilience",
    summary: "Added SLOs, error budgets, structured logs, traces, alerts, incidents, bounded chaos experiments, local fallback, and automated rollback.",
    features: ["Availability and latency SLOs", "Error-budget burn", "Structured logs and traces", "Chaos experiments", "Automated canary rollback"],
    evidence: ["14/14 resilience controls", "158 automated tests"],
    image: "observability.webp", demo: "demos/observability.html", tags: ["slo", "chaos", "observability"]
  },
  {
    version: "2.7.0", date: "2026-07-24", phase: "distributed", title: "Distributed tracing and autoscaling",
    summary: "Added W3C trace propagation, API-to-worker correlation, OTLP-shaped export, demand forecasting, bounded autoscaling, and game-day exercises.",
    features: ["Distributed trace trees", "Sensitive-attribute redaction", "Capacity forecasting", "Autoscaling hysteresis", "Game-day recovery"],
    evidence: ["16/16 controls", "167 tests, 40 traces, 200 spans"],
    image: "tracing.webp", demo: "demos/distributed-operations.html", tags: ["opentelemetry", "autoscaling", "forecasting"]
  },
  {
    version: "2.8.0", date: "2026-07-24", phase: "distributed", title: "Multi-region active-active operations",
    summary: "Introduced three-region routing, replicated job state, outage and partition recovery, regional autoscaling, and cost/carbon-aware placement.",
    features: ["Three active regions", "Latency-aware steering", "Cross-region replication", "Outage failover", "Cost/carbon scheduling"],
    evidence: ["18/18 controls", "176 tests and 2,626 exactly-once completions"],
    image: "multi-region.webp", demo: "demos/multi-region.html", tags: ["multi-region", "failover", "sustainability"]
  },
  {
    version: "2.9.0", date: "2026-07-24", phase: "distributed", title: "Governed multi-region consistency",
    summary: "Added consistency modes, deterministic conflict resolution, fair tenant quotas, India/EU residency routing, safe deferral, and audited failover decisions.",
    features: ["Strong/bounded/eventual consistency", "CRDT and quarantine strategies", "Fair-share rate limits", "Data sovereignty", "Hash-chained decisions"],
    evidence: ["20/20 controls", "185 tests and zero residency violations"],
    image: "sovereignty.webp", demo: "demos/governed-multi-region.html", tags: ["consistency", "sovereignty", "rate-limits"]
  },
  {
    version: "3.0.0", date: "2026-07-24", phase: "assurance", title: "Policy-governed mission orchestration",
    summary: "Turned mission triggers into dependency-validated, replayable workflows with human gates, idempotency, bounded retries, and compensation actions.",
    features: ["Workflow DAGs", "Human approval and rejection", "Idempotency", "Durable pause/resume", "Compensation and replay"],
    evidence: ["22/22 controls", "194 tests and three replayable workflow runs"],
    image: "orchestration.webp", demo: "demos/orchestration.html", tags: ["workflow", "human-in-the-loop", "replay"]
  },
  {
    version: "3.1.0", date: "2026-07-24", phase: "assurance", title: "Safety-assured orchestration",
    summary: "Added signed approvals, two-person separation of duties, exact and time-bounded command authorization, workflow migration, and exhaustive safety-state checking.",
    features: ["Ed25519 approvals", "Separation of duties", "Bound command grants", "Workflow migration", "Safety-invariant model check"],
    evidence: ["28/28 controls", "203 tests and 0 invariant violations"],
    image: "safety-assurance.webp", demo: "demos/safety-assurance.html", tags: ["cryptography", "authorization", "safety"]
  }
];
