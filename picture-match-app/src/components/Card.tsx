import { useState } from "react";
import "./Card.css"

// определение типа парметров для компонента

type CardProps = {
    image: string;
    size: number
};

// функция компонента с принимаемым параметром props

function Card(props: CardProps) {
    const [isOpen, setIsOpen] = useState(false);

    function handleClick() {
        setIsOpen(previous => !previous);
    };

    return (
        <div
            className={isOpen ? "card open" : "card"}
            style={{
                width: props.size,
                height: props.size,
            }}

            onClick={handleClick}
        >
            {isOpen ? props.image : "?"}
        </div>
    )
}

export default Card;