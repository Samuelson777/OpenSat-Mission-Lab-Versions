# OpenSat Mission Lab v1.6.0

v1.6 connects the mission digital twin to calibrated geospatial raster processing and open Earth-observation data discovery.

## Highlights

- Six-band georeferenced GeoTIFF ingestion
- Reflectance calibration from scale and offset metadata
- Overlapping tiling with complete edge coverage
- NDWI, MNDWI, NDVI, and brightness products
- Explainable lightweight flood probability baseline
- Confusion matrix, accuracy, precision, recall, F1, and IoU
- Threshold sensitivity and tile-level metrics
- Earth Search STAC candidate discovery
- Sentinel-2 L2A common-grid subset download adapter
- Interactive validation dashboard
- 96 tests, 53 executable requirements, and 9 analytical benchmarks

## Validation

The bundled scene is a synthetic calibrated fixture with deliberately ambiguous shallow flood and wet-soil regions. The fast seven-day acceptance scenario passes all requirements and benchmarks. Live Sentinel-2 downloads require internet access and use SCL water as a weak reference, not independent event ground truth.
