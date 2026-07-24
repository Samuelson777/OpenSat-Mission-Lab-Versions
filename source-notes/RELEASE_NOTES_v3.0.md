# OpenSat Mission Lab v3.0 Release Notes

v3.0 is the first major release centered on operational orchestration rather than an isolated subsystem. It turns mission triggers into policy-governed, replayable workflows with explicit human authority and safe recovery behavior.

## Release evidence

- 22 of 22 orchestration controls pass.
- 194 automated repository tests pass.
- Three workflow runs are demonstrated.
- Two workflows complete and publish validated products.
- One workflow is rejected and compensated safely.
- One duplicate trigger is suppressed.
- Two transient retries remain within policy.
- Five human approval decisions meet the five-minute latency guardrail.
- Sixty-four event records form a valid SHA-256 chain.
- Event replay reconstructs all terminal states.

## Scope boundary

This release is a deterministic engineering simulator. It does not transmit flight commands, establish legal approval authority, or replace a certified workflow engine.
