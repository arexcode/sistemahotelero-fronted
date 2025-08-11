import api from "../api/config";

export const addHabitacion = async (numero) => {
    try {
        const payload = { numero };
        const { data } = await api.post("habitaciones", payload);
        return { ok: true, habitacion: data };
    } catch (error) {
        const message = error?.response?.data?.message || error?.message || "Error al añadir habitación";
        console.error("Error al añadir habitación:", message);
        return { ok: false, message };
    }
};