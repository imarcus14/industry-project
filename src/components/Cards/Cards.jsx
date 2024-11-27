import "./Cards.scss"

import Star from "../Star/Star"

const Cards = ({src, location, beds, cost, rating}) => {

    let totalCost = Number(cost) * 7;
    return ( 
        <div className="cards">
            <img className= "cards__image" src={src} alt="Image of the location a person is booking"/>
            <div className="cards__wrapper">
                <p className="cards__location">{location}</p>
                <div className="cards__wrapper-wrapper">
                    <Star/>
                    <p>{rating}</p>
                </div>
            </div>
            <p>{beds} beds</p>
            <p className="cards__cost">{cost} CAD night · <span className="cards__cost cards__cost--grey">{totalCost} CAD total</span></p>


        </div>

     );
}
 
export default Cards;