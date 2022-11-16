import axios from "axios";
import { BASE_URL } from "../constant";

export type Character = {
  films: string;
  shortFilms: string;
  tvShows: string;
  videoGames: string;
  parkAttractions: string;
  allies: string;
  enemies: string;
  _id: number;
  name: string;
  imageUrl: string;
  url: string;
};

export const fetchCharacter = async () => {
  try {
    const { data } = await axios.get<Character>(`${BASE_URL}/characters`);
    return data;
  } catch (error) {
    console.log("Character fetch error:", error);
  }
};
