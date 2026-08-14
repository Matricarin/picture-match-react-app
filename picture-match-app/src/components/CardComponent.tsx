import "./CardComponent.css"

// определение типа парметров для компонента

type CardProps = {
    image: string;
    size: number,
    isOpen: boolean,
    onClick: () => void
};

// функция компонента с принимаемым параметром props

function CardComponent(props: CardProps) {

    return (
        <div
            className={props.isOpen ? "card open" : "card"}
            style={{
                width: props.size,
                height: props.size,
            }}
            onClick={props.onClick}
        >
            {props.isOpen ? props.image : "?"}
        </div>
    )
}

export default CardComponent;