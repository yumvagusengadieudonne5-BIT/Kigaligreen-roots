"use client";

import Image from "next/image";
import { type FormEvent, useState } from "react";

const WHATSAPP_NUMBER = "250793093081";
const FACEBOOK_URL = "https://www.facebook.com/kigaligreenroots";
const X_URL = "https://x.com/kigaligreenroots";
const CONTACT_EMAIL = "kigaligreenroots@gmail.com";

function whatsappUrl(message: string) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

function ArrowIcon() {
  return (
    <svg viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <path d="M4 10h12m-5-5 5 5-5 5" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function SocialIcon({ platform }: { platform: "whatsapp" | "facebook" | "x" | "email" }) {
  if (platform === "whatsapp") {
    return (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M20.2 11.7a8.2 8.2 0 0 1-12.1 7.2L3 20l1.2-4.9a8.2 8.2 0 1 1 16-3.4Z" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" />
        <path d="M8.2 7.9c-.3.3-.6.8-.6 1.4 0 1.8 2.4 4.7 4.8 5.7.7.3 1.3.4 1.8.2.4-.2.9-.8 1-1.2l-.1-.4-1.8-.9-.4.1-.7.8c-1-.4-2.1-1.4-2.5-2.4l.6-.7v-.4l-.8-1.9-.4-.2h-.9Z" fill="currentColor" />
      </svg>
    );
  }

  if (platform === "facebook") {
    return (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M13.5 21v-7.3H16l.4-3h-2.9V8.8c0-.9.3-1.5 1.5-1.5h1.5V4.6c-.7-.1-1.5-.2-2.4-.2-2.5 0-4.2 1.5-4.2 4.3v2H7.1v3h2.8V21h3.6Z" fill="currentColor" />
      </svg>
    );
  }

  if (platform === "x") {
    return (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M18.9 2H22l-6.8 7.8L23.2 22h-6.3L12 14.6 5.6 22H2.5l7.3-8.4L1.8 2h6.4l4.4 6.8L18.9 2Zm-1.1 18h1.7L7.3 3.9H5.6l12.2 16.1Z" fill="currentColor" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect x="3" y="5" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="1.7" />
      <path d="m4 7 8 6 8-6" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function LeafIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M20.5 3.5C12.2 4 6.7 6.7 4.5 11.4 2.8 15 4 19 4 19s4 .8 7.6-1.6C16.2 14.4 19.5 9.5 20.5 3.5Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M4.5 19c3.1-4.1 6.8-7.5 11.4-10.4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

function BenefitIcon({ kind }: { kind: "air" | "people" | "skills" }) {
  if (kind === "air") {
    return (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="1.4" />
        <path d="M12 2.5v3m0 13v3m9.5-9.5h-3m-13 0h-3m16.2-6.7-2.1 2.1m-9.2 9.2-2.1 2.1m13.4 0-2.1-2.1m-9.2-9.2L5.3 5.3" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
      </svg>
    );
  }

  if (kind === "people") {
    return (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <circle cx="9" cy="8" r="3" stroke="currentColor" strokeWidth="1.4" />
        <path d="M3.5 19v-1.5a5.5 5.5 0 0 1 11 0V19m2-8a3 3 0 1 0 0-6m1 8a4.5 4.5 0 0 1 3 4.2V19" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M12 21v-9m0 5c-4.4 0-7-2.8-7-7 4.4 0 7 2.8 7 7Zm0-3c0-4.4 2.8-7 7-7 0 4.4-2.8 7-7 7Z" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function ActivityIcon({ kind }: { kind: "tree" | "garden" | "care" }) {
  if (kind === "tree") {
    return (
      <svg viewBox="0 0 32 32" fill="none" aria-hidden="true">
        <path d="M16 28V15m0 5C8 20 5 15 5 8c7 0 11 3 11 10Zm0-4c0-7 4-11 11-11 0 7-3 11-11 11Z" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }

  if (kind === "garden") {
    return (
      <svg viewBox="0 0 32 32" fill="none" aria-hidden="true">
        <path d="M16 27V13m0 7c-5.5 0-8.5-3.5-8.5-9 5.5 0 8.5 3.5 8.5 9Zm0-4c0-5.5 3.5-8.5 9-8.5 0 5.5-3.5 8.5-9 8.5ZM8 27h16" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 32 32" fill="none" aria-hidden="true">
      <path d="M16 28S25 21 25 12a9 9 0 1 0-18 0c0 9 9 16 9 16Z" stroke="currentColor" strokeWidth="1.4" />
      <path d="M12 12c1.3 2 3.3 3 6 3" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
    </svg>
  );
}

function EventIcon({ kind }: { kind: "date" | "place" }) {
  if (kind === "date") {
    return (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <rect x="3.5" y="5" width="17" height="16" rx="3" stroke="currentColor" strokeWidth="1.5" />
        <path d="M7.5 3v4m9-4v4m-13 3h17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M19 10c0 5-7 11-7 11S5 15 5 10a7 7 0 1 1 14 0Z" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="12" cy="10" r="2.3" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}

const benefits = [
  {
    kind: "air" as const,
    title: "Cleaner air. Cooler streets.",
    description: "More trees mean more shade and cleaner air for the neighborhoods we call home.",
  },
  {
    kind: "people" as const,
    title: "Good people. Shared purpose.",
    description: "Meet neighbors, students and volunteers who care about our city as much as you do.",
  },
  {
    kind: "skills" as const,
    title: "New skills. Lasting impact.",
    description: "Learn simple gardening and tree-care skills to keep things growing, even at home.",
  },
];

const activities = [
  {
    kind: "tree" as const,
    title: "Tree planting",
    description: "Plant and mulch saplings along streets, at schools and in shared spaces.",
  },
  {
    kind: "garden" as const,
    title: "Urban gardening",
    description: "Grow vegetable and flower beds that bring food and color to our city.",
  },
  {
    kind: "care" as const,
    title: "Tree-care basics",
    description: "Learn to water, stake and care for trees so every new sapling can thrive.",
  },
];

const faqs = [
  {
    question: "Do I need any experience?",
    answer: "Not at all. Our volunteer leads guide every group.",
  },
  {
    question: "What should I bring?",
    answer: "Comfortable shoes and water. We provide gloves, tools and saplings.",
  },
  {
    question: "Who can join, and does it cost anything?",
    answer: "Everyone is welcome — neighbors, students and volunteers. It’s free.",
  },
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openFaqs, setOpenFaqs] = useState<number[]>([0, 1, 2]);
  const [formStatus, setFormStatus] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") ?? "").trim();
    const phone = String(data.get("phone") ?? "").trim();
    const neighborhood = String(data.get("neighborhood") ?? "").trim();
    const focusField = (id: string) => form.querySelector<HTMLInputElement>(`#${id}`)?.focus();

    if (name.length < 2) {
      setFormStatus("Please enter your full name.");
      focusField("full-name");
      return;
    }

    const digits = phone.replace(/\D/g, "");
    if (digits.length < 9 || digits.length > 15) {
      setFormStatus("Please enter a valid phone or WhatsApp number.");
      focusField("phone");
      return;
    }

    if (neighborhood.length < 2) {
      setFormStatus("Please enter your neighborhood.");
      focusField("neighborhood");
      return;
    }

    const message = `Hello Kigali Green Roots,\n\nMy name is ${name}. My phone/WhatsApp number is ${phone}, and I live in ${neighborhood}. I would like to join the next planting day.`;
    setFormStatus("Opening WhatsApp so you can send your sign-up request...");
    window.open(whatsappUrl(message), "_blank", "noopener,noreferrer");
  }

  function toggleFaq(index: number) {
    setOpenFaqs((current) =>
      current.includes(index) ? current.filter((item) => item !== index) : [...current, index],
    );
  }

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <div id="top">
      <a className="skip-link" href="#main">Skip to main content</a>

      <header className="site-header">
        <div className="nav-row page-container">
          <a className="brand" href="#top" aria-label="Kigali Green Roots home" onClick={closeMenu}>
            <LeafIcon />
            <span>kigali green roots</span>
          </a>

          <nav className="desktop-nav" aria-label="Main navigation">
            <a href="#about">About</a>
            <a href="#activities">Activities</a>
            <a href="#next-planting">Next planting</a>
            <a href="#contact">Contact</a>
          </nav>

          <a className="header-cta" href="#signup">
            <span>Join a planting</span>
            <ArrowIcon />
          </a>

          <button
            className="menu-toggle"
            type="button"
            aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span />
            <span />
          </button>
        </div>

        <nav
          className={`mobile-nav${menuOpen ? " is-open" : ""}`}
          id="mobile-navigation"
          aria-label="Mobile navigation"
          aria-hidden={!menuOpen}
        >
          <a href="#about" onClick={closeMenu}>About</a>
          <a href="#activities" onClick={closeMenu}>Activities</a>
          <a href="#next-planting" onClick={closeMenu}>Next planting</a>
          <a href="#contact" onClick={closeMenu}>Contact</a>
        </nav>
      </header>

      <main id="main">
        <section className="hero" aria-labelledby="hero-title">
          <div className="hero-grid page-container">
            <div className="hero-copy">
              <p className="eyebrow">Rooted in Kigali, Rwanda</p>
              <h1 id="hero-title">A greener Kigali<br />starts with us.</h1>
              <p className="hero-lead">
                Plant trees. Meet your neighbors.<br className="desktop-break" />
                Help our city thrive, one Saturday at a time.
              </p>
              <div className="hero-actions">
                <a className="button button-primary" href="#signup">
                  Join the next planting <ArrowIcon />
                </a>
                <a className="text-link" href="#activities">Explore our activities <ArrowIcon /></a>
              </div>
              <p className="hero-note">Everyone welcome. Tools &amp; saplings on us.</p>
              <p className="hero-signoff">Your city. Your environment. Your future.</p>
            </div>

            <div className="hero-art-wrap">
              <Image
                className="hero-art"
                src="/kigali-planting-reference.jpg"
                alt="Kigali neighbors planting a young tree together"
                width={1865}
                height={1910}
                loading="eager"
                sizes="(max-width: 760px) calc(100vw - 40px), (max-width: 1120px) 46vw, 520px"
              />
              <div className="hero-art-caption">
                <LeafIcon />
                <span><small>A little time. A lasting difference.</small><strong>Every second Saturday</strong></span>
              </div>
            </div>
          </div>
        </section>

        <section className="quick-facts" aria-label="Planting day highlights">
          <div className="facts-grid page-container">
            <div><strong>Every 2nd Saturday</strong><span>Make it a monthly habit.</span></div>
            <div><strong>8–11 AM</strong><span>Three hours for a greener city.</span></div>
            <div><strong>Free to join</strong><span>Bring yourself. We’ll bring the rest.</span></div>
          </div>
        </section>

        <section className="about-section section" id="about" aria-labelledby="about-title">
          <div className="page-container">
            <div className="about-intro">
              <div>
                <p className="eyebrow">01 / Why we plant</p>
                <h2 id="about-title">Small roots.<br />Big change.</h2>
              </div>
              <p className="about-summary">
                We’re neighbors growing a greener, healthier Kigali. Together, we turn shared spaces into places that thrive.
              </p>
            </div>

            <div className="benefit-grid">
              {benefits.map((benefit) => (
                <article className="benefit-item" key={benefit.title}>
                  <BenefitIcon kind={benefit.kind} />
                  <h3>{benefit.title}</h3>
                  <p>{benefit.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="activities-section section" id="activities" aria-labelledby="activities-title">
          <div className="page-container">
            <p className="eyebrow">02 / Get your hands in the soil</p>
            <h2 id="activities-title">A little digging. A lot of good.</h2>
            <p className="activities-intro">No experience needed. Our volunteer leads will show you how.</p>

            <ol className="activity-grid">
              {activities.map((activity, index) => (
                <li className="activity-card" key={activity.title}>
                  <div className="activity-card-top">
                    <span>{String(index + 1).padStart(2, "0")}</span>
                    <ActivityIcon kind={activity.kind} />
                  </div>
                  <h3>{activity.title}</h3>
                  <p>{activity.description}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="planting-section section" id="next-planting" aria-labelledby="planting-title">
          <div className="planting-grid page-container">
            <div className="planting-copy">
              <p className="eyebrow">03 / Your next good Saturday</p>
              <h2 id="planting-title">Less scrolling.<br />More growing.</h2>
              <p className="planting-intro">
                Three hours outside. A greener place to call home. Come as you are — we’ll take care of the rest.
              </p>

              <div className="event-details">
                <div className="event-detail">
                  <span className="event-icon"><EventIcon kind="date" /></span>
                  <span><small>When</small><strong>Every second Saturday</strong><span>8:00 AM – 11:00 AM</span></span>
                </div>
                <div className="event-detail">
                  <span className="event-icon"><EventIcon kind="place" /></span>
                  <span><small>Where</small><strong>Kigali Neighborhood Green Zone</strong><span>Kigali, Rwanda</span></span>
                </div>
              </div>

              <p className="bring-note"><strong>Bring:</strong> A water bottle + comfortable shoes</p>
            </div>

            <div className="signup-card">
              <p className="eyebrow">A small step starts here</p>
              <h3>Count me in.</h3>
              <p className="signup-intro">Free to join. Open to everyone.</p>

              <form className="signup-form" id="signup" onSubmit={handleSubmit} noValidate>
                <div className="form-field">
                  <label htmlFor="full-name">Full name</label>
                  <input id="full-name" name="name" type="text" autoComplete="name" placeholder="Your full name" maxLength={100} required />
                </div>
                <div className="form-field">
                  <label htmlFor="phone">Phone / WhatsApp number</label>
                  <input id="phone" name="phone" type="tel" autoComplete="tel" placeholder="+250 7XX XXX XXX" maxLength={25} required />
                </div>
                <div className="form-field">
                  <label htmlFor="neighborhood">Neighborhood</label>
                  <input id="neighborhood" name="neighborhood" type="text" autoComplete="address-level3" placeholder="Your neighborhood in Kigali" maxLength={80} required />
                </div>
                <button className="button button-primary signup-button" type="submit">
                  Join the next planting <ArrowIcon />
                </button>
                <p className="form-status" role="status" aria-live="polite">{formStatus}</p>
              </form>
              <p className="form-footnote">Tools, gloves &amp; saplings provided. Just bring you.</p>
            </div>
          </div>
        </section>

        <section className="faq-section section" aria-labelledby="faq-title">
          <div className="faq-grid page-container">
            <div className="faq-intro">
              <p className="eyebrow">Good to know</p>
              <h2 id="faq-title">New here?<br />You’re in good company.</h2>
              <div className="faq-chat">
                <span>Still have a question?</span>
                <a href={whatsappUrl("Hello Kigali Green Roots, I have a question about joining a planting day.")} target="_blank" rel="noopener noreferrer">
                  Let’s chat on WhatsApp <ArrowIcon />
                </a>
              </div>
            </div>

            <div className="faq-list">
              {faqs.map((faq, index) => {
                const isOpen = openFaqs.includes(index);
                return (
                  <div className="faq-item" key={faq.question}>
                    <button
                      type="button"
                      aria-expanded={isOpen}
                      aria-controls={`faq-answer-${index}`}
                      onClick={() => toggleFaq(index)}
                    >
                      <span>{faq.question}</span><span className="faq-toggle" aria-hidden="true">{isOpen ? "−" : "+"}</span>
                    </button>
                    <p id={`faq-answer-${index}`} hidden={!isOpen}>{faq.answer}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer" id="contact">
        <div className="footer-cta page-container">
          <h2>Let’s grow something good.</h2>
          <a className="button button-light" href={whatsappUrl("Hello Kigali Green Roots, I would like to join the next planting day.")} target="_blank" rel="noopener noreferrer">
            Chat on WhatsApp <ArrowIcon />
          </a>
        </div>

        <div className="footer-main page-container">
          <div className="footer-brand">
            <a className="brand" href="#top"><LeafIcon /><span>kigali green roots</span></a>
            <p>Your city. Your environment. Your future.<br />Growing together, every second Saturday.</p>
            <nav className="social-links" aria-label="Social media and email">
              <a
                className="social-link"
                href={whatsappUrl("Hello Kigali Green Roots! I would like to learn more about your community activities.")}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Chat with Kigali Green Roots on WhatsApp"
                title="WhatsApp"
              >
                <SocialIcon platform="whatsapp" />
              </a>
              <a
                className="social-link"
                href={FACEBOOK_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit Kigali Green Roots on Facebook"
                title="Facebook"
              >
                <SocialIcon platform="facebook" />
              </a>
              <a
                className="social-link"
                href={X_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit Kigali Green Roots on X"
                title="X"
              >
                <SocialIcon platform="x" />
              </a>
              <a
                className="social-link"
                href={`mailto:${CONTACT_EMAIL}`}
                aria-label="Email Kigali Green Roots"
                title="Email"
              >
                <SocialIcon platform="email" />
              </a>
            </nav>
          </div>
          <div className="footer-column">
            <h2>Explore</h2>
            <nav className="footer-links" aria-label="Explore links">
              <a href="#about">About</a>
              <a href="#activities">Activities</a>
              <a href="#next-planting">Next planting</a>
              <a href="#signup">Sign up</a>
            </nav>
          </div>
          <div className="footer-column">
            <h2>Say hello</h2>
            <a href="tel:+250793093081">+250 793 093 081</a>
            <nav className="footer-contact-links" aria-label="Email and social profiles">
              <a href={`mailto:${CONTACT_EMAIL}`}>Email: {CONTACT_EMAIL}</a>
              <a href={X_URL} target="_blank" rel="noopener noreferrer">X / Twitter: @kigaligreenroots</a>
              <a href={FACEBOOK_URL} target="_blank" rel="noopener noreferrer">Facebook: Kigali Green Roots</a>
            </nav>
            <span className="footer-location"><span aria-hidden="true">📍</span> Kigali, Rwanda</span>
          </div>
        </div>

        <div className="footer-bottom page-container">
          <span>© 2026 Kigali Green Roots. All rights reserved.</span>
          <span>A greener Kigali starts with us.</span>
        </div>
      </footer>
    </div>
  );
}
