"use client";

import { useRef, useState } from "react";
import {
  ArrowRight, ArrowLeft, ArrowUpRight, CheckCircle2, Play, Menu, X,
} from "lucide-react";

const photos = {
  hero: "/images/geoffrey2.png",
  doctor: "/images/second.jpg",
  training: "/images/third.png",
  inject1: "/images/carosule.jpg",
  inject2: "/images/carosule1.jpg",
  inject3: "/images/carosule2.jpg",
  face: "/images/fivethsection.png",
  wellness: "/images/seven.png",
  skin: "/images/eight.jpg",
  model: "/images/nine.jpg",
};

const injectables = [
  ["BOTOX & WRINKLE RELAXER", "Botox®, Dysport®, and Daxxify® micro-dosed to soften forehead bands, crow’s feet, and gummy smiles while preserving natural human expression.", photos.inject1],
  ["BARBIETOX & CALF TOX", "A personalized approach to proportion and contour, planned around your anatomy, goals, and clinical assessment.", photos.inject2],
  ["FACIAL BALANCING & JAWLINE", "Thoughtful facial balancing focused on proportion, structure, and harmony.", photos.inject3],
  ["LIP AUGMENTATION", "Thoughtful, balanced enhancement designed to complement your natural features.", photos.inject2],
];

const skinTreatments = [
  ["IPL (Intense Pulsed Light)", "Light-based treatment options for selected tone and pigmentation concerns."],
  ["CHEMICAL PEELS", "Medical-grade peel options selected for individual skin concerns."],
  ["DERMAFRAC", "A facial treatment approach focused on cleansing and hydration."],
  ["HYDRAFACIAL", "A facial treatment focused on cleansing, exfoliation, and hydration."],
  ["RF", "Explore radiofrequency-based skin treatment options."],
  ["MNRF", "Discuss microneedling and radiofrequency treatment options."],
  ["MICRONEEDLING", "Review collagen-induction treatment options with a clinician."],
];

const bodyProcedures = [
  ["Tummy Tuck (Abdominoplasty)", "Discuss abdominal contouring and muscle repair where appropriate."],
  ["Comprehensive Mommy Makeover", "A coordinated plan based on individual anatomy and goals."],
  ["High-Definition Liposuction", "Learn about body-contouring options and candidacy."],
  ["Radiofrequency Skin Tightening", "Explore technology-based skin treatment options."],
];

const breastProcedures = [
  [["Vertical Scar Mastopexy", "Review breast-lift techniques, goals, and potential trade-offs."],
   ["Dual-Plane Augmentation", "Discuss implant options, placement, and individualized planning."]],
  [["Lift + Implants", "Understand combined procedure planning and recovery considerations."],
   ["Implant Removal & Recontouring", "Explore implant removal and reconstructive options with a surgeon."]],
];

const laserTreatments = [
  ["Halo Laser", "Hybrid fractional laser treatment options for selected skin concerns."],
  ["Broadband Light (BBL)", "Light-based options for selected pigmentation and redness concerns."],
  ["Forever Clear", "Discuss light-based approaches for acne-prone skin."],
  ["Moxi Laser", "Explore gentle fractional laser options and recovery expectations."],
];

const results = [
  ["Tummy Tuck", photos.model],
  ["Body Contouring", photos.face],
  ["Facial Rejuvenation", photos.skin],
  ["Injectables", photos.inject1],
];

function Eyebrow({ children }) {
  return <p className="mb-4 font-sans text-xs uppercase tracking-[.2em] text-[#eaa274]">{children}</p>;
}

function SectionTitle({ eyebrow, children }) {
  return <div className="mb-10"><Eyebrow>{eyebrow}</Eyebrow><h2 className="font-display text-4xl uppercase leading-tight text-[#eaa274] sm:text-5xl lg:text-6xl">{children}</h2></div>;
}

function TextLink({ children, href = "#consult" }) {
  return <a href={href} className="mt-8 inline-flex items-center gap-3 border-b border-white/70 pb-2 font-sans text-xs font-semibold uppercase tracking-[.12em] transition hover:border-[#eaa274] hover:text-[#eaa274]">{children}<ArrowUpRight size={16} /></a>;
}

