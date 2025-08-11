import { Navigate, Route, Routes } from "react-router-dom";
import { DashboardPage, InventarioPage } from "../pages";

export function AppRouter(){
    return(
        <Routes>
            <Route path="/" element={ <Navigate to={'/dashboard'} /> } />

            <Route path="/dashboard" element={ <DashboardPage /> } />
            <Route path="dashboard/inventario" element={ <InventarioPage /> } />

            <Route path="/*" element={ <Navigate to={"/"} /> } />
        </Routes>
    )
}