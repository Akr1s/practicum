import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    laboratoriesLoading: false,
};

export const loadingsSlice = createSlice({
    name: 'loadings',
    initialState,
    reducers: {
        setLaboratoriesLoading: (state, action) => {
            return { ...state, laboratoriesLoading: action.payload };
        },
    },
});

export const { setLaboratoriesLoading } = loadingsSlice.actions;

export default loadingsSlice.reducer;