export default function HomePage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [formSent, setFormSent] = useState(false);
  const trackRef = useRef(null);

  const moveCarousel = (direction) => {
    if (!trackRef.current) return;
    trackRef.current.scrollBy({ left: direction * trackRef.current.clientWidth * 0.8, behavior: "smooth" });
  };

  const navItems = [
    ["About", "#about"], ["Body", "#body"], ["Breast", "#breast"],
    ["Lasers", "#lasers"], ["Injectables", "#injectables"],
    ["Wellness", "#wellness"], ["Academy", "#academy"],
  ];

  return (
    <main id="top" className="relative w-full min-h-screen overflow-x-hidden bg-[#03091b] text-[#f6f2f5]">
      {/* Header */}
      <header className="absolute left-0 top-0 z-50 flex h-[76px] w-full items-center justify-between border-b border-white/15 bg-[#190518]/50 px-6 backdrop-blur-md md:h-[88px] md:px-[7.5%]">
        <a href="#top" className="font-display whitespace-nowrap text-2xl italic tracking-wider">Dr. Geoffrey Vaz</a>
        <button className="text-white md:hidden" aria-label={menuOpen ? "Close navigation" : "Open navigation"} aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X size={27} /> : <Menu size={27} />}
        </button>
        <nav className={`${menuOpen ? "flex" : "hidden"} absolute left-0 right-0 top-full flex-col gap-5 border-b border-white/10 bg-[#170a20] px-6 py-6 md:static md:flex md:flex-row md:items-center md:gap-6 md:border-0 md:bg-transparent md:p-0`}>
          {navItems.map(([label, href]) => <a key={href} href={href} onClick={() => setMenuOpen(false)} className="font-sans text-xs uppercase tracking-widest transition hover:text-[#eaa274]">{label}</a>)}
        </nav>
      </header>

      {/* Hero */}


     
{/* Hero */}
<section className="relative isolate flex min-h-[100svh] w-full items-start overflow-hidden bg-[radial-gradient(ellipse_at_72%_48%,#50133f_0%,#260b26_43%,#170818_100%)] px-6 pt-[110px] pb-[280px] md:h-screen md:min-h-[720px] md:items-center md:px-[8%] md:pt-[88px] md:pb-0">

  {/* Background overlay */}
  <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#120414]/20 to-transparent" />

  {/* Left Content */}
  <div className="relative z-20 w-full md:w-[65%] md:-translate-y-2">

    {/* Main Heading */}
    <div className="relative">
      <div className="relative">

        {/* GEOFFREY */}
        <h1 className="relative z-10 whitespace-nowrap font-zapf text-[clamp(42px,10.5vw,82px)] leading-[0.95] font-medium tracking-normal uppercase text-white md:text-[131px] md:leading-[124px]">
          GEOFFREY
        </h1>

        {/* VAZ */}
        <span className="absolute left-[57%] top-[62%] z-0 whitespace-nowrap font-zapf text-[clamp(40px,9vw,68px)] font-medium leading-[1.13] tracking-normal uppercase bg-gradient-to-b from-[#B74DAA] to-[#E9C1E4] bg-clip-text text-transparent md:left-[63%] md:top-[62%] md:text-[clamp(42px,7.16vw,110px)]">
          VAZ
        </span>

      </div>
    </div>

    {/* Subtitle */}
    <div className="relative z-10 mt-8 md:mt-10">
      <h2 className="font-display bg-gradient-to-b from-[#B74DAA] to-[#E9C1E4] bg-clip-text text-transparent text-[clamp(27px,6.5vw,44px)] leading-[1.2] md:text-4xl lg:text-[3rem] md:leading-[1.25]">
        MD Dermatologist
        <br />
        &amp; Medical Aesthetics Expert
      </h2>

      {/* Experience */}
      <p className="mt-6 font-sans text-[15px] font-bold uppercase tracking-wider text-white sm:text-lg md:text-base">
        15+ YEARS <span className="text-sm font-medium">OF EXPERIENCE</span>
      </p>

      {/* Consultation */}
      <a
        href="#consult"
        className="mt-8 inline-flex min-h-[62px] w-full max-w-[360px] items-center justify-center bg-white px-6 font-sans text-sm font-bold uppercase tracking-wide text-[#101326] shadow-lg transition-all duration-300 md:mt-9 md:w-auto md:px-10"
      >
        Book Consultation
      </a>
    </div>
  </div>

  {/* Doctor Image */}
  <div className="pointer-events-none absolute bottom-0 right-0 z-10 flex h-[43%] w-[62%] items-end justify-end md:right-[12%] md:h-[92%] md:w-[55%] md:justify-center">
    <img
      src={photos.hero}
      alt="Dr. Geoffrey Vaz"
      fetchPriority="high"
      className="h-full w-full origin-bottom object-contain object-bottom drop-shadow-2xl md:scale-[2]"
    />
  </div>

</section>

    


      <section
        id="about"
        className="grid min-h-screen items-center gap-8 bg-[#03091b] py-16 pl-[1.5%] pr-[7%] lg:grid-cols-[1.5fr_1fr] lg:gap-[4vw] lg:py-0"
      >
        {/* Left Image */}
        <div className="w-full overflow-hidden aspect-[1.44]">
          <img
            src={photos.doctor}
            alt="Dr. Geoffrey Vaz at his clinic"
            className="h-full w-full object-cover object-center"
            loading="lazy"
          />
        </div>

        {/* Right Content */}
        <div className="flex w-full flex-col justify-center">

          {/* Heading */}
          <h2 className="font-zapf whitespace-nowrap text-[clamp(28px,2.9vw,46px)] font-medium uppercase leading-tight tracking-[0.02em] text-[#eaa274]">
            The Surgeon &amp; Artist
          </h2>

          {/* Quote */}
          <blockquote className="my-7 border-l-2 border-[#eaa274] bg-[#11172b] px-6 py-4 font-sans text-base leading-[1.4] text-[#e0dce5]">
            “Every incision is a sculpted stroke. We do not
            mass-produce beauty — we unveil proportion that
            honors natural biology.”
          </blockquote>

          {/* Description */}
          <p className="font-display text-lg leading-[1.6] text-[#e0dce5]">
            Internationally acknowledged as one of the premier
            aesthetic sculptors on the East Coast, Dr. Geoffrey
            Vaz approaches plastic surgery through the lens of
            classical Leonardo-esque proportions and
            uncompromising medical integrity.
          </p>

          {/* Signature */}
          <div className="mt-14 text-right">
            <p className="font-display text-[30px] leading-tight text-[#eaa274]">
              <span className="mr-2">—</span>
              Geoffrey Vaz, M.D.
            </p>

            <p className="mt-1 font-sans text-sm uppercase tracking-wide text-[#c3bdca]">
              ABPS Diplomat • Quad-A Surgical Director
            </p>
          </div>

        </div>
      </section>



