import "./CardComponent.css"


type CardProps = {
    image: string;
    size: number,
    isOpen: boolean,
    isMatched: boolean
    onClick: () => void
};

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