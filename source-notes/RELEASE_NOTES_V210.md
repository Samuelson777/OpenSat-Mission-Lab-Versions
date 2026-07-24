# OpenSat Mission Lab v2.1 Release Notes

v2.1 adds the operational controls missing from v2.0: S3-compatible storage, genuine GDAL COG generation, expiring worker leases, signed webhooks, role-scoped access, and verified backup/recovery.

## Acceptance evidence

- 18/18 integrated platform checks passed
- 122 automated tests passed
- Six-scene STAC/data-cube fixture indexed
- One COG created with GDAL's COG driver and published to the object store
- Job lease claim and renewal verified
- HMAC-signed webhook delivered to a real local HTTP receiver
- SQLite backup checksum and restore integrity verified

## Boundaries

The bundled acceptance uses the local object-store backend. S3-compatible deployment assets target MinIO through Docker Compose, but Docker was not required for the local validation. PostgreSQL backup automation remains an operator responsibility.
