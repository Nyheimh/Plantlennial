import React from "react";
import CardItem from "../../components/CardItem/CardItem";
import './Plant.css'

function Plant(props) {

  const { plants } = props;

  return (
    <div className='plants'>
      <div className="plants__container">
        <div className="plants__wrapper">
          <ul className="plants__items">
            <div>
              {plants.map((plant) => (
                <div>
                  <CardItem
                    // src={monstera.name}
                    src={plant.img_url}
                    label={plant.name}
                    text={plant.name}
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

export default Plant;
