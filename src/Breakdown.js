import React from "react";

function Breakdown(props) {
  let type = props.product.catagory;
  return (
    <div className="dis">
      <h3>Breakdown</h3>
      <p>{type}</p>
    </div>
  );
}
export default Breakdown;
