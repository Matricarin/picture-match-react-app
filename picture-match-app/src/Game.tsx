import { useState, useEffect } from "react";
import BoardComponent from "./components/BoardComponent";
import { type Card } from "./models/Card";
import { createDeck, images } from "./game/Deck";

function Game() {
  const [cards, setCards] = useState<Card[]>(() => createDeck(images));

  const [selectedCards, setSelectedCards] = useState<Card[]>([]);

  function newGame() {
    setCards(createDeck(images));
    setSelectedCards([]);
  }

  function handleCardClick(cardId: number) {
    console.log("Clicked card:", cardId);

    if (selectedCards.length >= 2) {
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

    setSelectedCards(previous => [
      ...previous,
      card
    ]);

    useEffect(() => {
      if (selectedCards.length !== 2) {
        return;
      }

      const [first, second] = selectedCards;

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

        setSelectedCards([]);
        return;
      }

      const timeoutId = setTimeout(() => {
        setCards(previousCards =>
          previousCards.map(card =>
            card.id === first.id ||
              card.id === second.id
              ? {
                ...card,
                isOpen: false,
              }
              : card
          )
        );

        setSelectedCards([]);
      }, 1000);

      return () => {
        clearTimeout(timeoutId);
      };


    }, [setSelectedCards])
  };

  return (
    <div className="game">

      <BoardComponent cards={cards}
        onCardClick={handleCardClick} />

      <button onClick={newGame}
        style={{
          width: 100,
          height: 50,
          margin: 25
        }}>
        New Game
      </button>
    </div>

  );
};

export default Game;