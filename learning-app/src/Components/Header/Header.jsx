import "./header.css";
import logo from "./logo.jpg";

const Header = () => {
  return (
    <div className="header">
      <div className="logo">
        <a href="#home">
          <img src={logo} alt="logo" />
        </a>
        <span>
          <h2>
            <a href="#home">EdTech Learning</a>
          </h2>
        </span>
      </div>
      <div className="navbar">
        <nav>
          <ul>
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#mission">Mission</a>
            </li>
            <li>
              <a href="#perks">Perks</a>
            </li>
            <li>
              <a href="#learnings">Learnings</a>
            </li>
            <li>
              <a href="#faq">FAQs</a>
            </li>
          </ul>
        </nav>
      </div>
      <div>
        <button className="enrollBtn" Link to="/">
          Enroll Now
        </button>
      </div>
    </div>
  );
};

export default Header;
