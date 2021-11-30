import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import { store } from './store';
import { SnackbarProvider } from 'notistack';

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <SnackbarProvider
                maxSnack={3}
                autoHideDuration={3000}
                anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
            >
                <App />
            </SnackbarProvider>
        </Provider>
    </React.StrictMode>,
    document.getElementById('root'),
);

reportWebVitals();
