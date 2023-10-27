export interface PokemonDetails {
    stats: Array<{
        base_stat: number,
        effort: number,
        stat: {
            name: string,
            url: string
        }
    }>
    moves: Array<{
        move: {
            name: string,
            url: string
        }
    }>,
    sprites: {
        front_default: string
    },
    name: string
}

export type PokemonDetailsResponse = PokemonDetails

export interface PokemonDetailsState {
    data: PokemonDetails,
    isLoading: boolean
}
