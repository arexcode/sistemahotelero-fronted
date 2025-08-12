import api from "../api/config";

export const addPersonal = async (dni, nombreCompleto, rol, telefono) => {
    try {
        const payload = { dni, nombreCompleto, rol, telefono };

        const { data } = await api.post("personal", payload);
        return { ok: true, personal: data };
    } catch (error) {
        const message = error?.response?.data?.message || error?.message || "Error al añadir personal";
        console.error("Error al añadir personal:", message);
        return { ok: false, message };
    }
};