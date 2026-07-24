#!/usr/bin/env python3
"""Dependency-free static validation for the OpenSat GitHub Pages site."""

from __future__ import annotations

import json
import re
import subprocess
import sys
from html.parser import HTMLParser
from pathlib import Path
from urllib.parse import urlsplit

ROOT = Path(__file__).resolve().parent


class ReferenceParser(HTMLParser):
    def __init__(self) -> None:
        super().__init__()
        self.references: list[str] = []

    def handle_starttag(self, tag: str, attrs: list[tuple[str, str | None]]) -> None:
        values = dict(attrs)
        for key in ("href", "src"):
            value = values.get(key)
            if value:
                self.references.append(value)


def local_path(reference: str) -> Path | None:
    parsed = urlsplit(reference)
    if parsed.scheme or reference.startswith(("#", "mailto:", "javascript:")):
        return None
    clean = parsed.path
    if not clean:
        return None
    return ROOT / clean


def main() -> int:
    failures: list[str] = []
    index = ROOT / "index.html"
    if not index.exists():
        failures.append("index.html is missing")
    else:
        parser = ReferenceParser()
        parser.feed(index.read_text(encoding="utf-8"))
        for reference in parser.references:
            path = local_path(reference)
            if path and not path.exists():
                failures.append(f"Missing referenced asset: {reference}")

    mission_path = ROOT / "assets/data/mission-control.json"
    try:
        mission = json.loads(mission_path.read_text(encoding="utf-8"))
        sample_count = len(mission["series"]["elapsed_hours"])
        if sample_count < 100:
            failures.append("Mission dataset has too few samples")
        for key, values in mission["series"].items():
            if isinstance(values, list) and len(values) != sample_count:
                failures.append(f"Mission series length mismatch: {key}")
    except Exception as exc:  # noqa: BLE001
        failures.append(f"Mission dataset could not be parsed: {exc}")
        sample_count = 0

    releases_js = (ROOT / "assets/js/releases.js").read_text(encoding="utf-8")
    versions = re.findall(r'version:\s*"([0-9.]+)"', releases_js)
    if len(versions) != 35:
        failures.append(f"Expected 35 releases, found {len(versions)}")
    if len(set(versions)) != len(versions):
        failures.append("Release data contains duplicate versions")
    if versions and (versions[0] != "0.1.0" or versions[-1] != "3.1.0"):
        failures.append("Release range does not run from 0.1.0 to 3.1.0")
    for image in re.findall(r'image:\s*"([^"]+)"', releases_js):
        if not (ROOT / "assets/images" / image).exists():
            failures.append(f"Release image is missing: {image}")
    for demo in re.findall(r'demo:\s*"([^"]+)"', releases_js):
        if not (ROOT / demo).exists():
            failures.append(f"Release dashboard is missing: {demo}")

    app_js = (ROOT / "assets/js/app.js").read_text(encoding="utf-8")
    for image in set(re.findall(r'"([a-z0-9-]+\.webp)"', app_js)):
        if not (ROOT / "assets/images" / image).exists():
            failures.append(f"Application image is missing: {image}")
    for demo in set(re.findall(r'"(demos/[a-z0-9-]+\.html)"', app_js)):
        if not (ROOT / demo).exists():
            failures.append(f"Application dashboard is missing: {demo}")

    try:
        subprocess.run(["node", "--check", str(ROOT / "assets/js/releases.js")], check=True, capture_output=True)
        subprocess.run(["node", "--check", str(ROOT / "assets/js/app.js")], check=True, capture_output=True)
    except FileNotFoundError:
        print("NOTE: Node.js unavailable; JavaScript syntax check skipped.")
    except subprocess.CalledProcessError as exc:
        failures.append(exc.stderr.decode("utf-8", errors="replace"))

    dashboards = list((ROOT / "demos").glob("*.html"))
    images = list((ROOT / "assets/images").glob("*.webp"))
    if len(dashboards) != 18:
        failures.append(f"Expected 18 dashboards, found {len(dashboards)}")
    if len(images) < 27:
        failures.append(f"Expected at least 27 evidence images, found {len(images)}")

    if failures:
        print("SITE VALIDATION: FAIL")
        for failure in failures:
            print(f"- {failure}")
        return 1

    print("SITE VALIDATION: PASS")
    print(f"- {len(versions)} documented releases")
    print(f"- {sample_count} mission telemetry samples")
    print(f"- {len(images)} optimized evidence images")
    print(f"- {len(dashboards)} retained HTML dashboards")
    return 0


if __name__ == "__main__":
    sys.exit(main())
