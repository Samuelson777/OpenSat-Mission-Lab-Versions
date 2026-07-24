# OpenSat Mission Lab v0.5.0 Release Notes

## Communications milestone

This release adds a preliminary S-band communications and payload-data return model. It connects station geometry, RF link performance, electrical-power modes, captured image data, and onboard storage in one sampled mission timeline.

## Demonstration regression

- 10,081 state samples over seven days
- 17 Bengaluru contact windows
- 14 passes transferring payload data
- 1 pass blocked entirely by safe mode
- 9 captured images
- 126.00 MB payload data generated
- 29.44 MB payload data downlinked
- 96.56 MB remaining onboard
- Maximum selected adaptive rate: 256 kbps
- 33 automated tests passing

## New reports

- `link_budget_history.csv`
- `downlink_history.csv`
- `downlink_passes.csv`
- `link_margin.png`
- `adaptive_data_rate.png`
- `payload_data_transfer.png`

## Scope warning

The RF model is an educational preliminary-design model. It does not establish regulatory compliance, hardware performance, waveform performance, or flight readiness.
