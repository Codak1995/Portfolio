import "./skills.css";

const Skills = () => {
  return (
    <>
      <div className="skills-container">
        <div className="skills-section">
          <h4 className="indent">02 / SKILLS</h4>
          <div className="head-sec">
            <h1 className="title">
              The full <br /> <span className="soft">stack.</span>
            </h1>
            <p className="para">
              From pixel-perfect UIs to distributed backend systems — I operate
              across the entire engineering surface.
            </p>
          </div>
          <div className="skills-set">
            <div className="frontend fullstack">
              <div className="layerback">
                <div className="layer">
                  <i className="fa-solid fa-layer-group icons"></i>
                  <h4 className="stack-1">FRONTEND</h4>
                </div>
                <div className="front-sec">
                  <p className="frtend">React</p>
                  <p className="frtend">TypeScript</p>
                  <p className="frtend">Next.js</p>
                  <p className="frtend">Tailwind CSS</p>
                  <p className="frtend">Vite</p>
                  <p className="frtend">GraphQL</p>
                </div>
              </div>
              <div className="layerback">
                <div className="layer">
                  <i className="fa-solid fa-server icons"></i>
                  <h4 className="stack-1">BACKEND</h4>
                </div>
                <div className="front-sec">
                  <p className="frtend">Node.js</p>
                  <p className="frtend">Go</p>
                  <p className="frtend">Python</p>
                  <p className="frtend">Rest APIs</p>
                  <p className="frtend">gRPC</p>
                  <p className="frtend">Microservices</p>
                </div>
              </div>
              <div className="layerback">
                <div className="layer">
                  <i className="fa-solid fa-database icons"></i>
                  <h4 className="stack-1">DATABASE</h4>
                </div>
                <div className="front-sec">
                  <p className="frtend">PostgreSQL</p>
                  <p className="frtend">Redis</p>
                  <p className="frtend">MongoDB</p>
                  <p className="frtend">Elasticsearch</p>
                  <p className="frtend">Prisma</p>
                  <p className="frtend">SQLite</p>
                </div>
              </div>
              <div className="layerback">
                <div className="layer">
                  <i class="fa-solid fa-terminal icons"></i>
                  <h4 className="stack-1">DEVOPS</h4>
                </div>
                <div className="front-sec">
                  <p className="frtend">Docker</p>
                  <p className="frtend">Kubernates</p>
                  <p className="frtend">CI/CD</p>
                  <p className="frtend">AWS</p>
                  <p className="frtend">Terraform</p>
                  <p className="frtend">Linus</p>
                </div>
              </div>
              <div className="layerback">
                <div className="layer">
                  <i class="fa-solid fa-code icons"></i>
                  <h4 className="stack-1">TOOLS</h4>
                </div>
                <div className="front-sec">
                  <p className="frtend">Git</p>
                  <p className="frtend">Vim</p>
                  <p className="frtend">Figma</p>
                  <p className="frtend">Postman</p>
                  <p className="frtend">Datadog</p>
                  <p className="frtend">Sentry</p>
                </div>
              </div>
              <div className="layerback">
                <div className="layer">
                  <i class="fa-solid fa-microchip icons"></i>
                  <h4 className="stack-1">SYSTEMS</h4>
                </div>
                <div className="front-sec">
                  <p className="frtend">WebSockets</p>
                  <p className="frtend">WebAssembly</p>
                  <p className="frtend">Rust</p>
                  <p className="frtend">C++</p>
                  <p className="frtend">OpenAPI</p>
                  <p className="frtend">OAuth2.0</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Skills;