{/* Training With Doctor Section */}
<section
  id="training"
  className="w-full bg-[#03091b] px-6 pb-16 pt-10 md:px-[7.5%] md:pb-20 md:pt-10"
>
  {/* Section Heading */}
  <div className="mx-auto mb-9 max-w-5xl text-center">
    <h2 className="font-zapf text-[32px] font-medium uppercase leading-tight tracking-wide text-[#eaa274] sm:text-4xl md:text-[46px]">
      Training With Doctor
    </h2>

    <p className="mx-auto mt-5 max-w-5xl font-display text-base leading-relaxed text-[#d8d5df] sm:text-lg">
      Not just another filler. Sculptra is a biostimulatory aesthetic
      injectable that helps stimulate your own natural collagen
      production to smooth facial wrinkles and improve skin tightness,
      revealing a refreshed-looking you.
    </p>
  </div>

  {/* Training Image / Video Poster */}
  <div className="group relative mx-auto w-full max-w-[1360px] overflow-hidden bg-black aspect-[2/1]">

    <img
      src={photos.training}
      alt="Dr. Geoffrey Vaz performing an aesthetic treatment"
      className="absolute inset-0 h-full w-full object-cover object-center"
      loading="lazy"
    />

    {/* Dark Image Overlay */}
    <div className="absolute inset-0 bg-[#03091b]/45" />

    {/* Center Play Icon */}
    <div className="absolute inset-0 flex items-center justify-center">
      <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white shadow-lg transition-transform duration-300 group-hover:scale-110 sm:h-[60px] sm:w-[60px]">
        <svg
          viewBox="0 0 24 24"
          className="ml-1 h-7 w-7 fill-[#03091b]"
          aria-hidden="true"
        >
          <path d="M8 5.5v13l10-6.5-10-6.5Z" />
        </svg>
      </div>
    </div>

  </div>
</section>



      {/* Injectables */}
      {/* <section id="injectables" className="bg-[#03091b] px-6 py-20 md:px-[7.5%] md:py-28">
        <div className="mb-10 flex items-end justify-between gap-4">
          <SectionTitle eyebrow="Precision treatments">Injectables</SectionTitle>
          <div className="mb-10 flex shrink-0 gap-3">
            <button onClick={() => moveCarousel(-1)} aria-label="Previous treatments" className="grid h-10 w-10 place-items-center rounded-full bg-white text-[#101326] transition hover:bg-[#eaa274] md:h-12 md:w-12"><ArrowLeft /></button>
            <button onClick={() => moveCarousel(1)} aria-label="Next treatments" className="grid h-10 w-10 place-items-center rounded-full bg-white text-[#101326] transition hover:bg-[#eaa274] md:h-12 md:w-12"><ArrowRight /></button>
          </div>
        </div>
        <div ref={trackRef} className="flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth pb-3 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {injectables.map(([title, description, image]) => <article key={title} className="group relative min-h-[390px] w-[85%] shrink-0 snap-start overflow-hidden bg-[#17182e] sm:w-[calc(50%-8px)] lg:min-h-[430px] lg:w-[calc((100%-2rem)/3)]">
            <img src={image} alt={title} loading="lazy" className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105" />
            <div className="absolute inset-x-0 bottom-0 top-[35%] bg-gradient-to-b from-transparent to-[#03081a]" />
            <div className="absolute bottom-0 z-10 p-5 md:p-6"><h3 className="mb-2 font-sans text-base font-semibold uppercase">{title}</h3><p className="font-display text-base leading-relaxed text-[#e0dce5]">{description}</p></div>
          </article>)}
        </div>
        <div className="text-center"><TextLink>View All Injectables</TextLink></div>
      </section> */}



<section
  id="injectables"
  className="w-full overflow-hidden bg-[#03091b] py-16 md:py-20 md:pl-[8%]"
