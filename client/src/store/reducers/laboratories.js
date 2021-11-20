import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

export const laboratoriesSlice = createSlice({
    name: 'laboratories',
    initialState,
    reducers: {
        setLaboratories: (_, action) => {
            return [...action.payload];
        },
        createLaboratory: (state, action) => {
            return [...state, action.payload];
        },
        updateLaboratory: (state, action) => {
            return state.map((subject) => {
                if (subject.id === action.payload.id) {
                    return action.payload;
                }
                return subject;
            });
        },
        deleteLaboratory: (state, action) => {
            return state.filter((subject) => {
                return subject.id !== action.payload;
            });
        },
    },
});

export const { setLaboratories, createLaboratory, updateLaboratory, deleteLaboratory } =
    laboratoriesSlice.actions;

export default laboratoriesSlice.reducer;
