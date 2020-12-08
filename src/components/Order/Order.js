import React from "react";
import PropTypes from "prop-types";

import classes from "./Order.module.css";

const Order = ({ orderData }) => {
  // convert ingredients object to array
  const ingredients = [];
  for (let ingredientName in orderData.ingredients) {
    ingredients.push({
      name: ingredientName,
      amount: orderData.ingredients[ingredientName],
    });
  }

  // create an array of ingredient elements to display
  const ingredientOutput = ingredients.map((ig) => (
    <span
      key={ig.name}
      style={{
        textTransform: "capitalize",
        display: "inline-block",
        margin: "2px 8px",
        border: "1px solid #ccc",
        padding: "5px",
        fontWeight: "bolder"
      }}
    >{`${ig.name} (${ig.amount})`}</span>
  ));

  const address =
    orderData.orderData.name +
    ", " +
    orderData.orderData.street +
    " - " +
    orderData.orderData.zipCode +
    ", " +
    orderData.orderData.country;

  const method = orderData.orderData.deliveryMethod;

  return (
    <div className={classes.Order}>
      <p>
        <span className="text-muted">Ingredients:</span> {ingredientOutput}
      </p>
      <p>
        <span className="text-muted">Billing Address:</span>{" "}
        <strong>{address}</strong>{" "}
      </p>
      <p>
        <span className="text-muted">Delivery Method:</span>{" "}
        <strong style={{ textTransform: "capitalize" }}>{method}</strong>{" "}
      </p>
      <p>
        <span className="text-muted">Price:</span>{" "}
        <strong>Rs. {Number.parseFloat(orderData.price).toFixed(2)}</strong>
      </p>
    </div>
  );
};

Order.propTypes = {
  orderData: PropTypes.object.isRequired,
};

export default Order;
