import axios from "axios";
import { UseStarships } from "./Api";

jest.mock("axios");

const mockStarship = {
  data: {
    results: [
      {
        name: "CR90 corvette",
        model: "CR90 corvette",
        manufacturer: "Corellian Engineering Corporation",
      },
      {
        name: "Star Destroyer",
        model: "Imperial I-class Star Destroyer",
        manufacturer: "Kuat Drive Yards",
      },
    ],
  },
};

describe("UseStarships", () => {
  it("Should successfuly get data from API", async () => {
    axios.get.mockImplementationOnce(() => Promise.resolve(mockStarship));
    await expect(UseStarships()).resolves.toEqual(mockStarship.data.results);
  });

  it("Should successfuly at get starship with name", async () => {
    const name = "CR90 corvette";

    axios.get.mockImplementationOnce(() => Promise.resolve(mockStarship));
    await expect(
      UseStarships().then((response) =>
        response.filter((people) => people.name === name)
      )
    ).resolves.toEqual([mockStarship.data.results[0]]);
  });

  it("Should get a how many starships exists in API data", async () => {
    axios.get.mockImplementationOnce(() => Promise.resolve(mockStarship));
    await expect(
      UseStarships().then((response) => response.length)
    ).resolves.toEqual(2);
  });
});
