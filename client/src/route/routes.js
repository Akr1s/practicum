import CreateLaboratory from '../pages/CreateLaboratory';
import EditLaboratory from '../pages/EditLaboratory';
import Home from '../pages/Home';
import Laboratories from '../pages/Laboratories';
import Login from '../pages/Login';
import ProtectedRoute from './ProtectedRoute';
import Register from '../pages/Register';
import ViewLaboratory from '../pages/ViewLaboratory';

export const routes = [
    { path: '/', element: <ProtectedRoute component={Home} />, exact: true },
    {
        path: '/:subjectName',
        element: <ProtectedRoute component={Laboratories} />,
    },
    {
        path: '/:subjectName/create',
        element: <ProtectedRoute component={CreateLaboratory} />,
    },
    {
        path: '/:subjectName/:laboratoryName',
        element: <ProtectedRoute component={ViewLaboratory} />,
    },
    {
        path: '/:subjectName/:laboratoryName/edit',
        element: <ProtectedRoute component={EditLaboratory} />,
    },
    { path: '/signin', element: <Login />, exact: true },
    { path: '/signup', element: <Register />, exact: true },
];
