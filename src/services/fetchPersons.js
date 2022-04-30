import axios from "axios";

axios.defaults.baseURL = "http://localhost:3000/";

async function fetchPersons(url = "") {
  const response = await axios.get(url);
  const data = response.data;
  return data;
}

export function fetchAllPersons() {
  return fetchPersons(`persons`);
}