import "./About.css";

const About = () => {
  return (
    <>
      <div className="about-container">
        <div className="about-heading">
          <h4 className="indent">01 / ABOUT</h4>
          <h2 className="title desk-ver">
            Building the <br />
            web
            <br />
            <span className="highlight">since 2015.</span>
          </h2>
          <h2 className="title mob-ver">
            Building the web <br />
            <span className="highlight"> since 2015.</span>
          </h2>
        </div>
        <div className="description">
          <div className="paragraphs">
            <p className="introduction-1">
              I'm Alex Kim, a Staff Engineer at Vercel where I focus on
              infrastructure performance and developer experience. Before that I
              spent three years at Stripe building payment orchestration systems
              and two years at Shopify scaling the storefront platform.
            </p>
            <p className="introduction-2">
              I believe great software is invisible — it just works, quickly and
              reliably. I care deeply about the full stack: from database query
              plans to React rendering budgets. I write code that other
              engineers enjoy reading and systems that don't wake people at 3
              a.m.
            </p>
            <p className="introduction-3">
              Outside of engineering, I contribute to open-source tooling,
              mentor junior devs through a local bootcamp, and occasionally
              write about distributed systems on my blog.
            </p>
          </div>
          <div className="experience">
            <h4 className="experience-heading">EXPERIENCE</h4>
            <div className="sect-let">
              <div className="left">
                <i className="fa-solid fa-square box"></i>
                <div className="vercel">
                  <p className="ver">Vercel</p>
                  <p className="staff">Staff Engineer</p>
                </div>
              </div>
              <div className="right">
                <p className="great">2022 — Present</p>
                <p className="greatname">Remote</p>
              </div>
            </div>
            <div className="sect-let">
              <div className="left">
                <i className="fa-solid fa-square boxer"></i>
                <div className="vercel">
                  <p className="ver">Stripe</p>
                  <p className="staff">Senior Software Engineer</p>
                </div>
              </div>
              <div className="right">
                <p className="great">2019 — 2022</p>
                <p className="greatname">San Francisco,CA</p>
              </div>
            </div>
            <div className="sect-lett">
              <div className="left">
                <i className="fa-solid fa-square boxer"></i>
                <div className="vercel">
                  <p className="ver">Shopify</p>
                  <p className="staff">Software Engineer</p>
                </div>
              </div>
              <div className="right">
                <p className="great">2016 — 2019</p>
                <p className="greatname">Ottawa,ON</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
