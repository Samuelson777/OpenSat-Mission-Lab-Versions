# OpenSat Mission Lab v2.8 Release Notes

## Multi-Region Active-Active Operations

v2.8 adds latency-aware traffic steering, regional health exclusion, replicated job state, outage failover, cost/carbon-aware workload placement, and multi-region operational evidence.

### Added

- Three-region active-active simulation
- Health-aware and policy-weighted traffic routing
- Per-region queue, worker, latency, cost, and carbon histories
- Cross-region replication-lag records
- Regional outage and replication-partition exercises
- Exact-once request accounting in the deterministic scenario
- Sustainable batch-workload placement
- Interactive v2.8 dashboard and four figures
- Nine focused tests

### Acceptance

- 18/18 v2.8 controls pass
- 2,626 requests complete exactly once
- 2/2 disruption exercises recover
- Maximum acknowledged-record loss is zero in the model
- Replication lag recovers below one second
- Final regional queues are empty
- Full repository regression passes
