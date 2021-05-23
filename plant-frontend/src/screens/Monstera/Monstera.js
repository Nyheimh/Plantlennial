import React from "react";
import CardItem from "../../components/CardItem/CardItem";
import './Monstera.css'
// import MonsteraCardItem from "./MonsteraCardItem"

function Monstera(props) {
  const { monsteras } = props;

  return (
    <div className='monsteras'>
      <div className="monsteras__container">
        <div className="monsteras__wrapper">
          <ul className="monsteras__items">
            <div>
              {monsteras.map((monstera) => (
                <div>
                  <CardItem
                    // src={monstera.name}
                    src={monstera.img_url}
                    label={monstera.name}
                    text={monstera.name}
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
export default Monstera;
