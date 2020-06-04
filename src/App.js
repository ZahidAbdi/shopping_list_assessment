import React from "react";
import ShoppingList from "./ShoppingList";
import ShoppingData from "./ShoppingData";
import "./App.css";

function App() {
  const productComponents = ShoppingData.map((item) => (
    <ShoppingList key={item.id} product={item} />
  ));

  return (
    <div className="App">
      <header className="ShoppingList">
        <h1>My Shopping List</h1>
      </header>
      <hr />
      {productComponents}
      <hr />
    </div>
  );
}

export default App;
