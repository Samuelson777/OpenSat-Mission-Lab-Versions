# OpenSat Mission Lab v0.8.0 — Mission Control

v0.8 adds an operator-facing mission-control layer without introducing pandas or a web-framework dependency.

## Added

- self-contained interactive HTML mission-control dashboard;
- local standard-library HTTP server and browser launcher;
- synchronized telemetry time slider and mission snapshots;
- consolidated power, ADCS, payload, communications, fault, and watchdog alarms;
- searchable alarm console with recommended operator actions;
- pass scheduler with geometry-, storage-, power-, and outcome-based priorities;
- merged operations timeline for contacts, imaging, eclipses, safe mode, faults, and commands;
- executed and recommended command plan;
- planning-only browser command console with local JSON export;
- CSV outputs for alarms, passes, commands, and operations;
- JSON dashboard data and static dashboard preview;
- VS Code launch and task profiles for simulation and dashboard serving;
- five mission-control regression tests.

## Safety and scope

The dashboard is an educational planning interface. It does not transmit commands, provide cryptographic security, control hardware, or replace certified mission-operations software.

## Verified bundled scenario

- 10,081 orbital samples;
- 11 consolidated alarms: 5 critical and 6 warning;
- 17 prioritized ground contacts;
- 8 command-plan rows, including 3 recommended checks;
- 154 merged operations entries;
- 7 captured images;
- 29.44 MB downlinked and 68.56 MB remaining onboard;
- 2,011 telemetry packets with 99.70% delivery;
- 47 automated tests passed.
