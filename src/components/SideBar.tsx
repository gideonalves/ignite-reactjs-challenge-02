import { useState } from "react";
import { Button } from "./Button";
import "../styles/sidebar.scss";

interface SideBarProps {
  genres: {
    id: number;
    title: string;
    name: "action" | "comedy" | "documentary" | "drama" | "horror" | "family";
  }[];
  selected: number
  onClick: (id: number) => void
}

export function SideBar({ genres, onClick, selected }: SideBarProps) {
  // Complete aqui

  function handleClickButton(id: number) {
    onClick(id);
  }

  return (
    <nav className="sidebar">
      <span>
        Watch<p>Me</p>
      </span>

      <div className="buttons-container">
        {genres.map((genre) => (
          <Button
            key={String(genre.id)}
            title={genre.title}
            iconName={genre.name}
            onClick={() => handleClickButton(genre.id)}
            selected={selected === genre.id}
          />
        ))}
      </div>
    </nav>
  );
}