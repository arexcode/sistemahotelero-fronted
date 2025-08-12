"use client"

import { useState } from "react"
import { ClipboardList, Search, Calendar } from "lucide-react"
import { SolicitudCard } from "../components/SolicitudCard"
import { SolicitudModal } from "../components"


// Mock data - incluye datos del personal para mostrar nombres
const mockPersonal = [
  { id: 1, nombre_completo: "Juan Pérez García", rol: "Recepcionista" },
  { id: 2, nombre_completo: "María López Rodríguez", rol: "Housekeeping" },
  { id: 3, nombre_completo: "Carlos Martínez Silva", rol: "Gerente" },
  { id: 4, nombre_completo: "Ana González Torres", rol: "Mantenimiento" },
]

const mockSolicitudes = [
  {
    id: 1,
    solicitado_por: 1,
    fecha_solicitud: "2024-01-15T10:30:00",
    turno: "Mañana",
    estado: "pendiente",
  },
  {
    id: 2,
    solicitado_por: 2,
    fecha_solicitud: "2024-01-15T14:15:00",
    turno: "Tarde",
    estado: "aprobada",
  },
  {
    id: 3,
    solicitado_por: 3,
    fecha_solicitud: "2024-01-14T09:00:00",
    turno: "Noche",
    estado: "entregada",
  },
  {
    id: 4,
    solicitado_por: 4,
    fecha_solicitud: "2024-01-14T16:45:00",
    turno: "Mañana",
    estado: "rechazada",
  },
]

export function ControlHabitacionesView() {
  const [showSolicitudModal, setShowSolicitudModal] = useState(false)
  const [searchTerm, setSearchTerm] = useState("")
  const [filtroEstado, setFiltroEstado] = useState("todos")

  // Combinar datos de solicitudes con información del personal
  const solicitudesConPersonal = mockSolicitudes.map((solicitud) => {
    const personal = mockPersonal.find((p) => p.id === solicitud.solicitado_por)
    return {
      ...solicitud,
      personal: personal || { nombre_completo: "Personal no encontrado", rol: "" },
    }
  })

  const filteredSolicitudes = solicitudesConPersonal.filter((solicitud) => {
    const matchesSearch =
      solicitud.personal.nombre_completo.toLowerCase().includes(searchTerm.toLowerCase()) ||
      solicitud.turno.toLowerCase().includes(searchTerm.toLowerCase()) ||
      solicitud.estado.toLowerCase().includes(searchTerm.toLowerCase())

    const matchesEstado = filtroEstado === "todos" || solicitud.estado === filtroEstado

    return matchesSearch && matchesEstado
  })

  const estadoCount = {
    pendiente: solicitudesConPersonal.filter((s) => s.estado === "pendiente").length,
    aprobada: solicitudesConPersonal.filter((s) => s.estado === "aprobada").length,
    entregada: solicitudesConPersonal.filter((s) => s.estado === "entregada").length,
    rechazada: solicitudesConPersonal.filter((s) => s.estado === "rechazada").length,
  }

  return (
    <div className="container mx-auto px-4 py-8">

      <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 mb-8">
        <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 h-4 w-4" />
            <input
              type="text"
              placeholder="Buscar solicitudes..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition-colors"
            />
          </div>

          <div className="flex gap-3 items-center">
            <select
              value={filtroEstado}
              onChange={(e) => setFiltroEstado(e.target.value)}
              className="px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition-colors"
            >
              <option value="todos">Todos los estados</option>
              <option value="pendiente">Pendientes</option>
              <option value="aprobada">Aprobadas</option>
              <option value="entregada">Entregadas</option>
              <option value="rechazada">Rechazadas</option>
            </select>

            <button
              onClick={() => setShowSolicitudModal(true)}
              className="inline-flex items-center px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-lg transition-colors"
            >
              <ClipboardList className="h-4 w-4 mr-2" />
              Nueva Solicitud
            </button>
          </div>
        </div>
      </div>

      {/* Header Section */}
      <div className="mb-6">
        <div className="border-b border-slate-200 pb-4">
          <div className="flex items-center">
            <Calendar className="h-5 w-5 text-indigo-600 mr-2" />
            <h2 className="text-xl font-semibold text-slate-800">Solicitudes ({filteredSolicitudes.length})</h2>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredSolicitudes.map((solicitud) => (
          <SolicitudCard key={solicitud.id} solicitud={solicitud} />
        ))}
        {filteredSolicitudes.length === 0 && (
          <div className="col-span-full text-center py-12">
            <ClipboardList className="h-12 w-12 text-slate-300 mx-auto mb-4" />
            <p className="text-slate-500">No se encontraron solicitudes</p>
          </div>
        )}
      </div>

      {/* Modal */}
      <SolicitudModal
        isOpen={showSolicitudModal}
        onClose={() => setShowSolicitudModal(false)}
        personal={mockPersonal}
      />
    </div>
  )
}
