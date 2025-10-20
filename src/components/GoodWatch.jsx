import { ArrowUpRight } from "lucide-react";

const goodWatch = [
  { title: "Game Theory", url: "https://www.youtube.com/watch?v=mScpHTIi-kM" },
  { title: "What I Learnt from Going Blind in Space", url: "https://www.youtube.com/watch?v=Zo62S0ulqhA" },
  { title: "Simple Things Are Impossible to Make", url: "https://www.youtube.com/watch?v=pj0ze8GnBKA" },
  { title: "Why Humans Run the World", url: "https://www.youtube.com/watch?v=nzj7Wg4DAbs" },
  { title: "The Man Behind Linux", url: "https://www.youtube.com/watch?v=o8NPllzkFhE" },
  { title: "The Formula That Saved Humanity", url: "https://www.youtube.com/watch?v=nmgFG7PUHfo&t=445s" },
  { title: "Life", url: "https://www.youtube.com/watch?v=h6fcK_fRYaI" },
  { title: "How to Get Rich", url: "https://www.youtube.com/watch?v=1-TZqOsVCNM&t=4909s" },
  { title: "Naval and Joe Rogan", url: "https://www.youtube.com/watch?v=3qHkcs3kG44&t=1s" },
  { title: "Learn Finance by Varsity Zerodha", url: "https://zerodha.com/varsity/modules/" },
  { title: "Naval Podcasts", url: "https://nav.al/" },
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
