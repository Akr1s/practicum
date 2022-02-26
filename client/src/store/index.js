import { configureStore } from '@reduxjs/toolkit';
import subjectsReducer from './reducers/subjects';
import laboratoriesReducer from './reducers/laboratories';
import navigationReducer from './reducers/navigation';

export const store = configureStore({
    reducer: {
        subjects: subjectsReducer,
        laboratories: laboratoriesReducer,
        navigation: navigationReducer,
    },
});
