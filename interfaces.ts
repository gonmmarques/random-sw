export interface Character {
    name: string;
    birth_year: string;
    eye_color: string;
    gender: string;
    hair_color: string;
    height: string;
    mass: string;
    skin_color: string;
    homeworld: string;
    films: string[];
  //species array-- An array of species resource URLs that this person belongs to.
  //starships array-- An array of starship resource URLs that this person has piloted.
  //vehicles array-- An array of vehicle resource URLs that this person has piloted.
    url: string 
}

export interface Film {
    title: string;
    episode_id: number;
    director: string;
    producer: string;
    release_date: string;
    characters: string[];
    url: string
}