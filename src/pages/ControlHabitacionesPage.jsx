import { MainLayout } from "../layout";
import { ControlHabitacionesView } from "../views";

export function ControlHabitacionesPage(){
    return(
        <MainLayout>
            <div>
                <span className="text-3xl text-black font-semibold">
                    Módulo Control de Habitaciones
                </span>
                <p> En este módulo podrás registrar las solicitudes de suministros </p>
            </div>

            <ControlHabitacionesView />
        </MainLayout>
    )
}