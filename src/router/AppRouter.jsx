import { Navigate, Route, Routes } from "react-router-dom";

export function AppRouter(){
    return(
        <Routes>
            <Route path="/" element={ <Navigate to={'/dashboard'} /> } />
            <Route path="/dashboard" element={ <h1> Dashboard </h1> } />

            <Route path="/*" element={ <Navigate to={"/"} /> } />
        </Routes>
    )
}