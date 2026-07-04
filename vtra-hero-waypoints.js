/**
 * VTRA Hero Waypoints — Wix Custom Element
 * Tag name: <vtra-hero-waypoints></vtra-hero-waypoints>
 *
 * Same design as the HTML-embed version, rebuilt as a native custom element.
 * No iframe, no postMessage resize hack — it renders directly in the page,
 * so it loads faster and can never scroll-trap.
 */
class VtraHeroWaypoints extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <link rel="preconnect" href="https://fonts.googleapis.com">
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
      <link href="https://fonts.googleapis.com/css2?family=Archivo:wght@400;500;600;700;800&family=Archivo+Expanded:wght@700;800&display=swap" rel="stylesheet">
      <style>
        :host{
          --terracotta:#C9491C;
          --cream:#F4F0E8;
          --charcoal:#1F1B14;
          --gold:#E8A53A;
          --charcoal-70: rgba(31,27,20,0.7);
          --line: rgba(31,27,20,0.14);
          display:block;
          font-family:'Archivo', sans-serif;
          color:var(--charcoal);
          background:var(--cream);
          -webkit-font-smoothing:antialiased;
        }
        *{box-sizing:border-box;}

        .hero{
          max-width:1240px;
          margin:0 auto;
          padding:72px 32px 88px;
        }

        .eyebrow-top{
          display:flex;
          align-items:center;
          gap:10px;
          justify-content:center;
          margin-bottom:22px;
          opacity:0;
          transform:translateY(10px);
          transition:opacity .6s ease, transform .6s ease;
        }
        .eyebrow-top.in{opacity:1;transform:translateY(0);}
        .eyebrow-top .dot{width:6px;height:6px;border-radius:50%;background:var(--terracotta);}
        .eyebrow-top span{
          font-size:12px;
          letter-spacing:0.22em;
          text-transform:uppercase;
          font-weight:600;
          color:var(--terracotta);
        }

        h1.headline{
          font-family:'Archivo Expanded', 'Archivo', sans-serif;
          font-weight:800;
          text-align:center;
          font-size:clamp(34px, 5.4vw, 64px);
          line-height:1.04;
          letter-spacing:-0.01em;
          margin:0 0 18px;
          color:var(--charcoal);
          opacity:0;
          transform:translateY(16px);
          transition:opacity .7s ease .05s, transform .7s ease .05s;
        }
        h1.headline.in{opacity:1;transform:translateY(0);}
        h1.headline em{font-style:normal;color:var(--terracotta);}

        p.subhead{
          text-align:center;
          max-width:560px;
          margin:0 auto 56px;
          font-size:17px;
          line-height:1.6;
          color:var(--charcoal-70);
          font-weight:500;
          opacity:0;
          transform:translateY(14px);
          transition:opacity .7s ease .12s, transform .7s ease .12s;
        }
        p.subhead.in{opacity:1;transform:translateY(0);}

        .trail-wrap{ position:relative; padding-top:6px; }
        .trail-svg{
          position:absolute; top:22px; left:0;
          width:100%; height:12px; z-index:0;
        }
        .trail-svg path{
          fill:none; stroke:var(--gold); stroke-width:2.5; stroke-linecap:round;
          stroke-dasharray:6 10; stroke-dashoffset:600;
          transition:stroke-dashoffset 1.1s cubic-bezier(.4,.1,.2,1) .25s;
        }
        .trail-svg.in path{ stroke-dashoffset:0; }

        .cards{
          position:relative; z-index:1;
          display:grid;
          grid-template-columns:repeat(4, 1fr);
          gap:22px;
        }

        .card{
          background:#fff;
          border:1px solid var(--line);
          border-radius:6px;
          overflow:hidden;
          opacity:0;
          transform:translateY(34px);
          transition:opacity .6s cubic-bezier(.2,.7,.3,1), transform .6s cubic-bezier(.2,.7,.3,1);
          display:flex;
          flex-direction:column;
        }
        .card.in{opacity:1;transform:translateY(0);}
        .card:nth-child(1){transition-delay:.15s;}
        .card:nth-child(2){transition-delay:.30s;}
        .card:nth-child(3){transition-delay:.45s;}
        .card:nth-child(4){transition-delay:.60s;}

        .card-waypoint{
          position:relative; width:100%; aspect-ratio:4/3;
          background:
            radial-gradient(circle at 30% 20%, rgba(232,165,58,0.35), transparent 55%),
            linear-gradient(155deg, var(--terracotta) 0%, #a83a15 55%, var(--charcoal) 130%);
          display:flex; align-items:flex-end; padding:14px;
        }
        .card-waypoint svg.topo{ position:absolute; inset:0; width:100%; height:100%; opacity:0.28; }
        .marker-badge{
          position:relative; z-index:1;
          display:inline-flex; align-items:center; justify-content:center;
          width:34px; height:34px; border-radius:50%;
          background:var(--cream); color:var(--terracotta);
          font-weight:800; font-size:14px; border:2px solid var(--gold);
        }

        .card-body{ padding:20px 18px 22px; display:flex; flex-direction:column; gap:8px; flex:1; }
        .card-eyebrow{ font-size:10.5px; font-weight:700; letter-spacing:0.14em; text-transform:uppercase; color:var(--gold); }
        .card-title{ font-family:'Archivo Expanded','Archivo',sans-serif; font-weight:800; font-size:19px; line-height:1.2; color:var(--charcoal); margin:0; }
        .card-desc{ font-size:13.5px; line-height:1.5; color:var(--charcoal-70); font-weight:500; margin:0; flex:1; }
        .card-cta{
          margin-top:6px; display:inline-flex; align-items:center; gap:6px;
          font-size:12.5px; font-weight:700; letter-spacing:0.04em; text-transform:uppercase;
          color:var(--terracotta); text-decoration:none;
        }
        .card-cta svg{ width:13px; height:13px; transition:transform .2s ease; }
        .card:hover .card-cta svg{ transform:translateX(3px); }
        .card:hover{ transform:translateY(-3px); }

        @media (max-width: 980px){
          .cards{grid-template-columns:repeat(2, 1fr);}
          .trail-svg{display:none;}
        }
        @media (max-width: 560px){
          .cards{grid-template-columns:1fr;}
          .hero{padding:52px 20px 60px;}
        }
        @media (prefers-reduced-motion: reduce){
          .card, h1.headline, p.subhead, .eyebrow-top, .trail-svg path{
            transition:none !important; opacity:1 !important; transform:none !important; stroke-dashoffset:0 !important;
          }
        }
      </style>

      <div class="hero">
        <div class="eyebrow-top" data-reveal>
          <span class="dot"></span>
          <span>Visakha Trail Running Association</span>
        </div>

        <h1 class="headline" data-reveal>Four events. <em>One trail.</em></h1>
        <p class="subhead" data-reveal>From GITAM's tarmac to the hills of Paderu — VTRA's flagship races for every kind of runner.</p>

        <div class="trail-wrap">
          <svg class="trail-svg" data-reveal viewBox="0 0 1000 12" preserveAspectRatio="none">
            <path d="M 60 6 L 940 6"/>
          </svg>

          <div class="cards">

            <div class="card" data-reveal>
              <div class="card-waypoint">
                <svg class="topo" viewBox="0 0 200 150"><path d="M0 120 Q40 90 80 115 T160 100 T200 130" stroke="#F4F0E8" stroke-width="2" fill="none"/><path d="M0 90 Q50 60 90 85 T170 70 T200 95" stroke="#F4F0E8" stroke-width="2" fill="none"/></svg>
                <span class="marker-badge">01</span>
              </div>
              <div class="card-body">
                <span class="card-eyebrow">Road · AIMS Measured</span>
                <h3 class="card-title">Vizag Half Marathon</h3>
                <p class="card-desc">5th edition · 4 Oct 2026 at GITAM University. 21.1K, 10K, 5K &amp; 3K Fun Run.</p>
                <a href="#" class="card-cta">Explore VHM <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12h14M13 6l6 6-6 6"/></svg></a>
              </div>
            </div>

            <div class="card" data-reveal>
              <div class="card-waypoint">
                <svg class="topo" viewBox="0 0 200 150"><path d="M0 130 Q40 70 80 110 T160 60 T200 100" stroke="#F4F0E8" stroke-width="2" fill="none"/><path d="M0 100 Q50 40 90 80 T170 30 T200 70" stroke="#F4F0E8" stroke-width="2" fill="none"/></svg>
                <span class="marker-badge">02</span>
              </div>
              <div class="card-body">
                <span class="card-eyebrow">Trail Ultra · ITRA Certified</span>
                <h3 class="card-title">Ultribe Paderu Trail Ultra</h3>
                <p class="card-desc">A UTMB World Series qualifier through tribal hill country.</p>
                <a href="#" class="card-cta">Explore Paderu <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12h14M13 6l6 6-6 6"/></svg></a>
              </div>
            </div>

            <div class="card" data-reveal>
              <div class="card-waypoint">
                <svg class="topo" viewBox="0 0 200 150"><path d="M0 110 Q40 100 80 120 T160 95 T200 115" stroke="#F4F0E8" stroke-width="2" fill="none"/><path d="M0 80 Q50 70 90 90 T170 65 T200 85" stroke="#F4F0E8" stroke-width="2" fill="none"/></svg>
                <span class="marker-badge">03</span>
              </div>
              <div class="card-body">
                <span class="card-eyebrow">Time Trial · Monthly</span>
                <h3 class="card-title">Vizag Time Trials</h3>
                <p class="card-desc">Chip-timed, community-run monthly series — track your pace over time.</p>
                <a href="#" class="card-cta">Explore Time Trials <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12h14M13 6l6 6-6 6"/></svg></a>
              </div>
            </div>

            <div class="card" data-reveal>
              <div class="card-waypoint">
                <svg class="topo" viewBox="0 0 200 150"><path d="M0 125 Q40 80 80 105 T160 85 T200 120" stroke="#F4F0E8" stroke-width="2" fill="none"/><path d="M0 95 Q50 50 90 75 T170 55 T200 90" stroke="#F4F0E8" stroke-width="2" fill="none"/></svg>
                <span class="marker-badge">04</span>
              </div>
              <div class="card-body">
                <span class="card-eyebrow">Circuit · Multi-State</span>
                <h3 class="card-title">South India Trail Grail</h3>
                <p class="card-desc">A trail running circuit connecting South India's toughest terrain.</p>
                <a href="#" class="card-cta">Explore the Grail <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12h14M13 6l6 6-6 6"/></svg></a>
              </div>
            </div>

          </div>
        </div>
      </div>
    `;

    // Reveal shortly after the element mounts (page-load style reveal).
    // Stagger timing for the cards is already handled by CSS transition-delay.
    requestAnimationFrame(() => {
      setTimeout(() => {
        this.shadowRoot.querySelectorAll('[data-reveal]').forEach((el) => {
          el.classList.add('in');
        });
      }, 120);
    });
  }
}

customElements.define('vtra-hero-waypoints', VtraHeroWaypoints);
