import { useEffect, useRef, useState } from "react";
import {
  BookOpen,
  HandHeart,
  Handshake,
  Leaf,
  ShieldCheck,
  Sprout,
  Star,
  Users,
} from "lucide-react";
import officeImage from "@/assets/images/website/optimized/front-view-960.webp";
import missionStatsImage from "@/assets/images/website/timgas-mission-stats.webp";
import visionStatsImage from "@/assets/images/website/timgas-vision-stats.webp";
import { Button } from "@/components/shared/Button/Button";
import { objectives, socialGoals } from "@/data/content";
import styles from "@/styles/user/AboutPage.module.css";

const cooperativeName =
  "Tinabangay sa Igsoong Mag-uuma Gasa ni San Isidro Multi-Purpose Cooperative";

const objectiveLabels = [
  "Financial opportunity",
  "Self-help capacity",
  "Fairer choices",
  "Accessible banking",
  "Community participation",
  "Institutional self-reliance",
];

const romanNumerals = ["I", "II", "III", "IV", "V", "VI"];

const coreValueDetails = [
  {
    title: "Trustworthy",
    description: "We are honest, transparent, and reliable in all we do.",
    icon: ShieldCheck,
  },
  {
    title: "Integrity",
    description: "We uphold the highest standards of ethics and accountability.",
    icon: Users,
  },
  {
    title: "Model cooperative",
    description: "We practice the true spirit of cooperation and mutual support.",
    icon: Handshake,
  },
  {
    title: "God-fearing",
    description: "We put our faith in God as our source of strength and guidance.",
    icon: Leaf,
  },
  {
    title: "Articulate",
    description: "We communicate openly and responsibly for a shared purpose.",
    icon: Sprout,
  },
  {
    title: "Sincerity",
    description: "We serve with genuine care, commitment, and a sincere heart.",
    icon: Star,
  },
];

