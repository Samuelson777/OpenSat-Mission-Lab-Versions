# OpenSat Mission Lab v2.2 Release Notes

Version 2.2 extends the service platform with identity federation patterns and operational governance controls.

## Added

- OIDC-shaped JWT validation with issuer, audience, expiry, tenant, and role checks
- JWKS validation support for RS256/ES256 identity providers
- Reproducible HS256 development-token validation
- Tenant ownership and isolation for service jobs
- Tenant-scoped encrypted secret metadata
- Fernet authenticated encryption for stored secrets
- Hash-chained append-only API audit events
- Audit-chain verification endpoint
- Immutable tenant object versions
- Retention timestamps and legal holds
- Dry-run and executable lifecycle policies
- Measured SQLite disaster-recovery drills
- Governance validation dashboard, CSV evidence, OpenAPI export, and recovery report
- Six focused v2.2 tests

## Acceptance result

- 34 of 34 integrated v2.1 and v2.2 governance checks passed
- 128 automated tests passed
- Two tenant identities validated
- Cross-tenant job access returned 404
- Encrypted secret round trip passed without plaintext database storage
- Audit chain passed with 31 events
- One superseded object version expired while the current version remained
- Recovery drill passed with matching source and restored counts
