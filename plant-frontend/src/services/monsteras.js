import api from './api-helper'

export const getAllMonsteras = async () => {
  const resp = await api.get('/monsteras');
  return resp.data;
}
