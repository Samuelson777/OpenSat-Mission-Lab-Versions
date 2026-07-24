# OpenSat Mission Lab v2.5.0

## Software-supply-chain security

- CycloneDX 1.5 SBOM generation for declared Python dependencies
- SHA-256 source manifest with per-file evidence
- Deterministic, reproducible source archives
- in-toto Statement / SLSA-shaped provenance evidence
- Ed25519 detached signatures with a public verification key
- Dependency policy gates for upper bounds, deny lists, and URL/VCS references
- Deterministic offline advisory matching
- Repository secret scanning
- GitHub Actions supply-chain workflow with build, test, SBOM, signing evidence, and optional `pip-audit`

## Validation

- Nine local policy gates
- Seven focused v2.5 tests
- Reproducible archive digests compared across two independent builds
- Detached-signature tamper rejection
- Only the public release-verification key is exported

The offline advisory database is a reproducible fixture, not a live vulnerability feed. Internet-connected CI runners should execute the included `pip-audit` step or an equivalent maintained scanner.
