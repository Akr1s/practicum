import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    subjectsLoading: false,
};

export const loadingsSlice = createSlice({
    name: 'loadings',
    initialState,
    reducers: {
        setSubjectsLoading: (state, action) => {
            console.log('action', action);
            return { ...state, subjectsLoading: action.payload };
        },
    },
});

export const { setSubjectsLoading } = loadingsSlice.actions;

export default loadingsSlice.reducer;
