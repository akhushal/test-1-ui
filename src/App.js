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
        <footer
          style={{
            borderTop: "1px solid var(--border-color)",
            padding: "0.8rem 1rem",
            textAlign: "center",
            fontSize: "0.9rem",
            color: "var(--text-color)",
            opacity: 0.7,
          }}
        >
          © {new Date().getFullYear()} Khushal Aravapalli ·{" "}
          <a
            href="mailto:khushalaravapalli@gmail.com"
            style={{ color: "var(--accent-color)", textDecoration: "none" }}
          >
            Email
          </a>{" "}
          ·{" "}
          <a
            href="https://www.linkedin.com/in/khushalaravapalli"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "var(--accent-color)", textDecoration: "none" }}
          >
            LinkedIn
          </a>{" "}
          ·{" "}
          <a
            href="https://www.instagram.com/notkhushal_"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "var(--accent-color)", textDecoration: "none" }}
          >
            Instagram
          </a>
        </footer>
      </div>
    </Router>
  );
}
