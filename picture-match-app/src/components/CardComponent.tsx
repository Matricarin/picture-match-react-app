import "./CardComponent.css"

// определение типа парметров для компонента

type CardProps = {
    image: string;
    size: number,
    isOpen: boolean,
    isMatched: boolean
    onClick: () => void
};

// функция компонента с принимаемым параметром props

function CardComponent(props: CardProps) {

    function dontRepeat(){
        console.log("Repeated callback");
    }
    return (
        <div
            className={props.isMatched ? "card matched": props.isOpen ? "card open" : "card"}
            style={{
                width: props.size,
                height: props.size,
            }}
            onClick={props.isOpen ? dontRepeat : props.onClick}
        >
            {props.isOpen ? props.image : "?"}
        </div>
    )
}

export default CardComponent;