import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  return (
    <nav className="navbar navbar-expand-lg fixed-top py-2 stylish-navbar">
      <div className="container">
        {/* ✅ Logo */}
        <Link className="navbar-brand fw-bold d-flex align-items-center text-white" href="/">
  <div className="logo-bg">
    <Image src="/images/logo.png" alt="3IXL Logo" width={40} height={40} className="rounded-circle" />
  </div>
  3IXL EDUTECH
</Link>


        {/* ✅ Animated Hamburger Menu */}
        <button
          className={`navbar-toggler border-0 ${isOpen ? "toggle-active" : ""}`}
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          aria-controls="navbarNav"
          aria-expanded={isOpen}
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* ✅ Navigation Links */}
        <div className={`collapse navbar-collapse ${isOpen ? "show" : ""}`} id="navbarNav">
          <ul className="navbar-nav ms-auto">
            {[
              { name: "Home", path: "/" },
              { name: "About", path: "/about" },
              { name: "Services", path: "/services" },
              { name: "Courses", path: "/courses" },
              { name: "Contact", path: "/contact" },
            ].map(({ name, path }) => (
              <li className="nav-item" key={path}>
                <Link
                  className={`nav-link ${
                    router.pathname === path ? "active-link" : "text-light"
                  }`}
                  href={path}
                >
                  {name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}
