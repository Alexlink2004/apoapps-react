import "./styles/Navbar.css";
import logo from "../Assets/Logos/apoapps_logo.png";
import ghLogo from "../Assets/Logos/github-logo.png";
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
      <ul className="navbar-nav ">
          <li className="nav-item item-style " >
            <a className="nav-link" href="#/me">
              Acerca de mi
            </a>
          </li>
          <li className="nav-item item-style">
            <a className="nav-link" href="https://www.youtube.com/channel/UC-LPXAK9zMiCOCWMZiO23tA">
              Mi youtube 
            </a>
            </li>
            <li className="nav-item item-style">
            <a className="nav-link" href="https://github.com/Alexlink2004">
              <img src={ghLogo}alt="Github Logo" className="gh-logo"/> 
            </a>
            </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;


// import "./styles/Navbar.css";
// import logo from "../Assets/Logos/apoapps_logo.png";
// import ghLogo from "../Assets/Logos/github-logo.png";

// //import {Link} from "react-router-dom";
// function NavBar(props) {
//   return (
//     <nav className="navbar navbar-expand-lg bg-light navbar-light ">
      
//       <a href="/" className="brand__logo">
//       <img
//         className="brand__logo "
//         src={logo}
//         width="10%"
//         height="10%"
//         alt="Logo principal"
        
//       />
      
//       </a>
//       <h3 id="nav-logo">ApoApps</h3>
      

//       <button
//         className="navbar-toggler"
//         type="button"
//         data-toggle="collapse"
//         data-target="#collapsibleNavbar"
//         aria-expanded="true"
//       >
//         <span className="navbar-toggler-icon"></span>
//       </button>

//       <div className="collapse navbar-collapse" id="collapsibleNavbar">
//         <ul className="navbar-nav ">
//           <li className="nav-item item-style " >
//             <a className="nav-link" href="/me">
//               Acerca de mi
//             </a>
//           </li>
//           <li className="nav-item item-style">
//             <a className="nav-link" href="https://www.youtube.com/channel/UC-LPXAK9zMiCOCWMZiO23tA">
//               Mi youtube 
//             </a>
//             </li>
//             <li className="nav-item item-style">
//             <a className="nav-link" href="https://github.com/Alexlink2004">
//               <img src={ghLogo}alt="Github Logo" className="gh-logo"/> 
//             </a>
//             </li>
//         </ul>
//       </div>
//     </nav>
//   );
// }

// export default NavBar;
