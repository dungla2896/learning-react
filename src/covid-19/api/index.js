// viet code call data tu api
import axios from 'axios';

const getDataVirusCorona = async () => {
  const urlApi = `https://api.covid19api.com/summary`;
  const response = await axios.get(urlApi);
  const data = await response.status === 200 ? response.data : [];
  return data;
}
export const api = {
  getDataVirusCorona
}