>

  <div className="mb-12 flex items-center justify-between pl-6 pr-6 md:mb-14">
    <h2 className="font-zapf text-[38px] font-medium uppercase leading-tight text-[#eaa274] md:text-[48px]">
      Injectables
    </h2>

  <div className="md:pl-[8%] md:pr-[8%]">
    <div className="flex shrink-0 gap-3">
      <button
        onClick={() => moveCarousel(-1)}
        aria-label="Previous treatments"
        className="grid h-12 w-12 place-items-center rounded-full bg-white text-[#101326] transition hover:bg-[#eaa274] md:h-14 md:w-14"
      >
        <ArrowLeft />
      </button>

      <button
        onClick={() => moveCarousel(1)}
        aria-label="Next treatments"
        className="grid h-12 w-12 place-items-center rounded-full bg-white text-[#101326] transition hover:bg-[#eaa274] md:h-14 md:w-14"
      >
        <ArrowRight />
      </button>
    </div>
    </div>
  </div>

  <div
    ref={trackRef}
    className="flex w-full snap-x snap-mandatory gap-5 overflow-x-auto scroll-smooth pl-6 pr-0 pb-4 md:gap-7 md:pl-[7%] md:pr-0 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
  >
    {[injectables[1], injectables[0], ...injectables.slice(2)].map(
      ([title, description, image]) => (
        <article
          key={title}
          className="group relative h-[400px] w-[90vw] shrink-0 snap-start overflow-hidden bg-[#11172b] sm:w-[65vw] md:h-[400px] md:w-[390px]"
        >
          <img
            src={image}
            alt={title}
            loading="lazy"
            className="absolute inset-0 h-full w-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
          />

          <div className="absolute inset-x-0 bottom-0 h-[42%] bg-gradient-to-b from-transparent via-[#292039]/75 to-[#292039]/95 backdrop-blur-[3px]" />

          <div className="absolute inset-x-0 bottom-0 z-10 p-5 md:p-5">
            <h3 className="mb-3 font-sans text-[17px] font-semibold uppercase tracking-wide text-white md:text-[19px]">
              {title}
            </h3>

            <p className="font-display text-[15px] leading-[1.5] text-[#f0eaf2] md:text-base">
              {description}
            </p>
          </div>
        </article>
      )
    )}
  </div>

  <div className="mt-10 flex justify-center md:mt-12">
    <TextLink>View All Injectables</TextLink>
  </div>
</section>


<section
  className="relative isolate min-h-[100svh] w-full overflow-hidden bg-[#050b20] bg-inherit bg-center bg-no-repeat"
  style={{
    backgroundImage: `url(${photos.face})`,
  }}
>
  {/* Content layered over the full-width background image */}
  <div className="relative z-10 flex min-h-[100svh] w-full items-center">
    <div className="ml-auto w-full px-6 py-16 sm:px-10 md:w-[66%] md:py-12 md:pl-0 md:pr-[7.5%]">

      <h2 className="font-display text-[clamp(30px,3vw,48px)] uppercase leading-[1.2] text-[#eaa274]">
        Skin That Feels Like You Again
      </h2>

      <p className="mt-5 max-w-[1000px] font-display text-base leading-relaxed text-[#e0dce5] md:text-lg">
        Not just another filler. Sculptra is a biostimulatory aesthetic
        injectable that helps stimulate your own natural collagen production
        to smooth facial wrinkles and improve skin tightness, revealing a
        refreshed-looking you.
      </p>

      <div className="my-7 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {[
          [
            "01",
            "Sculptra",
            "Restore natural collagen and improve skin quality for firmer, glowing skin in the entire cheek region. Help tighten skin along the cheeks and jawline.",
          ],
          [
            "02",
            "Rich PL",
            "Soften and improve smile lines by gradually reducing the appearance of facial folds and wrinkles.",
          ],
          [
            "03",
            "HArmonyCa",
            "Smooth the lines that run from your mouth to your chin.",
          ],
          [
            "04",
            "Skin Boosters",
            "Smooth the lines that run from your mouth to your chin.",
          ],
          [
            "05",
            "PDRN",
            "Smooth the lines that run from your mouth to your chin.",
          ],
        ].map(([number, title, description]) => (
          <article
            key={number}
            className="flex min-h-[190px] flex-col bg-white/[0.09] p-5 md:min-h-[250px]"
          >
            <span className="mb-5 block text-2xl text-[#eaa274]">
              {number}
            </span>

            <h3 className="mb-2 font-sans text-lg font-semibold text-[#eaa274]">
              {title}
            </h3>

            <p className="font-display text-base leading-relaxed text-[#e0dce5]">
              {description}
            </p>
          </article>
        ))}
      </div>

      <TextLink>Explore Sculptra</TextLink>
    </div>
  </div>
</section>



