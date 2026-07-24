(() => {
  "use strict";

  const $ = (selector, scope = document) => scope.querySelector(selector);
  const $$ = (selector, scope = document) => [...scope.querySelectorAll(selector)];

  const phaseColors = {
    foundation: "#56e1ff",
    mission: "#9d8cff",
    platform: "#ffca6b",
    distributed: "#62e6a5",
    assurance: "#ff7ca8"
  };

  const architectureLayers = [
    {
      id: "science",
      number: "L1",
      color: "#56e1ff",
      title: "Mission science and orbital dynamics",
      short: "Physics, geometry, access, payload",
      description: "The scientific foundation models spacecraft motion, Earth rotation, illumination, target access, payload geometry, communications, attitude, power, and mission constraints.",
      releases: ["v0.1", "v0.2", "v0.3", "v0.4", "v0.5", "v0.6"],
      capabilities: [
        ["Orbit propagation", "Two-body, J2, independent cross-validation"],
        ["Mission geometry", "Ground tracks, access, eclipses, contacts"],
        ["Spacecraft subsystems", "Power, ADCS, communications, storage"],
        ["Payload planning", "Imaging windows, coverage, revisit analysis"]
      ]
    },
    {
      id: "operations",
      number: "L2",
      color: "#71c9ff",
      title: "Flight software and mission operations",
      short: "State machines, telemetry, alarms, HIL",
      description: "Operational logic connects authenticated commands, state transitions, watchdog recovery, telemetry, mission-control workflows, reliability analysis, external validation, and home-lab hardware interfaces.",
      releases: ["v0.7", "v0.8", "v0.9", "v1.0", "v1.1", "v1.2"],
      capabilities: [
        ["Flight software", "Modes, faults, commands, watchdogs"],
        ["Mission control", "Telemetry replay, alarms, schedules"],
        ["Reliability", "FMEA, Monte Carlo, anomaly detection"],
        ["Hardware bridge", "UDP, serial, Raspberry Pi, ESP32"]
      ]
    },
    {
      id: "autonomy",
      number: "L3",
      color: "#9d8cff",
      title: "Constellation, safety, and autonomy",
      short: "Coordination, conjunctions, edge decisions",
      description: "The mission scales to multiple spacecraft, crosslinks, coordinated tasking, conjunction screening, maneuver trade studies, autonomous replanning, and explainable onboard event decisions.",
      releases: ["v1.3", "v1.4", "v1.5"],
      capabilities: [
        ["Constellations", "Walker geometry, crosslinks, connectivity"],
        ["Space safety", "Conjunction screening and maneuvers"],
        ["Task optimization", "Conflict checks and utility scoring"],
        ["Edge autonomy", "Explainable event and resource policies"]
      ]
    },
    {
      id: "geospatial",
      number: "L4",
      color: "#77ddb8",
      title: "Earth observation and geospatial data",
      short: "Raster analytics, fusion, data cube",
      description: "Calibrated optical and SAR processing adds flood mapping, validation, multi-date change analysis, time-series products, provenance, idempotent jobs, and local catalogue search.",
      releases: ["v1.6", "v1.7", "v1.8", "v1.9"],
      capabilities: [
        ["Raster processing", "GeoTIFF, calibration, spectral indices"],
        ["Sensor fusion", "Optical/SAR cloud-aware evidence"],
        ["Temporal analytics", "Progression, persistence, validation"],
        ["Data cube", "SQLite catalogue, STAC-like export"]
      ]
    },
    {
      id: "platform",
      number: "L5",
      color: "#ffca6b",
      title: "Service platform and security",
      short: "APIs, workers, identity, zero trust",
      description: "Production-shaped services expose data through APIs and workers, then add storage, leases, webhooks, governance, tenant isolation, row-level security, workload identities, encryption, and attack regression.",
      releases: ["v2.0", "v2.1", "v2.2", "v2.3", "v2.4"],
      capabilities: [
        ["Service APIs", "FastAPI, STAC, queues, PostgreSQL"],
        ["Operations", "Object storage, COG, leases, recovery"],
        ["Identity", "OIDC/JWKS, tenants, service credentials"],
        ["Zero trust", "OPA-shaped policy, RLS, KMS, attacks"]
      ]
    },
    {
      id: "delivery",
      number: "L6",
      color: "#ffb46b",
      title: "Secure delivery and runtime resilience",
      short: "Supply chain, SLOs, chaos, rollback",
      description: "Software delivery gains SBOMs, provenance, reproducible builds, signatures, and policy gates while runtime operations gain SLOs, error budgets, structured telemetry, chaos tests, incident response, and rollback.",
      releases: ["v2.5", "v2.6"],
      capabilities: [
        ["Supply chain", "SBOM, provenance, signatures"],
        ["Quality gates", "Dependency policy and secret scanning"],
        ["Observability", "Metrics, logs, traces, alerts, SLOs"],
        ["Resilience", "Chaos, recovery, spool, rollback"]
      ]
    },
    {
      id: "distributed",
      number: "L7",
      color: "#62e6a5",
      title: "Distributed and multi-region operations",
      short: "Tracing, scaling, replication, governance",
      description: "The platform expands across trace-correlated workers and three active regions with forecast-aware scaling, replicated state, outage recovery, consistency policies, quotas, sovereignty routing, and audited decisions.",
      releases: ["v2.7", "v2.8", "v2.9"],
      capabilities: [
        ["Distributed tracing", "W3C context and OTLP-shaped evidence"],
        ["Autoscaling", "Queue and forecast-aware decisions"],
        ["Multi-region", "Traffic steering and replication"],
        ["Governance", "Consistency, quotas, sovereignty"]
      ]
    },
    {
      id: "assurance",
      number: "L8",
      color: "#ff7ca8",
      title: "Orchestration and safety assurance",
      short: "DAGs, approvals, replay, invariants",
      description: "Mission triggers become policy-governed workflow DAGs with human authority, idempotency, replay, compensation, signed approvals, separation of duties, time-bounded command grants, version migration, and exhaustive safety checks.",
      releases: ["v3.0", "v3.1"],
      capabilities: [
        ["Workflow engine", "DAGs, pause/resume, retry, replay"],
        ["Human authority", "Approval, rejection, compensation"],
        ["Cryptographic control", "Ed25519 signatures and bound grants"],
        ["Safety assurance", "Migration and finite-state invariants"]
      ]
    }
  ];

  const evidence = [
    ["foundation", "v0.1", "Orbital ground track", "ground-track.webp", "Seven-day orbital state and Earth-fixed ground-track evidence."],
    ["foundation", "v0.4", "Power-system balance", "power-balance.webp", "Solar generation, loads, battery state, and safe-mode behavior."],
    ["foundation", "v0.5", "S-band link margin", "link-margin.webp", "Station visibility, RF margin, and adaptive-rate evidence."],
    ["foundation", "v0.6", "Attitude modes", "attitude-modes.webp", "Detumble, nadir, target, station, and Sun-pointing modes."],
    ["foundation", "v0.8", "Mission-control console", "mission-control.webp", "Operator-facing telemetry, alarms, passes, and command planning."],
    ["foundation", "v0.9", "Reliability risk matrix", "risk-matrix.webp", "Initial and residual mission risk visualization."],
    ["mission", "v1.1", "Independent orbit validation", "orbit-validation.webp", "Primary and independent propagation comparison."],
    ["mission", "v1.2", "Hardware command bridge", "hardware-bridge.webp", "Command and acknowledgement exchange validation."],
    ["mission", "v1.3", "Constellation ground tracks", "constellation.webp", "Multi-satellite coverage and distributed mission geometry."],
    ["mission", "v1.4", "Avoidance maneuver trade space", "conjunction.webp", "Miss distance, propellant, lead time, and task conflicts."],
    ["mission", "v1.5", "Onboard decision timeline", "onboard-autonomy.webp", "Explainable event scoring and resource-aware actions."],
    ["mission", "v1.6", "Earth-observation validation", "earth-observation.webp", "Classification metrics against georeferenced ground truth."],
    ["mission", "v1.7", "Optical/SAR fusion", "optical-sar.webp", "Cloud-aware multi-sensor water and flood evidence."],
    ["mission", "v1.8", "Flood time series", "flood-timeseries.webp", "Six-date progression, persistence, and validation."],
    ["mission", "v1.9", "Data-cube catalogue", "datacube.webp", "Indexed scenes, derived products, and processing state."],
    ["platform", "v2.1", "Platform validation", "platform.webp", "Storage, COG, leases, webhooks, and recovery checks."],
    ["platform", "v2.2", "Governance validation", "governance.webp", "Identity, tenant boundaries, secrets, and audit evidence."],
    ["platform", "v2.3", "Security platform", "security.webp", "RLS, key rotation, service identity, policy, and audit export."],
    ["platform", "v2.4", "Zero-trust regression", "zero-trust.webp", "Workload identity, external policy, KMS, and attack blocking."],
    ["platform", "v2.5", "Supply-chain policy gates", "supply-chain.webp", "SBOM, signatures, reproducibility, advisories, and secrets."],
    ["platform", "v2.6", "Service resilience", "observability.webp", "SLO health, chaos injection, recovery, and rollback."],
    ["distributed", "v2.7", "Distributed trace timeline", "tracing.webp", "Correlated API, queue, worker, storage, and webhook spans."],
    ["distributed", "v2.8", "Regional health and failover", "multi-region.webp", "Three active regions through outage and recovery."],
    ["distributed", "v2.9", "Sovereignty compliance", "sovereignty.webp", "Residency-safe placement and controlled deferral."],
    ["assurance", "v3.0", "Workflow DAG", "orchestration.webp", "Dependency-validated mission orchestration graph."],
    ["assurance", "v3.1", "Approval signatures", "approval-signatures.webp", "Valid cryptographic approvals and blocked attacks."],
    ["assurance", "v3.1", "Safety-invariant state space", "safety-assurance.webp", "Exhaustive command-gate model checking."],
  ].map(([phase, version, title, image, caption]) => ({ phase, version, title, image, caption }));

  const dashboards = [
    ["Mission control", "demos/mission-control.html"],
    ["Reliability engineering", "demos/reliability.html"],
    ["Constellation operations", "demos/constellation.html"],
    ["Conjunction safety", "demos/constellation-safety.html"],
    ["Onboard autonomy", "demos/onboard-autonomy.html"],
    ["Earth observation", "demos/earth-observation.html"],
    ["Operational data cube", "demos/datacube.html"],
    ["Service platform", "demos/platform.html"],
    ["Identity governance", "demos/governance.html"],
    ["Security platform", "demos/security.html"],
    ["Zero trust", "demos/zero-trust.html"],
    ["Supply chain", "demos/supply-chain.html"],
    ["Observability", "demos/observability.html"],
    ["Distributed operations", "demos/distributed-operations.html"],
    ["Multi-region", "demos/multi-region.html"],
    ["Governed multi-region", "demos/governed-multi-region.html"],
    ["Mission orchestration", "demos/orchestration.html"],
    ["Safety assurance", "demos/safety-assurance.html"]
  ];

  const skills = [
    ["Ω", "Orbital and spacecraft engineering", "Orbit propagation, access geometry, eclipse analysis, payload planning, power, communications, ADCS, and mission constraints.", ["RK4", "J2", "WGS-84", "link budget", "quaternions"]],
    ["FSW", "Flight software and operations", "Deterministic state machines, command validation, telemetry, watchdog recovery, alarms, schedules, operator workflows, and HIL paths.", ["state machines", "CRC-32", "UDP", "serial", "mission control"]],
    ["EO", "Remote sensing and geospatial", "Calibrated raster ingestion, optical/SAR fusion, flood mapping, temporal analysis, validation, catalogues, provenance, and STAC-shaped discovery.", ["GeoTIFF", "NDWI", "SAR", "SQLite", "STAC"]],
    ["API", "Platform and data services", "FastAPI endpoints, worker queues, object storage, COG generation, webhooks, leases, PostgreSQL patterns, metrics, backup, and recovery.", ["FastAPI", "PostgreSQL", "S3", "GDAL", "Prometheus"]],
    ["ZT", "Identity and security", "JWT/JWKS identities, tenants, encrypted secrets, audit chains, RLS, policy decisions, workload identity, KMS-shaped encryption, and attack regression.", ["OIDC", "Ed25519", "OPA", "RLS", "KMS"]],
    ["SBOM", "Secure software delivery", "CycloneDX SBOMs, source manifests, reproducible archives, provenance statements, artifact signatures, dependency policy, advisories, and secret scanning.", ["CycloneDX", "in-toto", "SLSA-shaped", "SHA-256", "CI"]],
    ["SLO", "Reliability and observability", "Service objectives, error budgets, logs, traces, alerts, chaos tests, incident response, local fallback, rollback, and game-day validation.", ["SLO", "MTTR", "chaos", "tracing", "rollback"]],
    ["MR", "Distributed systems", "Trace propagation, capacity forecasting, autoscaling, active-active regions, replication, traffic steering, consistency, rate limiting, and sovereignty routing.", ["W3C trace", "OTLP", "autoscaling", "replication", "CRDT"]],
    ["✓", "Workflow and safety assurance", "Replayable DAGs, human approval, compensation, signed authority, separation of duties, bounded command grants, state migration, and safety invariants.", ["DAG", "idempotency", "replay", "signatures", "model checking"]]
  ];

  function initTheme() {
    const stored = localStorage.getItem("osml-theme");
    const preferred = matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark";
    document.documentElement.dataset.theme = stored || preferred;
    $("#themeToggle").addEventListener("click", () => {
      const next = document.documentElement.dataset.theme === "dark" ? "light" : "dark";
      document.documentElement.dataset.theme = next;
      localStorage.setItem("osml-theme", next);
      drawTelemetry();
    });
  }

  function initMenu() {
    const button = $("#menuButton");
    const nav = $("#mobileNav");
    button.addEventListener("click", () => {
      const open = nav.classList.toggle("open");
      button.setAttribute("aria-expanded", String(open));
    });
    $$("a", nav).forEach(a => a.addEventListener("click", () => {
      nav.classList.remove("open");
      button.setAttribute("aria-expanded", "false");
    }));
  }

  function initReveal() {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.08 });
    $$(".reveal").forEach(el => observer.observe(el));
  }

  function initCounters() {
    const counters = $$('[data-counter]');
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        const element = entry.target;
        const goal = Number(element.dataset.counter);
        const start = performance.now();
        const duration = 900;
        function tick(now) {
          const progress = Math.min(1, (now - start) / duration);
          const eased = 1 - Math.pow(1 - progress, 3);
          element.textContent = Math.round(goal * eased).toLocaleString();
          if (progress < 1) requestAnimationFrame(tick);
        }
        requestAnimationFrame(tick);
        observer.unobserve(element);
      });
    }, { threshold: .6 });
    counters.forEach(c => observer.observe(c));
  }

  function initOrbit() {
    const canvas = $("#orbitCanvas");
    const ctx = canvas.getContext("2d");
    let t = 0;
    let animation;

    function css(name) {
      return getComputedStyle(document.documentElement).getPropertyValue(name).trim();
    }

    function draw() {
      const w = canvas.width;
      const h = canvas.height;
      ctx.clearRect(0, 0, w, h);
      const cx = w * .5;
      const cy = h * .5;
      const text = css("--text");
      const cyan = css("--cyan");
      const violet = css("--violet");
      const line = css("--line-strong");

      const glow = ctx.createRadialGradient(cx, cy, 10, cx, cy, 150);
      glow.addColorStop(0, "rgba(86,225,255,.35)");
      glow.addColorStop(.45, "rgba(35,168,223,.16)");
      glow.addColorStop(1, "rgba(3,9,20,0)");
      ctx.fillStyle = glow;
      ctx.beginPath(); ctx.arc(cx, cy, 160, 0, Math.PI * 2); ctx.fill();

      const earth = ctx.createRadialGradient(cx - 28, cy - 34, 5, cx, cy, 100);
      earth.addColorStop(0, "#8bf2ff");
      earth.addColorStop(.18, "#2bb9e6");
      earth.addColorStop(.62, "#0f527d");
      earth.addColorStop(1, "#061526");
      ctx.fillStyle = earth;
      ctx.beginPath(); ctx.arc(cx, cy, 92, 0, Math.PI * 2); ctx.fill();
      ctx.strokeStyle = "rgba(139,242,255,.35)"; ctx.lineWidth = 2;
      ctx.beginPath(); ctx.arc(cx, cy, 94, 0, Math.PI * 2); ctx.stroke();

      ctx.save();
      ctx.translate(cx, cy);
      ctx.rotate(-.48);
      ctx.strokeStyle = line;
      ctx.lineWidth = 1.5;
      ctx.setLineDash([8, 8]);
      ctx.beginPath(); ctx.ellipse(0, 0, 270, 116, 0, 0, Math.PI * 2); ctx.stroke();
      ctx.setLineDash([]);
      for (let i = 0; i < 4; i++) {
        ctx.strokeStyle = i % 2 ? "rgba(157,140,255,.25)" : "rgba(86,225,255,.18)";
        ctx.beginPath(); ctx.ellipse(0, 0, 176 + i * 28, 76 + i * 12, 0, 0, Math.PI * 2); ctx.stroke();
      }
      const a = t;
      const sx = Math.cos(a) * 270;
      const sy = Math.sin(a) * 116;
      ctx.translate(sx, sy);
      ctx.rotate(.48 + a * .17);
      ctx.fillStyle = text;
      ctx.fillRect(-16, -8, 32, 16);
      ctx.fillStyle = cyan;
      ctx.fillRect(-39, -10, 20, 20);
      ctx.fillRect(19, -10, 20, 20);
      ctx.strokeStyle = violet;
      ctx.beginPath(); ctx.moveTo(0, -8); ctx.lineTo(0, -25); ctx.lineTo(8, -31); ctx.stroke();
      ctx.restore();

      for (let i = 0; i < 36; i++) {
        const angle = i * .73 + t * .06;
        const radius = 190 + (i % 7) * 28;
        const x = cx + Math.cos(angle) * radius;
        const y = cy + Math.sin(angle * 1.08) * radius * .68;
        ctx.fillStyle = i % 4 ? "rgba(157,176,199,.3)" : "rgba(86,225,255,.62)";
        ctx.beginPath(); ctx.arc(x, y, i % 5 === 0 ? 1.7 : 1, 0, Math.PI * 2); ctx.fill();
      }
      t += .006;
      animation = requestAnimationFrame(draw);
    }
    draw();
    document.addEventListener("visibilitychange", () => {
      if (document.hidden) cancelAnimationFrame(animation); else draw();
    });
  }

  let releasePhase = "all";
  let releaseQuery = "";

  function renderPhaseSummary() {
    const host = $("#phaseSummary");
    host.innerHTML = window.OSML_PHASES.map(phase => {
      const count = window.OSML_RELEASES.filter(r => r.phase === phase.id).length;
      const color = phaseColors[phase.id];
      return `<button class="phase-card" type="button" data-phase="${phase.id}" style="--phase-color:${color}">
        <span>${phase.range} · ${count} releases</span>
        <strong>${phase.label}</strong>
        <p>${phase.description}</p>
      </button>`;
    }).join("");
    $$(".phase-card", host).forEach(card => card.addEventListener("click", () => {
      releasePhase = card.dataset.phase;
      syncPhaseButtons();
      renderReleases();
      $("#releaseGrid").scrollIntoView({ behavior: "smooth", block: "start" });
    }));
  }

  function renderPhaseFilters() {
    const host = $("#phaseFilters");
    const options = [{ id: "all", label: "All releases" }, ...window.OSML_PHASES.map(p => ({ id: p.id, label: p.label }))];
    host.innerHTML = options.map(p => `<button class="filter-button${p.id === "all" ? " active" : ""}" type="button" data-phase="${p.id}">${p.label}</button>`).join("");
    $$("button", host).forEach(button => button.addEventListener("click", () => {
      releasePhase = button.dataset.phase;
      syncPhaseButtons();
      renderReleases();
    }));
  }

  function syncPhaseButtons() {
    $$("#phaseFilters button").forEach(b => b.classList.toggle("active", b.dataset.phase === releasePhase));
  }

  function renderReleases() {
    const query = releaseQuery.toLowerCase().trim();
    const matches = window.OSML_RELEASES.filter(r => {
      const inPhase = releasePhase === "all" || r.phase === releasePhase;
      const searchable = [r.version, r.title, r.summary, ...r.features, ...r.tags].join(" ").toLowerCase();
      return inPhase && (!query || searchable.includes(query));
    });
    const host = $("#releaseGrid");
    host.innerHTML = matches.map(r => {
      const color = phaseColors[r.phase];
      const phase = window.OSML_PHASES.find(p => p.id === r.phase);
      return `<button class="release-card" type="button" data-version="${r.version}" style="--accent:${color}">
        <div class="release-card-top"><span class="version-badge">v${r.version}</span><time datetime="${r.date}">${r.date}</time>${r.patch ? '<span class="patch-badge">patch</span>' : ""}</div>
        <h3>${r.title}</h3>
        <p>${r.summary}</p>
        <div class="tag-list">${r.tags.slice(0,4).map(tag => `<span>${tag}</span>`).join("")}</div>
        <div class="release-card-footer"><span>${phase.label}</span><b>Inspect release →</b></div>
      </button>`;
    }).join("");
    $("#releaseEmpty").hidden = matches.length > 0;
    $$(".release-card", host).forEach(card => card.addEventListener("click", () => openRelease(card.dataset.version)));
  }

  function openRelease(version) {
    const r = window.OSML_RELEASES.find(item => item.version === version);
    const phase = window.OSML_PHASES.find(p => p.id === r.phase);
    const color = phaseColors[r.phase];
    const actions = [];
    if (r.demo) actions.push(`<a href="${r.demo}" target="_blank" rel="noopener">Open generated dashboard ↗</a>`);
    actions.push(`<a href="#architecture" data-dialog-close>View architecture</a>`);
    $("#dialogContent").innerHTML = `
      <div class="dialog-hero" style="--dialog-image:linear-gradient(to top, var(--surface-solid), transparent 90%), url('assets/images/${r.image}');--dialog-color:${color}"><span class="dialog-version">v${r.version}</span></div>
      <div class="dialog-body" style="--dialog-color:${color}">
        <p class="kicker">${phase.label} · ${r.date}</p>
        <h2 id="dialogTitle">${r.title}</h2>
        <p class="dialog-summary">${r.summary}</p>
        <div class="dialog-columns">
          <div><h3>Capabilities</h3><ul>${r.features.map(item => `<li>${item}</li>`).join("")}</ul></div>
          <div><h3>Retained evidence</h3><ul>${r.evidence.map(item => `<li>${item}</li>`).join("")}</ul></div>
        </div>
        <div class="tag-list">${r.tags.map(tag => `<span>${tag}</span>`).join("")}</div>
        <div class="dialog-actions">${actions.join("")}</div>
      </div>`;
    const dialog = $("#releaseDialog");
    dialog.showModal();
    $$('[data-dialog-close]', dialog).forEach(a => a.addEventListener("click", () => dialog.close()));
  }

  function initReleaseExplorer() {
    renderPhaseFilters();
    renderPhaseSummary();
    renderReleases();
    $("#releaseSearch").addEventListener("input", event => {
      releaseQuery = event.target.value;
      renderReleases();
    });
    $("#dialogClose").addEventListener("click", () => $("#releaseDialog").close());
    $("#releaseDialog").addEventListener("click", event => {
      if (event.target === event.currentTarget) event.currentTarget.close();
    });
  }

  function renderArchitecture(selected = architectureLayers[0].id) {
    const stack = $("#architectureStack");
    stack.innerHTML = architectureLayers.map(layer => `<button class="architecture-layer${layer.id === selected ? " active" : ""}" type="button" role="tab" aria-selected="${layer.id === selected}" data-layer="${layer.id}" style="--layer-color:${layer.color}"><span class="layer-number">${layer.number}</span><span><strong>${layer.title}</strong><span>${layer.short}</span></span><b>›</b></button>`).join("");
    $$("button", stack).forEach(button => button.addEventListener("click", () => renderArchitecture(button.dataset.layer)));
    const layer = architectureLayers.find(item => item.id === selected);
    $("#architectureDetail").style.setProperty("--detail-color", layer.color);
    $("#architectureDetail").innerHTML = `<span class="detail-index">${layer.number} · SYSTEM LAYER</span><h3>${layer.title}</h3><p>${layer.description}</p><div class="capability-list">${layer.capabilities.map(([name, desc]) => `<div class="capability-item"><strong>${name}</strong><span>${desc}</span></div>`).join("")}</div><div class="detail-releases">${layer.releases.map(v => `<span>${v}</span>`).join("")}</div>`;
  }

  function renderGallery(filter = "all") {
    const host = $("#evidenceGrid");
    const items = filter === "all" ? evidence : evidence.filter(item => item.phase === filter);
    host.innerHTML = items.map((item, index) => `<button class="evidence-card" type="button" data-evidence="${evidence.indexOf(item)}"><div class="evidence-image-wrap"><img src="assets/images/${item.image}" alt="${item.title}" loading="lazy"></div><div class="evidence-caption"><span>${item.version}</span><strong>${item.title}</strong></div></button>`).join("");
    $$(".evidence-card", host).forEach(card => card.addEventListener("click", () => openLightbox(evidence[Number(card.dataset.evidence)])));
  }

  function initEvidence() {
    const filterHost = $("#galleryFilters");
    const options = [{ id: "all", label: "All evidence" }, ...window.OSML_PHASES.map(p => ({ id: p.id, label: p.label }))];
    filterHost.innerHTML = options.map((p, i) => `<button class="filter-button${i === 0 ? " active" : ""}" type="button" data-gallery-phase="${p.id}">${p.label}</button>`).join("");
    $$("button", filterHost).forEach(button => button.addEventListener("click", () => {
      $$("button", filterHost).forEach(b => b.classList.remove("active"));
      button.classList.add("active");
      renderGallery(button.dataset.galleryPhase);
    }));
    renderGallery();
    $("#dashboardLinks").innerHTML = dashboards.map(([label, href]) => `<a class="dashboard-link" href="${href}" target="_blank" rel="noopener">${label}<span>↗</span></a>`).join("");
    $("#lightboxClose").addEventListener("click", () => $("#lightbox").close());
    $("#lightbox").addEventListener("click", event => {
      if (event.target === event.currentTarget) event.currentTarget.close();
    });
  }

  function openLightbox(item) {
    $("#lightboxImage").src = `assets/images/${item.image}`;
    $("#lightboxImage").alt = item.title;
    $("#lightboxTitle").textContent = `${item.version} · ${item.title}`;
    $("#lightboxCaption").textContent = item.caption;
    $("#lightbox").showModal();
  }

  function renderSkills() {
    const colors = ["#56e1ff", "#71c9ff", "#77ddb8", "#ffca6b", "#ff9d75", "#ffb46b", "#9d8cff", "#62e6a5", "#ff7ca8"];
    $("#skillsGrid").innerHTML = skills.map(([icon, title, description, tags], index) => `<article class="skill-card" style="--skill-color:${colors[index]}"><div class="skill-icon">${icon}</div><h3>${title}</h3><p>${description}</p><div class="skill-tags">${tags.map(tag => `<span>${tag}</span>`).join("")}</div></article>`).join("");
  }

  let missionData = null;
  let missionIndex = 0;
  let playTimer = null;

  async function loadMissionData() {
    try {
      const response = await fetch("assets/data/mission-control.json");
      if (!response.ok) throw new Error(`HTTP ${response.status}`);
      missionData = await response.json();
      const max = missionData.series.elapsed_hours.length - 1;
      $("#missionSlider").max = String(max);
      $("#missionName").textContent = missionData.mission.name;
      $("#missionRelease").textContent = `dataset v${missionData.mission.release}`;
      $("#deliveryKpi").textContent = `${missionData.kpis.telemetry_delivery_percent.toFixed(2)}%`;
      $("#imagesKpi").textContent = String(missionData.kpis.captured_images);
      $("#contactsKpi").textContent = String(missionData.kpis.contacts);
      $("#watchdogKpi").textContent = String(missionData.kpis.watchdog_resets);
      $("#timelineEnd").textContent = `Day ${Math.ceil(missionData.mission.duration_hours / 24)}`;
      updateMission(0);
    } catch (error) {
      $("#missionName").textContent = "Mission dataset unavailable";
      $("#eventList").innerHTML = `<p class="loading">Serve this directory with a local HTTP server or GitHub Pages so the JSON dataset can load. ${error.message}</p>`;
    }
  }

  function updateMission(index) {
    if (!missionData) return;
    const s = missionData.series;
    missionIndex = Math.max(0, Math.min(Number(index), s.elapsed_hours.length - 1));
    $("#missionSlider").value = String(missionIndex);
    const elapsed = s.elapsed_hours[missionIndex];
    const day = Math.floor(elapsed / 24) + 1;
    const hour = Math.floor(elapsed % 24);
    const minute = Math.round((elapsed - Math.floor(elapsed)) * 60);
    $("#snapshotTime").textContent = `D${String(day).padStart(2,"0")} ${String(hour).padStart(2,"0")}:${String(minute).padStart(2,"0")}`;
    $("#socValue").textContent = `${s.soc_percent[missionIndex].toFixed(1)}%`;
    $("#storageValue").textContent = `${s.storage_mb[missionIndex].toFixed(1)} MB`;
    $("#pointingValue").textContent = `${s.pointing_error_deg[missionIndex].toFixed(2)}°`;
    $("#linkValue").textContent = `${s.link_margin_db[missionIndex].toFixed(1)} dB`;
    $("#powerMode").textContent = s.power_mode[missionIndex];
    $("#fswState").textContent = s.fsw_state[missionIndex];
    $("#socMeter").style.width = `${Math.max(0, Math.min(100, s.soc_percent[missionIndex]))}%`;
    const maxStorage = Math.max(...s.storage_mb);
    $("#storageMeter").style.width = `${maxStorage ? (s.storage_mb[missionIndex] / maxStorage) * 100 : 0}%`;
    updateEvents(elapsed);
    drawTelemetry();
  }

  function eventElapsedHours(event) {
    const raw = event.elapsed_hours ?? event.start_elapsed_hours ?? event.time_hours;
    if (Number.isFinite(Number(raw))) return Number(raw);
    const time = event.timestamp_utc || event.start_utc || event.time_utc;
    if (time) return (new Date(time) - new Date(missionData.mission.start_utc)) / 3.6e6;
    return 0;
  }

  function normalizeEvents() {
    if (!missionData) return [];
    const groups = [
      [missionData.alarms || [], "Alarm"],
      [missionData.passes || [], "Ground pass"],
      [missionData.commands || [], "Command"],
      [missionData.imaging || [], "Imaging"],
      [missionData.operations || [], "Operation"]
    ];
    const out = [];
    groups.forEach(([items, fallback]) => items.forEach(item => {
      const elapsed = eventElapsedHours(item);
      out.push({
        elapsed,
        title: item.title || item.alarm_name || item.event_type || item.command || item.operation || item.target || fallback,
        detail: item.message || item.description || item.status || item.recommended_action || item.station || item.result || fallback
      });
    }));
    return out.sort((a,b) => a.elapsed - b.elapsed);
  }

  let normalizedEvents = [];
  function updateEvents(elapsed) {
    if (!normalizedEvents.length) normalizedEvents = normalizeEvents();
    const nearby = normalizedEvents
      .map(event => ({ ...event, distance: Math.abs(event.elapsed - elapsed) }))
      .sort((a,b) => a.distance - b.distance)
      .slice(0, 5)
      .sort((a,b) => a.elapsed - b.elapsed);
    $("#eventList").innerHTML = nearby.map(event => {
      const day = Math.floor(event.elapsed / 24) + 1;
      const hour = Math.floor(event.elapsed % 24);
      return `<article class="event-item"><time>D${String(day).padStart(2,"0")} ${String(hour).padStart(2,"0")}:00</time><strong>${escapeHtml(String(event.title))}</strong><p>${escapeHtml(String(event.detail))}</p></article>`;
    }).join("");
  }

  function drawTelemetry() {
    if (!missionData) return;
    const canvas = $("#telemetryChart");
    const rect = canvas.getBoundingClientRect();
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const width = Math.max(300, Math.round(rect.width * dpr));
    const height = Math.max(240, Math.round(rect.height * dpr));
    if (canvas.width !== width || canvas.height !== height) { canvas.width = width; canvas.height = height; }
    const ctx = canvas.getContext("2d");
    const styles = getComputedStyle(document.documentElement);
    const line = styles.getPropertyValue("--line-strong").trim();
    const muted = styles.getPropertyValue("--dim").trim();
    const cyan = styles.getPropertyValue("--cyan").trim();
    const violet = styles.getPropertyValue("--violet").trim();
    ctx.clearRect(0,0,width,height);
    const pad = { l: 48*dpr, r: 18*dpr, t: 18*dpr, b: 32*dpr };
    const plotW = width - pad.l - pad.r;
    const plotH = height - pad.t - pad.b;
    ctx.strokeStyle = line; ctx.fillStyle = muted; ctx.lineWidth = 1*dpr; ctx.font = `${10*dpr}px sans-serif`;
    for (let i=0;i<=4;i++) {
      const y = pad.t + plotH * i/4;
      ctx.beginPath(); ctx.moveTo(pad.l,y); ctx.lineTo(width-pad.r,y); ctx.stroke();
      ctx.fillText(String(100 - i*25), 10*dpr, y+3*dpr);
    }
    const s = missionData.series;
    const n = s.elapsed_hours.length;
    const maxStorage = Math.max(...s.storage_mb) || 1;
    function path(values, scale, color) {
      ctx.beginPath();
      for (let i=0;i<n;i++) {
        const x = pad.l + plotW * i/(n-1);
        const y = pad.t + plotH * (1 - scale(values[i]));
        if (i===0) ctx.moveTo(x,y); else ctx.lineTo(x,y);
      }
      ctx.strokeStyle = color; ctx.lineWidth = 2*dpr; ctx.stroke();
    }
    path(s.soc_percent, v => Math.max(0,Math.min(1,v/100)), cyan);
    path(s.storage_mb, v => Math.max(0,Math.min(1,v/maxStorage)), violet);
    const cursorX = pad.l + plotW * missionIndex/(n-1);
    ctx.strokeStyle = "rgba(255,255,255,.55)"; ctx.lineWidth = 1*dpr; ctx.setLineDash([5*dpr,5*dpr]);
    ctx.beginPath(); ctx.moveTo(cursorX,pad.t); ctx.lineTo(cursorX,pad.t+plotH); ctx.stroke(); ctx.setLineDash([]);
    [
      [s.soc_percent[missionIndex]/100, cyan],
      [s.storage_mb[missionIndex]/maxStorage, violet]
    ].forEach(([value,color]) => {
      const y = pad.t + plotH * (1-value);
      ctx.fillStyle = color; ctx.beginPath(); ctx.arc(cursorX,y,4*dpr,0,Math.PI*2); ctx.fill();
    });
    const days = Math.ceil(missionData.mission.duration_hours/24);
    ctx.fillStyle = muted;
    for (let d=0; d<days; d++) {
      const x = pad.l + plotW * d/(days-1 || 1);
      ctx.fillText(`D${d+1}`, x-7*dpr, height-9*dpr);
    }
  }

  function initMission() {
    $("#missionSlider").addEventListener("input", event => updateMission(event.target.value));
    $("#playMission").addEventListener("click", () => {
      const button = $("#playMission");
      if (playTimer) {
        clearInterval(playTimer); playTimer = null; button.textContent = "▶ Play replay"; return;
      }
      button.textContent = "❚❚ Pause replay";
      playTimer = setInterval(() => {
        if (!missionData) return;
        const next = missionIndex + Math.max(1, Math.floor(missionData.series.elapsed_hours.length / 420));
        if (next >= missionData.series.elapsed_hours.length) {
          clearInterval(playTimer); playTimer = null; button.textContent = "▶ Play replay"; updateMission(0);
        } else updateMission(next);
      }, 45);
    });
    window.addEventListener("resize", debounce(drawTelemetry, 120));
    loadMissionData();
  }

  function initCopy() {
    const commands = `git add .\ngit commit -m "Add OpenSat portfolio site"\ngit push origin main`;
    $("#copyCommands").addEventListener("click", async () => {
      try {
        await navigator.clipboard.writeText(commands);
        $("#copyCommands").textContent = "Copied";
      } catch {
        $("#copyCommands").textContent = "Copy unavailable";
      }
      setTimeout(() => $("#copyCommands").textContent = "Copy commands", 1600);
    });
  }

  function escapeHtml(value) {
    return value.replace(/[&<>'"]/g, char => ({"&":"&amp;","<":"&lt;",">":"&gt;","'":"&#39;",'"':"&quot;"}[char]));
  }

  function debounce(fn, wait) {
    let timer;
    return (...args) => { clearTimeout(timer); timer = setTimeout(() => fn(...args), wait); };
  }

  initTheme();
  initMenu();
  initReveal();
  initCounters();
  initOrbit();
  initReleaseExplorer();
  renderArchitecture();
  initEvidence();
  renderSkills();
  initMission();
  initCopy();
})();
