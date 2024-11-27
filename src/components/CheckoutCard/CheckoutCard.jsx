import "./CheckoutCard.scss";

const CheckoutCard = ({price, checkIn, checkOut, guests, weeklyDiscount, cleaningFee, taxes}) => {

    let totalCost = Number(price) * 7;
    let totalTaxes = totalCost * Number(taxes);
    let totalServiceFee = totalCost * 0.14;
    let stayCost = totalCost + 345 + Number(cleaningFee) + totalServiceFee + totalTaxes;

   
   
    return ( 
        <div className="card">
            <h3 className="card__title">${price} CAD <span>night</span></h3>
            <div className="card__date-wrapper">
                <div className="card__date-wrapper-upper">
                    <div className="card__check-in">
                        <p>check-in</p>
                        <p>{checkIn}</p>
                    </div>
                    <div className="card__check-out">
                        <p>checkout</p>
                        <p>{checkOut}</p>
                    </div> 
                </div>   
                <div className="card__guests">
                    <p>guests</p>
                    <p>{guests} guests</p>
                </div>
            </div>
            {/* Button Component */}
            <div className="card__price">
                <p>{price} CAD x 7 nights</p>
                <p>${totalCost} CAD</p>
            </div>
            <div className="card__discount">
                <p>Weekly Stay Discount</p>
                <p>-{weeklyDiscount} CAD</p>
            </div>
            <div className="card__cleaning">
                <p>Cleaning fee</p>
                <p></p>
            </div>
            <div className="card__service">
                <p></p>
                <p></p>
            </div>
            <div className="card__taxes">
                <p></p>
                <p></p>
            </div>
            <div>
                <p></p>
                <p></p>
            </div>


        </div>

     );
}
 
export default CheckoutCard;