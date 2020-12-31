import axios from "axios";
import { UseSpecies } from "./Api";

jest.mock("axios");

const mockSpecie = {
  data: {
    results: [
      {
        name: "Human",
        classification: "mammal",
        designation: "sentient",
      },
      {
        name: "Droid",
        classification: "artificial",
        designation: "sentient",
      },
    ],
  },
};

describe("UseSpecies", () => {
  it("Should successfuly get data from API", async () => {
    axios.get.mockImplementationOnce(() => Promise.resolve(mockSpecie));
    await expect(UseSpecies()).resolves.toEqual(mockSpecie.data.results);
  });

  it("Should successfuly at get specie with name", async () => {
    const name = "Human";

    axios.get.mockImplementationOnce(() => Promise.resolve(mockSpecie));
    await expect(
      UseSpecies().then((response) =>
        response.filter((people) => people.name === name)
      )
    ).resolves.toEqual([mockSpecie.data.results[0]]);
  });

  it("Should get a how many species exists in API data", async () => {
    axios.get.mockImplementationOnce(() => Promise.resolve(mockSpecie));
    await expect(
      UseSpecies().then((response) => response.length)
    ).resolves.toEqual(2);
  });
});
