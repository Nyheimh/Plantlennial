import React from "react";
import { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Plant from "../screens/Plant";
import Pothos from "../screens/Potho";
import Monsteras from "../screens/Monstera";
import { MonsteraData } from "./monsteraData";
import Home from "../screens/Home/Home";

import { getPlantsAPI } from "../services/plants";
import { PothoData } from "./pothosData";

function MainContainer() {
  const [plants, setPlants] = useState([]);

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
  }, []);

  return (
    <Routes>
      <Route path="/plants" element={<Plant plants={plants} />} />
      <Route path="/pothos" element={<Pothos pothos={PothoData} />} />
      <Route
        path="/monsteras"
        element={<Monsteras monsteras={MonsteraData} />}
      />

      <Route path="/" element={<Home />} />
    </Routes>
  );
}

export default MainContainer;
