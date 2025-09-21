// -----------------------------
// src/components/ResponsiveHeaderDemo.tsx
// -----------------------------
import React, { useEffect, useRef, useState } from "react";

const links = [
  { href: "#features", label: "Features" },
  { href: "#pricing", label: "Pricing" },
  { href: "#docs", label: "Docs" },
  { href: "#contact", label: "Contact" },
];

function classNames(...xs: Array<string | false | null | undefined>) {
  return xs.filter(Boolean).join(" ");
}

function useBodyScrollLock(locked: boolean) {
  useEffect(() => {
    const { body } = document;
    const prev = body.style.overflow;
    if (locked) body.style.overflow = "hidden";
    return () => {
      body.style.overflow = prev;
    };
  }, [locked]);
}

function useKeyDown(key: string, handler: (e: KeyboardEvent) => void) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === key) handler(e);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [key, handler]);
}

export default function ResponsiveHeaderDemo() {
  const [open, setOpen] = useState(false);
  const btnRef = useRef<HTMLButtonElement | null>(null);
  const drawerRef = useRef<HTMLDivElement | null>(null);

  useBodyScrollLock(open);
  useKeyDown("Escape", () => setOpen(false));

  useEffect(() => {
    if (!open) return;
    const onClick = (e: MouseEvent) => {
      if (!drawerRef.current) return;
      if (!drawerRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, [open]);

  useEffect(() => {
    if (!open) btnRef.current?.focus();
  }, [open]);

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="sticky top-0 z-40 border-b bg-white/80 backdrop-blur">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <a href="#home" className="font-bold tracking-tight">
              MySite
            </a>
            <nav className="hidden md:flex md:items-center md:gap-6">
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  className="text-sm text-gray-700 hover:text-gray-900"
                >
                  {l.label}
                </a>
              ))}
              <a
                href="#cta"
                className="rounded-lg border border-gray-900 px-3 py-1.5 text-sm font-medium hover:bg-gray-900 hover:text-white"
              >
                Get Started
              </a>
            </nav>
            <button
              ref={btnRef}
              className="md:hidden inline-flex items-center justify-center rounded-md p-2 ring-1 ring-gray-300 hover:bg-gray-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-900"
              aria-controls="mobile-drawer"
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
            >
              <span className="sr-only">Open menu</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-6 w-6"
              >
                <path d="M4 6h16M4 12h16M4 18h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </button>
          </div>
        </div>
      </header>

      <div
        className={classNames(
          "fixed inset-0 z-40 bg-black/40 transition-opacity md:hidden",
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        )}
        aria-hidden="true"
      />

      <aside
        id="mobile-drawer"
        ref={drawerRef}
        className={classNames(
          "fixed inset-y-0 left-0 z-50 w-72 transform bg-white shadow-xl transition-transform md:hidden",
          open ? "translate-x-0" : "-translate-x-full"
        )}
        role="dialog"
        aria-modal="true"
      >
        <div className="flex items-center justify-between border-b p-4">
          <span className="font-semibold">Menu</span>
          <button
            className="inline-flex items-center justify-center rounded-md p-2 ring-1 ring-gray-300 hover:bg-gray-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-900"
            onClick={() => setOpen(false)}
          >
            <span className="sr-only">Close menu</span>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" className="h-6 w-6">
              <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </button>
        </div>
        <nav className="flex flex-col gap-1 p-2">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="rounded-md px-3 py-2 text-base text-gray-800 hover:bg-gray-100"
              onClick={() => setOpen(false)}
            >
              {l.label}
            </a>
          ))}
          <a
            href="#cta"
            className="mt-2 rounded-lg border border-gray-900 px-3 py-2 text-base font-medium hover:bg-gray-900 hover:text-white"
            onClick={() => setOpen(false)}
          >
            Get Started
          </a>
        </nav>
      </aside>

      <main className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <section id="features" className="mb-16">
          <h2 className="mb-4 text-2xl font-bold">Features</h2>
          <p className="text-gray-700">Responsive header with hamburger / top menu / drawer.</p>
        </section>
        <section id="pricing" className="mb-16">
          <h2 className="mb-4 text-2xl font-bold">Pricing</h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {["Free", "Pro", "Enterprise"].map((plan) => (
              <div key={plan} className="rounded-2xl border bg-white p-6 shadow-sm">
                <h3 className="mb-2 text-lg font-semibold">{plan}</h3>
                <p className="text-sm text-gray-600">Lorem ipsum dolor sit amet.</p>
              </div>
            ))}
          </div>
        </section>
        <section id="docs" className="mb-16">
          <h2 className="mb-4 text-2xl font-bold">Docs</h2>
          <p className="text-gray-700">Replace with your project docs.</p>
        </section>
        <section id="contact" className="mb-16">
          <h2 className="mb-4 text-2xl font-bold">Contact</h2>
          <form className="grid max-w-xl grid-cols-1 gap-4">
            <input className="rounded-lg border p-2" placeholder="Your email" />
            <textarea className="rounded-lg border p-2" placeholder="Message" rows={4} />
            <button className="rounded-lg bg-gray-900 px-4 py-2 text-white hover:opacity-90">Send</button>
          </form>
        </section>
      </main>

      <footer className="border-t bg-white">
        <div className="mx-auto max-w-7xl px-4 py-8 text-sm text-gray-600 sm:px-6 lg:px-8">
          © 2025 MySite
        </div>
      </footer>
    </div>
  );
}
