import api from './api-helper'

export const getAllPlants = async () => {
  const resp = await api.get('/plants');
  return resp.data;
}
