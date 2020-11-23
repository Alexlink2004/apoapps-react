import "./styles/Navbar.css";
import logo from "../Assets/Logos/apoapps_logo.png";
function NavBar(props) {
  return (
    <nav className="navbar navbar-expand-md bg-light navbar-light">
      <img
        className="brand__logo "
        src={logo}
        width="10%"
        height="10%"
        alt="Logo principal"
      />
      
      <h3 id="nav-logo">ApoApps</h3>

      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#collapsibleNavbar"
        aria-expanded="true"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="collapsibleNavbar">
        <ul className="navbar-nav">
          <li className="nav-item item-style">
            <a className="nav-link" href="https://youtube.com">
              Acerca
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;
