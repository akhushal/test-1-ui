import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/">Blogs</Link>
      <Link to="/goodwatch">Good Watch</Link>
    </nav>
  );
}
