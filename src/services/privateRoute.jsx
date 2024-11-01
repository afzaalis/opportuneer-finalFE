import React from 'react';
import { Navigate } from 'react-router-dom';


const PrivateRoute = ({ element: Component }) => {
    return isAuthenticated() ? Component : <Navigate to="/"/>;
};

export default PrivateRoute;
