// The ShoppingList component will receive the shopping data as props. It will render multiple ShoppingItems (using map) as appropriate.
// The ShoppingItem component will receive an individual item as its props and need to output the appropriate title, category, and actual price. If the item has a discount value over 0, it should render both original price and final discounted price; if discount value is 0, just render the original price.
import React from "react";

function ShoppingList(props) {
  return (
    <div className="list">
      <h2>{props.product.name}</h2>
      <p>{props.product.category}</p>
      <p>
        {props.product.price.original.toLocaleString("en-US", {
          style: "currency",
          currency: "USD",
        })}
      </p>
    </div>
  );
}
export default ShoppingList;
