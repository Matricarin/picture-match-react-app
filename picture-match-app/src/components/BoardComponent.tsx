import "./BoardComponent.css"
import { type Card } from "../models/Card";
import CardComponent from "./CardComponent";

type BoardProps = {
    cards: Card[];
    onCardClick: (cardId: number) => void
};

function BoardComponent(props: BoardProps) {
    return (
        <div className="board">
            {
                props.cards.map(card => (
                    <CardComponent key={card.id}
                        image={card.image}
                        size={50}
                        isOpen={card.isOpen}
                        onClick={() => props.onCardClick(card.id)}
                        isMatched={card.isMatched} />
                ))
            }
        </div>
    )
};

export default BoardComponent;