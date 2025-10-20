import { ArrowUpRight } from "lucide-react";

const goodWatch = [
  { title: "The Beauty of Code – Computerphile", url: "https://www.youtube.com/watch?v=QyJZzq0v7Z4" },
  { title: "The Lost Art of Thinking", url: "https://example.com/article" },
  { title: "How Great Minds Think", url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ" },
];

export default function GoodWatch() {
  return (
    <div>
      <h1>Good Watch</h1>
      {goodWatch.map((item, i) => (
        <div key={i} className="goodwatch-item">
          <a href={item.url} target="_blank" rel="noreferrer">
            <span>{item.title}</span>
            <ArrowUpRight size={18} />
          </a>
        </div>
      ))}
    </div>
  );
}
