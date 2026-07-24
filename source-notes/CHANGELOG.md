## 3.1.0 — 2026-07-24

- Added cryptographically signed approval evidence.
- Enforced requester/approver separation and distinct approval roles.
- Added time-bounded, digest-bound command authorization.
- Added deterministic v3.0-to-v3.1 workflow migration.
- Added exhaustive finite-state safety-invariant validation.

## 3.0.0 — 2026-07-24

- Policy-governed flood-response workflow DAG
- Human approval and rejection gates
- Stable idempotency keys and duplicate-trigger suppression
- Bounded retries, durable pause/resume, and compensation actions
- SHA-256 hash-chained event history and deterministic replay validation
- Interactive v3.0 dashboard, guide, runbook, CI workflow, and VS Code profiles
- 22 orchestration controls and 194 repository tests

## 2.9.0 — 2026-07-24

### Added

- Strong-quorum, bounded-staleness, and eventual consistency policies
- Bounded-read blocking above a five-second replication budget
- Deterministic CRDT, counter, scalar, and manual-review conflict strategies
- Fair tenant and global rate limiting
- India and EU data-sovereignty routing and outage deferral
- SHA-256 hash-chained failover, conflict, throttle, and deferral evidence
- Twenty executable governance controls and nine focused tests
- Interactive v2.9 dashboard, operations guide, runbook, CI workflow, and VS Code profiles

# Changelog

## 2.8.0 — 2026-07-24

### Added

- Three-region active-active service simulation across Bengaluru, Singapore, and Frankfurt
- Health-aware traffic steering with latency, load, cost, and carbon objectives
- Per-region queue, worker, latency, cost, and carbon histories
- Cross-region replication-lag and partition-recovery evidence
- Regional outage failover with exact-once deterministic request accounting
- Cost/carbon-aware flexible workload placement
- Multi-region dashboard, deployment policies, runbook, CI workflow, and nine focused tests

### Verified

- 18 integrated v2.8 controls passed
- 2,626 requests completed exactly once
- Two disruption exercises recovered with zero acknowledged-record loss in the model
- Replication lag returned below one second and final queues drained to zero
- Complete repository regression passed

## 2.7.0 — 2026-07-24

### Added

- OpenTelemetry-shaped distributed traces spanning API, queue, worker, object storage, and webhooks
- W3C traceparent creation and validation
- Trace-attribute redaction and tenant hashing
- OTLP JSON export
- Forecast-aware worker autoscaling with cooldown and hysteresis
- Capacity forecast metrics and uncertainty evidence
- Four bounded game-day incident exercises
- OpenTelemetry Collector, Grafana, autoscaling, and runbook deployment assets
- Interactive v2.7 operations dashboard
- Nine focused tests, bringing the suite to 167 tests

### Verified

- 40 complete traces and 200 correlated spans
- Six scaling decisions with a bounded peak queue of 25
- Four recovered game-day exercises
- Final queue depth of zero and final platform state healthy

## 2.6.0 — 2026-07-24

### Added

- Service-level objectives and error-budget burn reporting
- Structured logs, trace-shaped spans, and Prometheus runtime metrics
- Deduplicated alerts, incident records, MTTR evidence, and operator runbooks
- Bounded API, worker, and object-storage chaos experiments
- Automated canary rollback, worker lease recovery, and local-spool fallback
- Observability dashboard, three resilience plots, and seven focused tests

### Verified

- 14 integrated resilience controls passed
- Three intentional SLO breaches were detected and measured
- Three incidents recovered within a ten-minute MTTR guardrail
- Complete repository regression passed

## 2.5.0 — 2026-07-24

### Added

- CycloneDX 1.5 software bill of materials
- SHA-256 source manifest and deterministic source archive
- in-toto/SLSA-shaped provenance statement
- Ed25519 detached release signatures
- Dependency policy gates, offline advisory matching, and secret scanning
- Supply-chain dashboard, release workflow, documentation, and seven focused tests

### Verified

- Reproducible source-archive digests matched across two builds
- Signature tampering was rejected
- Private signing material was not exported
- Complete repository regression passed