<section className="w-full bg-[#03091b] px-6 py-16 text-[#e5e1e9] sm:px-10 md:px-[7.5%] md:py-24">
  <div className="mx-auto grid max-w-[1600px] items-center gap-12 lg:grid-cols-[1.05fr_1fr] lg:gap-[5vw]">

    {/* Left Content */}
    <div className="w-full">
      <h2 className="mb-7 font-display text-4xl uppercase leading-tight text-[#eaa274] md:text-5xl">
        Face
      </h2>

      <div className="space-y-4 font-display text-base leading-[1.65] text-[#c9c5d0] md:text-lg">
        <p>
          Dr. geoffrey is putting Philadelphia body contouring on the map
          with his unique and innovative approach to anatomical re-sculpting.
          Internationally recognized as “Tuck Daddy”®, Dr. Subbio is globally
          revered for his transformative Mommy Makeovers, high-definition
          360° liposuction, and muscle-repair abdominoplasties.
        </p>

        <p>
          Having traveled across global aesthetic capitals to master the
          world’s most refined subcutaneous suture methods, his patients
          experience minimal tension lines, natural belly-button restorations,
          and breathtaking hourglass proportions.
        </p>
      </div>

      {/* Face Categories */}
      <div className="mt-10 space-y-1">
        {[
          {
            title: "Upper face",
            description:
              "Short-scar muscle plication and organic belly button preservation.",
          },
          {
            title: "Mid face",
            description:
              "Cohesive breast reconstruction with circumferential abdominal contouring.",
          },
          {
            title: "Lower Face",
            description:
              "Subdermal muscular etching, flank sculpting, and autologous fat transfer.",
          },
        ].map((item) => (
          <button
            key={item.title}
            type="button"
            className="group flex w-full items-center justify-between gap-4 border-b border-white/0 py-5 text-left"
          >
            <span>
              <span className="block font-sans text-lg text-[#e4dfe9] md:text-xl">
                {item.title}
              </span>
              <span className="mt-1 block font-display text-sm leading-relaxed text-[#858493] md:text-base">
                {item.description}
              </span>
            </span>

            <span className="shrink-0 text-2xl text-[#eaa274] transition-transform group-hover:translate-x-1">
              ›
            </span>
          </button>
        ))}
      </div>
    </div>

    {/* Right Image Card */}
    <div className="relative mx-auto w-full max-w-[670px] bg-[#f2f0fb] p-[10px] pt-[32px] sm:p-[18px] sm:pt-[40px]">
      <div className="relative aspect-[1.18/1] w-full overflow-hidden bg-[#17172b]">
        <img
          src={photos.model}
          alt="Model showcasing aesthetic body contouring results"
          loading="lazy"
          className="h-full w-full object-cover object-center"
        />

        {/* Image Caption */}
        <div className="absolute bottom-0 left-0 right-0 bg-[#03091b]/95 px-5 py-6 sm:px-7">
          <div className="flex items-center justify-between gap-4">
            <p className="font-display text-base text-[#e5e1e9] sm:text-lg md:text-xl">
              Mommy Makeover • 9-Month Follow-Up
            </p>

            <span className="shrink-0 text-2xl text-[#eaa274]">
              →
            </span>
          </div>
        </div>
      </div>
    </div>

  </div>
