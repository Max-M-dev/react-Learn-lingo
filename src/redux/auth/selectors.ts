
import { RootState } from "../store";

export const selectUser = (state: RootState) => state.auth.user;
export const selectToken = (state: RootState) => state.auth.accessToken;
export const selectIsRefresh = (state: RootState) => state.auth.isRefreshing;
export const selectIsLoggedIn = (state: RootState) => state.auth.isLoggedIn;
export const selectIsLoading = (state: RootState) => state.auth.isLoading;