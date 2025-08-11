
import { X, Home } from "lucide-react"
import { addHabitacion } from "../helpers/habitacion"
import { useForm } from "../hooks"

export function HabitacionModal({ isOpen, onClose }) {

  const { onInputChanged, numero } = useForm({
    numero: "",
  }) 

  const handleSubmit = (e) => {
    e.preventDefault()

    addHabitacion( numero )

    console.log("Nueva habitación:", { numero })
    onClose()
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-xl shadow-xl w-full max-w-md">

        <div className="flex items-center justify-between p-6 border-b border-slate-200">
          <div className="flex items-center">
            <Home className="h-5 w-5 text-purple-600 mr-2" />
            <h2 className="text-xl font-semibold text-slate-800">Nueva Habitación</h2>
          </div>
          <button onClick={onClose} className="text-slate-400 hover:text-slate-600 transition-colors">
            <X className="h-5 w-5" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-6">
          <div className="space-y-4">
            <div>
              <label htmlFor="numero" className="block text-sm font-medium text-slate-700 mb-2">
                Número de Habitación *
              </label>
              <input
                type="text"
                id="numero"
                name="numero"
                value={numero}
                onChange={ onInputChanged }
                placeholder="Ej: 101, Suite Presidential"
                required
                className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition-colors"
              />
            </div>
          </div>

          {/* Actions */}
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
              className="flex-1 px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-lg font-medium transition-colors"
            >
              Crear Habitación
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
