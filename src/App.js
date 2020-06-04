import React from "react";
import ShoppingList from "./ShoppingList";
import ShoppingData from "./ShoppingData";
import Discounts from "./Discounts";
import Breakdown from "./Breakdown";
import "./App.css";

function App() {
  const productComponents = ShoppingData.map((item) => (
    <ShoppingList key={item.id} product={item} />
  ));
  let filtArr = ShoppingData.filter((num) => num.price.discount > 0);

  let totalSavings = 0;
  for (let i = 0; i < filtArr.length; i++) {
    let price = filtArr[i].price.original;
    let dis = filtArr[i].price.discount / 100;
    totalSavings = price - price * dis;
  }

  return (
    <div className="App">
      <header className="ShoppingList">
        <h1>My Shopping List</h1>
      </header>
      <hr />
      <div className="row">{productComponents}</div>
      <hr />

      <div>
        <h3>Total Savings:</h3>
        {totalSavings}
      </div>

      <div>
        <h3>Breakdown:</h3>
      </div>
    </div>
  );
}

export default App;
