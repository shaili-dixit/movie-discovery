import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar">

      <h2>MovieFlix</h2>

      <div className="nav-links">

        <Link to="/">Home</Link>

        <Link to="/favorites">
          Favorites ❤️
        </Link>

      </div>

    </nav>
  );
}