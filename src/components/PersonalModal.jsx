
import { X, Users, Loader2 } from "lucide-react"
import { useState } from "react";
import PropTypes from "prop-types";
import { useForm } from "../hooks"
import { addPersonal } from "../helpers/personal";

export function PersonalModal({ isOpen, onClose }) {

  const { onInputChanged, dni, nombreCompleto, rol, telefono } = useForm({
    dni: "",
    nombreCompleto: "",
    rol: "",
    telefono: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    const res = await addPersonal( dni, nombreCompleto, rol, telefono );
    setLoading(false);
    if (!res.ok) {
      setError(res.message || "No se pudo agregar");
      return;
    }
    onClose();
  };

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-xl shadow-xl w-full max-w-md">

        <div className="flex items-center justify-between p-6 border-b border-slate-200">
          <div className="flex items-center">
            <Users className="h-5 w-5 text-emerald-600 mr-2" />
            <h2 className="text-xl font-semibold text-slate-800">Nuevo Personal</h2>
          </div>
          <button onClick={onClose} className="text-slate-400 hover:text-slate-600 transition-colors">
            <X className="h-5 w-5" />
          </button>
        </div>

  <form onSubmit={handleSubmit} className="p-6">
          <div className="space-y-4">
            <div>
              <label htmlFor="dni" className="block text-sm font-medium text-slate-700 mb-1">
                DNI
              </label>
              <input
                type="text"
                id="dni"
                name="dni"
                value={ dni }
                onChange={ onInputChanged }
                className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none transition-colors"
                placeholder="Ingresa el DNI"
                required
              />
            </div>

            <div>
              <label htmlFor="nombreCompleto" className="block text-sm font-medium text-slate-700 mb-1">
                Nombre Completo
              </label>
              <input
                type="text"
                id="nombreCompleto"
                name="nombreCompleto"
                value={ nombreCompleto }
                onChange={ onInputChanged }
                className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none transition-colors"
                placeholder="Ingresa el nombre completo"
                required
              />
            </div>

            <div>
              <label htmlFor="rol" className="block text-sm font-medium text-slate-700 mb-1">
                Rol
              </label>
              <select
                id="rol"
                name="rol"
                value={ rol }
                onChange={ onInputChanged }
                className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none transition-colors"
                required
              >
                <option value="">Selecciona un rol</option>
                <option value="Gerente">Gerente</option>
                <option value="Recepcionista">Recepcionista</option>
                <option value="Housekeeping">Housekeeping</option>
                <option value="Mantenimiento">Mantenimiento</option>
                <option value="Seguridad">Seguridad</option>
                <option value="Administración">Administración</option>
              </select>
            </div>

            <div>
              <label htmlFor="telefono" className="block text-sm font-medium text-slate-700 mb-1">
                Teléfono
              </label>
              <input
                type="tel"
                id="telefono"
                name="telefono"
                value={ telefono }
                onChange={ onInputChanged }
                className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none transition-colors"
                placeholder="Ingresa el teléfono"
                required
              />
            </div>
            {error && <p className="text-sm text-red-600">{error}</p>}
          </div>

          <div className="flex gap-3 mt-6">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 px-4 py-2 text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-lg font-medium transition-colors"
            >
              Cancelar
            </button>
            <button
              type="submit"
              disabled={loading}
              className="flex-1 px-4 py-2 bg-emerald-600 hover:bg-emerald-700 disabled:opacity-60 disabled:cursor-not-allowed text-white rounded-lg font-medium transition-colors flex items-center justify-center gap-2"
            >
              {loading && <Loader2 className="h-4 w-4 animate-spin" />}
              {loading ? "Guardando..." : "Agregar Personal"}
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

PersonalModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};
