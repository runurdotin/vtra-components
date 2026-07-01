/**
 * Ultribe Paderu 2026 — Web Component
 * Tag: <ultribe-races>
 * Usage in Wix Studio: Custom Element → paste hosted JS URL → tag name: ultribe-races
 */
class UltibeRaces extends HTMLElement {
  connectedCallback() {
    const shadow = this.attachShadow({ mode: 'open' });
    shadow.innerHTML = `
<style>
*{margin:0;padding:0;box-sizing:border-box}
:host{
  display:block;
  font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif;
  background:#f7f5f1;color:#111;
  -webkit-font-smoothing:antialiased;
}
:host{
  --o:#e85d2a;--od:#c94a1a;--o10:rgba(232,93,42,.10);--o20:rgba(232,93,42,.20);
  --ink:#111;--bg:#f7f5f1;--card:#fff;--muted:#6b6660;--line:#ebebeb;
  --radius:14px;--shadow:0 2px 12px rgba(0,0,0,.07);
}

/* NAV */
.nav{
  background:rgba(247,245,241,.92);
  backdrop-filter:blur(14px);-webkit-backdrop-filter:blur(14px);
  border-bottom:1px solid var(--line);
  padding:0 20px;height:56px;
  display:flex;align-items:center;justify-content:space-between;
  position:sticky;top:0;z-index:100;
}
.nav-logo{font-weight:800;font-size:26.4px;letter-spacing:.5px}
.nav-logo b{color:var(--o)}
.nav-btn{
  background:var(--o);color:#fff;border:none;border-radius:30px;
  padding:10px 26px;font-size:16.5px;font-weight:700;text-transform:uppercase;
  letter-spacing:.5px;cursor:pointer;transition:background .15s,transform .1s;
  -webkit-tap-highlight-color:transparent;font-family:inherit;
  min-height:44px;display:inline-flex;align-items:center;touch-action:manipulation;
}
.nav-btn:hover{background:var(--od)}
.nav-btn:active{transform:scale(.96)}

/* HERO */
.hero{
  padding:24px 20px 18px;border-bottom:1px solid var(--line);
  display:flex;flex-wrap:wrap;align-items:flex-end;
  justify-content:space-between;gap:8px;
}
.hero-eyebrow{font-size:14.3px;text-transform:uppercase;letter-spacing:2.5px;color:var(--o);font-weight:700;margin-bottom:6px}
.hero-title{font-size:clamp(35.2px,6vw,57.2px);font-weight:800;letter-spacing:-.5px;line-height:1.05}
.hero-title em{font-style:normal;color:var(--o)}
.hero-pills{display:flex;flex-wrap:wrap;gap:6px;align-self:flex-end}
.hero-pill{
  background:var(--o10);border:1px solid var(--o20);
  color:var(--o);font-size:14.3px;font-weight:700;
  padding:4px 12px;border-radius:30px;text-transform:uppercase;letter-spacing:.5px;
}

/* CATEGORY TABS */
.cat-wrap{padding:14px 20px 0;overflow-x:auto;-webkit-overflow-scrolling:touch;scrollbar-width:none}
.cat-wrap::-webkit-scrollbar{display:none}
.cat-tabs{
  display:flex;gap:5px;background:var(--line);
  border-radius:12px;padding:4px;width:fit-content;min-width:100%;
}
.cat-tab{
  flex:1;min-width:72px;min-height:44px;display:flex;flex-direction:column;align-items:center;justify-content:center;
  padding:10px 12px;border-radius:9px;border:none;background:transparent;
  cursor:pointer;transition:background .18s,box-shadow .18s;
  -webkit-tap-highlight-color:transparent;touch-action:manipulation;font-family:inherit;
}
.cat-tab:active{transform:scale(.96)}
.cat-tab .td{font-size:24.2px;font-weight:800;color:var(--muted);line-height:1;transition:color .18s}
.cat-tab .tn{font-size:14.3px;text-transform:uppercase;letter-spacing:1px;font-weight:600;color:var(--muted);margin-top:3px;white-space:nowrap;transition:color .18s}
.cat-tab.on{background:var(--o);box-shadow:0 4px 14px rgba(232,93,42,.28)}
.cat-tab.on .td,.cat-tab.on .tn{color:#fff}

/* STAT BAR */
.stat-bar{display:flex;gap:0;padding:14px 20px 0;overflow-x:auto;-webkit-overflow-scrolling:touch;scrollbar-width:none}
.stat-bar::-webkit-scrollbar{display:none}
.stat-item{flex:1;min-width:90px;padding:0 14px 14px;border-right:1px solid var(--line)}
.stat-item:first-child{padding-left:0}
.stat-item:last-child{border-right:none}
.stat-lbl{font-size:13.2px;text-transform:uppercase;letter-spacing:1.5px;color:var(--muted);font-weight:600}
.stat-val{font-size:22.0px;font-weight:800;color:var(--ink);margin-top:3px}
.stat-val span{color:var(--o)}

/* INFO TABS */
.info-wrap{padding:14px 20px 0;overflow-x:auto;-webkit-overflow-scrolling:touch;scrollbar-width:none}
.info-wrap::-webkit-scrollbar{display:none}
.info-tabs{display:flex;gap:6px;width:fit-content}
.info-tab{
  padding:7px 16px;border-radius:30px;border:1.5px solid var(--line);
  background:transparent;font-size:16.5px;font-weight:700;
  text-transform:uppercase;letter-spacing:.6px;color:var(--muted);
  cursor:pointer;transition:all .15s;white-space:nowrap;font-family:inherit;
  -webkit-tap-highlight-color:transparent;touch-action:manipulation;
  min-height:44px;display:inline-flex;align-items:center;
}
.info-tab.on{background:var(--ink);border-color:var(--ink);color:#fff}
.info-tab:hover:not(.on){border-color:var(--o);color:var(--o)}
.info-tab:active{transform:scale(.96)}

/* TILE GRID */
.tile-grid{display:grid;grid-template-columns:repeat(2,1fr);gap:10px;padding:14px 20px 24px;touch-action:pan-y}
.tile{
  background:var(--card);border-radius:var(--radius);padding:18px 16px;
  border:1.5px solid var(--line);box-shadow:var(--shadow);
  transition:border-color .15s,transform .18s,box-shadow .18s;
  will-change:transform;contain:layout style paint;
}
.tile:hover{border-color:var(--o);transform:translateY(-3px);box-shadow:0 8px 24px rgba(232,93,42,.13)}
.tile.wide{
  grid-column:span 2;
  background:linear-gradient(130deg,#1a1208 0%,#2e1a08 100%);
  border-color:transparent;
}
.tile.wide h4{color:#fff;font-size:20.9px}
.tile.wide p{color:rgba(255,255,255,.72);font-size:16.5px}
.tile-icon{
  width:36px;height:36px;border-radius:10px;
  background:var(--o10);border:1.5px solid var(--o20);
  display:flex;align-items:center;justify-content:center;
  margin-bottom:12px;font-size:24.2px;line-height:1;
}
.tile.wide .tile-icon{background:rgba(232,93,42,.18);border-color:rgba(232,93,42,.3)}
.tile-badge{
  display:inline-block;background:var(--o);color:#fff;
  font-size:13.2px;font-weight:800;text-transform:uppercase;
  letter-spacing:.8px;padding:3px 12px;border-radius:30px;margin-bottom:10px;
}
.tile h4{font-size:18.7px;font-weight:700;color:var(--ink);margin-bottom:5px;line-height:1.3}
.tile p{font-size:16.5px;color:var(--muted);line-height:1.55}

/* PANELS */
.panel{display:none}
.panel.on{display:block}

/* RESPONSIVE */
.nav,.hero,.cat-wrap,.stat-bar,.info-wrap,.tile-grid{
  padding-left:max(20px,env(safe-area-inset-left));
  padding-right:max(20px,env(safe-area-inset-right));
}
@media(min-width:900px){
  .tile-grid{grid-template-columns:repeat(3,1fr)}
  .tile.wide{grid-column:span 3}
}
@media(min-width:1200px){
  :host{max-width:1400px;margin:0 auto;display:block}
  .tile-grid{grid-template-columns:repeat(4,1fr)}
  .tile.wide{grid-column:span 4}
}
@media(max-width:600px){
  .tile-grid{grid-template-columns:1fr;gap:8px;padding:12px 16px 20px}
  .tile.wide{grid-column:span 1}
  .cat-tab{min-width:60px;padding:8px 8px}
  .cat-tab .td{font-size:19.8px}
  .info-tab{font-size:14.3px;padding:6px 14px}
  .hero-title{font-size:30.8px}
}
@media(max-width:380px){
  .nav{padding:0 14px}
  .hero{padding:18px 14px 14px}
  .hero-title{font-size:26px}
  .cat-wrap,.stat-bar,.info-wrap{padding-left:14px;padding-right:14px}
  .tile-grid{padding-left:12px;padding-right:12px}
  .stat-val{font-size:18px}
  .stat-item{min-width:78px;padding-right:10px}
}
@media(prefers-reduced-motion:reduce){
  *{transition-duration:.01ms!important;animation-duration:.01ms!important}
  .tile:hover{transform:none}
}
</style>

<div>
  <nav class="nav">
    <div class="nav-logo">UP<b>26</b></div>
    <button class="nav-btn" id="regBtn">Register</button>
  </nav>

  <div class="hero">
    <div>
      <div class="hero-eyebrow">Ultribe Paderu · Dec 5–6, 2026</div>
      <div class="hero-title">Run <em>wild.</em></div>
    </div>
    <div class="hero-pills">
      <span class="hero-pill">Eastern Ghats</span>
      <span class="hero-pill">ITRA Certified</span>
      <span class="hero-pill">Trail</span>
    </div>
  </div>

  <div class="cat-wrap">
    <div class="cat-tabs" id="catTabs">
      <button class="cat-tab on" data-k="a"><span class="td">100K</span><span class="tn">Conquer</span></button>
      <button class="cat-tab" data-k="b"><span class="td">50K</span><span class="tn">Tame</span></button>
      <button class="cat-tab" data-k="c"><span class="td">25K</span><span class="tn">Debut</span></button>
      <button class="cat-tab" data-k="d"><span class="td">10K</span><span class="tn">Vanjangi</span></button>
    </div>
  </div>

  <div class="stat-bar">
    <div class="stat-item"><div class="stat-lbl">Start</div><div class="stat-val" id="Sstart"><span>4:00 AM</span></div></div>
    <div class="stat-item"><div class="stat-lbl">Cut-off</div><div class="stat-val" id="Scutoff">26 hrs</div></div>
    <div class="stat-item"><div class="stat-lbl">Elevation</div><div class="stat-val" id="Selev">~2651m</div></div>
    <div class="stat-item"><div class="stat-lbl">ITRA pts</div><div class="stat-val" id="Sitra"><span>5</span></div></div>
    <div class="stat-item"><div class="stat-lbl">Fee</div><div class="stat-val" id="Sfee">₹3,999</div></div>
  </div>

  <div class="info-wrap">
    <div class="info-tabs" id="infoTabs">
      <button class="info-tab on" data-t="0">Overview</button>
      <button class="info-tab" data-t="1">Qualification</button>
      <button class="info-tab" data-t="2">Course</button>
      <button class="info-tab" data-t="3">Kit</button>
      <button class="info-tab" data-t="4">Timings</button>
    </div>
  </div>

  <div id="panels">
    <!-- 100K -->
    <div class="panel on" id="p-a-0"><div class="tile-grid">
      <div class="tile wide"><div class="tile-badge">Ultra · 100K</div><h4>First-ever 100K Ultra Trail in the Telugu States</h4><p>Traverse misty Vanjangi ridgelines, ancient tribal paths, evergreen forests, and rolling coffee estates. Make history. Conquer the first 100K of Telugu lands.</p></div>
      <div class="tile"><div class="tile-icon">🏅</div><h4>ITRA Certified</h4><p>5 points · 110 km · 5265m gain · 30h cutoff</p></div>
      <div class="tile"><div class="tile-icon">🚩</div><h4>Flag-off</h4><p>Dec 06, 2026 · 4:00 PM IST · 26h cutoff</p></div>
      <div class="tile"><div class="tile-icon">🍽️</div><h4>Meals</h4><p>Dinner (06 Dec) · Breakfast + Lunch (07 Dec)</p></div>
      <div class="tile"><div class="tile-icon">🛤️</div><h4>Route</h4><p>Paderu → Vanjangi ridgelines → coffee estates → finish</p></div>
    </div></div>
    <div class="panel" id="p-a-1"><div class="tile-grid">
      <div class="tile wide"><div class="tile-badge">Eligibility</div><h4>Proven distance runner required</h4><p>Full Marathon under 6 hours OR Ultra 50K+ within cutoffs. Medical certificate mandatory.</p></div>
      <div class="tile"><div class="tile-icon">🎂</div><h4>Age</h4><p>Minimum 18 years</p></div>
      <div class="tile"><div class="tile-icon">🏥</div><h4>Medical</h4><p>Certificate required for ultra fitness</p></div>
      <div class="tile"><div class="tile-icon">🌿</div><h4>Trail Grail</h4><p>Qualifies for South India Trail Grail series</p></div>
      <div class="tile"><div class="tile-icon">📋</div><h4>Submit by</h4><p>28 November 2026</p></div>
    </div></div>
    <div class="panel" id="p-a-2"><div class="tile-grid">
      <div class="tile wide"><div class="tile-badge">Course · 110 km</div><h4>Steep ascents, dense forest, remote tribal hamlets</h4><p>Rocky descents, ancient paths, coffee estates. Every kilometer challenges your legs; every view fills your soul.</p></div>
      <div class="tile"><div class="tile-icon">⛰️</div><h4>Elevation</h4><p>5265m gain over 110 km</p></div>
      <div class="tile"><div class="tile-icon">🚰</div><h4>Aid Stations</h4><p>Every 7–8 km · water, electrolytes, banana, bread, PB</p></div>
      <div class="tile"><div class="tile-icon">🗺️</div><h4>Terrain</h4><p>Singletrack, forest path, village road</p></div>
      <div class="tile"><div class="tile-icon">🌙</div><h4>Night section</h4><p>Headlamp mandatory · race starts 4 PM</p></div>
    </div></div>
    <div class="panel" id="p-a-3"><div class="tile-grid">
      <div class="tile"><div class="tile-icon">🪧</div><h4>Race BIB</h4><p>Official timed bib</p></div>
      <div class="tile"><div class="tile-icon">👕</div><h4>DriFit T-shirt</h4><p>High-performance race tee</p></div>
      <div class="tile"><div class="tile-icon">🥇</div><h4>Finisher Medal</h4><p>Exclusive 100K edition design</p></div>
      <div class="tile"><div class="tile-icon">🎒</div><h4>Mandatory Gear</h4><p>Trail shoes · 1L+ hydration · headlamp · whistle · first aid · jacket · gels</p></div>
      <div class="tile"><div class="tile-icon">🚑</div><h4>Medical support</h4><p>Aid stations + sweep team throughout</p></div>
      <div class="tile"><div class="tile-icon">🍱</div><h4>Meals</h4><p>Dinner 06 Dec · Breakfast + Lunch 07 Dec</p></div>
    </div></div>
    <div class="panel" id="p-a-4"><div class="tile-grid">
      <div class="tile wide"><div class="tile-badge">Race Day · Dec 06 2026</div><h4>Key times at a glance</h4><p>Briefing 10:00 AM · Flag-off 4:00 PM · Cut-off 8:00 PM Dec 07. Intermediate cutoffs communicated before race day.</p></div>
      <div class="tile"><div class="tile-icon">🎙️</div><h4>Race Briefing</h4><p>5 PM on Dec 05 · 10 AM on Dec 06</p></div>
      <div class="tile"><div class="tile-icon">⏱️</div><h4>Cut-off</h4><p>26 hours · 8:00 PM Dec 07</p></div>
      <div class="tile"><div class="tile-icon">📅</div><h4>Qualifications by</h4><p>28 November 2026</p></div>
    </div></div>

    <!-- 50K -->
    <div class="panel" id="p-b-0"><div class="tile-grid">
      <div class="tile wide"><div class="tile-badge">Ultra · 50K</div><h4>Tame the Trail — the ultimate endurance battle</h4><p>Every kilometer challenges your legs, every view fills your soul. Not just a race — a battle against terrain, fatigue, and doubt. Conquer it and you evolve.</p></div>
      <div class="tile"><div class="tile-icon">🏅</div><h4>ITRA Certified</h4><p>4 points · ~1700m elevation gain</p></div>
      <div class="tile"><div class="tile-icon">🚩</div><h4>Flag-off</h4><p>Dec 06, 2026 · 5:00 AM · 10h cutoff</p></div>
      <div class="tile"><div class="tile-icon">🍽️</div><h4>Meals</h4><p>Breakfast · Lunch · Dinner included</p></div>
      <div class="tile"><div class="tile-icon">🛤️</div><h4>Route</h4><p>Paderu → Vanjangi hills → tribal paths → finish</p></div>
    </div></div>
    <div class="panel" id="p-b-1"><div class="tile-grid">
      <div class="tile wide"><div class="tile-badge">Eligibility</div><h4>Proven distance runner required</h4><p>Full Marathon under 6 hours OR Ultra 50K+ within cutoffs. Medical certificate mandatory.</p></div>
      <div class="tile"><div class="tile-icon">🎂</div><h4>Age</h4><p>Minimum 18 years</p></div>
      <div class="tile"><div class="tile-icon">🏥</div><h4>Medical</h4><p>Certificate required</p></div>
      <div class="tile"><div class="tile-icon">🌿</div><h4>Trail Grail</h4><p>50K finish qualifies for the series</p></div>
      <div class="tile"><div class="tile-icon">📋</div><h4>Submit by</h4><p>28 November 2026</p></div>
    </div></div>
    <div class="panel" id="p-b-2"><div class="tile-grid">
      <div class="tile wide"><div class="tile-badge">Course · 50 km</div><h4>Deep into the wilds of Paderu and Vanjangi</h4><p>Steep ascents, rocky descents, dense forest trails, remote tribal hamlets across 50 challenging kilometers.</p></div>
      <div class="tile"><div class="tile-icon">⛰️</div><h4>Elevation</h4><p>~1700m gain over 50 km</p></div>
      <div class="tile"><div class="tile-icon">🚰</div><h4>Aid Stations</h4><p>Every 8–10 km · hydration, energy, fruits</p></div>
      <div class="tile"><div class="tile-icon">🎒</div><h4>Gear</h4><p>Trail shoes · 1L+ hydration · headlamp · whistle · jacket · gels</p></div>
      <div class="tile"><div class="tile-icon">🗺️</div><h4>Terrain</h4><p>Technical trail, forest path, village road</p></div>
    </div></div>
    <div class="panel" id="p-b-3"><div class="tile-grid">
      <div class="tile"><div class="tile-icon">🪧</div><h4>Race BIB</h4><p>Official timed bib</p></div>
      <div class="tile"><div class="tile-icon">👕</div><h4>DriFit T-shirt</h4><p>High-performance race tee</p></div>
      <div class="tile"><div class="tile-icon">🥇</div><h4>Finisher Medal</h4><p>Exclusive 50K edition design</p></div>
      <div class="tile"><div class="tile-icon">🚑</div><h4>Medical support</h4><p>Aid stations + sweep team</p></div>
      <div class="tile"><div class="tile-icon">🍱</div><h4>Meals</h4><p>Breakfast · Lunch · Dinner on race day</p></div>
      <div class="tile"><div class="tile-icon">💧</div><h4>Hydration</h4><p>En-route water + electrolytes</p></div>
    </div></div>
    <div class="panel" id="p-b-4"><div class="tile-grid">
      <div class="tile wide"><div class="tile-badge">Race Day · Dec 06 2026</div><h4>Key times — 50K</h4><p>Briefing 10:00 AM · Flag-off 5:00 AM · Cut-off 3:00 PM Dec 06.</p></div>
      <div class="tile"><div class="tile-icon">🎙️</div><h4>Race Briefing</h4><p>5 PM on Dec 05 · 10 AM on Dec 06</p></div>
      <div class="tile"><div class="tile-icon">⏱️</div><h4>Cut-off</h4><p>10 hours · 3:00 PM Dec 06</p></div>
      <div class="tile"><div class="tile-icon">📅</div><h4>Qualifications by</h4><p>28 November 2026</p></div>
    </div></div>

    <!-- 25K -->
    <div class="panel" id="p-c-0"><div class="tile-grid">
      <div class="tile wide"><div class="tile-badge">Trail · 25K</div><h4>Debut Trail — your first big leap into trail running</h4><p>Winding through majestic Vanjangi hills, ancient forest paths, and vibrant tribal settlements. The perfect mix of challenge, beauty, and pure trail magic.</p></div>
      <div class="tile"><div class="tile-icon">🏅</div><h4>ITRA Certified</h4><p>1 point · ~1330m elevation gain</p></div>
      <div class="tile"><div class="tile-icon">🚩</div><h4>Flag-off</h4><p>Dec 06, 2026 · 6:00 AM · 5h cutoff</p></div>
      <div class="tile"><div class="tile-icon">🍽️</div><h4>Meals</h4><p>Breakfast + Lunch included</p></div>
      <div class="tile"><div class="tile-icon">🛤️</div><h4>Route</h4><p>Paderu → Vanjangi hills → forest paths → finish</p></div>
    </div></div>
    <div class="panel" id="p-c-1"><div class="tile-grid">
      <div class="tile wide"><div class="tile-badge">Eligibility</div><h4>Road runners ready to debut on trail</h4><p>Half Marathon under 3 hours. Medical certificate required. Minimum 18 years.</p></div>
      <div class="tile"><div class="tile-icon">🎂</div><h4>Age</h4><p>Minimum 18 years</p></div>
      <div class="tile"><div class="tile-icon">🏥</div><h4>Medical</h4><p>Certificate required</p></div>
      <div class="tile"><div class="tile-icon">🏁</div><h4>Qualifier</h4><p>Half Marathon sub-3 hours</p></div>
    </div></div>
    <div class="panel" id="p-c-2"><div class="tile-grid">
      <div class="tile wide"><div class="tile-badge">Course · 25 km</div><h4>Technical climbs and soul-stirring views</h4><p>Majestic Vanjangi hills, ancient forest paths, vibrant tribal settlements. Rolling terrain perfect for your trail debut.</p></div>
      <div class="tile"><div class="tile-icon">⛰️</div><h4>Elevation</h4><p>~1330m gain over 25 km</p></div>
      <div class="tile"><div class="tile-icon">🚰</div><h4>Aid Stations</h4><p>At 8km and 16km · hydration + snacks</p></div>
      <div class="tile"><div class="tile-icon">🎒</div><h4>Gear</h4><p>Trail shoes · 1L+ hydration · whistle · first aid · gels</p></div>
      <div class="tile"><div class="tile-icon">🗺️</div><h4>Terrain</h4><p>Singletrack, forest path, open ridge</p></div>
    </div></div>
    <div class="panel" id="p-c-3"><div class="tile-grid">
      <div class="tile"><div class="tile-icon">🪧</div><h4>Race BIB</h4><p>Official timed bib</p></div>
      <div class="tile"><div class="tile-icon">👕</div><h4>DriFit T-shirt</h4><p>High-performance race tee</p></div>
      <div class="tile"><div class="tile-icon">🥇</div><h4>Finisher Medal</h4><p>Exclusive 25K edition design</p></div>
      <div class="tile"><div class="tile-icon">🍱</div><h4>Meals</h4><p>Breakfast + Lunch on race day</p></div>
      <div class="tile"><div class="tile-icon">💧</div><h4>Hydration</h4><p>En-route water + electrolytes</p></div>
    </div></div>
    <div class="panel" id="p-c-4"><div class="tile-grid">
      <div class="tile wide"><div class="tile-badge">Race Day · Dec 06 2026</div><h4>Key times — 25K</h4><p>Briefing 10:00 AM · Flag-off 6:00 AM · Cut-off 11:00 AM Dec 06.</p></div>
      <div class="tile"><div class="tile-icon">🎙️</div><h4>Race Briefing</h4><p>5 PM on Dec 05 · 10 AM on Dec 06</p></div>
      <div class="tile"><div class="tile-icon">⏱️</div><h4>Cut-off</h4><p>5 hours · 11:00 AM Dec 06</p></div>
      <div class="tile"><div class="tile-icon">📅</div><h4>Qualifications by</h4><p>28 November 2026</p></div>
    </div></div>

    <!-- 10K -->
    <div class="panel" id="p-d-0"><div class="tile-grid">
      <div class="tile wide"><div class="tile-badge">Trail · 10K</div><h4>Vanjangi Challenge — only Ultra Trail 10K in AP & Telangana</h4><p>Misty hills, scenic streams, coffee plantations, tribal hamlets. Every step a connection with nature, every climb a test of grit.</p></div>
      <div class="tile"><div class="tile-icon">🏅</div><h4>ITRA Certified</h4><p>6 points · 10.89 km · 611m gain</p></div>
      <div class="tile"><div class="tile-icon">🚩</div><h4>Flag-off</h4><p>Dec 06, 2026 · 7:00 AM · 3h cutoff</p></div>
      <div class="tile"><div class="tile-icon">🍽️</div><h4>Meals</h4><p>Race Day Breakfast included</p></div>
      <div class="tile"><div class="tile-icon">🛤️</div><h4>Route</h4><p>Paderu → Vanjangi hills → coffee estates → finish</p></div>
    </div></div>
    <div class="panel" id="p-d-1"><div class="tile-grid">
      <div class="tile wide"><div class="tile-badge">Eligibility</div><h4>Open to all regular runners</h4><p>No qualifying race required. Minimum age 16 with parental consent. Medical certificate recommended.</p></div>
      <div class="tile"><div class="tile-icon">🎂</div><h4>Age</h4><p>16+ with parental consent</p></div>
      <div class="tile"><div class="tile-icon">🏥</div><h4>Medical</h4><p>Recommended for fitness confirmation</p></div>
      <div class="tile"><div class="tile-icon">🏃</div><h4>Requirement</h4><p>Regular runner — no race qualifier needed</p></div>
    </div></div>
    <div class="panel" id="p-d-2"><div class="tile-grid">
      <div class="tile wide"><div class="tile-badge">Course · 10.89 km</div><h4>Misty hills, streams, coffee estates, tribal hamlets</h4><p>Challenging enough to earn ITRA points, beautiful enough to bring you back. The Eastern Ghats at their finest.</p></div>
      <div class="tile"><div class="tile-icon">⛰️</div><h4>Elevation</h4><p>611m gain over 10.89 km</p></div>
      <div class="tile"><div class="tile-icon">🚰</div><h4>Aid Station</h4><p>At 5km · hydration + snacks</p></div>
      <div class="tile"><div class="tile-icon">🎒</div><h4>Gear</h4><p>Trail shoes · hydration pack · mobile phone</p></div>
      <div class="tile"><div class="tile-icon">🗺️</div><h4>Terrain</h4><p>Singletrack, ridge, coffee estate paths</p></div>
    </div></div>
    <div class="panel" id="p-d-3"><div class="tile-grid">
      <div class="tile"><div class="tile-icon">🪧</div><h4>Race BIB</h4><p>Official timed bib</p></div>
      <div class="tile"><div class="tile-icon">👕</div><h4>DriFit T-shirt</h4><p>High-performance race tee</p></div>
      <div class="tile"><div class="tile-icon">🥇</div><h4>Finisher Medal</h4><p>Exclusive Vanjangi Challenge design</p></div>
      <div class="tile"><div class="tile-icon">🍱</div><h4>Meals</h4><p>Race Day Breakfast included</p></div>
      <div class="tile"><div class="tile-icon">💧</div><h4>Hydration</h4><p>En-route water + electrolytes</p></div>
    </div></div>
    <div class="panel" id="p-d-4"><div class="tile-grid">
      <div class="tile wide"><div class="tile-badge">Race Day · Dec 06 2026</div><h4>Key times — 10K</h4><p>Briefing 10:00 AM · Flag-off 7:00 AM · Cut-off 10:00 AM Dec 06.</p></div>
      <div class="tile"><div class="tile-icon">🎙️</div><h4>Race Briefing</h4><p>5 PM on Dec 05 · 10 AM on Dec 06</p></div>
      <div class="tile"><div class="tile-icon">⏱️</div><h4>Cut-off</h4><p>3 hours · 10:00 AM Dec 06</p></div>
      <div class="tile"><div class="tile-icon">📅</div><h4>Qualifications by</h4><p>28 November 2026</p></div>
    </div></div>
  </div>
</div>`;

    // ── DATA ──
    const STATS = {
      a:{start:'4:00 AM',cutoff:'26 hrs',elev:'~2651m',itra:'5',fee:'₹3,999'},
      b:{start:'5:00 AM',cutoff:'10 hrs',elev:'~1700m',itra:'4',fee:'₹2,999'},
      c:{start:'6:00 AM',cutoff:'5 hrs', elev:'~1330m',itra:'1',fee:'₹1,999'},
      d:{start:'7:00 AM',cutoff:'3 hrs', elev:'~611m', itra:'6',fee:'₹999'}
    };

    let curK = 'a', curT = 0;
    const root = shadow;

    // Cache every node we touch repeatedly — avoids re-querying the DOM on each tap
    const Sstart    = root.getElementById('Sstart');
    const startSpan = Sstart.querySelector('span');
    const Scutoff   = root.getElementById('Scutoff');
    const Selev     = root.getElementById('Selev');
    const Sitra     = root.getElementById('Sitra');
    const itraSpan  = Sitra.querySelector('span');
    const Sfee      = root.getElementById('Sfee');

    const catTabEls  = Array.from(root.querySelectorAll('.cat-tab'));
    const infoTabEls = Array.from(root.querySelectorAll('.info-tab'));

    // Pre-resolve every panel once instead of re-hitting getElementById on every switch
    const panels = {};
    ['a','b','c','d'].forEach(k => {
      panels[k] = [0,1,2,3,4].map(t => root.getElementById(`p-${k}-${t}`));
    });
    const getPanel = (k, t) => panels[k][t];

    const setStats = (k) => {
      const s = STATS[k];
      startSpan.textContent = s.start;
      Scutoff.textContent   = s.cutoff;
      Selev.textContent     = s.elev;
      itraSpan.textContent  = s.itra;
      Sfee.textContent      = s.fee;
    };

    // Applied synchronously (no rAF hop) — panel swap is a single class toggle,
    // so there's nothing to gain by deferring it and it only added a visible delay.
    const switchCat = (k) => {
      if (k === curK) return;
      getPanel(curK, curT)?.classList.remove('on');
      for (const t of catTabEls) t.classList.toggle('on', t.dataset.k === k);
      setStats(k);
      getPanel(k, curT)?.classList.add('on');
      curK = k;
    };

    const switchInfo = (t) => {
      if (t === curT) return;
      getPanel(curK, curT)?.classList.remove('on');
      for (const tb of infoTabEls) tb.classList.toggle('on', +tb.dataset.t === t);
      getPanel(curK, t)?.classList.add('on');
      curT = t;
    };

    // Delegated listeners on Shadow DOM
    root.getElementById('catTabs').addEventListener('pointerup', (e) => {
      const tab = e.target.closest('.cat-tab');
      if (tab) { e.preventDefault(); switchCat(tab.dataset.k); }
    }, { passive: false });

    root.getElementById('infoTabs').addEventListener('pointerup', (e) => {
      const tab = e.target.closest('.info-tab');
      if (tab) { e.preventDefault(); switchInfo(+tab.dataset.t); }
    }, { passive: false });

    root.getElementById('regBtn').addEventListener('click', () => {
      // Fire a custom event — Wix Velo can listen to this
      this.dispatchEvent(new CustomEvent('register', { bubbles: true }));
    });
  }
}

customElements.define('ultribe-races', UltibeRaces);
