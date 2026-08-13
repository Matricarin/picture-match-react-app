import "./Card.css"

// определение типа парметров для компонента

type CardProps = {
    image: string;
};

// функция компонента с принимаемым параметром props

function Card({image}: CardProps){
    return(
        <div className="сard">
            {image}
        </div>
    )
}

export default Card;