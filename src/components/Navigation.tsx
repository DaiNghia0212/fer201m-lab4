import React from "react";
import DarkMode from "./DarkMode";
import "../styles/navigation.css"

const Navigation = () => {
  const items = [
    {
      name: "Home",
      href: "#home",
    },
    {
      name: "News",
      href: "#news",
    },
    {
      name: "About",
      href: "#about",
    },
    {
      name: "Contact",
      href: "#contact",
    },
  ];

  return (
    <div className="navigation">
      <nav>
        <ul>
          {items.map((item, key) =>
            item.name === "Home" ? (
              <li key={key} className="active">
                <a href={item.href}>{item.name}</a>
              </li>
            ) : (
              <li key={key}>
                <a href={item.href}>{item.name}</a>
              </li>
            )
          )}
        </ul>
      </nav>
      <DarkMode />
    </div>
  );
};

export default Navigation;
