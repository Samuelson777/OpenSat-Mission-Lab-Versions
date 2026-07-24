# OpenSat Mission Lab v2.6.0

## Runtime observability and resilience

- Added three service-level objectives and explicit error-budget accounting.
- Added deterministic runtime metrics, structured logs, trace-shaped spans, and Prometheus exposition.
- Added deduplicated alert rules and operator runbooks.
- Added three bounded chaos experiments covering API regression, worker heartbeat loss, and object-store write failure.
- Added incident records, MTTR calculations, local-spool fallback, worker lease recovery, and automated canary rollback.
- Added interactive observability dashboard and three new engineering plots.
- Added seven focused tests while preserving the complete regression suite.

The demonstration intentionally breaches short-window SLOs and passes because the platform detects, contains, rolls back, and recovers within configured guardrails.
