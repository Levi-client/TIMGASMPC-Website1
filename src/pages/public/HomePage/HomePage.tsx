import {
  ArrowRight,
  BookOpen,
  CheckCircle2,
  Coins,
  HandCoins,
  ShieldCheck,
  Sprout,
  Users,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/shared/Button/Button";
import {
  PhotoCarousel,
  type CarouselPhoto,
} from "@/pages/public/HomePage/components/PhotoCarousel/PhotoCarousel";
import officeImage from "@/assets/images/website/Hero.png";
import hero640Avif from "@/assets/images/website/optimized/hero-640.avif";
import hero960Avif from "@/assets/images/website/optimized/hero-960.avif";
import hero1440Avif from "@/assets/images/website/optimized/hero-1440.avif";
import hero640Webp from "@/assets/images/website/optimized/hero-640.webp";
import hero960Webp from "@/assets/images/website/optimized/hero-960.webp";
import hero1440Webp from "@/assets/images/website/optimized/hero-1440.webp";
import officeFacadeImage from "@/assets/images/office/timgas-office-facade.jpg";
import officeFacade640Avif from "@/assets/images/office/optimized/office-facade-640.avif";
import officeFacade960Avif from "@/assets/images/office/optimized/office-facade-960.avif";
import officeFacade1440Avif from "@/assets/images/office/optimized/office-facade-1440.avif";
import officeFacade640Webp from "@/assets/images/office/optimized/office-facade-640.webp";
import officeFacade960Webp from "@/assets/images/office/optimized/office-facade-960.webp";
import officeFacade1440Webp from "@/assets/images/office/optimized/office-facade-1440.webp";
import roadsideSignImage from "@/assets/images/office/timgas-roadside-sign.jpg";
import roadsideSign640Avif from "@/assets/images/office/optimized/roadside-sign-640.avif";
import roadsideSign960Avif from "@/assets/images/office/optimized/roadside-sign-960.avif";
import roadsideSign1440Avif from "@/assets/images/office/optimized/roadside-sign-1440.avif";
import roadsideSign640Webp from "@/assets/images/office/optimized/roadside-sign-640.webp";
import roadsideSign960Webp from "@/assets/images/office/optimized/roadside-sign-960.webp";
import roadsideSign1440Webp from "@/assets/images/office/optimized/roadside-sign-1440.webp";
import frontView from "@/assets/images/website/Timgas.png";
import frontView640Avif from "@/assets/images/website/optimized/front-view-640.avif";
import frontView960Avif from "@/assets/images/website/optimized/front-view-960.avif";
import frontView1440Avif from "@/assets/images/website/optimized/front-view-1440.avif";
import frontView640Webp from "@/assets/images/website/optimized/front-view-640.webp";
import frontView960Webp from "@/assets/images/website/optimized/front-view-960.webp";
import frontView1440Webp from "@/assets/images/website/optimized/front-view-1440.webp";
import { principles } from "@/data/content";
import { AboutPage } from "@/pages/public/AboutPage/AboutPage";
import { ContactPage } from "@/pages/public/ContactPage/ContactPage";
import { CertificationsSection } from "@/pages/public/HomePage/components/CertificationsSection/CertificationsSection";
import { MembershipPage } from "@/pages/public/MembershipPage/MembershipPage";
import { NewsPage } from "@/pages/public/NewsPage/NewsPage";
import styles from "@/styles/user/HomePage.module.css";

const officePhotos: CarouselPhoto[] = [
  {
    src: officeImage,
    avifSrcSet: `${hero640Avif} 640w, ${hero960Avif} 960w, ${hero1440Avif} 1440w`,
    webpSrcSet: `${hero640Webp} 640w, ${hero960Webp} 960w, ${hero1440Webp} 1440w`,
    alt: "Front entrance of the TIMGAS Multi-Purpose Cooperative office",
    caption: "TIMGAS cooperative office",
    width: 1536,
    height: 1024,
  },
  {
    src: officeFacadeImage,
    avifSrcSet: `${officeFacade640Avif} 640w, ${officeFacade960Avif} 960w, ${officeFacade1440Avif} 1440w`,
    webpSrcSet: `${officeFacade640Webp} 640w, ${officeFacade960Webp} 960w, ${officeFacade1440Webp} 1440w`,
    alt: "Upper facade and main sign of the TIMGAS MPC office",
    caption: "Office facade and main sign",
    width: 1600,
    height: 1200,
  },
  {
    src: roadsideSignImage,
    avifSrcSet: `${roadsideSign640Avif} 640w, ${roadsideSign960Avif} 960w, ${roadsideSign1440Avif} 1440w`,
    webpSrcSet: `${roadsideSign640Webp} 640w, ${roadsideSign960Webp} 960w, ${roadsideSign1440Webp} 1440w`,
    alt: "TIMGAS MPC roadside sign in Trinidad, Bohol",
    caption: "TIMGAS roadside sign",
    width: 1600,
    height: 1200,
  },
  {
    src: frontView,
    avifSrcSet: `${frontView640Avif} 640w, ${frontView960Avif} 960w, ${frontView1440Avif} 1440w`,
    webpSrcSet: `${frontView640Webp} 640w, ${frontView960Webp} 960w, ${frontView1440Webp} 1440w`,
    alt: "Front view of the TIMGAS MPC office",
    caption: "Front view of the office",
    width: 1536,
    height: 1024,
  },
];

export function HomePage() {
  const [heroReady, setHeroReady] = useState(false);
  const [serviceRailVisible, setServiceRailVisible] = useState(false);
  const [impactVisible, setImpactVisible] = useState(false);
  const serviceRailRef = useRef<HTMLElement>(null);
  const impactRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const revealHero = () => setHeroReady(true);
    const fallbackTimer = window.setTimeout(revealHero, 3200);

    window.addEventListener("timgas:hero-ready", revealHero, { once: true });

    return () => {
      window.clearTimeout(fallbackTimer);
      window.removeEventListener("timgas:hero-ready", revealHero);
    };
  }, []);

  useEffect(() => {
    if (!heroReady) return;

    const section = serviceRailRef.current;
    if (!section || typeof IntersectionObserver === "undefined") {
      setServiceRailVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        setServiceRailVisible(true);
        observer.disconnect();
      },
      { threshold: 0.2, rootMargin: "0px 0px -5%" },
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, [heroReady]);

  useEffect(() => {
    if (!heroReady) return;

    const section = impactRef.current;
    if (!section || typeof IntersectionObserver === "undefined") {
      setImpactVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        setImpactVisible(true);
        observer.disconnect();
      },
      { threshold: 0.18, rootMargin: "0px 0px -8%" },
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, [heroReady]);

  return (
    <>
      <section
        id="home"
        className={`${styles.hero} ${heroReady ? styles.heroReady : ""}`}
      >
        <picture className={styles.heroMedia}>
          <source
            type="image/avif"
            srcSet={`${hero640Avif} 640w, ${hero960Avif} 960w, ${hero1440Avif} 1440w`}
            sizes="(max-width: 40rem) 100vw, 75vw"
          />
          <source
            type="image/webp"
            srcSet={`${hero640Webp} 640w, ${hero960Webp} 960w, ${hero1440Webp} 1440w`}
            sizes="(max-width: 40rem) 100vw, 75vw"
          />
          <img
            className={styles.heroImage}
            src={officeImage}
            alt="Front entrance of the TIMGAS Multi-Purpose Cooperative office in Trinidad, Bohol"
            width="1536"
            height="1024"
            loading="eager"
            decoding="async"
            fetchPriority="high"
          />
        </picture>
        <div className={styles.heroOverlay} aria-hidden="true" />
        <div className={`container ${styles.heroContent}`}>
          <p className={styles.kicker}>TIMGAS Multi Purpose Cooperative</p>
          <h1 aria-label="Your partner in financial growth.">
            Your partner in
            <br />
            <em>financial growth.</em>
          </h1>
          <p>
            We help members build secure livelihoods through responsible
            financial services, farm support, and the power of cooperation.
          </p>
          <div className={styles.heroActions}>
            <Button to="/#membership">
              <Users size={18} /> Become a member <ArrowRight size={18} />
            </Button>
            <Button
              to="/#about"
              variant="secondary"
              className={styles.heroSecondary}
            >
              <BookOpen size={18} /> Discover our story
            </Button>
          </div>
          <ul className={styles.heroTrust} aria-label="Cooperative strengths">
            <li>
              <Users aria-hidden="true" />
              <span>
                Stronger
                <br />
                communities
              </span>
            </li>
            <li>
              <ShieldCheck aria-hidden="true" />
              <span>
                Trusted
                <br />
                since 1995
              </span>
            </li>
            <li>
              <Sprout aria-hidden="true" />
              <span>
                Growing
                <br />
                together
              </span>
            </li>
          </ul>
        </div>
        <div className={styles.heroSweep} aria-hidden="true" />
      </section>

      <section
        ref={serviceRailRef}
        className={`${styles.serviceRail} ${
          serviceRailVisible ? styles.serviceRailVisible : ""
        }`}
        aria-labelledby="services-title"
      >
        <div className={`container ${styles.serviceRailInner}`}>
          <div className={styles.serviceIntro}>
            <p className={styles.serviceEyebrow}>Our services</p>
            <h2 id="services-title">
              Building a stronger and more sustainable future.
            </h2>
          </div>
          <div className={styles.serviceItems}>
            <article>
              <Coins aria-hidden="true" />
              <div>
                <h3>Savings &amp; deposits</h3>
                <p>Reliable ways to grow your savings.</p>
              </div>
            </article>
            <article>
              <HandCoins aria-hidden="true" />
              <div>
                <h3>Loans &amp; credit</h3>
                <p>Flexible financial support for your needs.</p>
              </div>
            </article>
            <article>
              <Sprout aria-hidden="true" />
              <div>
                <h3>Farm support</h3>
                <p>Helping members build productive farms.</p>
              </div>
            </article>
            <article>
              <Users aria-hidden="true" />
              <div>
                <h3>Member benefits</h3>
                <p>More value and opportunities for you.</p>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section
        ref={impactRef}
        className={`${styles.impact} ${
          impactVisible ? styles.impactVisible : ""
        }`}
      >
        <div className={`container ${styles.impactGrid}`}>
          <PhotoCarousel
            ariaLabel="TIMGAS office photo gallery"
            photos={officePhotos}
          />
          <div className={styles.impactCopy}>
            <p className="eyebrow">Community purpose, close to home</p>
            <h2>
              <span>A long-standing partner</span>
              <span>in financial growth.</span>
            </h2>
            <p>
              Established on July 25, 1995, TIMGAS MPC works to uplift the
              economic status of its members through quality products and
              services. Its published objectives include:
            </p>
            <ul>
              <li>
                <CheckCircle2 /> Financial support for members seeking
                additional business capital and income opportunities
              </li>
              <li>
                <CheckCircle2 /> Development of self-help and self-employment
                capacity among individual members
              </li>
              <li>
                <CheckCircle2 /> An alternative banking option for underserved
                communities
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="section">
        <div className={`container ${styles.valuesHeader}`}>
          <div>
            <p className="eyebrow">What guides us</p>
            <h2>Built on trust. Driven by purpose.</h2>
          </div>
          <p>
            These cooperative principles guide TIMGAS MPC in delivering member
            savings, responsible loan support, and community-rooted services
            that help families and local livelihoods grow.
          </p>
        </div>
        <div className={`container ${styles.principles}`}>
          {principles.map(([title, description]) => (
            <article key={title}>
              <h3>{title}</h3>
              <p>{description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className={styles.download}>
        <div className={`container ${styles.downloadInner}`}>
          <div>
            <p className="eyebrow">Ready to get started?</p>
            <h2>Your cooperative journey begins with an inquiry.</h2>
            <p>
              Contact TIMGAS MPC for the current membership process, or review
              the available application methods before visiting the office.
            </p>
          </div>
          <div>
            <Button to="/#application" variant="light">
              View application options <ArrowRight size={18} />
            </Button>
          </div>
        </div>
      </section>

      <AboutPage />
      <CertificationsSection />
      <MembershipPage />
      <NewsPage />
      <ContactPage />
    </>
  );
}
