import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import BlogList from './components/BlogList';
import BlogPost from './components/BlogPost';
import GoodWatch from './components/GoodWatch';

export default function App() {
  return (
    <Router>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<BlogList />} />
          <Route path="/blog/:id" element={<BlogPost />} />
          <Route path="/goodwatch" element={<GoodWatch />} />
        </Routes>
      </div>
      <footer>
        © {new Date().getFullYear()} — Built with ♥ by You
      </footer>
    </Router>
  );
}
