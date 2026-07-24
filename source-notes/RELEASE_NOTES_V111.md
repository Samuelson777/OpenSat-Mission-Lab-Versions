# OpenSat Mission Lab v1.1.1 — External Comparison Kit

This patch release turns the v1.1 interchange files into practical external-tool workflows.

## New capabilities

- Complete GMAT two-body validation script with exact 60-second output stops
- GMAT console batch workflow for Windows
- Robust GMAT numeric-report normalizer
- Executable Orekit Maven adapter
- Orekit comparison PowerShell workflow
- Generic custom-reference comparison workflow
- HTML, PNG, CSV, and text comparison reports
- VS Code tasks and launch profiles for external validation
- Regression tests for conversion and report generation

## Important scope

The adapters compare a deliberately isolated two-body Cartesian case. Do not compare the full seven-day J2 mission against a point-mass external case. For higher-fidelity comparisons, match all force-model components and frame conventions first.
