import axios from 'axios';
import { Film } from './interfaces';
import { Character } from './interfaces';

async function fetchCharacters(): Promise<Character[]> {
    try {
        const randomIndex = Math.floor(Math.random() * 10);
        const response = await axios.get(`https://swapi.dev/api/people/?page=${randomIndex}`);
        return response.data.results;
    } catch (error) {
        console.error(error);
        return [];
    }
}

  async function fetchFilms(): Promise<Film[]> {
    try {
        const response = await axios.get('https://swapi.dev/api/films/');
        return response.data.results;
    } catch (error) {
        console.error(error);
        return [];
    }
}

async function combineCharacterWithFilms(): Promise<void> {
    const characters = await fetchCharacters();
    const films = await fetchFilms();

    characters.forEach((character) => {
        const characterFilms = films.filter((film) => character.films.includes(film.url));
        
        console.log('Name:', character.name);
        console.log('Height:', character.height);
        console.log('Mass:', character.mass);
        console.log('Hair Color:', character.hair_color);
        console.log('Eye Color:', character.eye_color);
        console.log('Birth Year:', character.birth_year);
        console.log('Films:');
        characterFilms.forEach((film) => {
            console.log('  - Title:', film.title);
            console.log('    Episode ID:', film.episode_id);
            console.log('    Director:', film.director);
            console.log('    Producer:', film.producer);
            console.log('    Release Date:', film.release_date);
        });
        console.log('------------------');
    });
}

async function main(): Promise<void> {
  combineCharacterWithFilms()
}

main();