import React from "react";
import CardItem from "../CardItem/CardItem";
import "./Cards.css";
import monsteraalbo from "../../assets/monstera.jpg";
import goldenpothos from "../../assets/pothos.jpeg";
import snakeplant from "../../assets/snakeplant.jpeg";

function Cards() {
  return (
    <div className="cards">
      <h1>Amazing starter plants below!</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src={monsteraalbo}
              text="Explore the beauty of the Swiss Cheese plant."
              label="Monstera"
              path="/monsteras"
            />
            <CardItem
              src={goldenpothos}
              text="Set yourself apart by viewing one of large plant climbers."
              label="Pothos"
              path="/pothos"
            />
          </ul>

          <ul className="cards__items">
            <CardItem
              src={snakeplant}
              text="Set your eyes on some of the beautiful air purifiers. "
              label="Snake Plant"
              path="/snakeplants"
            />
            {/* <CardItem
              src={image4}
              text='Experience Football on Top of the Himilayan Mountains'
              label='Adventure'
              path='/products'
            /> */}

            {/* <CardItem
              src={image8}
              text='Ride through the Sahara Desert on a guided camel tour'
              label='Adrenaline'
              path='/sign-up'
            /> */}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
