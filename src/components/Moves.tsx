import React from "react";

import { History } from "../interface";
interface MovesProps {
  history: History[];
  jumpTo: (move: number) => void;
}

const Moves = ({history, jumpTo}: MovesProps) => {

  const list = history.map((_, move) => {
    const desc = move ? "Go to move" + move : "Go to GameStart";
    return (
      <li key={move}>
        <button
          onClick={()=>jumpTo(move)}
        >
          {desc}
        </button>
      </li>
    )
  });

  return (
    <ol>{list}</ol>
  )
};

export default Moves;