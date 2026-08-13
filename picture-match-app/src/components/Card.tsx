import "./Card.css"

// определение типа парметров для компонента

type CardProps = {
    image: string;
    size: number
};

// функция компонента с принимаемым параметром props

function Card(props: CardProps) {
    return (
        <div
            className="card"
            style={{
                width: props.size,
                height: props.size,
            }}
        >
            {props.image}
        </div>
    )
}

export default Card;