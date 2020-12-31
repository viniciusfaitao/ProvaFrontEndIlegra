import axios from "axios";
import { UsePlanets } from "./Api";

jest.mock("axios");

const mockPlanet = {
  data: {
    results: [
      {
        name: "Tatooine",
        rotation_period: "23",
        orbital_period: "304",
      },
      {
        name: "Alderaan",
        rotation_period: "24",
        orbital_period: "364",
      },
    ],
  },
};

describe("UsePlanets", () => {
  it("Should successfuly get data from API", async () => {
    axios.get.mockImplementationOnce(() => Promise.resolve(mockPlanet));
    await expect(UsePlanets()).resolves.toEqual(mockPlanet.data.results);
  });

  it("Should successfuly at get planet with name", async () => {
    const name = "Tatooine";

    axios.get.mockImplementationOnce(() => Promise.resolve(mockPlanet));
    await expect(
      UsePlanets().then((response) =>
        response.filter((people) => people.name === name)
      )
    ).resolves.toEqual([mockPlanet.data.results[0]]);
  });

  it("Should get a how many planets exists in API data", async () => {
    axios.get.mockImplementationOnce(() => Promise.resolve(mockPlanet));
    await expect(
      UsePlanets().then((response) => response.length)
    ).resolves.toEqual(2);
  });
});
