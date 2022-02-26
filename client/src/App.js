import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './App.css';

import MainLayout from './layout';
import { routes } from './route/routes';

function App() {
    return (
        <BrowserRouter>
            <MainLayout>
                <Routes>
                    {routes.map((route) => (
                        <Route
                            path={route.path}
                            element={route.element}
                            exact={route.exact}
                            key={route.path}
                        />
                    ))}
                </Routes>
            </MainLayout>
        </BrowserRouter>
    );
}

export default App;
