const goodWatch = [
  { title: "The Beauty of Code – Computerphile", url: "https://www.youtube.com/watch?v=QyJZzq0v7Z4" },
  { title: "The Lost Art of Thinking", url: "https://example.com/article" },
  { title: "How Great Minds Think", url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ" },
];

export default function GoodWatch() {
  return (
    <div>
      <h1>Good Watch</h1>
      <ul>
        {goodWatch.map((item, i) => (
          <li key={i} style={{ marginBottom: '1rem' }}>
            <a href={item.url} target="_blank" rel="noreferrer">
              {item.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
