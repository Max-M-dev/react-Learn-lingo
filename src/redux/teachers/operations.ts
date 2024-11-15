
import { createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from 'react-hot-toast';
import { ref, get } from "firebase/database";
import { database } from "../../firebase";

interface teachersProps {
    page: number;
    limit: number;
    filters: Record<string, string>;
}

interface Teacher {
    id: string;
    name: string;
    languages: string[];
    levels: string[];
    price_per_hour: number;
}


export const fetchTeachers = createAsyncThunk("/teachers/fetchAll", async ({ page, limit, filters }: teachersProps, {rejectWithValue}) => {
    try {
        const dbRef = ref(database, "teachers");
        const snapshot = await get(dbRef);

        if (snapshot.exists()) {
            const data = snapshot.val();

            console.log(data);

            if (!filters.language && !filters.level && !filters.price) {
                return data;
            }

            const filteredData = (Object.values(data) as Teacher[]).filter(teacher => {
                const matchesLanguage = filters.language ? teacher.languages.includes(filters.language) : true;
                const matchesLevel = filters.level ? teacher.levels.includes(filters.level) : true;
                const matchesPrice = filters.price ? teacher.price_per_hour === parseInt(filters.price) : true;

                return matchesLanguage && matchesLevel && matchesPrice;
            });

            return filteredData.slice((page - 1) * limit, page * limit); 
            
        } else {
            throw new Error("No data available");
        }
    } catch(error) {
        toast.error('Something went wrong :( Try again later.');
        if (error instanceof Error) {
            return rejectWithValue(error.message);
        }
        return rejectWithValue("An unknown error occurred.");
    }
});