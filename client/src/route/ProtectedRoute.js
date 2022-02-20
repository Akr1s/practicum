import React from 'react';
import { Navigate } from 'react-router-dom';

function ProtectedRoute({ component: Component, ...props }) {
    const isAuthenticated = localStorage.getItem('user');

    return isAuthenticated ? <Component {...props} /> : <Navigate to="/signin" />;
}

export default ProtectedRoute;
