import { Outlet, Navigate } from 'react-router-dom'

function PrivateRoute({ isLogged}) {
    return (isLogged ? <Outlet/> : <Navigate to ="/branchadmin"/>)
}

export default PrivateRoute;