## 2.3.0 — 2026-07-24

### Added

- PostgreSQL tenant context and forced row-level-security deployment policies
- Transactional tenant secret-key rotation
- Short-lived, scoped, revocable service credentials
- Deny-first JSON policy-as-code authorization
- Signed audit export bundles and tamper verification
- Multi-region standby lag and failover simulation
- Security dashboard, OpenAPI evidence, and seven focused tests

### Verified

- 48 integrated platform/security checks passed
- 135 automated tests passed
- Seven tenant-bearing tables covered by RLS policies
- Key retirement, token revocation, audit tamper detection, and failover integrity passed

## 2.2.0 — 2026-07-24

### Added

- OIDC/JWKS bearer validation and tenant-bearing identities
- Tenant-isolated jobs and governance resources
- Fernet-encrypted secrets
- Hash-chained API audit events
- Immutable object versions, retention, legal holds, and lifecycle enforcement
- Measured disaster-recovery drills
- Governance dashboard and integrated 34-check validation
- Six v2.2 tests, bringing the suite to 128 tests


## 2.1.0 — 2026-07-23

### Added

- Local and S3-compatible object-storage adapters
- GDAL COG creation and structural validation
- MinIO development deployment
- Expiring distributed job leases, renewal, retry budgets, and expired-lease requeue
- HMAC-signed webhooks and delivery tracking
- Viewer, operator, and admin API roles
- Verified SQLite backup, manifest, and recovery workflows
- COG publication and backup worker jobs
- Seven focused v2.1 tests, bringing the complete suite to 122 tests

## 2.0.0 — 2026-07-23

### Added

- FastAPI REST service and generated OpenAPI schema
- STAC 1.0.0-aligned landing, collection, item, and search endpoints
- API-key-protected processing-job submission
- Database-backed worker queue with transactional job claiming
- SQLite local mode and optional PostgreSQL/PostGIS service mode
- PostGIS footprint geometry and GiST spatial index
- Prometheus metrics, liveness, readiness, and worker heartbeat reporting
- API and worker Docker images, Docker Compose, and Kubernetes references
- PostGIS migration command and deployment scripts
- Service validation dashboard and seven additional tests


## 1.9.0 — 2026-07-23

### Added

- SQLite geospatial scene catalogue and schema metadata
- Manifest and recursive GeoTIFF discovery
- SHA-256 integrity and changed-asset detection
- Event log and fingerprint-deduplicated processing jobs
- Event-triggered flood time-series processing
- Date, collection, and bounding-box catalogue queries
- STAC-like JSONL items and cloud-asset manifest exports
- Operational inventory and processing dashboard
- Bounded polling/watch workflow
- Six automated data-cube tests, bringing the suite to 108 tests

### Verified

- Six bundled scenes indexed without duplicates
- One processing job completed and duplicate triggering suppressed
- 108 tests passed on the complete repository


## 1.7.0 — 2026-07-23

- Added two-date optical and SAR scene ingestion.
- Added transparent integer-pixel co-registration and registration-error reporting.
- Added cloud-aware optical/SAR water-probability fusion.
- Added new-flood, receded-water, and flood-progression area analysis.
- Added temporal validation CSVs, four plots, an HTML dashboard, CLI commands, requirements, benchmark, and tests.

## 1.6.0 — 2026-07-23

- Added calibrated six-band GeoTIFF ingestion and reflectance scaling.
- Added overlapping raster tiling, NDWI, MNDWI, NDVI, and brightness products.
- Added an explainable lightweight flood classifier and reference-mask evaluation.
- Added threshold sensitivity, confusion matrix, tile metrics, figures, and HTML dashboard.
- Added a public Earth Search STAC query adapter for Sentinel-2 Collection 1 Level-2A candidates.
- Added four executable Earth-observation requirements and one analytical index benchmark.


## 1.5.0 — 2026-07-23

