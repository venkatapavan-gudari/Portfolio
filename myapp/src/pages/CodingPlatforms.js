import React from "react";
import "./CodingPlatforms.css";

export default function CodingPlatforms() {
  const platforms = [
    {
      name: "CodeChef",
      username: "klu_2200031956",
      logo: "https://s3.amazonaws.com/codechef_shared/sites/all/themes/abessive/logo.svg",
      link: "https://www.codechef.com/users/venkatapavan23",
      color: "#915D4E" // Brown tone
    },
    {
      name: "LeetCode",
      username: "klu_2200031956",
      logo: "https://upload.wikimedia.org/wikipedia/commons/1/19/LeetCode_logo_black.png",
      link: "https://leetcode.com/u/pavangudari/",
      color: "#F89F1B" // Yellow tone
    },
    {
      name: "HackerRank",
      username: "klu_2200031956",
      logo: "https://upload.wikimedia.org/wikipedia/commons/6/65/HackerRank_logo.png",
      link: "https://www.hackerrank.com/",
      color: "#1BA94C" // Green tone
    }
  ];

  return (
    <section className="coding-platforms-section">
      <div className="coding-header">
        <span className="coding-icon">👨‍💻</span>
        <h2>My Coding Platforms</h2>
      </div>

      <div id="coding" className="coding-platforms-container">
        {platforms.map((platform, index) => (
          <a
            href={platform.link}
            key={index}
            className="coding-card"
            target="_blank"
            rel="noopener noreferrer"
            style={{ "--hover-color": platform.color }}
          >
            <img src={platform.logo} alt={platform.name} className="platform-logo" />
            <h3>{platform.name}</h3>
            <p>{platform.username}</p>
          </a>
        ))}
      </div>
    </section>
  );
}
