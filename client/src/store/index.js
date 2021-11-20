import { configureStore } from '@reduxjs/toolkit';
import subjectsReducer from './reducers/subjects';
import loadingsReducer from './reducers/loadings';
import laboratoriesReducer from './reducers/laboratories';
import navigationReducer from './reducers/navigation';

export const store = configureStore({
    reducer: {
        subjects: subjectsReducer,
        loadings: loadingsReducer,
        laboratories: laboratoriesReducer,
        navigation: navigationReducer,
    },
});
