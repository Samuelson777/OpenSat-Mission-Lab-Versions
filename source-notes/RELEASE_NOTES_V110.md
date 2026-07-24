# OpenSat Mission Lab v1.1.0 Release Notes

v1.1 adds independent orbit cross-validation and a dependency-light hardware-in-the-loop telemetry path to the v1.0 digital twin.

## Independent validation

- Universal-variable two-body reference propagator independent of the RK4 implementation
- Six-hour aligned cross-validation with position and velocity errors
- External validation HTML report and machine-readable CSV summaries
- External-tool request schema and blank Cartesian state template
- GMAT starter script and Orekit request JSON
- `opensatlab compare-external` command

## Hardware-in-the-loop

- `OSML-HIL/1` UDP JSON datagrams
- Payload CRC-32 and sequence validation
- Automated 50-packet localhost loopback test
- NDJSON telemetry stream for pipes, serial gateways, and embedded bridges
- `opensatlab hil-listen` and `opensatlab hil-replay` commands

## Acceptance

- 35 executable requirements
- 7 analytical benchmarks
- 67 automated tests

The release remains educational preliminary-design software and is not flight-qualified or independently certified.
