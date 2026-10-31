import React from "react";
import "./styles.css";

const projects = [
  { number: "01", title: "Things I’m building", text: "A collection of experiments, ideas, and projects in progress.", tag: "SELECTED WORK" },
  { number: "02", title: "Notes & learning", text: "Curious by nature. Sharing useful things I learn along the way.", tag: "WRITING" },
  { number: "03", title: "Open source", text: "Small contributions and tools made better by building in public.", tag: "COMMUNITY" },
];

export default function App() {
  return <main>
    <nav className="nav"><a className="brand" href="#top">RS<span>.</span></a><div className="navlinks"><a href="#about">About</a><a href="#work">Work</a><a className="contact-link" href="mailto:hello@ravisheoran.com">Say hello <span>↗</span></a></div></nav>
    <section className="hero" id="top"><div className="eyebrow"><span className="pulse"/> OPEN TO WHAT’S NEXT</div><h1>Making the web<br/>a little <em>more human.</em></h1><p className="intro">Hey, I’m Ravi — a developer who enjoys turning thoughtful ideas into useful, thoughtful experiences.</p><a className="button" href="#work">Explore my work <span>↓</span></a><div className="hero-mark" aria-hidden="true">✳</div></section>
    <section className="about" id="about"><div className="section-label">A LITTLE ABOUT ME <span>01 / 03</span></div><div><h2>Good work starts<br/>with <em>good questions.</em></h2><p>I like getting to the heart of a problem, then making something clear, useful, and a joy to use. This is my corner of the internet to share what I’m working on and what I’m learning.</p></div></section>
    <section className="work" id="work"><div className="section-label">THINGS IN MY ORBIT <span>02 / 03</span></div><div className="project-list">{projects.map(p=><article className="project" key={p.number}><span className="project-num">{p.number}</span><div><span className="tag">{p.tag}</span><h3>{p.title}</h3><p>{p.text}</p></div><span className="arrow">↗</span></article>)}</div></section>
    <footer><div className="section-label">03 / 03 — KEEP IN TOUCH</div><div className="footer-main"><h2>Have a good<br/><em>one in mind?</em></h2><a className="mail" href="mailto:hello@ravisheoran.com">Let’s talk <span>↗</span></a></div><div className="footer-bottom"><span>© 2025 Ravi Sheoran</span><span>MADE WITH CURIOSITY <b>✳</b></span><a href="https://github.com/">GITHUB ↗</a></div></footer>
  </main>;
}
