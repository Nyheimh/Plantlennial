import { useState, useEffect } from "react";
import { Switch, Route, } from "react-router-dom";
import { useHistory } from "react-router-dom";

// import PlantsDetail from "../screens/Plants/Plant";
import { getAllPlants } from "../services/plants"
import { getAllPothos } from "../services/pothos"
import { getAllMonsteras } from "../services/monsteras"
import { getAllSnakeplants } from "../services/snakeplants"
import Plant from "../screens/Plants/Plant"
import Pothos from "../screens/Pothos/Potho"
import Monsteras from "../screens/Monstera/Monstera"
import Snakeplants from "../screens/Snakeplants/Snakeplant"
import Home from '../screens/Home/Home'

function MainContainer() {
  const [plants, setPlants] = useState([]);
  const [pothos, setPothos] = useState([]);
  const [monsteras, setMonsteras] = useState([]);
  const [snakeplants, setSnakeplants] = useState([]);


  useEffect(() => {
    const fetchPlants = async () => {
      const plantData = await getAllPlants();
      setPlants(plantData);
    };
    fetchPlants();
  }, []);

  useEffect(() => {
    const fetchPothos = async () => {
      const pothoData = await getAllPothos();
      setPothos(pothoData);
    };
    fetchPothos();
  }, []);

  useEffect(() => {
    const fetchMonsteras = async () => {
      const monsteraData = await getAllMonsteras();
      setMonsteras(monsteraData);
    };
    fetchMonsteras();
  }, []);

  useEffect(() => {
    const fetchSnakeplants = async () => {
      const snakeplantData = await getAllSnakeplants();
      setSnakeplants(snakeplantData);
    };
    fetchSnakeplants();
  }, []);


  return (
    <Switch>
    <Route path="/plants">
      <Plant plants={plants} />
    </Route>
    <Route path="/pothos">
      <Pothos pothos={pothos} />
    </Route>
    <Route path="/monsteras">
      <Monsteras monsteras={monsteras} />
    </Route>
    
    <Route path="/snakeplants">
      <Snakeplants
        snakeplants={snakeplants}
      />
    </Route>
      <Home />
  </Switch>
  )
}

export default MainContainer




