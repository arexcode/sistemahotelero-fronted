import { SideBar } from "../components";

export function MainLayout({ children }){
    return(
        <>
            <SideBar />
            { children }
        </>
    )
}