import { Link } from "react-router-dom";
import { FaHeart } from "react-icons/fa";
import "../index.css";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">
        🎬 MovieFlix
      </div>

      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/favorites">Favorites</Link>

        <Link to="/favorites" className="heart">
          <FaHeart />
        </Link>
      </div>
    </nav>
  );
}