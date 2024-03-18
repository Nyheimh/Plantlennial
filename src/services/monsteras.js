import api from "./api-helper";

export const getAllMonsteras = async () => {
  try {
    const resp = await api.get("/monsteras");
    return resp.data;
  } catch (error) {
    console.error("Error fetching rails monstera data:", error);
    return null;
  }
};