</section>



      {/* Body */}
      {/* <section id="body" className="grid items-center gap-12 bg-[#03091b] px-6 py-20 md:grid-cols-[1fr_.95fr] md:gap-[6vw] md:px-[7.5%] md:py-28">
        <div>
          <Eyebrow>Sculpted with intention</Eyebrow>
          <h2 className="font-display text-4xl uppercase text-[#eaa274] sm:text-5xl">Body &amp; Contouring</h2>
          <p className="mt-5 font-display text-lg leading-relaxed text-[#e0dce5]">Explore surgical and non-surgical body-contouring options. Recommendations, recovery, and expected outcomes vary by patient and require consultation.</p>
          <div className="my-7">
            {bodyProcedures.map(([title, copy]) => <a href="#consult" key={title} className="flex items-center justify-between gap-4 border-b border-[#eaa274]/30 py-5 transition hover:text-[#eaa274]"><span><b className="block font-sans text-base font-medium">{title}</b><small className="mt-1 block text-sm leading-relaxed text-[#a9a5b3]">{copy}</small></span><span className="text-3xl text-[#eaa274]">›</span></a>)}
          </div>
          <TextLink>Body Procedures</TextLink>
        </div>
        <div className="relative h-[360px] border border-white/40 p-4 sm:h-[480px] lg:h-[620px]">
          <img src={photos.model} alt="Body contouring editorial" loading="lazy" className="h-full w-full object-cover" />
          <a href="#consult" className="absolute bottom-4 left-4 right-4 flex items-center justify-between bg-[#050b20] p-5 text-sm">Explore body procedures <ArrowRight className="text-[#eaa274]" /></a>
        </div>
      </section> */}

      {/* Breast */}
      <section id="breast" className="bg-[#03091b] px-6 py-20 text-center md:px-[7.5%] md:py-28">
        <Eyebrow>Personalized surgical planning</Eyebrow>
        <h2 className="font-display text-4xl uppercase text-[#eaa274] sm:text-5xl">Breast Procedures</h2>
        <div className="mx-auto my-12 grid max-w-6xl items-center gap-5 md:grid-cols-[1fr_.78fr_1fr] md:gap-[3vw]">
          <div className="grid gap-5">{breastProcedures[0].map(([title, copy]) => <article key={title} className="bg-[#11172b] p-6 text-left"><h3 className="font-sans font-semibold uppercase text-[#eaa274]">{title}</h3><p className="mt-3 font-display text-base leading-relaxed text-[#c3bdca]">{copy}</p></article>)}</div>
          <div className="mx-auto h-[340px] w-3/4 overflow-hidden rounded-[48%] border-[7px] border-purple-900 md:h-[430px] md:w-full"><img src={photos.doctor} alt="Surgical consultation editorial portrait" loading="lazy" className="h-full w-full object-cover grayscale" /></div>
          <div className="grid gap-5">{breastProcedures[1].map(([title, copy]) => <article key={title} className="bg-[#11172b] p-6 text-left"><h3 className="font-sans font-semibold uppercase text-[#eaa274]">{title}</h3><p className="mt-3 font-display text-base leading-relaxed text-[#c3bdca]">{copy}</p></article>)}</div>
        </div>
        <p className="mx-auto max-w-3xl font-display text-base leading-relaxed text-[#c3bdca]">A consultation is required to determine whether a procedure is appropriate and to discuss risks, alternatives, and expected recovery.</p>
        <TextLink>Breast Procedures</TextLink>
      </section>

      {/* Lasers */}
      {/* <section id="lasers" className="relative grid items-center gap-10 bg-[#10142b] bg-cover bg-center px-6 py-20 md:grid-cols-[.9fr_1.1fr] md:gap-[5vw] md:px-[7.5%] md:py-28" style={{ backgroundImage: `linear-gradient(rgba(3,8,27,.88),rgba(3,8,27,.88)),url(${photos.skin})` }}>
        <div>
          <Eyebrow>Advanced skin technology</Eyebrow>
          <h2 className="font-display text-5xl uppercase text-[#eaa274]">Lasers</h2>
          <p className="mt-5 font-display text-lg leading-relaxed text-[#e0dce5]">Explore laser and light-based treatment options for concerns such as texture, tone, redness, and pigmentation. Suitability depends on skin type and clinical assessment.</p>
          <TextLink>Laser Treatments</TextLink>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          {laserTreatments.map(([title, copy]) => <article key={title} className="min-h-44 bg-[#1c1f35]/85 p-6 backdrop-blur-md"><h3 className="font-sans text-lg font-semibold uppercase">{title}</h3><p className="mt-3 font-display text-base leading-relaxed text-[#c4bfcc]">{copy}</p></article>)}
        </div>
      </section> */}

      <section
  id="skin"
  className="relative isolate min-h-[850px] w-full overflow-hidden bg-[#03091b] px-6 py-20 md:min-h-[900px] md:px-[7.5%] md:py-24"
>
  {/* Background image */}
  <div className="absolute inset-0 -z-20">
    <img
      src={photos.skin}
      alt=""
      aria-hidden="true"
      className="h-full w-full object-cover object-center"
    />
  </div>

  {/* Dark overlay */}
  <div className="absolute inset-0 -z-10 bg-[#03091b]/80" />

  {/* Content */}
  <div className="grid items-center gap-12 md:min-h-[650px] md:grid-cols-[1.45fr_0.9fr] md:gap-[5.5vw]">

    {/* Left: Skin treatments */}
    <div className="grid grid-cols-1 gap-x-10 sm:grid-cols-2">
      {[
        {
          title: "IPL (Intense Pulsated Light)",
          description:
            "Subdermal adipose remodeling with radiofrequency microneedling.",
        },
        {
          title: "CHEMICAL PEELS",
          description:
            "Medical-grade TCA & Jessner peels targeting dermal pigmentation.",
        },
        {
          title: "DERMAFRAC",
          description:
            "Vortex-fusion extraction and peptide infusion hydration therapy.",
        },
        {
          title: "HYDRAFACIAL",
          description:
            "Vortex-fusion extraction and peptide infusion hydration therapy.",
        },
        {
          title: "RF",
          description:
            "Vortex-fusion extraction and peptide infusion hydration therapy.",
        },
        {
          title: "MNRF",
          description:
            "SkinPen automated induction with PRP blood concentrates.",
        },
        {
          title: "MICRONEEDLING",
          description:
            "Vortex-fusion extraction and peptide infusion hydration therapy.",
        },
      ].map((item) => (
        <div
          key={item.title}
          className="border-b border-white/70 py-5 md:py-6"
        >
          <h3 className="font-sans text-xl font-semibold uppercase leading-tight tracking-wide text-white md:text-[25px]">
            {item.title}
          </h3>

          <p className="mt-3 max-w-[390px] font-display text-base leading-[1.45] text-[#c5c2cd] md:text-lg">
            {item.description}
          </p>
        </div>
      ))}
    </div>

    {/* Right: Skin introduction */}
    <div className="md:pl-2">
      <h2 className="font-display text-5xl uppercase leading-none text-[#eaa274] md:text-[52px]">
        Skin
      </h2>

      <p className="mt-7 font-display text-lg leading-[1.5] text-[#d5d1dc] md:text-xl">
        The team at Subbio Plastic Surgery provides bespoke skin
        rejuvenation treatments to help patients in the greater
        Philadelphia area achieve balanced, dewy skin and a timeless
        aesthetic texture.
      </p>

      <TextLink>Skin Treatments</TextLink>
    </div>
  </div>
