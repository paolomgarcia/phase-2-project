import React, {useState} from 'react';


function SnowboardCard({brand, model, image, terrain, size, shape}) {
    const [mainCard, setMainCard] = useState(true);

}

function frontCard() {
    return (
        <ul classname="frontCard">
            <div className="board" />
                <p>BRAND: {brand}</p>
                <p>M0DEL: {model}</p>
            <img className="card-image" src={image.main} />
        </ul>
    )
}

function backCard() {
    return (
        <ul className="backCard">
            <div className="details">
                <p>TERRAIN: {terrain}</p>
                <p>SIZE: {size}</p>
            </div>
            <div className="price">
                <p>PRICE:﹩{price}</p>
            </div>
        </ul>
    )
}

function handleClick() {
    setMainCard((mainCard) => !mainCard);
}

return (
    <div className="card" onClick={handleClick}>
        <div className="container">
            {mainCard ? frontCard() : backCard()}
        </div>

    </div>
)

export default SnowboardCard;