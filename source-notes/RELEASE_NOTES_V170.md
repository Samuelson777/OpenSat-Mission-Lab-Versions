# OpenSat Mission Lab v1.7.0

v1.7 extends the calibrated Earth-observation layer into multi-date disaster analysis. It co-registers pre- and post-event imagery, estimates flood progression, fuses optical and SAR evidence under cloud cover, and validates the resulting change mask against a georeferenced reference dataset.

## Added

- Integer-pixel multi-date co-registration with a transparent correlation search
- Registration RMSE and correction-shift reporting
- Pre-event and post-event optical scenes
- Sentinel-1-like VV/VH SAR fixtures in decibels
- Cloud-aware optical/SAR water-probability fusion
- New-flood, persistent-water, and receded-water accounting
- Flood-area progression in hectares
- Optical-only, SAR-only, and fused validation metrics
- Co-registration, temporal-change, fusion, and progression figures
- Self-contained temporal-fusion dashboard
- `temporal-demo` and `temporal-fusion` CLI commands
- Four executable temporal requirements and one analytical shift benchmark
- Three focused temporal-observation tests

## Scope

The bundled inputs are synthetic, georeferenced engineering fixtures. They reproduce important failure modes such as cloud obstruction, rough water, wet-soil confusion, and pixel offsets. They are not operational Sentinel products, emergency alerts, or validated disaster maps.
