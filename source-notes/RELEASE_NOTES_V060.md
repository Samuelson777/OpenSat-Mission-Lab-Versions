# OpenSat Mission Lab v0.6.0

This release adds a preliminary attitude determination and control system to the end-to-end CubeSat digital twin.

## Highlights

- Quaternion references for nadir, Earth target, ground station, and Sun pointing
- Deployment detumbling and body-rate monitoring
- Sensor noise, reaction-wheel PD control, torque and momentum limits
- Magnetic momentum unloading and saturation reporting
- Target-slew lead time and ground-pass pre-pointing
- Mode-specific pointing requirements and attitude-aware image capture
- New CSV reports and four attitude plots

## Baseline regression

The seven-day India scenario produces 10,081 samples, completes detumbling in 30 minutes, captures nine images, reaches 18.02 mNms maximum wheel momentum, and passes 38 automated tests.

## Scope

The attitude model is educational. It does not represent detailed magnetic fields, flexible modes, wheel jitter, structural coupling, hardware-specific sensor calibration, or flight-qualified control software.
