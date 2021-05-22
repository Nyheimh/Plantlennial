import React from "react";

function Snakeplant(props) {

  const { snakeplants } = props;

  return (
    <div>
      <div>
        {snakeplants.map((snakeplant) => (
          <div className="review-container">
            <h1>Name: {snakeplant.name}</h1>
            {/* <h1> Review: {review.fields.reviews}</h1> */}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Snakeplant;
