import Image from "next/image";

export default function ProtocolPage() {
  return (
    <div className="container" style={{ paddingTop: 40, paddingBottom: 90 }}>
      <div className="banner" style={{ minHeight: 340, marginTop: 20 }}>
        <Image
          src="/architect-monitors.png"
          alt="The Architect Protocol"
          fill
          style={{ objectFit: "cover" }}
        />
        <div className="bannerOverlay" />
        <div className="bannerContent">
          <div>
            <div style={{ fontSize: 36, fontWeight: 700, letterSpacing: "-.01em" }}>
              The Architect Protocol
            </div>
            <div className="small" style={{ color: "rgba(255,255,255,.9)", maxWidth: 820 }}>
              How AI system roles are designed to survive contact with reality.
            </div>
          </div>
        </div>
      </div>

      <section className="section" style={{ borderTop: "none", paddingTop: 44 }}>
        <div className="kicker">Purpose</div>
        <h2 className="h2">Design roles that hold under pressure.</h2>
        <p className="p">
          Most AI failures aren&apos;t model failures. They&apos;re design failures: unclear authority, conflicting instructions,
          missing refusal logic, untested edge cases. The Architect exists to eliminate these failures before deployment by treating roles as systems, not personalities.
        </p>
      </section>

      <section className="section">
        <div className="kicker">Layer 0</div>
        <h2 className="h2">The Architect</h2>
        <div className="grid2">
          <div className="card">
            <div className="cardTitle">What it does</div>
            <ul className="bul">
              <li>Designs authority, constraints, and directives</li>
              <li>Defines refusal and escalation logic</li>
              <li>Encodes domain methodology and quality gates</li>
            </ul>
          </div>
          <div className="card">
            <div className="cardTitle">What it refuses</div>
            <ul className="bul">
              <li>Does not execute tasks</li>
              <li>Does not role-play</li>
              <li>Does not imitate personalities</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="kicker">Definition</div>
        <h2 className="h2">What a role is (and is not)</h2>
        <div className="grid2">
          <div className="card">
            <div className="cardTitle">A role is not</div>
            <ul className="bul">
              <li>A personality</li>
              <li>A tone</li>
              <li>A conversational style</li>
              <li>An imitation of a human</li>
            </ul>
          </div>
          <div className="card">
            <div className="cardTitle">A role is</div>
            <ul className="bul">
              <li>Bounded authority</li>
              <li>Enforceable directives</li>
              <li>Decision-making protocol</li>
              <li>Failure-aware system specification</li>
            </ul>
          </div>
        </div>
        <blockquote>
          If a role can fail silently, it is not finished.
        </blockquote>
      </section>

      <section className="section">
        <div className="kicker">Structure</div>
        <h2 className="h2">Canonical role format</h2>
        <div className="card">
          <ol className="bul">
            <li><b>Role Identity &amp; Authority</b> — scope, permissions, prohibitions, escalation.</li>
            <li><b>Operational Directives</b> — numbered rules with precedence and refusal logic.</li>
            <li><b>Domain-Specific Protocol</b> — step-by-step methodology, checks, safeguards.</li>
            <li><b>Strategic Philosophy</b> — optimization targets and tradeoff rules.</li>
            <li><b>Execution Standards</b> — quality gates, disallowed outputs, degradation signals.</li>
            <li><b>Response Format</b> — strict output structure and termination conditions.</li>
          </ol>
        </div>
      </section>

      <section className="section">
        <div className="kicker">Frameworks</div>
        <h2 className="h2">Master Frameworks</h2>
        <p className="p">
          The Architect does not imitate famous people. It embeds Master Frameworks: distilled decision architectures derived from elite performers across disciplines.
          These frameworks encode how experts evaluate tradeoffs and handle uncertainty under pressure — not how they speak.
        </p>
      </section>

      <section className="section">
        <div className="kicker">Evolution</div>
        <h2 className="h2">Controlled variants + telemetry</h2>
        <div className="grid2">
          <div className="card">
            <div className="cardTitle">Variants</div>
            <p className="small">
              Roles ship as families. Variants differ only along explicit axes (reasoning topology, context strategy, framework blend, authority tightness, aggression).
              Random mutation is prohibited.
            </p>
          </div>
          <div className="card">
            <div className="cardTitle">Telemetry</div>
            <p className="small">
              The system measures role behavior, not user content: cost, latency, refusal/fallback activation, and outcome proxies.
              No chain-of-thought storage. Raw user content is not required by default.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="kicker">Philosophy</div>
        <h2 className="h2">Design doctrine</h2>
        <div className="card">
          <p className="p" style={{ margin: 0 }}>
            Precision over vibe. Authority over friendliness. Robustness over novelty.
          </p>
        </div>
      </section>
    </div>
  );
}
