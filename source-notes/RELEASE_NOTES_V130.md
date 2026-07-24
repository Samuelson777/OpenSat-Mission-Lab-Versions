# OpenSat Mission Lab v1.3.0

## Constellation and distributed operations

v1.3 extends the single-spacecraft digital twin into a configurable multi-satellite mission-analysis layer suitable for a home PC.

### Added

- Walker-style satellite slots with configurable spacecraft count, orbital planes, and phasing
- Common-grid propagation and ground tracks for every spacecraft
- Per-satellite Earth-target access and daylight constraints
- Coordinated imaging assignment with duplicate and spacecraft-conflict suppression
- Single-satellite baseline versus constellation revisit analysis
- Earth-occultation-aware inter-satellite link range and availability histories
- Crosslink window extraction and constellation graph connectivity
- Ground-gateway availability calculations
- One-channel shared ground-station resource scheduling
- Estimated shared-pass data capacity
- Constellation CSV products, five plots, summary, and interactive HTML dashboard
- `opensatlab constellation` command
- Four new executable constellation requirements and one analytical benchmark
- Four focused constellation tests

### Baseline seven-day demonstration

- 4 satellites in 2 planes
- 10,081 state samples per satellite
- 35 coordinated images
- 31 suppressed duplicate or conflicting opportunities
- 848 sampled inter-satellite link windows
- 46.14% availability of at least one crosslink
- 69 shared ground-pass segments
- Up to 3.95× improvement in worst-case revisit
- Up to 2.33× increase in observation rate

### Scope

The constellation layer is an educational preliminary analysis. It is not a collision-avoidance service, spectrum coordination product, network certification, or flight-qualified scheduler.
