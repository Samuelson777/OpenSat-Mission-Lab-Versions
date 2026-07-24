# OpenSat Mission Lab v1.9.0

## Operational Geospatial Data Cube

Version 1.9 adds a local operational layer for discovering, indexing, querying,
and processing Earth-observation assets on a home PC.

### Core additions

- SQLite scene catalogue with spatial, temporal, integrity, and provenance fields
- Manifest and recursive filesystem discovery
- Idempotent indexing and changed-file detection
- Fingerprinted processing jobs that avoid duplicate work
- Event-triggered execution of the v1.8 flood time-series processor
- Search by acquisition date, collection, and bounding-box intersection
- STAC-like JSONL item export and cloud-asset manifest
- Operational HTML dashboard, plots, CSVs, and summary products
- Bounded polling workflow for scheduled local automation

### Demonstration acceptance

- 6 GeoTIFF scenes indexed
- 3.077 MB catalogued storage
- 1 processing job completed
- 0 duplicate scenes on the second indexing cycle
- 0 duplicate jobs on the second processing cycle
- 9 operational events recorded
- 108 repository tests passed

### Scope

SQLite stores metadata and workflow state. Pixel arrays remain in external
GeoTIFF or cloud-object assets. The COG-like flag is a conservative proxy based
on tiling and internal overviews; it is not formal COG validation.
