import React from "react";
import CardItem from "../../components/CardItem/CardItem";
import './Potho.css'

function Potho(props) {

  const { pothos } = props;

  return (
    <div className='pothos'>
      <div className="pothos__container">
        <div className="pothos__wrapper">
          <ul className="pothos__items">
            <div>
              {pothos.map((potho) => (
                <div className="pothos-order">
                  <CardItem
                                      src={potho.img_url}
                    label={potho.name}
                    text={potho.name}
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

export default Potho;
