import { Navigate, Route, Routes } from "react-router-dom";
import { ControlHabitacionesPage, DashboardPage, HabitacionesPage, InventarioPage, PersonalPage } from "../pages";

export function AppRouter(){
    return(
        <Routes>
            <Route path="/" element={ <Navigate to={'/dashboard'} /> } />

            <Route path="/dashboard" element={ <DashboardPage /> } />
            <Route path="dashboard/inventario" element={ <InventarioPage /> } />
            <Route path="dashboard/control-habitaciones" element={ <ControlHabitacionesPage /> } />
            <Route path="dashboard/habitaciones" element={ <HabitacionesPage /> } />
            <Route path="dashboard/personal" element={ <PersonalPage /> } />


            <Route path="/*" element={ <Navigate to={"/"} /> } />
        </Routes>
    )
}