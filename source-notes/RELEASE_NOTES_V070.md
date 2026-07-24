# OpenSat Mission Lab v0.7.0

This release adds an educational autonomous flight-software layer to the end-to-end CubeSat digital twin.

## Highlights

- Boot, initialization, detumble, nominal, imaging, downlink, safe-mode, and reboot states
- Authenticated time-tagged commands with acceptance and rejection reasons
- Heartbeat monitoring and autonomous watchdog reset
- Deterministic processor, sensor, telemetry-bus, and command-bus faults
- Battery, pointing, and reaction-wheel limit monitoring
- Payload and downlink inhibition during software safe mode
- Periodic sequence-numbered JSON telemetry packets with CRC-32
- Command, event, telemetry, fault, watchdog, state-history, and plotting outputs

## Baseline seven-day scenario

- 10,081 mission samples
- 18 imaging attempts
- 7 captured images
- 2 flight-software-blocked images
- 4 injected faults
- 1 watchdog reset
- 3 accepted commands and 2 rejected commands
- 2,011 telemetry packets, 99.70% delivery
- 42 automated tests and passing Ruff checks

## Scope

The flight-software implementation is educational. It does not claim RTOS behavior, cryptographic command security, CCSDS compliance, redundant-computer voting, hardware-driver fidelity, radiation tolerance, formal verification, or flight qualification.
