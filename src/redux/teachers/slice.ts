import { createSlice, PayloadAction, SerializedError } from '@reduxjs/toolkit';
import { fetchTeachers } from './operations';

export interface Teacher {
  avatar_url: string;
  conditions: string[];
  experience: string;
  languages: string[];
  lesson_info: string;
  lessons_done: number;
  levels: string[];
  name: string;
  price_per_hour: number;
  rating: number;
  reviews: TeacherReviews[];
  surname: string;
}

export interface TeacherReviews {
  comment: string;
  reviewer_name: string;
  reviewer_rating: number;
}

export interface TeachersState {
  items: Teacher[];
  isLoading: boolean;
  error: string | SerializedError | null;
  page: number;
  limit: number;
}

const teachersInitialState: TeachersState = {
  items: [],
  isLoading: false,
  error: null,
  page: 1,
  limit: 5,
};

const handlePending = (state: TeachersState) => {
  state.isLoading = true;
};

const handleRejected = (
  state: TeachersState,
  action: PayloadAction<unknown>
) => {
  state.isLoading = false;
  state.error = action.payload as SerializedError;
};

const teachersSlice = createSlice({
  name: 'teachers',
  initialState: teachersInitialState,
  reducers: {
    changePage: (state, action: PayloadAction<number>) => {
      state.page = action.payload;
      return state;
    },
    changeLimit: (state, action: PayloadAction<number>) => {
      state.limit = action.payload;
      return state;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchTeachers.pending, handlePending)
      .addCase(
        fetchTeachers.fulfilled,
        (state, action: PayloadAction<Teacher[]>) => {
          state.isLoading = false;
          state.error = null;
          state.items = action.payload;
        }
      )
      .addCase(fetchTeachers.rejected, handleRejected);
  },
});

export const { changeLimit, changePage } = teachersSlice.actions;
export const teachersReducer = teachersSlice.reducer;
