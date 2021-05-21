import api from './api-helper'

export const getAllPothos = async () => {
  const resp = await api.get('/pothos');
  return resp.data;
}
