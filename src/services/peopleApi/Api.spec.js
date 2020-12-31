import axios from "axios";
import { UsePeople } from "./Api";

jest.mock("axios");

const mockPeople = {
  data: {
    results: [
      {
        name: "Luke Skywalker",
        height: "172",
        mass: "77",
      },
      {
        name: "C-3PO",
        height: "167",
        mass: "75",
      },
    ],
  },
};

describe("UsePeople", () => {
  it("Should successfuly get data from API", async () => {
    axios.get.mockImplementationOnce(() => Promise.resolve(mockPeople));
    await expect(UsePeople()).resolves.toEqual(mockPeople.data.results);
  });

  it("Should successfuly at get people with name", async () => {
    const name = "Luke Skywalker";

    axios.get.mockImplementationOnce(() => Promise.resolve(mockPeople));
    await expect(
      UsePeople().then((response) =>
        response.filter((people) => people.name === name)
      )
    ).resolves.toEqual([mockPeople.data.results[0]]);
  });

  it("Should get a how many people exists in API data", async () => {
    axios.get.mockImplementationOnce(() => Promise.resolve(mockPeople));
    await expect(
      UsePeople().then((response) => response.length)
    ).resolves.toEqual(2);
  });
});
