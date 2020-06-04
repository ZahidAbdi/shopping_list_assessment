import React from "react";

function Discounts(props) {
  let dis = props.product.price.discount;
  let percent = dis / 100;
  let price = props.product.price.original;
  let total = price - price * percent;

  return (
    <div className="dis">
      <h3>Total Discounts:</h3>
      <p>
        {total.toLocaleString("en-US", {
          style: "currency",
          currency: "USD",
        })}
      </p>
    </div>
  );
}
export default Discounts;
