import "./globals.css";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "The Architect",
  description: "Design the systems intelligence operates within.",
};

function Nav() {
  return (
    <header className="nav">
      <div className="container navInner">
        <Link className="brand" href="/">THE ARCHITECT</Link>
        <nav className="navLinks">
          <Link href="/protocol">Protocol</Link>
          <Link href="/roles/system-support">Canonical Role</Link>
        </nav>
      </div>
    </header>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div>© {new Date().getFullYear()} The Architect. Built for clarity, authority, and survival.</div>
      </div>
    </footer>
  );
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Nav />
        <div className="main">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
