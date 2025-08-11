
import { X, Tag } from "lucide-react"
import PropTypes from "prop-types";
import { useForm } from "../hooks"
import { addCategory } from "../helpers/categoria";

export function CategoryModal({ isOpen, onClose }) {
  const { onInputChanged, descripcion, nombre, onResetForm } = useForm({ nombre: "", descripcion: "" })

  const handleSubmit = (e) => {
    e.preventDefault()
    const res = addCategory( nombre, descripcion )
    console.log(res)
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-xl shadow-xl max-w-md w-full">
        <div className="flex items-center justify-between p-6 border-b border-slate-200">
          <div className="flex items-center">
            <div className="bg-blue-100 p-2 rounded-lg mr-3">
              <Tag className="h-5 w-5 text-blue-600" />
            </div>
            <h2 className="text-xl font-semibold text-slate-800"> Nueva Categoría </h2>
          </div>
          <button
            onClick={onClose}
            className="h-8 w-8 p-0 rounded-md hover:bg-slate-100 flex items-center justify-center transition-colors"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        <form onSubmit={ handleSubmit } className="p-6">
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">
                Nombre de la categoría
              </label>
              <input
                name="nombre"
                onChange={ onInputChanged }
                value={ nombre }
                placeholder="Ej: Electrónicos"
                className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-colors"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">
                Descripción
              </label>
              <textarea
                name="descripcion"
                value={ descripcion }
                onChange={ onInputChanged }
                placeholder="Describe brevemente esta categoría..."
                className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-colors resize-none"
                rows={3}
                required
              />
            </div>
          </div>

          <div className="flex gap-3 mt-6">
            <button
              type="button"
              onClick={() => { onResetForm(); onClose(); }}
              className="flex-1 px-4 py-2 border border-slate-300 text-slate-700 font-medium rounded-lg hover:bg-slate-50 transition-colors"
            >
              Cancelar
            </button>
            <button
              type="submit"
              className="flex-1 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors"
            >
              Crear Categoría
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

CategoryModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};
