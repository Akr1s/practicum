import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './App.css';

import Header from './layout/Header';
import { routes } from './route/routes';

function App() {
    return (
        <div className="app">
            <BrowserRouter>
                <Header />
                <Routes>
                    {routes.map((route) => (
                        <Route path={route.path} element={route.element} exact={route.exact} />
                    ))}
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
