import api from './api-helper'

export const getAllSnakeplants = async () => {
  const resp = await api.get('/snakeplants');
  return resp.data;
}
