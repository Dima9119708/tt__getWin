import { AutocompleteProps } from '@mui/material';
import { SyntheticEvent } from 'react';

export interface PokemonTypes {
    url: string
    name: string,
}

export interface PokemonTypesState {
    data: PokemonTypes[],
    isLoading: boolean
}

export interface PokemonTypesResponse {
    count: number,
    results: PokemonTypes[]
}

export type OnChangePokemonTypes<
    Multiple extends boolean = false,
> = (
    event: SyntheticEvent,
    value: (Multiple extends false ? (PokemonTypes | null) : PokemonTypes[]),
    reason: string,
) => void

export interface PokemonTypesProps<
    Multiple extends boolean = false,
    DisableClearable extends boolean = false,
> extends Omit<
    AutocompleteProps<PokemonTypes, Multiple, DisableClearable, false>, 'options' | 'renderInput' | 'getOptionLabel'
> {
}