- Added explainable onboard scene assessment and edge-intelligence surrogates.
- Added battery-, storage-, and downlink-aware autonomous actions.
- Added target reprioritization and conflict-checked autonomous tasking.
- Added autonomy CSV reports, four figures, HTML dashboard, summary, requirements, tests, and VS Code profiles.
- Made independent two-body validation use a maximum 60-second comparison step, independent of the mission output grid.

## 1.4.0 — 2026-07-23

- Added seeded resident-object screening and conjunction-event reports.
- Added miss-distance, relative-speed, uncertainty-proxy, and risk classification.
- Added avoidance-maneuver trade studies and safety blackout windows.
- Added utility-based task optimization and event-driven autonomous replanning.
- Added a self-contained constellation safety dashboard.
- Expanded acceptance with four safety/autonomy requirements and six focused tests.

## 1.3.0 — 2026-07-23

### Added

- Four-spacecraft Walker-style constellation generation
- Coordinated target scheduling and duplicate suppression
- Inter-satellite links and network-connectivity analysis
- Shared ground-station scheduling
- Constellation dashboard, plots, CSV reports, requirements, and tests

## 1.1.1


## 1.1.2 - Orekit Windows workflow fix

- Added the official Maven Wrapper pinned to Maven 3.9.16.
- Pinned Maven Compiler Plugin 3.14.1 and Exec Maven Plugin 3.6.3.
- Added Java/JDK and Maven Central prerequisite diagnostics.
- Made Orekit paths safe for repository directories containing spaces.
- Added native-command exit-code checking and verbose recovery instructions.

- Added complete GMAT and Orekit external-validation adapters.
- Added `convert-gmat` CLI command and comparison HTML/plot output.
- Added Windows scripts and VS Code workflows for external comparisons.

# Changelog

## 2.6.0 — 2026-07-24

### Added

- Service-level objectives and error-budget burn reporting
- Structured logs, trace-shaped spans, and Prometheus runtime metrics
- Deduplicated alerts, incident records, MTTR evidence, and operator runbooks
- Bounded API, worker, and object-storage chaos experiments
- Automated canary rollback, worker lease recovery, and local-spool fallback
- Observability dashboard, three resilience plots, and seven focused tests

### Verified

- 14 integrated resilience controls passed
- Three intentional SLO breaches were detected and measured
- Three incidents recovered within a ten-minute MTTR guardrail
- Complete repository regression passed

## 2.5.0 — 2026-07-24

### Added

- CycloneDX 1.5 software bill of materials
- SHA-256 source manifest and deterministic source archive
- in-toto/SLSA-shaped provenance statement
- Ed25519 detached release signatures
- Dependency policy gates, offline advisory matching, and secret scanning
- Supply-chain dashboard, release workflow, documentation, and seven focused tests

### Verified

- Reproducible source-archive digests matched across two builds
- Signature tampering was rejected
- Private signing material was not exported
- Complete repository regression passed

## 2.0.0 — 2026-07-23

### Added

- FastAPI REST service and generated OpenAPI schema
- STAC 1.0.0-aligned landing, collection, item, and search endpoints
- API-key-protected processing-job submission
- Database-backed worker queue with transactional job claiming
- SQLite local mode and optional PostgreSQL/PostGIS service mode
- PostGIS footprint geometry and GiST spatial index
- Prometheus metrics, liveness, readiness, and worker heartbeat reporting
- API and worker Docker images, Docker Compose, and Kubernetes references
- PostGIS migration command and deployment scripts
- Service validation dashboard and seven additional tests


## 1.2.0 - Home-lab hardware bridge

- Added CRC-protected OSML-CMD/1 and OSML-ACK/1 protocols.
- Added optional pyserial telemetry replay, capture, and command exchange.
- Added Raspberry Pi gateway and ESP32 firmware examples.
- Added hardware bridge validation reports, requirements, tests, scripts, and VS Code profiles.


## 1.1.0 — 2026-07-23

- Added independent universal-variable orbit cross-validation.
- Added external-tool validation request, GMAT starter, Orekit request, and CSV comparison command.
- Added CRC-protected UDP HIL telemetry framing, replay, listener, loopback test, and NDJSON export.
- Expanded acceptance to 35 requirements, 7 benchmarks, and 67 tests.

