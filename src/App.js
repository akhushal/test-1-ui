import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import BlogList from "./components/BlogList";
import BlogPost from "./components/BlogPost";
import GoodWatch from "./components/GoodWatch";

export default function App() {
  return (
    <Router>
      <div className="page-layout">
        <Navbar />
        <div className="container">
          <Routes>
            <Route path="/" element={<BlogList />} />
            <Route path="/blog/:id" element={<BlogPost />} />
            <Route path="/goodwatch" element={<GoodWatch />} />
          </Routes>
        </div>
        <footer>
          <p className="footer-name">© {new Date().getFullYear()} — Khushal Aravapalli</p>
          <div className="footer-links">
            <a href="https://www.instagram.com/notkhushal_" target="_blank" rel="noreferrer">
              Instagram
            </a>
            <a href="https://www.linkedin.com/in/khushalaravapalli" target="_blank" rel="noreferrer">
              LinkedIn
            </a>
            <a href="mailto:khushalaravapalli@gmail.com">Email</a>
          </div>
        </footer>
      </div>
    </Router>
  );
}
