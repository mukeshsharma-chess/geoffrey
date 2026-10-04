 "use client";

import { useState } from "react";
import { ArrowRight, ArrowLeft, ArrowUpRight, CheckCircle2, Play, Menu, X } from "lucide-react";

const photos = {
  hero: "/images/Geoffrey.png",
  doctor: "/images/second.jpg",
  training: "/images/third.png",
  inject1: "/images/carosule.jpg",
  inject2: "/images/carosule1.jpg",
  inject3: "/images/carosule2.jpg",
  face: "/images/fivethsection.png",
  wellness: "/images/seven.png",
  skin: "/images/eight.jpg",
  model: "/images/nine.jpg"
};

const injectables = [
  ["BOTOX & WRINKLE RELAXER", "Botox®, Dysport®, and Daxxify® micro-dosed to soften forehead bands, crow’s feet, and gummy smiles while preserving natural human expression.", photos.inject1],
  ["BARBIETOX & CALF TOX", "Supra-periosteal deep placement with Restylane® Lyft and Voluma®. We rebuild lost structural bone scaffolding along the pyriform aperture, zygomatic arch, and mandibular angle with ultrasound safety.", photos.inject2],
  ["FACIAL BALANCING & JAWLINE", "Restoring the Cupid’s bow, philtral columns, and tubercle proportion. Using pliable micro-cannulas to eliminate migratory filler ridges, ensuring pillow-soft natural hydration and definition.", photos.inject3],
  ["LIP AUGMENTATION", "Thoughtful, balanced enhancement designed to complement your natural features.", photos.inject2]
];

const skinTreatments = [
  ["IPL (Intense Pulsated Light)", "Subdermal adipose remodeling with radiofrequency microneedling."],
  ["CHEMICAL PEELS", "Medical-grade TCA & Jessner peels targeting dermal pigmentation."],
  ["DERMAFRAC", "Vortex-fusion extraction and peptide infusion hydration therapy."],
  ["HYDRAFACIAL", "Vortex-fusion extraction and peptide infusion hydration therapy."],
  ["RF", "Vortex-fusion extraction and peptide infusion hydration therapy."],
  ["MNRF", "SkinPen automated induction with PRP blood concentrates."],
  ["MICRONEEDLING", "Vortex-fusion extraction and peptide infusion hydration therapy."]
];

