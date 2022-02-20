import CreateLaboratory from '../views/CreateLaboratory';
import EditLaboratory from '../views/EditLaboratory';
import Home from '../views/Home';
import Laboratories from '../views/Laboratories';
import Login from '../views/Login';
import ProtectedRoute from './ProtectedRoute';
import Register from '../views/Register';
import ViewLaboratory from '../views/ViewLaboratory';

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
