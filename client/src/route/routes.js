import Home from '../components/Home';
import Fourth from '../laboratories/fourth';
import Fifth from '../laboratories/fifth';
import Sixth from '../laboratories/sixth';
import Eigth from '../laboratories/eigth';

export const routes = [
    { path: '/', element: <Home />, exact: true },
    { path: '/4', element: <Fourth />, exact: true },
    { path: '/5', element: <Fifth />, exact: true },
    { path: '/6', element: <Sixth />, exact: true },
    { path: '/8', element: <Eigth />, exact: true },
];
