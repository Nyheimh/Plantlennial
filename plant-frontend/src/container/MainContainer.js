import React from "react";
import { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Plant from "../screens/Plant";
import Pothos from "../screens/Potho";
import Monsteras from "../screens/Monstera";
import { MonsteraData } from "./monsteraData";
import Snakeplants from "../screens/Snakeplant";
import Home from "../screens/Home/Home";

import { getPlantsAPI } from "../services/plants";
import { getAllPothos } from "../services/pothos";
import { getAllSnakeplants } from "../services/snakeplants";

function MainContainer() {
  const [plants, setPlants] = useState([]);
  const [pothos, setPothos] = useState([]);
  const [snakeplants, setSnakeplants] = useState([]);

  const fetchData = async (fetchFunction, setterFunction) => {
    try {
      const data = await fetchFunction();
      setterFunction(data);
    } catch (error) {
      console.error("Error fetching data: ", error);
    }
  };

  useEffect(() => {
    fetchData(getPlantsAPI, setPlants);
    fetchData(getAllPothos, setPothos);
    fetchData(getAllSnakeplants, setSnakeplants);
  }, []);

  return (
    <Routes>
      <Route path="/plants" element={<Plant plants={plants} />} />
      <Route path="/pothos" element={<Pothos pothos={pothos} />} />
      <Route
        path="/monsteras"
        element={<Monsteras monsteras={MonsteraData} />}
      />
      <Route
        path="/snakeplants"
        element={<Snakeplants snakeplants={snakeplants} />}
      />
      <Route path="/" element={<Home />} />
    </Routes>
  );
}

export default MainContainer;
