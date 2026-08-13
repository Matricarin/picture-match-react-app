import "./BoardComponent.css"
import {type Card} from "../models/Card";
import CardComponent from "./CardComponent";


type BoardProps = {
    cards: Card[];
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
                        isOpen={card.isOpen} />
                ))
            }
        </div>
    )
};

export default BoardComponent;