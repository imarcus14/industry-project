import "./Cards.scss"

import Star from "../Star/Star"

const Cards = ({src, location, beds, cost, rating}) => {

    let totalCost = Number(cost) * 7;
    return ( 
        <div className="card">
            <img className= "card__image" src={src} alt="Image of the location a person is booking"/>
            <div className="card__wrapper">
                <p className="card__location">{location}</p>
                <div className="card__wrapper-wrapper">
                    <Star/>
                    <p>{rating}</p>
                </div>
            </div>
            <p>{beds} beds</p>
            <p className="card__cost">{cost} CAD night · <span className="card__cost card__cost--grey">{totalCost} CAD total</span></p>


        </div>

     );
}
 
export default Cards;