import axios from "axios";

const url = "https://swapi.dev/api";

export const UseVehicles = async () => {
  try {
    const response = await axios.get(`${url}/vehicles/`);
    return response.data.results;
  } catch (error) {
    console.error("Error cause: " + error.message);
    return error.message;
  }
};
