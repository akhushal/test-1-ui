import { useParams, Link } from 'react-router-dom';

const blogs = [
  { id: 1, title: "Why Silence is Underrated", content: "In a world of noise and constant motion, silence has become rare. But silence is not emptiness—it’s space for thought, reflection, and understanding." },
  { id: 2, title: "The Art of Slow Living", content: "Slow living is not about doing less, but doing with presence. To wake up without hurry, to eat without scrolling, to walk without aim—these are acts of rebellion." },
  { id: 3, title: "Notes on Creativity", content: "Creativity is a form of honesty. It begins when we stop imitating and start expressing—even if imperfectly." },
];

export default function BlogPost() {
  const { id } = useParams();
  const blog = blogs.find(b => b.id === Number(id));

  if (!blog) return <p>Blog not found.</p>;

  return (
    <div className="blog-post">
      <Link to="/">&larr; Back</Link>
      <h1>{blog.title}</h1>
      <p>{blog.content}</p>
    </div>
  );
}
