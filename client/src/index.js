import React from 'react';

import ReactDOM from 'react-dom';
import { SnackbarProvider } from 'notistack';

import './index.css';

import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
    <React.StrictMode>
        <SnackbarProvider
            maxSnack={3}
            autoHideDuration={3000}
            anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
        >
            <App />
        </SnackbarProvider>
    </React.StrictMode>,
    document.getElementById('root'),
);

reportWebVitals();
