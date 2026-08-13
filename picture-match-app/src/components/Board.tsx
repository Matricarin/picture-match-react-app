import Card from "./Card";

type CardData = {
    id: number,
    image: string;
};

type BoardProps = {
    cards: CardData[];
};

function Board(props: BoardProps) {
    return (
        <div className="board">
            {
                props.cards.map(card => (
                    <Card key={card.id}
                        image={card.image}
                        size={100} />
                ))
            }
        </div>
    )
};

export default Board;