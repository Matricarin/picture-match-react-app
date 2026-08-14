import { useState, useEffect } from "react";
import BoardComponent from "./components/BoardComponent";
import { type Card } from "./models/Card";
import { createDeck, images } from "./game/Deck";

function Game() {
  const [cards, setCards] = useState<Card[]>(() => createDeck(images));

  const [selectedCards, setSelectedCards] = useState<Card[]>([]);

  const isGameOver =
    cards.length > 0 &&
    cards.every(card => card.isMatched);

  function newGame() {
    setCards(createDeck(images));
    setSelectedCards([]);
  }

  function handleCardClick(cardId: number) {

    if (selectedCards.length >= 2) {
      return;
    }

    const card = cards.find(c => c.id === cardId);

    if (!card || card.isOpen || card.isMatched) {
      return;
    }

    if (selectedCards.some(c => c.id === cardId)) {
      return;
    }

    const updatedCards = cards.map(c =>
      c.id === cardId ? { ...c, isOpen: true } : c
    );

    setCards(updatedCards);

    const newSelected = [...selectedCards, card];

    setSelectedCards(newSelected);

    if (newSelected.length === 2) {
      const [first, second] = newSelected;

      if (first.image === second.image) {
        setCards(updatedCards.map(c =>
          c.id === first.id || c.id === second.id
            ? { ...c, isMatched: true }
            : c
        ));

        setSelectedCards([]);
      } else {

        setTimeout(() => {

          setCards(prev => prev.map(c =>
            c.id === first.id || c.id === second.id
              ? { ...c, isOpen: false }
              : c
          ));
          setSelectedCards([]);
        }, 1000);
      }
    }
  }


  return (
    <div className="game">

      {isGameOver && (
        <div className="game-over">
          <h2>
            Congratulations!
          </h2>
          <button onClick={newGame}
            style={{
              width: 100,
              height: 50,
              margin: 25
            }}>
            Start new game
          </button>
        </div>
      )}

      <BoardComponent cards={cards}
        onCardClick={handleCardClick} />

      {!isGameOver && (
        <button onClick={newGame}
          style={{
            width: 100,
            height: 50,
            margin: 25
          }}>
          New Game
        </button>
      )}

    </div>

  );
};

export default Game;