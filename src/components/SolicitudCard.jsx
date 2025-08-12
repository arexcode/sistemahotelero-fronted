
import { Calendar, Clock, User } from "lucide-react"

const estadoConfig = {
  pendiente: {
    bg: "bg-yellow-50",
    border: "border-yellow-200",
    text: "text-yellow-800",
    badge: "bg-yellow-100 text-yellow-800",
    dot: "bg-yellow-500",
  },
  aprobada: {
    bg: "bg-blue-50",
    border: "border-blue-200",
    text: "text-blue-800",
    badge: "bg-blue-100 text-blue-800",
    dot: "bg-blue-500",
  },
  entregada: {
    bg: "bg-green-50",
    border: "border-green-200",
    text: "text-green-800",
    badge: "bg-green-100 text-green-800",
    dot: "bg-green-500",
  },
  rechazada: {
    bg: "bg-red-50",
    border: "border-red-200",
    text: "text-red-800",
    badge: "bg-red-100 text-red-800",
    dot: "bg-red-500",
  },
}

export function SolicitudCard({ solicitud }) {
  const config = estadoConfig[solicitud.estado] || estadoConfig.pendiente

  const formatFecha = (fechaString) => {
    const fecha = new Date(fechaString)
    return fecha.toLocaleDateString("es-ES", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    })
  }

  return (
    <div className={`${config.bg} ${config.border} border rounded-xl p-6 hover:shadow-md transition-shadow`}>
      {/* Header con estado */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center">
          <div className={`w-3 h-3 ${config.dot} rounded-full mr-2`}></div>
          <span className={`text-sm font-medium ${config.text} capitalize`}>{solicitud.estado}</span>
        </div>
        <span className={`px-2 py-1 ${config.badge} text-xs font-medium rounded-full capitalize`}>
          {solicitud.estado}
        </span>
      </div>

      {/* Información del personal */}
      <div className="space-y-3">
        <div className="flex items-start">
          <User className={`h-4 w-4 ${config.text} mr-2 mt-0.5 flex-shrink-0`} />
          <div>
            <p className={`font-medium ${config.text}`}>{solicitud.personal.nombre_completo}</p>
            <p className="text-sm text-slate-600">{solicitud.personal.rol}</p>
          </div>
        </div>

        <div className="flex items-center">
          <Calendar className={`h-4 w-4 ${config.text} mr-2 flex-shrink-0`} />
          <span className="text-sm text-slate-600">{formatFecha(solicitud.fecha_solicitud)}</span>
        </div>

        <div className="flex items-center">
          <Clock className={`h-4 w-4 ${config.text} mr-2 flex-shrink-0`} />
          <span className="text-sm text-slate-600">Turno {solicitud.turno}</span>
        </div>
      </div>

      {/* ID de solicitud */}
      <div className="mt-4 pt-3 border-t border-slate-200">
        <span className="text-xs text-slate-500">Solicitud #{solicitud.id}</span>
      </div>
    </div>
  )
}