function SectionTitle({children}) { return <h2 className="section-title">{children}</h2>; }
function TextLink({children, href="#"}) { return <a className="text-link" href={href}>{children}<span>↗</span></a>; }

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [slide, setSlide] = useState(0);
  const nav = ["ABOUT", "BODY", "BREAST", "LASERS", "INJECTABLES", "WELLNESS", "ACADEMY"];
  const visible = [...injectables, ...injectables].slice(slide, slide + 3);

  return <main>
    <header className="site-header">
      <a className="brand" href="#home">Dr. Geoffrey Vaz</a>
      <button className="mobile-menu" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">{menuOpen ? <X/> : <Menu/>}</button>
      <nav className={menuOpen ? "nav open" : "nav"}>{nav.map(n => <a key={n} href={`#${n.toLowerCase()}`} onClick={() => setMenuOpen(false)}>{n}</a>)}</nav>
    </header>

    
    <section className="hero" id="home">
      <img
        className="hero-background"
        src={photos.hero}
        alt="Dr. Geoffrey Vaz"
      />
      <div className="hero-glow" />

      <div className="hero-copy">
        <div className="hero-name">
          <span>GEOFFREY</span>
          <em>VAZ</em>
        </div>

        <p className="hero-sub">
          MD Dermatologist & Medical Aesthetics Expert
          <span>MD</span> Dermatologist<br />
          <span>&amp; Medical</span> Aesthetics Expert
        </p>

        <p className="experience">
          <strong>15+</strong> YEARS <small>OF EXPERIENCE</small>
        </p>

        <a className="primary-button" href="#contact">
          BOOK CONSULTATION
        </a>
      </div>
    </section>


    <section className="artist section-pad" id="about">
      <div className="artist-image"><img src={photos.doctor} alt="Doctor in clinic"/></div>
      <div className="artist-copy">
        <SectionTitle>THE SURGEON &amp; ARTIST</SectionTitle>
        <blockquote>“Every incision is a sculptured stroke. We do not mass-produce beauty — we unveil proportion that honors natural biology.”</blockquote>
        <p>Internationally acknowledged as one of the premier aesthetic sculptors on the East Coast, Dr. Geoffrey Vaz approaches plastic surgery through the lens of classical Leonardo-esque proportions and uncompromising medical integrity.</p>
        <div className="signature"><span>—</span><div><b>Geoffrey Vaz, M.D.</b><small>ABPS DIPLOMAT • QUAD-A SURGICAL DIRECTOR</small></div></div>
      </div>
    </section>

    <section className="training section-pad">
      <div className="center-heading"><SectionTitle>TRAINING WITH DOCTOR</SectionTitle><p>Not just another filler. Sculptra is a biostimulatory aesthetic injectable that helps stimulate your own natural collagen<br className="desktop"/> production to smooth facial wrinkles and improve skin tightness, revealing a refreshed-looking you.</p></div>
      <div className="video-frame" style={{backgroundImage:`linear-gradient(#0008,#0008),url(${photos.training})`}}>
        <button className="play-button" aria-label="Play training video"><Play fill="currentColor"/></button>
      </div>
    </section>

    <section className="injectables section-pad" id="injectables">
      <div className="section-top"><SectionTitle>INJECTABLES</SectionTitle><div className="slider-arrows"><button onClick={() => setSlide(Math.max(0, slide-1))} aria-label="Previous"><ArrowLeft/></button><button onClick={() => setSlide(Math.min(injectables.length-1, slide+1))} aria-label="Next"><ArrowRight/></button></div></div>
      <div className="inject-grid">{visible.map((item,i)=><article className="inject-card" key={`${item[0]}-${i}`}><img src={item[2]} alt="Aesthetic treatment"/><div className="inject-card-copy"><h3>{item[0]}</h3><p>{item[1]}</p></div></article>)}</div>
      <div className="center-link"><TextLink>VIEW ALL INJECTABLES</TextLink></div>
    </section>

    
    <section className="split-feature section-pad" id="body">
      <img
        className="feature-background"
        src={photos.face}
        alt="Skin treatment and rejuvenation"
      />

      <div className="feature-overlay" />

      <div className="feature-copy">
        <SectionTitle>SKIN THAT FEELS LIKE YOU AGAIN</SectionTitle>

        <p>
          Not just another filler. Sculptra is a biostimulatory aesthetic
          injectable that helps stimulate your own natural collagen
          production to smooth facial wrinkles and improve skin tightness,
          revealing a refreshed-looking you.
        </p>

        <div className="number-grid">
          {[
            ["01", "Sculptra", "Restore natural collagen and improve skin quality for firmer, glowing skin in the entire cheek region. Help tighten skin along the cheeks and jawline."],
            ["02", "Rich PL", "Soften and improve smile lines by gradually reducing the appearance of facial folds and wrinkles."],
            ["03", "HArmonyCa", "Smooth the lines that run from your mouth to your chin"],
            ["04", "Skin Boosters", "Smooth the lines that run from your mouth to your chin"],
            ["05", "PDRN", "Smooth the lines that run from your mouth to your chin"]
          ].map(x => (
            <div className="number-card" key={x[0]}>
              <span>{x[0]}</span>
              <h3>{x[1]}</h3>
              <p>{x[2]}</p>
            </div>
          ))}
        </div>

        <TextLink>EXPLORE SCULPTRA</TextLink>
      </div>
    </section>


    <section className="body-section section-pad" id="breast">
      <div className="body-copy"><SectionTitle>FACE</SectionTitle><p>Dr. Geoffrey is putting Philadelphia body contouring on the map with his unique and innovative approach to anatomical re-sculpting. Internationally recognized for transformative procedures, high-definition contouring, and uncompromising patient care.</p><p>Having traveled across global aesthetic capitals to master the world’s most refined methods, his patients experience thoughtful planning, natural results, and individualized care.</p>
        <div className="accordion-list">{["Upper face","Mid face","Lower Face"].map((x,i)=><details key={x}><summary>{x}<span>›</span></summary><p>{["Refined treatments tailored to your natural facial structure.","Balanced proportions and personalized aesthetic planning.","Natural-looking definition with an individualized approach."][i]}</p></details>)}</div>
      </div>
      <div className="case-image"><img src={photos.model} alt="Aesthetic results model"/><a href="#contact">Mommy Makeover • 9-Month Follow-Up <ArrowRight/></a></div>
    </section>

    <section className="wellness section-pad" id="wellness">
      <div className="wellness-copy"><SectionTitle>WELLNESS</SectionTitle><p>Wellness treatments are on the rise globally, with research on how to help patients live longer, be healthier, and recover faster from surgical interventions. Our integrative wellness approach helps patients achieve healthy vitality through physician-supervised programs.</p>
        <div className="programs"><h3>KEY CLINICAL PROGRAMS</h3><div>{["Physician-supervised wellness","Weight management","Regenerative protocols","Semaglutide / GLP-1","Tirzepatide","NAD+ Cellular Infusions"].map(x=><span key={x}><CheckCircle2/>{x}</span>)}</div></div><TextLink>SEMAGLUTIDE &amp; PEPTIDE</TextLink>
      </div><img src={photos.wellness} alt="Wellness and skincare"/>
    </section>

    <section className="skin-section section-pad" id="lasers">
      <div className="skin-photo" style={{backgroundImage:`linear-gradient(90deg,#030d22cc,#030d2280),url(${photos.skin})`}}/>
      <div className="skin-list">{skinTreatments.map(x=><article key={x[0]}><h3>{x[0]}</h3><p>{x[1]}</p></article>)}</div>
      <div className="skin-intro"><SectionTitle>SKIN</SectionTitle><p>The team provides bespoke skin rejuvenation treatments to help patients achieve balanced, dewy skin and a timeless aesthetic texture.</p><TextLink>SKIN TREATMENTS</TextLink></div>
    </section>

    <section className="regenerative section-pad" id="academy">
      <div className="case-image"><img src={photos.model} alt="Aesthetic treatment feature"/><a href="#contact">Mommy Makeover • 9-Month Follow-Up <ArrowRight/></a></div>
      <div className="body-copy"><SectionTitle>REGENERATIVE</SectionTitle><p>Discover personalized regenerative treatments and evidence-informed approaches designed around your goals, health, and natural features.</p><div className="accordion-list">{["Upper face","Mid face","Lower Face"].map(x=><details key={x}><summary>{x}<span>›</span></summary><p>Explore a personalized treatment plan with our clinical team.</p></details>)}</div><TextLink>BODY PROCEDURES</TextLink></div>
    </section>

    <footer className="footer section-pad" id="contact">
      <div className="social"><h2>FOLLOW ME</h2>{["LinkedIn","Instagram","Twitter","YouTube"].map(x=><a href="#" key={x}>{x}<ArrowUpRight/></a>)}</div>
      <div className="footer-nav">{["HOME","ABOUT","SERVICES","CONTACT"].map((x,i)=><a href={i===0?"#home":`#${x.toLowerCase()}`} key={x}>{x}<span>0{i+1}</span></a>)}</div>
      <div className="footer-wordmark">GEOFFREY VAZ</div>
      <small className="copyright">© {new Date().getFullYear()} Dr. Geoffrey Vaz. All rights reserved.</small>
    </footer>
  </main>;
}