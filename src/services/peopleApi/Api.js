import axios from "axios";

const url = "https://swapi.dev/api/people";

export const UsePeople = async () => {
  try {
    let page1;
    let page2;
    let page3;
    let page4;
    let page5;
    let page6;
    let page7;
    let page8;
    let page9;

    for (let i = 1; i <= 9; i++) {
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
      } else if (i === 7) {
        page7 = response.data.results;
      } else if (i === 8) {
        page8 = response.data.results;
      } else if (i === 9) {
        page9 = response.data.results;
      }
    }

    return page1
      .concat(page2)
      .concat(page3)
      .concat(page4)
      .concat(page5)
      .concat(page6)
      .concat(page7)
      .concat(page8)
      .concat(page9);
  } catch (error) {
    console.error("Error cause: " + error.message);
    return error.message;
  }
};
