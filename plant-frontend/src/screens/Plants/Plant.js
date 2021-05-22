import React from "react";

function Plant(props) {

  const { plants } = props;

  return (
    <div>
      <div>
        {plants.map((plant) => (
          <div className="review-container">
            <h1>Name: {plant.name}</h1>
            {/* <h1> Review: {review.fields.reviews}</h1> */}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Plant;
