import api from "../api/config";

export const loadCategorias = async (params = {}) => {
    try {
        const { data } = await api.get("categorias", { params });
        return { ok: true, categories: data };
    } catch (error) {
        const message = error?.response?.data?.message || error?.message || "Error al cargar categorías";
        console.error("Error al cargar categorías:", message);
        return { ok: false, message };
    }
};

export const addCategory = async (nombre, descripcion) => {
    try {
        const payload = { nombre, descripcion };
        const { data } = await api.post("categorias", payload);
        return { ok: true, category: data };
    } catch (error) {
        const message = error?.response?.data?.message || error?.message || "Error al añadir categoría";
        console.error("Error al añadir categoría:", message);
        return { ok: false, message };
    }
};
