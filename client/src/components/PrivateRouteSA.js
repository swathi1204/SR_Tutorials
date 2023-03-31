import { Outlet, Navigate } from 'react-router-dom'

function PrivateRouteSA({ isLogged}) {
    return (isLogged ? <Outlet/> : <Navigate to ="/superadmin"/>)
}

export default PrivateRouteSA;