import { useState, useEffect } from "react";
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

  const [selectedCardsIds, setSelectedCardsIds] = useState<number[]>([]);

  function handleCardClick(cardId: number) {
    console.log("Clicked card:", cardId);

    if (selectedCardsIds.length >= 2) {
      return;
    }

    const card = cards.find(card => card.id == cardId);

    if (!card || card.isOpen || card.isMatched) {
      return;
    };

    setCards(previous =>
      previous.map(card =>
        card.id == cardId
          ? { ...card, isOpen: true }
          : card
      )
    );

    setSelectedCardsIds(previous => [
      ...previous,
      cardId
    ]);

    useEffect(() => {
      if (selectedCardsIds.length !== 2) {
        return;
      }

      const first = cards.find(
        card => card.id === selectedCardsIds[0]
      );

      const second = cards.find(
        card => card.id === selectedCardsIds[1]
      );

      if (!first || !second) {
        return;
      }

      const isMatch = first.image === second.image;

      if (isMatch) {
        setCards(previous =>
          previous.map(card =>
            card.id === first.id ||
              card.id === second.id
              ? {
                ...card,
                isMatched: true,
              }
              : card
          )
        );

        setSelectedCardsIds([]);
        return;
      }

      const timeoutId = setTimeout(() =>{
        setCards(previous => 
          previous.map(card => 
            card.id === first.id || 
            card.id === second.id
            ? {
              ...card,
              isOpen: false,
            }
            : card
          )
        );

        setSelectedCardsIds([]);
      }, 1000);

      return () => {
        clearTimeout(timeoutId)
      };

    }, [setSelectedCardsIds])
  };

  return (
    <BoardComponent cards={cards}
      onCardClick={handleCardClick} />
  );
};

export default Game;