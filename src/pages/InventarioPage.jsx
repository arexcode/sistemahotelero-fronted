import { MainLayout } from "../layout";
import { InventarioView } from "../views";

export function InventarioPage(){
    return(
        <MainLayout>
            <div className="mt-8 ml-14">
                <h1 className="text-4xl font-bold text-slate-800 mb-2">Sistema de Inventario</h1>
                <p className="text-slate-600">Gestiona tus categorías y productos de manera eficiente</p>
            </div>

            <InventarioView />
        </MainLayout>
    )
}