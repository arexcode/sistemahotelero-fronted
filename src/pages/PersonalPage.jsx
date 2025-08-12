import { MainLayout } from "../layout";
import { PersonalView } from "../views";

export function PersonalPage(){
    return(
        <MainLayout>
            <div className="mt-8 ml-14">
                <h1 className="text-4xl font-bold text-slate-800 mb-2"> Personal del Hotel </h1>
                <p className="text-slate-600">Gestiona al personal del hotel</p>
            </div>
            
            <PersonalView />
        </MainLayout>
    )
}