import axios from "axios";

const url = "https://swapi.dev/api/planets";

export const UsePlanets = async () => {
  try {
    let page1;
    let page2;
    let page3;
    let page4;
    let page5;
    let page6;

    for (let i = 1; i <= 6; i++) {
      const response = await axios.get(`${url}/?page=${i}`);

      if (i === 1) {
        page1 = response.data.results;
      } else if (i === 2) {
        page2 = response.data.results;
      } else if (i === 3) {
        page3 = response.data.results;
      } else if (i === 4) {
        page4 = response.data.results;
      } else if (i === 5) {
        page5 = response.data.results;
      } else if (i === 6) {
        page6 = response.data.results;
      }
    }

    return page1
      .concat(page2)
      .concat(page3)
      .concat(page4)
      .concat(page5)
      .concat(page6);
  } catch (error) {
    console.error("Error cause: " + error.message);
    return error.message;
  }
};
