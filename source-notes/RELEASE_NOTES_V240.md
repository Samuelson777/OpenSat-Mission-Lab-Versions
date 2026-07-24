# Release notes — v2.4.0

OpenSat Mission Lab v2.4 adds external policy decisions, asymmetric workload identity, managed-KMS-shaped envelope encryption, a PostgreSQL RLS integration harness, and automated security attack regression.

## Acceptance

- 60/60 integrated checks passed.
- 142 automated tests passed.
- 11/11 attack cases blocked.
- External PDP allow, deny, signature verification, and fail-closed behavior executed.
- Ed25519 SPIFFE-shaped workload identity executed through the FastAPI authentication path.
- Two local KMS key versions exercised; retired-key access rejected.
- PostgreSQL RLS harness validated; live execution is conditional on `OSML_POSTGRES_TEST_DSN` and `psycopg`.
