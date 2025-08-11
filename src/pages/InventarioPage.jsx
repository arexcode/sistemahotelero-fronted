import { MainLayout } from "../layout";
import { InventarioView } from "../views";

export function InventarioPage(){
    return(
        <MainLayout>
            <div>
                <span className="text-3xl text-black font-semibold">
                    Módulo Reportes
                </span>
                <p> En este módulo podrás visualizar los reportes realizados. </p>
            </div>

            <InventarioView />
        </MainLayout>
    )
}