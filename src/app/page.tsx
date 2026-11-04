"use client";

import { useState } from "react";
import {
  ArrowRight,
  CalendarDays,
  ChevronDown,
  Compass,
  Flower2,
  Globe2,
  Heart,
  Menu,
  MoonStar,
  Sparkles,
  Star,
  Sun,
  X,
} from "lucide-react";

const features = [
  {
    icon: Compass,
    title: "Birth chart",
    description: "A traditional South Indian style Rasi chart, based on your birth details.",
    tag: "Jathakam",
  },
  {
    icon: Heart,
    title: "Marriage matching",
    description: "Explore traditional porutham factors for two birth charts.",
    tag: "Porutham",
  },
  {
    icon: CalendarDays,
    title: "Panchangam",
    description: "A daily guide to tithi, nakshatra, yoga and karana.",
    tag: "Daily almanac",
  },
  {
    icon: MoonStar,
    title: "Rasi & nakshatra",
    description: "Learn about the twelve rasis and twenty-seven nakshatras.",
    tag: "Know your stars",
  },
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [name, setName] = useState("");
  const [birthDate, setBirthDate] = useState("");
  const [birthTime, setBirthTime] = useState("");
  const [birthPlace, setBirthPlace] = useState("");
  const [language, setLanguage] = useState("English");
  const [submitted, setSubmitted] = useState(false);

  function submitBirthDetails(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <main>
      <div className="announcement">
        <Sparkles size={14} /> Rooted in tradition. Made for today.
      </div>

      <header className="site-header">
        <a className="brand" href="#" aria-label="Jyotisha home">
          <span className="brand-mark"><Sun size={23} /></span>
          <span>jyotisha<span className="brand-dot">.</span><small>VEDIC ASTROLOGY</small></span>
        </a>
        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
          {menuOpen ? <X /> : <Menu />}
        </button>
        <nav className={menuOpen ? "nav-links open" : "nav-links"}>
          <a href="#features" onClick={() => setMenuOpen(false)}>Explore</a>
          <a href="#birth-chart" onClick={() => setMenuOpen(false)}>Birth chart</a>
          <a href="#about" onClick={() => setMenuOpen(false)}>Our approach</a>
          <a className="nav-cta" href="#birth-chart" onClick={() => setMenuOpen(false)}>Get started <ArrowRight size={15} /></a>
        </nav>
      </header>

      <section className="hero">
        <div className="hero-glow" />
        <div className="hero-copy">
          <div className="eyebrow"><span /> THE WISDOM OF THE STARS</div>
          <h1>Find your place<br />in the <em>cosmos.</em></h1>
          <p className="hero-lead">
            Discover the timeless insights of South Indian Vedic astrology.
            A thoughtful space to explore your stars, your path and your possibilities.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="#birth-chart">Explore your birth chart <ArrowRight size={17} /></a>
            <a className="text-link" href="#features">Discover astrology <span>↗</span></a>
          </div>
          <div className="hero-note"><span className="note-stars">✦ ✧ ✦</span> Tradition, interpreted with care</div>
        </div>
        <div className="cosmos-art" aria-label="Decorative celestial illustration">
          <div className="orbit orbit-one" />
          <div className="orbit orbit-two" />
          <div className="orbit orbit-three" />
          <div className="sun-disc"><Sun size={92} strokeWidth={0.8} /></div>
          <span className="planet planet-one" />
          <span className="planet planet-two" />
          <span className="planet planet-three" />
          <span className="constellation c-one">✧</span>
          <span className="constellation c-two">✦</span>
          <span className="constellation c-three">✧</span>
          <span className="art-caption">ANCIENT KNOWLEDGE · TIMELESS SKY</span>
        </div>
        <div className="hero-bottom"><span>01 / 04</span><span className="bottom-line" /><span>THE JOURNEY BEGINS</span></div>
      </section>

      <section className="trust-strip">
        <div><Star size={16} /><span>South Indian chart tradition</span></div>
        <div><Globe2 size={16} /><span>Designed for five languages</span></div>
        <div><Flower2 size={16} /><span>Ancient wisdom, clear guidance</span></div>
      </section>

      <section className="section features-section" id="features">
        <div className="section-heading">
          <div className="eyebrow dark"><span /> EXPLORE THE TRADITIONS</div>
          <h2>Ancient wisdom.<br /><em>Personal meaning.</em></h2>
          <p>Start with the foundations of Jyotisha and explore the traditions that have guided generations.</p>
        </div>
        <div className="feature-grid">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <article className="feature-card" key={feature.title}>
                <div className="feature-top"><span>0{index + 1}</span><Icon size={23} /></div>
                <div className="feature-tag">{feature.tag}</div>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
                <a href="#birth-chart" aria-label={`Explore ${feature.title}`}>Explore <ArrowRight size={15} /></a>
              </article>
            );
          })}
        </div>
      </section>

      <section className="birth-section" id="birth-chart">
        <div className="birth-decoration"><MoonStar size={150} strokeWidth={0.6} /></div>
        <div className="birth-intro">
          <div className="eyebrow"><span /> YOUR JOURNEY, YOUR SKY</div>
          <h2>Every birth has<br />a <em>story to tell.</em></h2>
          <p>Enter your birth details to begin. Accurate chart generation will be connected to a verified Vedic astrology calculation engine in the next development stage.</p>
          <div className="birth-points">
            <span><Star size={14} /> South Indian Rasi layout</span>
            <span><Star size={14} /> Traditional chart preferences</span>
            <span><Star size={14} /> Your details stay in this demo form</span>
          </div>
        </div>
        <form className="birth-form" onSubmit={submitBirthDetails}>
          <div className="form-heading"><span>01</span><div><h3>Birth details</h3><p>Begin with the details below</p></div></div>
          <label>Full name<input required value={name} onChange={(e) => setName(e.target.value)} placeholder="Enter your name" /></label>
          <div className="form-row">
            <label>Date of birth<input required type="date" value={birthDate} onChange={(e) => setBirthDate(e.target.value)} /></label>
            <label>Time of birth<input required type="time" value={birthTime} onChange={(e) => setBirthTime(e.target.value)} /></label>
          </div>
          <label>Place of birth<input required value={birthPlace} onChange={(e) => setBirthPlace(e.target.value)} placeholder="City, state, country" /></label>
          <label>Preferred language
            <span className="select-wrap"><select value={language} onChange={(e) => setLanguage(e.target.value)}>
              <option>English</option><option>తెలుగు</option><option>தமிழ்</option><option>ಕನ್ನಡ</option><option>മലയാളം</option>
            </select><ChevronDown size={16} /></span>
          </label>
          <button className="button button-gold" type="submit">Continue <ArrowRight size={17} /></button>
          {submitted && <p className="form-success" role="status">Thanks, {name}. Your details have been entered in this demo. Chart calculation is not connected yet.</p>}
          <p className="privacy-note">Demo only — details are not sent to a server or saved.</p>
        </form>
      </section>

      <section className="section about-section" id="about">
        <div className="about-symbol"><Sun size={35} /></div>
        <div><div className="eyebrow dark"><span /> OUR APPROACH</div><h2>Respect for tradition.<br /><em>Clarity for today.</em></h2></div>
        <p>Jyotisha is a learning and exploration space inspired by South Indian Vedic astrology. Our goal is to make traditional concepts easier to understand while being transparent about the methods and calculations used.</p>
      </section>

      <footer className="site-footer">
        <a className="brand footer-brand" href="#"><span className="brand-mark"><Sun size={21} /></span><span>jyotisha<span className="brand-dot">.</span><small>VEDIC ASTROLOGY</small></span></a>
        <p>Made with respect for the traditions of Jyotisha.</p>
        <span>© {new Date().getFullYear()} Jyotisha</span>
      </footer>
    </main>
  );
}