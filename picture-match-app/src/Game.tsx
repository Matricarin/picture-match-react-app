import { useState } from "react";
import BoardComponent from "./components/BoardComponent";
import { type Card } from "./models/Card";

const initialCards: Card[] = [
  {
    id: 1,
    image: "🐰",
    isOpen: false,
    isMatched: false
  },
  {
    id: 2,
    image: "🦁",
    isOpen: false,
    isMatched: false
  },
  {
    id: 3,
    image: "🐸",
    isOpen: false,
    isMatched: false
  },
  {
    id: 4,
    image: "🐵",
    isOpen: false,
    isMatched: false
  },
  {
    id: 5,
    image: "😺",
    isOpen: false,
    isMatched: false
  },
  {
    id: 6,
    image: "🐶",
    isOpen: false,
    isMatched: false
  },
  {
    id: 7,
    image: "🐮",
    isOpen: false,
    isMatched: false
  },
  {
    id: 8,
    image: "🐼",
    isOpen: false,
    isMatched: false
  },
];

function Game() {
  const [cards, setCards] = useState<Card[]>(initialCards);

  function handleCardClick(cardId: number) {
    console.log("Clicked card:", cardId);
  };

  return (
    <BoardComponent cards={cards}
      onCardClick={handleCardClick} />
  );
};

export default Game;