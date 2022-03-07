import "./Navbar.css";
function Navbar() {
  return (
    <nav className="menu-container">
      <input type="checkbox" aria-label="Toggle menu" />
      <span></span>
      <span></span>
      <span></span>

      <a href="#" className="menu-logo">
        <img
          src="https://wweb.dev/resources/navigation-generator/logo-placeholder.png"
          alt="My Awesome Website"
        />
      </a>

      <div className="menu">
        <ul>
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#pricing">Pricing</a>
          </li>
          <li>
            <a href="#blog">Blog</a>
          </li>
          <li>
            <a href="#docs">Docs</a>
          </li>
        </ul>
        <ul>
          <li>
            <a href="#signup">Sign-up</a>
          </li>
          <li>
            <a href="#login">Login</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
