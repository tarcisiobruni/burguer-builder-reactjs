import React from "react";

import Auxiliary from "../../../hoc/Auxiliary";
import Button from "../../UI/Button";

export default function OrderSummary(props) {
    const ingredientSummary = Object.keys(props.ingredients).map((igKey) => {
        return (
            <li key={igKey}>
                <span style={{ textTransform: "capitalize" }}>{igKey}</span>:
                {props.ingredients[igKey]}
            </li>
        );
    });
    return (
        <Auxiliary>
            <h3>Your Order</h3>
            <p>A delicious burguer with the following ingredients:</p>
            <ul>{ingredientSummary}</ul>
            <p>
                <strong>Total Price : {props.price.toFixed(2)}</strong>
            </p>
            <p>Continue to Checkout?</p>
            <Button btnType="Danger" clicked={props.purchaseCancelled}>
                CANCEL
            </Button>
            <Button btnType="Success" clicked={props.purchasedContinued}>
                CONTINUE
            </Button>
        </Auxiliary>
    );
}
