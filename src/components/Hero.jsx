import "../assets/css/Hero.css";
import heroImage from "../assets/images/me.jpeg";

export default function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-container">
        {/* Gradient Background */}
        <div className="radial-gradient">
          <div className="blur1"></div>
          <div className="blur2"></div>
          <div className="blur3"></div>
        </div>
        {/* Left Side Content */}
        <div className="hero-text">
          <div className="wave">✋</div>
          <h1>
            Hi, I'm <span className="highlight">Muhammad Zainal Ilmi</span>
          </h1>
          <hr></hr>
          <h3 style={{ marginTop: 10 }}>
            <i className="fas fa-laptop-code" style={{ marginRight: 5 }}></i>
            Full Stack Developer
          </h3>
          <p>
            I'm a passionate Full Stack Developer and Mobile App Developer based
            in Indonesia. With a strong foundation in both front-end and
            back-end development, I specialize in creating dynamic and
            interactive web applications.
          </p>

          {/* CTA Buttons */}
          <div className="hero-buttons">
            <a href="#projects" className="btn primary">
              Let's Talk
            </a>
            <a href="#downloadcv" className="btn secondary">
              Download CV
              <i
                className="fas fa-chevron-down"
                style={{ marginLeft: "5px" }}
              ></i>
            </a>
          </div>
        </div>

        {/* Right Side Image */}
        <div className="hero-image">
          <img src={heroImage} alt="Hero Image"></img>
          <div className="hero-description">
            <h5>Muhammad Zainal Ilmi</h5>
            <p>Follow me here👋</p>
            <div className="social-main">
              <a
                href="https://www.instagram.com/c_cod3s/"
                className="social-instagram"
              >
                <i className="fab fa-instagram"></i>
              </a>
              <a href="https://github.com/mor3tz" className="social-github">
                <i className="fab fa-github"></i>
              </a>
              <a
                href="https://www.linkedin.com/in/muhammad-zainal-ilmi-6415b2309/"
                className="social-linkedin"
              >
                <i className="fab fa-linkedin"></i>
              </a>
              <a
                href="whatsapp://send?text=Assalamualaikum"
                className="social-whatsapp"
              >
                <i className="fab fa-whatsapp"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="branding">
        <div className="branding-text">
          <table>
            <tr>
              <td>
                <h1>
                  <i className="devicon-framermotion-original-wordmark"></i>
                  UI/UX DESIGN
                </h1>
                <p className="stack">
                  <i className="devicon-figma-plain colored"></i>
                </p>
              </td>
              <td>
                <h1>
                  <i className="devicon-html5-plain colored"></i>WEB DEVELOPMENT
                </h1>
                <p className="stack">
                  <i className="devicon-react-original colored"></i>
                  <i className="devicon-laravel-plain colored"></i>
                  <i className="devicon-express-original"></i>
                  <i className="devicon-nodejs-plain colored"></i>
                  <i className="devicon-mysql-plain colored"></i>
                  <i className="devicon-tailwindcss-plain colored"></i>
                </p>
              </td>
              <td>
                <h1>
                  <i className="devicon-android-plain colored"></i>MOBILE APP
                </h1>
                <p className="stack">
                  <i className="devicon-flutter-plain colored"></i>
                  <i className="devicon-firebase-plain colored"></i>
                </p>
              </td>
            </tr>
          </table>
        </div>
      </div>
    </section>
  );
}
