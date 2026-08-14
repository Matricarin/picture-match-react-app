import "./BoardComponent.css"
import { type Card } from "../models/Card";
import CardComponent from "./CardComponent";

type BoardProps = {
    cards: Card[];
    onCardClick: (cardId: number) => void
};

// key нужен для идентификации компонента DOM

function BoardComponent(props: BoardProps) {
    return (
        <div className="board">
            {
                props.cards.map(card => (
                    <CardComponent key={card.id}
                        image={card.image}
                        size={100}
                        isOpen={card.isOpen}
                        onClick={() => props.onCardClick(card.id)} />
                ))
            }
        </div>
    )
};

export default BoardComponent;