import "./Board.css"
import {type Card} from "../models/Card";
import CardComponent from "./Card";


type BoardProps = {
    cards: Card[];
};

// key нужен для идентификации компонента DOM

function Board(props: BoardProps) {
    return (
        <div className="board">
            {
                props.cards.map(card => (
                    <CardComponent key={card.id}
                        image={card.image}
                        size={100} />
                ))
            }
        </div>
    )
};

export default Board;