## 1.0.0 — 2026-07-23

### Added

- Executable requirements traceability and automated PASS/FAIL verification
- Six analytical benchmarks with tolerance margins
- HTML verification report, status charts, badge, and SHA-256 output manifest
- `opensatlab accept` command and Windows/Unix acceptance scripts
- GitHub Actions matrix for Python 3.10 through 3.13
- Portfolio case study, demo script, architecture, verification plan, and release checklist
- Four verification tests, bringing the suite to 56 tests

### Verified

- Complete seven-day end-to-end scenario
- All software requirements and analytical benchmarks pass in the baseline release
- Python 3.13.5 execution and ZIP checksum validation

## 0.9.0 — 2026-07-22

### Added

- Reliability configuration and configurable mission-success criteria
- FMEA with initial controls, residual scoring, and recommended actions
- Seeded 1,000-trial Monte Carlo surrogate uncertainty campaign
- Mission-objective failure fault tree and risk register
- Explainable rule-based and robust-statistical anomaly detection
- Consolidated recurring anomaly reporting
- Risk matrix, Monte Carlo outcome, anomaly timeline, and fault-tree plots
- Reliability CSV, JSON, text, and self-contained HTML dashboard outputs
- Five reliability tests, bringing the suite to 52 tests

### Verified

- Complete seven-day deterministic mission remains reproducible
- Monte Carlo campaign is deterministic for a fixed random seed
- Clean Python 3.13 editable installation and Ruff checks

## 0.7.0 — 2026-07-20

- Added flight-software state machine and operational modes.
- Added command authorization, acknowledgements, and rejection logging.
- Added heartbeat supervision, watchdog resets, reboot, and recovery holds.
- Added deterministic processor, attitude-sensor, telemetry-bus, and command-bus faults.
- Added limit monitoring, event logging, payload inhibition, and downlink inhibition.
- Added JSON housekeeping telemetry with sequence numbers and CRC-32.
- Added software history, command, event, fault, reset, telemetry, and plotting outputs.
- Expanded verification to 42 automated tests.

## 0.6.0 — 2026-07-20

### Added

- Scalar-first quaternion utilities and operational attitude-reference generation
- Deployment detumbling with configurable threshold and time constant
- Nadir, target, ground-station, and Sun-pointing guidance modes
- Advance target-slew and contact pre-pointing logic
- Noisy attitude-sensor and gyro measurements
- Bounded three-axis PD reaction-wheel control
- Wheel momentum limits, saturation flags, and magnetic momentum dumping
- Pointing requirements, compliance history, and attitude-aware image gating
- Attitude history, mode, body-rate, pointing-error, and wheel-momentum reports
- Momentum-dump and pointing-violation event-window reports
- Five new attitude tests

### Verified

- 10,081-state seven-day scenario
- Detumbling completed in 30 minutes
- 9 images captured and 0 attitude-blocked captures in the baseline configuration
- Maximum wheel momentum 18.02 mNms against a 25 mNms limit
- 38 automated tests passed


## 0.5.0 — 2026-07-20

### Added

- Configurable S-band frequency, RF power, antenna gains, losses, noise temperature, Eb/N0, and margin
- Vectorized station slant-range history
- Free-space path loss and carrier-to-noise-density calculations
- Discrete adaptive downlink rates from configured rate options
- Power-aware station selection and data transmission
- Actual deletion of successfully downlinked payload data from onboard storage
- Sample-level link-budget and downlink histories
- Pass-by-pass capacity, transferred-data, and status reporting
- Link-margin, adaptive-rate, and payload-data-transfer plots
- Communications assumptions, requirements, validation notes, and automated tests

### Verified

- 10,081-state seven-day scenario on Python 3.13.5
- 33 tests and Ruff checks passed
- 126.00 MB generated, 29.44 MB downlinked, and 96.56 MB remaining
- 14 data-carrying passes and one safe-mode-blocked pass

## 0.4.0 — 2026-07-20

### Added

