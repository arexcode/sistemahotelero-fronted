
import { Users, Phone, BadgeIcon as IdCard, Briefcase } from "lucide-react"

export function PersonalCard({ persona }) {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 hover:shadow-md transition-shadow">
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center">
          <div className="bg-emerald-100 p-2 rounded-lg">
            <Users className="h-5 w-5 text-emerald-600" />
          </div>
          <div className="ml-3">
            <h3 className="font-semibold text-slate-800">{persona.nombre_completo}</h3>
            <div className="flex items-center text-sm text-slate-500 mt-1">
              <Briefcase className="h-3 w-3 mr-1" />
              {persona.rol}
            </div>
          </div>
        </div>
      </div>

      <div className="space-y-2">
        <div className="flex items-center text-sm text-slate-600">
          <IdCard className="h-4 w-4 mr-2 text-slate-400" />
          <span className="font-medium">DNI:</span>
          <span className="ml-1">{persona.dni}</span>
        </div>
        <div className="flex items-center text-sm text-slate-600">
          <Phone className="h-4 w-4 mr-2 text-slate-400" />
          <span className="font-medium">Tel:</span>
          <span className="ml-1">{persona.telefono}</span>
        </div>
      </div>

      <div className="mt-4 pt-4 border-t border-slate-100">
        <div className="flex items-center justify-between">
          <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-emerald-100 text-emerald-800">
            Activo
          </span>
          <button className="text-slate-400 hover:text-slate-600 transition-colors">
            <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  )
}
