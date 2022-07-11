import React from "react";
import { StyleCard } from "./styles/Card.styled";
export default function Card({ obj: { id, title, body, image }, index }) {
  return (
    <StyleCard layout={id % 2 === 0 && "row-reverse"}>
      <div>
        <h2>{title}</h2>
        <p>{body}</p>
      </div>
      <div>
        <img src={`./images/${image}`} />
      </div>
    </StyleCard>
  );
}
