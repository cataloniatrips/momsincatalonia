import Link from 'next/link';
import styles from './page.module.css';

export default function Home() {
  return (
    <>
      <section className={styles.hero}>
        <div className="container">
          <p className={styles.eyebrow}>For international moms in Catalonia</p>
          <h1>Plan easy, kid-friendly days around Barcelona</h1>
          <p className={styles.subtitle}>
            Pick one idea and go enjoy time together — we collect the family details in one place.
          </p>

          <div className={styles.cta}>
            <Link href="/explore" className={styles.heroButton}>
              Explore itineraries
            </Link>
            <Link href="/events" className={styles.heroButton}>
              See upcoming events
            </Link>
          </div>
        </div>
      </section>

      <section className={styles.highlight}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <h2>Featured this week</h2>
            <p>
              A few handpicked ideas you can save, adapt, and make your own — no endless scrolling or planning
              spreadsheets.
            </p>
          </div>

          <div className={styles.highlightGrid}>
            <article className={styles.highlightCard}>
              <div className={styles.highlightTag}>Barcelona · Half day</div>
              <h3>Ciutadella park picnic &amp; boat ride</h3>
              <p>
                Stroller-friendly outing with playgrounds, shade, and coffee nearby. Easy to stretch or shorten depending
                on naps.
              </p>
              <div className={styles.highlightMeta}>
                <span>? 2–7 years</span>
                <span>? Outdoors</span>
              </div>
            </article>

            <article className={styles.highlightCard}>
              <div className={styles.highlightTag}>Tarragona · Day trip</div>
              <h3>Old town wander &amp; beach stop</h3>
              <p>
                Simple walking loop through the old town, ice cream break, and time at a family-friendly beach with
                facilities.
              </p>
              <div className={styles.highlightMeta}>
                <span>🚆 Easy by train</span>
                <span>🥪 Picnic friendly</span>
              </div>
            </article>

            <article className={styles.highlightCard}>
              <div className={styles.highlightTag}>Indoors · Flexible</div>
              <h3>Rainy Sunday in the city</h3>
              <p>
                Museum stop, café with play corner, and a cozy craft session at home with a ready-to-go list of
                supplies.
              </p>
              <div className={styles.highlightMeta}>
                <span>🌧️ Rainy-day safe</span>
                <span>? Mix of free &amp; paid</span>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className={styles.testimonials}>
        <div className="container">
          <div className={styles.sectionHeaderCentered}>
            <h2>What other moms are saying</h2>
            <p>Real experiences from families who used these ideas to explore Catalonia without the overwhelm.</p>
          </div>
          <div className={styles.testimonialGrid}>
            <figure className={styles.testimonialCard}>
              <p className={styles.testimonialQuote}>
                “I finally stopped scrolling Instagram and just picked one of the itineraries. The kids were tired-happy
                instead of meltdown-tired.”
              </p>
              <figcaption className={styles.testimonialMeta}>Anna · mom of 2 in Gràcia</figcaption>
            </figure>
            <figure className={styles.testimonialCard}>
              <p className={styles.testimonialQuote}>
                “As a new expat, having age-appropriate ideas in English made weekends feel doable again.”
              </p>
              <figcaption className={styles.testimonialMeta}>Maya · recently moved from the UK</figcaption>
            </figure>
            <figure className={styles.testimonialCard}>
              <p className={styles.testimonialQuote}>
                “The little notes like ‘bring snacks here’ and ‘good stroller route’ are exactly what I need.”
              </p>
              <figcaption className={styles.testimonialMeta}>Carla · mom of a toddler &amp; baby</figcaption>
            </figure>
          </div>
        </div>
      </section>

      <section className={styles.newsletter}>
        <div className="container">
          <div className={styles.newsletterInner}>
            <div>
              <h2>Stay in the loop</h2>
              <p>
                Get one short email a week with fresh family ideas in and around Catalonia — no spam, just practical
                inspiration.
              </p>
            </div>
            <form className={styles.newsletterForm}>
              <input
                type="email"
                placeholder="Email address"
                aria-label="Email address"
              />
              <button type="button" className={styles.heroButton}>
                Get weekly ideas
              </button>
            </form>
          </div>
        </div>
      </section>

      <section className={styles.features}>
        <div className="container">
          <h2>What you'll find here</h2>
          <div className={styles.grid}>
            <div className={styles.card}>
              <h3>🗺️ Ready-made itineraries</h3>
              <p>
                Curated day trips and weekend plans created by moms who actually live here — with nap breaks,
                playgrounds, and backup options.
              </p>
            </div>
            <div className={styles.card}>
              <h3>? Events for connection</h3>
              <p>
                Local meetups, playdates, and family-friendly events so you and your kids can build a community faster.
              </p>
            </div>
            <div className={styles.card}>
              <h3>💡 Practical resources</h3>
              <p>
                Schools, healthcare, transport, and daily-life tips to help you feel settled and confident as an expat
                mom.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
