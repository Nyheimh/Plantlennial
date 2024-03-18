import axios from "axios";


const getPlantsAPI = async () => {
  try {
    const resp = await axios.get(
      "https://perenual.com/api/species-list?key=sk-Canz65baa9543ba463973"
    );
    return resp.data.data;
  } catch (error) {
    console.error("Error fetching plant data:", error);
    return null;
  }
};


export {
  getPlantsAPI,
};
