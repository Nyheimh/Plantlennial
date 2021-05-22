import React from "react";

function Potho(props) {

  const { pothos } = props;

  return (
    <div>
      <div>
        {pothos.map((potho) => (
          <div className="review-container">
            <h1>Name: {potho.name}</h1>
            {/* <h1> Review: {review.fields.reviews}</h1> */}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Potho;
