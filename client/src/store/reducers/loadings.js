import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    subjectsLoading: false,
    laboratoriesLoading: false,
};

export const loadingsSlice = createSlice({
    name: 'loadings',
    initialState,
    reducers: {
        setSubjectsLoading: (state, action) => {
            return { ...state, subjectsLoading: action.payload };
        },
        setLaboratoriesLoading: (state, action) => {
            return { ...state, laboratoriesLoading: action.payload };
        },
    },
});

export const { setSubjectsLoading, setLaboratoriesLoading } = loadingsSlice.actions;

export default loadingsSlice.reducer;
