import React from "react";
import CardItem from "../../components/CardItem/CardItem";
import './Snakeplant.css'

function Snakeplant(props) {

  const { snakeplants } = props;

  return (
    <div className='snakeplants'>
    <div className="snakeplants__container">
      <div className="snakeplants__wrapper">
        <ul className="snakeplants__items">
          <div>
            {snakeplants.map((snakeplant) => (
              <div>
                <CardItem
                  // src={monstera.name}
                  src={snakeplant.img_url}
                  label={snakeplant.name}
                  text={snakeplant.name}
                />
              </div>
            ))}
          </div>
        </ul>
      </div>
    </div>
  </div>
  );
}

export default Snakeplant;
