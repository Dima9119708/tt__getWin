export interface Pokemon {
    id: string,
    url: string
    name: string,
    img: string,
    types: string[]
}

export interface PokemonsResponse {
    count: number,
    results: Pokemon[]
}

export interface PokemonTypesResponse {
    pokemon: {
        pokemon: Pokemon
    }[],
}

export interface PokemonResponse {
    sprites: {
        front_default: string
    },
    types: { type: { name: string } }[]
}

export interface PokemonsState {
    fullData: Pokemon[],
    sliceData: Pokemon[],

    isLoading: boolean,

    count: number,
    offset: number,
    limit: number,
    page: number,

    searchValue: string,
    type: string
}
