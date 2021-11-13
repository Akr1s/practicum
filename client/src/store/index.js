import { configureStore } from '@reduxjs/toolkit';
import subjectsReducer from './reducers/subjects';
import loadingsReducer from './reducers/loadings';

export const store = configureStore({
    reducer: { subjects: subjectsReducer, loadings: loadingsReducer },
});
