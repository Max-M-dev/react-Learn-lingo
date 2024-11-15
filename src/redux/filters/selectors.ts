import { RootState } from "../store";

export const selectLanguageFilter = (state: RootState) => state.filters.language;
export const selectLevelFilter = (state: RootState) => state.filters.level;
export const selectPriceFilter = (state: RootState) => state.filters.price;