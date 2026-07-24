# OpenSat Mission Lab v2.3.0

## Added

- PostgreSQL tenant-context propagation and row-level-security deployment SQL
- Forced RLS policies across seven tenant-bearing tables
- Transactional tenant secret-key rotation with rotation evidence
- Revocable service JWTs with 1-60 minute lifetimes and scope checks
- Deny-first JSON policy-as-code evaluation
- Signed JSONL/CSV audit-export bundles with tamper detection
- Multi-region SQLite replication-lag and failover simulation
- Security metrics, dashboard, OpenAPI export, VS Code profiles, and documentation
- Seven focused v2.3 tests, bringing the full suite to 135 tests

## Verified

- 48 of 48 integrated v2.3 and inherited platform checks passed
- Seven RLS-covered tables validated structurally
- Rotated ciphertext rejected the retired key
- Revoked and expired service credentials were rejected
- Modified audit evidence failed signature/hash validation
- Standby promotion preserved table counts and the audit chain

## Boundaries

A live PostgreSQL server was not available in the build environment. The RLS SQL, tenant-context wiring, schema ordering, and static controls were validated, while local execution used SQLite.
