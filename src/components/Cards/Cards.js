import React from "react";
import CardItem from "../CardItem/CardItem";
import "./Cards.css";
import monsteraalbo from "../../assets/monstera.jpg";
import goldenpothos from "../../assets/pothos.jpeg";
import snakeplant from "../../assets/trees.avif";

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
              text="Beautiful trees, our sense of oxygen."
              label="Trees"
              path="/plants"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
