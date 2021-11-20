import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    subject: null,
    laboratory: null,
};

export const navigation = createSlice({
    name: 'navigation',
    initialState,
    reducers: {
        setSubject: (state, action) => {
            return { ...state, subject: action.payload };
        },
        setLaboratory: (state, action) => {
            return { ...state, laboratory: action.payload };
        },
    },
});

export const { setSubject, setLaboratory } = navigation.actions;

export default navigation.reducer;
