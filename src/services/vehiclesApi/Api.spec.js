import axios from "axios";
import { UseVehicles } from "./Api";

jest.mock("axios");

const mockVehicle = {
  data: {
    results: [
      {
        name: "Sand Crawler",
        model: "Digger Crawler",
        manufacturer: "Corellia Mining Corporation",
      },
      {
        name: "T-16 skyhopper",
        model: "T-16 skyhopper",
        manufacturer: "Incom Corporation",
      },
    ],
  },
};

describe("UseVehicles", () => {
  it("Should successfuly get data from API", async () => {
    axios.get.mockImplementationOnce(() => Promise.resolve(mockVehicle));
    await expect(UseVehicles()).resolves.toEqual(mockVehicle.data.results);
  });

  it("Should successfuly at get vehicle with name", async () => {
    const name = "Sand Crawler";

    axios.get.mockImplementationOnce(() => Promise.resolve(mockVehicle));
    await expect(
      UseVehicles().then((response) =>
        response.filter((people) => people.name === name)
      )
    ).resolves.toEqual([mockVehicle.data.results[0]]);
  });

  it("Should get a how many vehicles exists in API data", async () => {
    axios.get.mockImplementationOnce(() => Promise.resolve(mockVehicle));
    await expect(
      UseVehicles().then((response) => response.length)
    ).resolves.toEqual(2);
  });
});
