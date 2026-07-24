# OpenSat Mission Lab v2.0.0

## Production-style geospatial mission services

v2.0 converts the local data-cube workflow into a service-oriented platform while preserving the one-PC development path.

### Added

- FastAPI REST service with OpenAPI documentation
- STAC 1.0.0-aligned discovery and item-search endpoints
- API-key protection for job submission
- Database-backed background worker queue
- SQLite local mode and optional PostgreSQL/PostGIS mode
- PostGIS spatial footprints and GiST index
- Prometheus metrics and health endpoints
- API and worker Docker images
- Docker Compose stack with PostGIS and Prometheus
- Kubernetes reference manifests
- Service smoke-test dashboard and machine-readable evidence
- PostGIS migration command
- VS Code API, worker, service-demo, and container tasks

### Validation

- REST liveness and readiness checks
- Scene-listing and STAC search checks
- Authentication check
- Queued-job execution check
- Prometheus metric export check
- OpenAPI export
- Full Python regression suite

### Limitations

The STAC implementation is a practical Core/Collections/Item Search subset and has not been certified by an external conformance test suite. The supplied Kubernetes and Docker assets are reference deployment materials; public production use still requires hardened secrets, TLS, backups, and network controls.