export function AboutPage() {
  const purposeSectionRef = useRef<HTMLElement>(null);
  const [purposeVisible, setPurposeVisible] = useState(false);

  useEffect(() => {
    const section = purposeSectionRef.current;
    if (!section || typeof IntersectionObserver === "undefined") {
      setPurposeVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        setPurposeVisible(true);
        observer.disconnect();
      },
      { threshold: 0.25, rootMargin: "0px 0px -8%" },
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  return (
    <div id="about">
      <section className={`section ${styles.story}`}>
        <div className={`container ${styles.storyGrid}`}>
          <figure className={styles.officeVisual}>
            <span className={styles.imageAccent} aria-hidden="true" />
            <img
              src={officeImage}
              alt="TIMGAS MPC cooperative office in Trinidad, Bohol"
            />
          </figure>

          <div className={styles.storyIntro}>
            <p className={`eyebrow ${styles.aboutEyebrow}`}>About TIMGAS MPC</p>
            <h2>A strong and trusted cooperative.</h2>
            <p>
              Established on July 25, 1995, TIMGAS MPC serves its members from
              Purok 5, Poblacion, Trinidad, Bohol, with the goal of improving
              their economic well-being through quality products and services.
            </p>
            <ul
              className={styles.trustSignals}
              aria-label="Cooperative strengths"
            >
              <li>
                <span>
                  <ShieldCheck aria-hidden="true" />
                </span>
                Member focused
              </li>
              <li>
                <span>
                  <HandHeart aria-hidden="true" />
                </span>
                Reliable services
              </li>
              <li>
                <span>
                  <Users aria-hidden="true" />
                </span>
                Community driven
              </li>
            </ul>
          </div>

          <aside className={styles.profileCard} aria-label="TIMGAS MPC profile">
            <h3>{cooperativeName}</h3>
            <p>
              Commonly known as TIMGAS MPC, the cooperative was established on
              July 25, 1995. Its published vision, mission, objectives, core
              values, and social goals guide its work with members and the
              surrounding community.
            </p>
            <dl className={styles.facts}>
              <div>
                <dt>Established</dt>
                <dd>July 25, 1995</dd>
              </div>
              <div>
                <dt>Cooperative type</dt>
                <dd>Multi-purpose cooperative</dd>
              </div>
              <div>
                <dt>Office location</dt>
                <dd>Purok 5, Poblacion, Trinidad, Bohol</dd>
              </div>
            </dl>
          </aside>
        </div>
      </section>

      <section
        ref={purposeSectionRef}
        className={`section ${styles.muted} ${styles.purposeSection} ${
          purposeVisible ? styles.purposeVisible : ""
        }`}
      >
        <div className="container">
          <div className={styles.purposeGrid}>
            <article className={styles.purposeCard}>
              <div className={styles.purposeContent}>
                <p className="eyebrow">Our mission</p>
                <h2>Uplift every member’s economic status.</h2>
                <p>
                  To uplift the economic status of every member by providing
                  quality products and services.
                </p>
              </div>
              <img
                className={styles.purposeImage}
                src={missionStatsImage}
                alt="Productive green fields at sunrise"
                loading="lazy"
              />
            </article>
            <article className={styles.purposeCard}>
              <div className={styles.purposeContent}>
                <p className="eyebrow">Our vision</p>
                <h2>A strong and trusted cooperative.</h2>
                <p>
                  A strong and trusted cooperative where members are progressive
                  with pride and dignity.
                </p>
              </div>
              <img
                className={styles.purposeImage}
                src={visionStatsImage}
                alt="Fresh green leaves growing in a field"
                loading="lazy"
              />
            </article>
          </div>

          <div className={styles.coreValues}>
            <header className={styles.coreValuesHeading}>
              <p className="eyebrow">Our core values</p>
              <h2>
                <span>The values behind</span>{" "}
                <span>TIMGAS.</span>
              </h2>
              <p>
                Our core values guide our actions and keep us focused on what
                truly matters: our members, our community, and a better tomorrow.
              </p>
            </header>
            <div className={styles.valueGrid}>
              {coreValueDetails.map(({ title, description, icon: Icon }) => (
                <article key={title}>
                  <span className={styles.valueIcon}>
                    <Icon aria-hidden="true" />
                  </span>
                  <h3>{title}</h3>
                  <p>{description}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section
        className={`section ${styles.muted} ${styles.objectivesSection}`}
      >
        <div className="container">
          <header className={styles.objectivesHeading}>
            <p className="eyebrow">Our objectives</p>
            <h2>Building member and community self-reliance.</h2>
          </header>
          <ol className={styles.objectiveBoard}>
            {objectives.map((objective, index) => (
              <li key={objective}>
                <span className={styles.objectiveNumber} aria-hidden="true">
                  {romanNumerals[index]}
                </span>
                <article>
                  <h3>{objectiveLabels[index]}</h3>
                  <p>{objective}</p>
                </article>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className={`section ${styles.socialGoalsSection}`}>
        <div className={`container ${styles.socialPanel}`}>
          <div className={styles.socialContent}>
            <header className={styles.socialIntro}>
              <p className="eyebrow">Our social goals</p>
              <h2>Working toward sustainable rural development.</h2>
              <p>
                Practical goals that strengthen the cooperative, equip its
                people, and support resilient rural communities.
              </p>
            </header>
            <div className={styles.socialGoals}>
              <article>
                <span className={styles.socialIcon}>
                  <Users aria-hidden="true" />
                </span>
                <div>
                  <h3>A viable, empowered cooperative</h3>
                  <p>{socialGoals[0]}</p>
                </div>
              </article>
              <article>
                <span className={styles.socialIcon}>
                  <BookOpen aria-hidden="true" />
                </span>
                <div>
                  <h3>Training that builds lasting capacity</h3>
                  <p>{socialGoals[1]}</p>
                </div>
              </article>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.cta}>
        <div className="container">
          <div>
            <h2>There is a place for you here.</h2>
            <p>Discover what TIMGAS MPC membership can help you build.</p>
          </div>
          <Button to="/#application" variant="light">
            Start your application
          </Button>
        </div>
      </section>
    </div>
  );
}
