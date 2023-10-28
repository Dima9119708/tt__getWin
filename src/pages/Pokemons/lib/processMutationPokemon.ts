import { Pokemon } from '../model/types/pokemonsTypes';

export const processMutationPokemon = (pokemon: Pokemon): Pokemon => {
  const parts = pokemon.url.split('/');
  const id = parts[parts.length - 2];

  Object.assign<Pokemon, Pick<Pokemon, 'id' | 'img'>>(pokemon, {
    id,
    img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`,
  });

  return pokemon;
};
