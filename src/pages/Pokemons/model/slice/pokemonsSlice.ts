import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { PokemonsState } from 'pages/Pokemons/model/types/pokemonsTypes';
import { getPokemonsRequest, getFilteredPokemons } from '../service/pokemonsService';

export const pokemonsSlice = createSlice({
  name: 'pokemons',
  initialState: {
    fullData: [],
    sliceData: [],
    count: 1,
    limit: 0,
    isLoading: true,
    offset: 0,
    page: 1,
    type: '',
    searchValue: '',
  } as PokemonsState,
  reducers: {
    setPagination: (draft, action: PayloadAction<number>) => {
      const page = action.payload;

      const startSlice = draft.limit * (page - 1);
      const endSlice = startSlice + draft.limit;

      draft.page = page;
      draft.offset = startSlice;

      draft.sliceData = draft.fullData.slice(startSlice, endSlice);
    },
    setLimit: (draft, action: PayloadAction<number>) => {
      draft.limit = action.payload;
    },
    setSearch: (draft, action: PayloadAction<string>) => {
      draft.searchValue = action.payload;
    },
    setType: (draft, action: PayloadAction<string>) => {
      draft.type = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getPokemonsRequest.pending, (draft) => {
      draft.isLoading = true;
    });
    builder.addCase(getPokemonsRequest.fulfilled, (draft, action) => {
      draft.isLoading = false;
      draft.count = Math.round(action.payload.count / draft.limit);
      draft.fullData = action.payload.results;
      draft.sliceData = action.payload.results.slice(draft.offset, draft.offset + draft.limit);
    });
    builder.addCase(getPokemonsRequest.rejected, (draft) => {
      draft.isLoading = false;
    });

    builder.addCase(getFilteredPokemons.pending, (draft) => {
      draft.isLoading = true;
    });
    builder.addCase(getFilteredPokemons.fulfilled, (draft, action) => {
      draft.isLoading = false;
      draft.count = Math.round(action.payload.length / draft.limit) || 1;
      draft.sliceData = action.payload.slice(0, draft.limit);
      draft.page = 1;
    });
    builder.addCase(getFilteredPokemons.rejected, (draft) => {
      draft.isLoading = false;
    });
  },
});
