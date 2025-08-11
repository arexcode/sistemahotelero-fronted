"use client"

import { Home, MoreVertical } from "lucide-react"

export function HabitacionCard({ habitacion }) {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 hover:shadow-md transition-shadow">
      {/* Header */}
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center">
          <div className="bg-purple-100 p-2 rounded-lg">
            <Home className="h-5 w-5 text-purple-600" />
          </div>
        </div>
        <button className="text-slate-400 hover:text-slate-600 transition-colors">
          <MoreVertical className="h-4 w-4" />
        </button>
      </div>

      {/* Content */}
      <div className="space-y-3">
        <div>
          <h3 className="font-semibold text-slate-800 text-lg">Habitación {habitacion.numero}</h3>
        </div>

        {/* Status Badge */}
        <div className="flex items-center">
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
            Disponible
          </span>
        </div>
      </div>

      {/* Actions */}
      <div className="mt-4 pt-4 border-t border-slate-100">
        <div className="flex gap-2">
          <button className="flex-1 px-3 py-2 text-sm text-purple-600 hover:bg-purple-50 rounded-lg font-medium transition-colors">
            Ver Detalles
          </button>
          <button className="flex-1 px-3 py-2 text-sm text-slate-600 hover:bg-slate-50 rounded-lg font-medium transition-colors">
            Editar
          </button>
        </div>
      </div>
    </div>
  )
}
