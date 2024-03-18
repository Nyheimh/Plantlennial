import api from "./api-helper";

export const getAllPothos = async () => {
  try {
    const resp = await api.get("/pothos");
    return resp.data;
  } catch (error) {
    console.error("Error fetching pothos data:", error);
    return null;
  }
};
