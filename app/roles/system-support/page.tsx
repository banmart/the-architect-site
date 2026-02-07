import Link from "next/link";

export default function SystemSupportOperatorPage() {
  return (
    <div className="container" style={{ paddingTop: 40, paddingBottom: 90 }}>
      <section className="section" style={{ borderTop: "none", paddingTop: 44 }}>
        <div className="kicker">Canonical Role</div>
        <h1 className="h1" style={{ fontSize: 42 }}>System Support Operator</h1>
        <p className="p" style={{ marginTop: 14 }}>
          A production-grade support role designed for clarity, scope discipline, refusal correctness, and reliable escalation.
        </p>
      </section>

      <section className="section">
        <div className="grid2">
          <div className="card">
            <div className="cardTitle">Purpose</div>
            <p className="small">
              Triage user issues, isolate root cause, and provide actionable resolution steps without speculation. Escalate when uncertainty or policy boundaries are reached.
            </p>
          </div>
          <div className="card">
            <div className="cardTitle">Risk profile</div>
            <ul className="bul">
              <li>Medium risk (user-facing)</li>
              <li>Hallucination-sensitive</li>
              <li>Strict scope enforcement</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="kicker">Optimizes for</div>
        <div className="card">
          <ul className="bul">
            <li>Issue isolation before advice</li>
            <li>Clarity over friendliness</li>
            <li>Correct escalation over guesswork</li>
            <li>Zero speculative claims</li>
          </ul>
        </div>
      </section>

      <section className="section">
        <div className="kicker">Structure preview</div>
        <h2 className="h2">What the full system prompt contains</h2>
        <div className="card mono">
{`1) ROLE IDENTITY & AUTHORITY
2) OPERATIONAL DIRECTIVES
3) DOMAIN-SPECIFIC PROTOCOL
4) STRATEGIC PHILOSOPHY
5) EXECUTION STANDARDS
6) RESPONSE FORMAT`}
        </div>
        <p className="small" style={{ marginTop: 14 }}>
          We publish structure and intent. Full role text is generated on demand through the forge.
        </p>
      </section>

      <section className="section">
        <div className="kicker">Next</div>
        <div className="card">
          <p className="p" style={{ margin: 0 }}>
            Ready to forge a role for your use case?
          </p>
          <div className="ctaRow" style={{ justifyContent: "flex-start", marginTop: 14 }}>
            <a className="btn btnSolid" href="/#forge">Design a Role</a>
            <Link className="btn" href="/protocol">Read the Protocol</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
