import { Link } from 'react-router-dom';

const blogs = [
  { id: 1, title: "Why Silence is Underrated", content: "In a world of noise..." },
  { id: 2, title: "The Art of Slow Living", content: "We move too fast, and forget..." },
  { id: 3, title: "Notes on Creativity", content: "Creativity is not talent but courage..." },
];

export default function BlogList() {
  return (
    <div>
      <h1>My Writings</h1>
      {blogs.map(blog => (
        <div key={blog.id}>
          <Link to={`/blog/${blog.id}`}>
            <div className="blog-title">{blog.title}</div>
          </Link>
        </div>
      ))}
    </div>
  );
}
