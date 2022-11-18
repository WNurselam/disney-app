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

export type CharacterResponse = {
  data: Character[];
  count: number;
  totalPages: number;
  nextPage: string | null;
  previousPage: string | null;
};

export const fetchCharacter = async (pageParam: number) => {
  try {
    if (!pageParam) {
      const { data } = await axios.get<CharacterResponse>(
        `${BASE_URL}/characters?pageParam=${1}`
      );
      return data;
    } else {
      const { data } = await axios.get<CharacterResponse>(`${pageParam}`);
      return data;
    }
  } catch (error) {
    console.log("Character fetch error:", error);
  }
};
