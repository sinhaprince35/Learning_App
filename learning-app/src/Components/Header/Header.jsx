import "./header.css";
import logo from "./logo.jpg";


const Header = () => {

  return (
    <div className="header">
      <div className="logo">
        <a href="/"><img src={logo} alt="logo" /></a>
        <span>
          <h2><a href="/">EdTech Learning</a></h2>
        </span>
      </div>
      <div className="navbar">
        <nav>
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="Mission">Mission</a>
            </li>
            <li>
              <a href="Perks">Perks</a>
            </li>
            <li>
              <a href="Learnings">Learnings</a>
            </li>
            <li>
              <a href="FAQs">FAQs</a>
            </li>
          </ul>
        </nav>
      </div>
      <div>
        <button className="enrollBtn" href="#">Enroll Now</button>
      </div>
    </div>
  );
};

export default Header;