- Configurable solar-array, battery, efficiency, load, and SOC parameters
- Solar generation and lumped battery-energy integration
- Nominal, imaging, downlink, and safe-mode operating loads
- Hysteretic autonomous safe-mode entry and recovery
- Power-aware image suppression with `power_blocked` event status
- Power-history and safe-mode-window CSV reports
- Battery SOC, power-balance, and operating-mode plots
- Power-system documentation and automated tests

### Verified

- 10,081-state seven-day scenario on Python 3.13.5
- 29 tests and Ruff checks passed
- Included low-SOC scenario produces one safe-mode interval and one blocked image

## 0.3.1 — 2026-07-20

### Fixed

- Replaced the per-sample ground-station loop with vectorized ECI-to-ECEF and elevation calculations.
- Ground-station WGS-84 position and local-up direction are now computed once per station.
- Vectorized ground-track generation to reduce VS Code debugger overhead.
- Added regression tests comparing batch geometry against the original scalar calculations.
- Added a test ensuring station coordinates are not recomputed for every orbital state.

## 0.3.0 — 2026-07-19

### Added

- Configurable Earth-observation targets and priorities
- Optical payload settings, camera field of view, and storage parameters
- Spherical-Earth nadir footprint, swath, and cross-track GSD proxy
- Off-nadir look-angle and slant-range histories
- Earth-limb occultation rejection for far-side targets
- Approximate target solar-elevation and daylight filtering
- Geometric access and daylight imaging-window reports
- Closest-approach candidate selection
- Priority-aware imaging conflict handling
- Deterministic cloud-block simulation
- Compressed-image data generation and storage history
- Target revisit analysis
- Global and India-focused target-coverage plots
- Imaging event timeline and camera-footprint geometry diagram
- Expanded verification suite with 22 tests

### Changed

- Bundled scenario extended to seven days at a 60-second step
- README, architecture, requirements, assumptions, validation, and VS Code instructions updated for v0.4

## 0.2.1

- Removed pandas from runtime reporting; CSV output now uses Python's standard library.
- Selected Matplotlib's Agg backend for reliable VS Code and CI rendering.
- Added a Windows repair script that deletes and recreates stale `.venv` environments.
- Added Python 3.13-compatible dependency floors and binary-wheel installation.
- Added an import verification step before tests and simulation.

## 0.2.0 — 2026-07-19

### Added

- First-order J2 perturbation model
- Selectable `two_body` and `j2` propagation modes
- UTC mission start time and GMST-aware Earth rotation
- Approximate solar-direction model
- Cylindrical eclipse detection and eclipse-window reporting
- WGS-84 ground-station coordinates
- Elevation-angle history and configurable minimum elevation
- Sampled contact-window extraction
- J2 versus two-body divergence report and plot
- Full-day Bengaluru demonstration outputs
- Expanded verification suite with 14 tests

## 0.1.0 — 2026-07-19

- Initial mission YAML loader
- Classical elements to Cartesian state conversion
- RK4 two-body propagation
- Ground-track generation
- CSV and PNG output
- VS Code workspace and setup scripts

## 0.8.0 — 2026-07-22

### Added

- Dependency-light, self-contained browser mission-control dashboard
- Synchronized telemetry cursor and spacecraft-state snapshot
- Consolidated alarm engine and recommended operator actions
- Priority-scored pass scheduler
- Unified operations timeline
- Executed and recommended command plan
- Planning-only browser command console and JSON export
- Local standard-library dashboard server
- Alarm, pass, command, operations, JSON, HTML, and preview outputs
- Five mission-control tests, bringing the suite to 47 tests

## 2.4.0

- Added external OPA-compatible policy-decision integration with fail-closed behavior.
- Added Ed25519 asymmetric workload JWTs with SPIFFE-shaped identities and JWKS validation.
- Added local managed-KMS envelope encryption plus AWS/GCP/Azure adapter documentation.
- Added executable PostgreSQL RLS integration-test SQL and optional live harness.
- Added deterministic automated security attack regression and v2.4 evidence dashboard.
