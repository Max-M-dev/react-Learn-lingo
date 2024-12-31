import { createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-hot-toast';
import { ref, get } from 'firebase/database';
import { database } from '../../firebase';

export const fetchTeachers = createAsyncThunk(
  '/teachers/fetchAll',
  async (value, { rejectWithValue }) => {
    try {
      const dbRef = ref(database, 'teachers');
      const snapshot = await get(dbRef);

      if (snapshot.exists()) {
        const data = snapshot.val();

        return data;
      } else {
        throw new Error('No data available');
      }
    } catch (error) {
      toast.error('Something went wrong :( Try again later.');
      if (error instanceof Error) {
        return rejectWithValue(error.message);
      }
      return rejectWithValue('An unknown error occurred.');
    }
  }
);
