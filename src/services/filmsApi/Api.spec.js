import axios from "axios";
import { UseFilms } from "./Api";

jest.mock("axios");

const mockFilm = {
  data: {
    results: [
      {
        title: "A New Hope",
        episode_id: 4,
        opening_crawl: "It is a period of civil war.",
        director: "George Lucas",
        producer: "Gary Kurtz, Rick McCallum",
      },
      {
        title: "The Empire Strikes Back",
        episode_id: 2,
        opening_crawl: "It is a dark time for the Rebellion.",
        director: "Irvin Kershner",
        producer: "Gary Kurtz, Rick McCallum",
      },
    ],
  },
};

describe("UseFilms", () => {
  it("Should successfuly get data from API", async () => {
    axios.get.mockImplementationOnce(() => Promise.resolve(mockFilm));
    await expect(UseFilms()).resolves.toEqual(mockFilm.data.results);
  });

  it("Should successfuly at get film with title", async () => {
    const title = "A New Hope";

    axios.get.mockImplementationOnce(() => Promise.resolve(mockFilm));
    await expect(
      UseFilms().then((response) =>
        response.filter((film) => film.title === title)
      )
    ).resolves.toEqual([mockFilm.data.results[0]]);
  });

  it("Should get a how many films exists in API data", async () => {
    axios.get.mockImplementationOnce(() => Promise.resolve(mockFilm));
    await expect(
      UseFilms().then((response) => response.length)
    ).resolves.toEqual(2);
  });
});
