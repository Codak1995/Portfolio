import "./Hero.css";

const Hero = () => {
  return (
    <>
      <div className="hero-container">
        <div className="right-section">
          <div className="animate">
            <i className="fa-solid fa-circle"></i>
            <h2 className="avalaible">AVALIABLE FOR HIRE – 2026</h2>
          </div>

          <h1 className="heading">
            Senior <br /> <span className="soft">Software</span>
            <br /> Engineer.
          </h1>
          <p className="paragraph">
            I build systems that scale. 9+ years crafting high-performance web
            applications, distrubuted backends, and developer tooling used by
            millions.
          </p>
          <p className="mobile-text">
            I build systems that scale. 9+ years crafting high-performance web
            applications and developer tooling.
          </p>
          <div className="down">
            <button className="view-work">
              VIEW WORK
              <span className="arrow">
                <i className="fa-solid fa-arrow-right"></i>
              </span>
            </button>
            <button className="get-in desk-getin">GET IN TOUCH</button>
            <button className=" get-in mob-getin">CONTACT</button>
          </div>

          <div className="number">
            <div className="1">
              <h1 className="years">9+ </h1>
              <span className="roles">YEARS EXP.</span>
            </div>
            <div className="2">
              <h1 className="years">40+</h1>
              <span className="roles">PROJECTS</span>
            </div>
            <div className="3">
              <h1 className="years">3</h1>
              <span className="roles">COMPANIES</span>
            </div>
          </div>
        </div>

        <div className="picture-section"></div>
      </div>
    </>
  );
};

export default Hero;
