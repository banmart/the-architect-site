import Image from "next/image";
import Link from "next/link";

export default function HomePage() {
  return (
    <>
      <section className="hero">
        <Image
          src="/architect-white-room.png"
          alt="The Architect"
          fill
          priority
          style={{ objectFit: "cover" }}
        />
        <div className="heroOverlay" />
        <div className="heroContent">
          <h1 className="h1">THE ARCHITECT</h1>
          <p className="sub">Design the systems intelligence operates within.</p>
          <p className="p" style={{ margin: "18px auto 0", maxWidth: 860 }}>
            AI doesn&apos;t fail because models are weak. It fails because roles are poorly designed.
            The Architect forges production-ready system roles with explicit authority, enforceable constraints,
            and tested failure modes — so behavior holds under pressure, not just demos.
          </p>

          <div className="ctaRow">
            <a className="btn btnSolid" href="#forge">Design a Role</a>
            <Link className="btn" href="/protocol">Read the Protocol</Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="kicker">Why</div>
          <h2 className="h2">Most failures are design failures.</h2>
          <p className="p">
            Vague authority. Conflicting instructions. Missing refusal logic. Untested edge cases.
            That works until the system is stressed, misused, or scaled. The Architect exists to eliminate ambiguity before deployment.
          </p>

          <div className="grid2">
            <div className="card">
              <div className="cardTitle">What The Architect produces</div>
              <ul className="bul">
                <li>Role identity & authority</li>
                <li>Enforceable operational directives</li>
                <li>Domain protocol (step-by-step methodology)</li>
                <li>Strategic philosophy (tradeoff logic)</li>
                <li>Execution standards (quality gates)</li>
                <li>Strict response format</li>
              </ul>
            </div>
            <div className="card">
              <div className="cardTitle">What it refuses to be</div>
              <ul className="bul">
                <li>No role-play</li>
                <li>No prompt hacks</li>
                <li>No untestable advice</li>
                <li>No silent failure modes</li>
                <li>No personality imitation</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="section" id="forge">
        <div className="container">
          <div className="kicker">Forge</div>
          <h2 className="h2">Design a role (demo stub)</h2>
          <p className="p">
            This starter site is wired for content and visuals. Next step is connecting this CTA to your forge endpoint
            (e.g. <span className="mono">POST /architect/forge</span>) and rendering the generated system prompt.
          </p>
          <hr className="sep" />
          <div className="card">
            <div className="cardTitle">Quick demo flow</div>
            <ol className="bul">
              <li>User describes the role they need.</li>
              <li>Architect returns a deployable system prompt.</li>
              <li>User refines: add constraints, change risk profile, adjust strictness.</li>
            </ol>
            <p className="small" style={{ marginTop: 12 }}>
              Want to show a public example first? Start with the{" "}
              <Link href="/roles/system-support" style={{ textDecoration: "underline" }}>
                System Support Operator
              </Link>.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="kicker">Under the hood</div>
          <div className="banner">
            <Image
              src="/architect-monitors.png"
              alt="System oversight"
              fill
              style={{ objectFit: "cover" }}
            />
            <div className="bannerOverlay" />
            <div className="bannerContent">
              <div>
                <div style={{ fontSize: 26, fontWeight: 600, marginBottom: 10 }}>
                  Designed for adversarial reality.
                </div>
                <div className="small" style={{ color: "rgba(255,255,255,.9)", maxWidth: 760 }}>
                  Roles are evaluated across controlled variants, stress-tested, and promoted only when they outperform under pressure.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
