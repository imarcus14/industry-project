import "./CheckoutCard.scss";

import { Button } from "../Button/Button";
import { Link } from "react-router-dom";
import { useState } from "react";

const CheckoutCard = ({ price, checkIn, checkOut, guests, taxes, addBundle }) => {

    let totalCost = addBundle ? Number(price) * 7 + 125 : Number(price) * 7;
    let totalTaxes = Math.round((totalCost * Number(taxes)) * 100) / 100;
    let totalServiceFee = Math.round((totalCost * 0.14) * 100) / 100;
    let stayCost = totalCost - 345 + 100 + totalServiceFee + totalTaxes;

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
            <Button style="primary" text="Reserve" classModifier="checkout" />
            <div className="card__price">
                <p>{price} CAD x 7 nights</p>
                <p>${totalCost} CAD</p>
            </div>
            <div className="card__discount">
                <p>Weekly Stay Discount</p>
                <p>-345 CAD</p>
            </div>
            <div className="card__cleaning">
                <p>Cleaning fee</p>
                <p>$100 CAD</p>
            </div>
            <div className="card__service">
                <p>Service Fee</p>
                <p>${totalServiceFee} CAD</p>
            </div>
            <div className="card__taxes">
                <p>Taxes</p>
                <p>${totalTaxes} CAD</p>
            </div>
            {addBundle ? (
                <div className="card__bundle">
                    <p>Bundle add on</p>
                    <p>$ 125</p>
                </div>
            ) : ('')}
            <div className="card__total">
                <p>Total</p>
                <p>${stayCost}</p>
            </div>


        </div>

    );
}

export default CheckoutCard;