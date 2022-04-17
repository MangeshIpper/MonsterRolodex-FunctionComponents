import React from "react";
import Card from "../card/card.component";
import "./card-list.style.css";

function CardList({ monsters }) {
  return (
    <div className="card-list">
      {monsters.map((monster, index) => {
        return <Card monster={monster} />;
      })}
    </div>
  );
}

export default CardList;