</section>



      {/* Wellness */}


<section
  id="wellness"
  className="w-full bg-[#03091b] px-6 py-16 sm:px-10 md:px-[7.5%] md:py-24"
>
  <div className="mx-auto grid max-w-[1600px] items-center gap-12 md:grid-cols-2 md:gap-[5vw]">

    {/* LEFT CONTENT */}
    <div className="w-full">
      <h2 className="font-display text-4xl uppercase leading-tight text-[#eaa274] md:text-5xl">
        Wellness
      </h2>

      <p className="mt-6 font-display text-base leading-[1.5] text-[#d0ccd6] md:text-lg">
        Wellness treatments are on the rise globally, with research on how
        to help patients live longer, be healthier, and recover faster from
        surgical interventions. Subbio Plastic Surgery remains at the
        forefront of integrative wellness, helping patients achieve healthy
        vitality through physician-supervised weight loss management and
        regenerative protocols.
      </p>

      {/* KEY CLINICAL PROGRAMS */}
      <div className="mt-7 bg-black/25 px-6 py-6 md:px-7">
        <h3 className="mb-5 font-sans text-lg font-semibold uppercase tracking-[0.12em] text-[#eaa274]">
          Key Clinical Programs
        </h3>

        <ul className="grid grid-cols-1 gap-x-8 gap-y-5 sm:grid-cols-2">
          {[
            "Physician-supervised wellness",
            "Weight management",
            "Regenerative protocols",
            "Semaglutide / GLP-1",
            "Tirzepatide",
            "NAD+ Cellular Infusions",
          ].map((item) => (
            <li
              key={item}
              className="flex items-center gap-2.5 font-display text-sm text-[#ded9e2] md:text-base"
            >
              <CheckCircle2
                size={17}
                className="shrink-0 text-[#eaa274]"
              />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* CTA */}
      <div className="mt-8">
        <TextLink>Semaglutide &amp; Peptide</TextLink>
      </div>
    </div>

    {/* RIGHT IMAGE */}
    <div className="relative h-[380px] w-full overflow-hidden sm:h-[480px] md:h-[min(40.5vw,584px)]">
      <img
        src={photos.wellness}
        alt="Wellness editorial portrait"
        loading="lazy"
        className="h-full w-full object-cover object-center"
      />
    </div>

  </div>
</section>



      {/* Results */}
      <section id="results" className="bg-[#03091b] px-6 py-20 text-center md:px-[7.5%] md:py-28">
        <SectionTitle eyebrow="Patient stories">Before &amp; After Results</SectionTitle>
        <p className="mx-auto mb-12 max-w-3xl font-display text-lg leading-relaxed text-[#e0dce5]">View selected patient cases and learn what may be possible. Results vary; images are shared only with appropriate patient authorization.</p>
        <div className="grid grid-cols-2 gap-3 text-center md:grid-cols-4 md:gap-5">
          {results.map(([title, image]) => <article key={title} className="bg-[#f5f3f6] text-[#080d1b]"><img src={image} alt={`Authorized patient case: ${title}`} loading="lazy" className="h-44 w-full object-cover sm:h-56 md:h-[260px]" /><h3 className="p-3 font-sans text-sm font-semibold md:text-base">{title}</h3></article>)}
        </div>
        <TextLink>View Results</TextLink>
      </section>

      {/* Academy / skin treatments */}
      {/* <section id="academy" className="grid items-center gap-12 bg-cover bg-center px-6 py-20 md:grid-cols-2 md:gap-[6vw] md:px-[11%] md:py-28" style={{ backgroundImage: `linear-gradient(rgba(3,8,27,.9),rgba(3,8,27,.92)),url(${photos.skin})` }}>
        <div className="grid gap-x-8 sm:grid-cols-2">
          {skinTreatments.map(([title, copy]) => <article key={title} className="border-b border-white/50 py-5"><h3 className="font-sans text-base font-semibold uppercase">{title}</h3><p className="mt-2 font-display text-sm leading-relaxed text-[#c3bdca]">{copy}</p></article>)}
        </div>
        <div>
          <Eyebrow>Skin health</Eyebrow>
          <h2 className="font-display text-4xl uppercase leading-tight text-[#eaa274] sm:text-5xl">Skin Treatments &amp; Education</h2>
          <p className="mt-5 font-display text-lg leading-relaxed text-[#e0dce5]">Discover personalized skin-care services and educational resources. Treatment selection should be guided by a qualified clinician.</p>
          <TextLink>Skin Treatments</TextLink>
        </div>
      </section> */}

      {/* Consultation */}
      {/* <section id="consult" className="bg-[#0b1025] px-6 py-20 md:px-[7.5%] md:py-28">
        <Eyebrow>Start a conversation</Eyebrow>
        <h2 className="font-display text-4xl uppercase text-[#eaa274] sm:text-5xl">Book a Consultation</h2>
        <p className="mt-5 max-w-3xl font-display text-lg leading-relaxed text-[#e0dce5]">Tell us how to reach you and which area you would like to discuss. Please do not include private medical details in this form.</p>
        <form className="mt-10 grid max-w-4xl gap-5 md:grid-cols-2" onSubmit={(event) => { event.preventDefault(); setFormSent(true); }}>
          <label className="grid gap-2 text-sm tracking-wide">Full name<input name="name" autoComplete="name" required className="form-field" /></label>
          <label className="grid gap-2 text-sm tracking-wide">Email address<input type="email" name="email" autoComplete="email" required className="form-field" /></label>
          <label className="grid gap-2 text-sm tracking-wide">Phone number<input type="tel" name="phone" autoComplete="tel" className="form-field" /></label>
          <label className="grid gap-2 text-sm tracking-wide">Area of interest<select name="interest" className="form-field"><option value="">Select a treatment area</option>{["Body", "Breast", "Injectables", "Lasers / Skin", "Wellness", "Other"].map(value => <option key={value}>{value}</option>)}</select></label>
          <label className="grid gap-2 text-sm tracking-wide md:col-span-2">Message<textarea name="message" rows={4} placeholder="How can our team help?" className="form-field" /></label>
          <button type="submit" className="inline-flex min-h-14 items-center justify-center justify-self-start border border-white bg-white px-9 font-sans text-sm font-semibold uppercase tracking-wider text-[#101326] transition hover:border-[#eaa274] hover:bg-[#eaa274]">Send Inquiry <ArrowRight className="ml-3" size={17} /></button>
          {formSent && <p role="status" className="flex items-center gap-2 text-sm text-[#eaa274]"><CheckCircle2 size={18} /> Form UI submitted. Connect this form to your API or secure form service to receive inquiries.</p>}
        </form>
        <p className="mt-5 text-xs text-[#c3bdca]">Connect this form to your preferred secure intake workflow before publishing.</p>
      </section> */}


 <footer className="w-full overflow-hidden bg-[#03091b] text-[#f4f2f5]">
  <div className="px-[6.8%] pt-[100px] pb-10">

    {/* Top footer columns */}
    <div className="grid grid-cols-1 gap-16 md:grid-cols-2 md:gap-[10%]">

      {/* Social links */}
      <div>
        <h3 className="mb-8 font-display text-[38px] font-normal leading-none">
          FOLLOW ME
        </h3>

        <div className="max-w-[250px] space-y-5">
          {[
            ["LinkedIn", "#"],
            ["Instagram", "#"],
            ["Twitter", "#"],
            ["YouTube", "#"],
          ].map(([name, href]) => (
            <a
              key={name}
              href={href}
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-between font-sans text-[21px] font-normal text-[#c5c5d0] transition-colors hover:text-white"
            >
              <span>{name}</span>
              <span className="text-[27px] leading-none">↗</span>
            </a>
          ))}
        </div>
      </div>

      {/* Footer navigation */}
      <nav className="w-full">
        {[
          ["HOME", "#top", "01"],
          ["ABOUT", "#about", "02"],
          ["SERVICES", "#services", "03"],
          ["CONTACT", "#contact", "04"],
        ].map(([name, href, number]) => (
          <a
            key={name}
            href={href}
            className="flex items-center justify-between border-b border-[#42434e] py-[13px] transition-colors hover:text-[#eaa274]"
          >
            <span className="font-sans text-[27px] font-medium tracking-[0.09em] leading-none">
              {name}
            </span>

            <span className="font-sans text-[22px] font-normal text-[#92939e]">
              {number}
            </span>
          </a>
        ))}
      </nav>
    </div>

    {/* Large footer name */}
    <div className="mt-[105px] w-full">
      <h2
        className="whitespace-nowrap bg-gradient-to-b from-[#d7d8df] via-[#9b9da7] to-[#03091b] bg-clip-text text-center font-display text-[clamp(65px,10.8vw,220px)] font-normal uppercase leading-[0.85] tracking-[-0.045em] text-transparent"
      >
        GEOFFREY VAZ
      </h2>
    </div>
  </div>
</footer>
      {/* Footer */}
      {/* <footer className="border-t border-[#eaa274]/30 bg-[#020614] px-6 py-16 text-center md:px-[7.5%]">
        <a href="#top" className="font-display text-2xl italic tracking-wider">Dr. Geoffrey Vaz</a>
        <p className="mx-auto mt-4 max-w-xl font-display text-base text-[#e0dce5]">Individualized aesthetic care. Informed decisions. Thoughtful outcomes.</p>
        <div className="my-8 flex flex-col justify-center gap-5 font-sans text-xs uppercase tracking-widest sm:flex-row sm:gap-8"><a href="#about" className="hover:text-[#eaa274]">About</a><a href="#consult" className="hover:text-[#eaa274]">Contact</a><a href="#consult" className="hover:text-[#eaa274]">Book Consultation</a></div>
        <small className="text-xs text-[#9895a5]">© {new Date().getFullYear()} Geoffrey Vaz. All rights reserved. Website content is informational and is not a substitute for medical advice.</small>
      </footer> */}
    </main>
  );
}
