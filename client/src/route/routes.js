import Home from '../views/Home';
import First from '../laboratories/First';

export const routes = [
    { path: '/', element: <Home />, exact: true },
    { path: '/1', element: <First />, exact: true },
];
