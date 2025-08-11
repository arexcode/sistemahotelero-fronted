import { MainLayout } from "../layout";
import { InventarioView } from "../views";

export function InventarioPage(){
    return(
        <MainLayout>
            <div>
                <span className="text-3xl text-black font-semibold">
                    Módulo Inventario
                </span>
                <p> En este módulo podrás visualizar el inventario general del hotel </p>
            </div>

            <InventarioView />
        </MainLayout>
    )
}