import { selectLanguageFilter } from "../filters/selectors";
import { selectLevelFilter } from "../filters/selectors";
import { selectPriceFilter } from "../filters/selectors";

import { RootState } from "../store";

import { createSelector } from "@reduxjs/toolkit";

import { SerializedError } from '@reduxjs/toolkit';

export const selectError = (state: RootState): string => {
    const error: string | SerializedError | null = state.teachers.error;
    return typeof error === 'string'
        ? error
        : error?.message || 'An unknown error occurred.';
};


export const selectTeachers = (state: RootState) => state.teachers.items;

export const selectIsLoading = (state: RootState) => state.teachers.isLoading;

export const selectFilteredTeachers = createSelector(
    [selectTeachers, selectLanguageFilter, selectLevelFilter, selectPriceFilter],
    (teachers, languageFilter, levelFilter, priceFilter) => {
        if (!Array.isArray(teachers)) {
            return [];
        }

        return teachers.filter(teacher => {
        const matchesLanguage = languageFilter 
            ? teacher.language?.toLowerCase().includes(languageFilter.toLowerCase()) 
            : true;
        const matchesLevel = levelFilter 
            ? teacher.level?.toLowerCase().includes(levelFilter.toLowerCase()) 
            : true;
        const matchesPrice = priceFilter 
            ? teacher.price === priceFilter 
            : true;

        return matchesLanguage && matchesLevel && matchesPrice;
    });
    }
);