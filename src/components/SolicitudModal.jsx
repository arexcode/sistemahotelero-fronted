"use client"

import { useState } from "react"
import { X, Save, Calendar, Clock, User } from "lucide-react"

export function SolicitudModal({ isOpen, onClose, personal }) {
  const [formData, setFormData] = useState({
    solicitado_por: "",
    fecha_solicitud: "",
    turno: "",
    estado: "pendiente",
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("Nueva solicitud:", formData)
    // Aquí iría la lógica para guardar la solicitud
    onClose()
    setFormData({
      solicitado_por: "",
      fecha_solicitud: "",
      turno: "",
      estado: "pendiente",
    })
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-xl shadow-xl w-full max-w-md">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-slate-200">
          <h2 className="text-xl font-semibold text-slate-800">Nueva Solicitud</h2>
          <button onClick={onClose} className="text-slate-400 hover:text-slate-600 transition-colors">
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          {/* Personal */}
          <div>
            <label className="flex items-center text-sm font-medium text-slate-700 mb-2">
              <User className="h-4 w-4 mr-1" />
              Personal Solicitante
            </label>
            <select
              name="solicitado_por"
              value={formData.solicitado_por}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition-colors"
            >
              <option value="">Seleccionar personal</option>
              {personal.map((persona) => (
                <option key={persona.id} value={persona.id}>
                  {persona.nombre_completo} - {persona.rol}
                </option>
              ))}
            </select>
          </div>

          {/* Fecha */}
          <div>
            <label className="flex items-center text-sm font-medium text-slate-700 mb-2">
              <Calendar className="h-4 w-4 mr-1" />
              Fecha de Solicitud
            </label>
            <input
              type="datetime-local"
              name="fecha_solicitud"
              value={formData.fecha_solicitud}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition-colors"
            />
          </div>

          {/* Turno */}
          <div>
            <label className="flex items-center text-sm font-medium text-slate-700 mb-2">
              <Clock className="h-4 w-4 mr-1" />
              Turno
            </label>
            <select
              name="turno"
              value={formData.turno}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition-colors"
            >
              <option value="">Seleccionar turno</option>
              <option value="Mañana">Mañana</option>
              <option value="Tarde">Tarde</option>
              <option value="Noche">Noche</option>
            </select>
          </div>

          {/* Estado */}
          <div>
            <label className="flex items-center text-sm font-medium text-slate-700 mb-2">Estado</label>
            <select
              name="estado"
              value={formData.estado}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition-colors"
            >
              <option value="pendiente">Pendiente</option>
              <option value="aprobada">Aprobada</option>
              <option value="entregada">Entregada</option>
              <option value="rechazada">Rechazada</option>
            </select>
          </div>

          {/* Buttons */}
          <div className="flex gap-3 pt-4">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 px-4 py-2 text-slate-600 border border-slate-300 rounded-lg hover:bg-slate-50 transition-colors"
            >
              Cancelar
            </button>
            <button
              type="submit"
              className="flex-1 inline-flex items-center justify-center px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-lg transition-colors"
            >
              <Save className="h-4 w-4 mr-2" />
              Guardar
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
