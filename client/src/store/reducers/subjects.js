import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

export const subjectsSlice = createSlice({
    name: 'subjects',
    initialState,
    reducers: {
        setSubjects: (_, action) => {
            console.log('action', action);
            return [...action.payload];
        },
        createSubject: (state, action) => {
            console.log('action', action);
            return [...state, action.payload];
        },
        updateSubject: (state, action) => {
            console.log('action', action);
            return state.map((subject) => {
                if (subject.id === action.payload.id) {
                    return action.payload;
                }
                return subject;
            });
        },
        deleteSubject: (state, action) => {
            console.log('action', action);
            return state.filter((subject) => {
                return subject.id !== action.payload.id;
            });
        },
    },
});

export const { setSubjects, createSubject, updateSubject, deleteSubject } = subjectsSlice.actions;

export default subjectsSlice.reducer;
