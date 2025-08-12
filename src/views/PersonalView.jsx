"use client"

import { useState } from "react"
import { Users, Search } from "lucide-react"
import { PersonalCard } from "../components/PersonalCard"
import { PersonalModal } from "../components/PersonalModal"

const mockPersonal = [
  { id: 1, dni: "12345678", nombre_completo: "Juan Pérez García", rol: "Recepcionista", telefono: "555-0101" },
  { id: 2, dni: "87654321", nombre_completo: "María López Rodríguez", rol: "Housekeeping", telefono: "555-0102" },
  { id: 3, dni: "11223344", nombre_completo: "Carlos Martínez Silva", rol: "Gerente", telefono: "555-0103" },
  { id: 4, dni: "44332211", nombre_completo: "Ana González Torres", rol: "Mantenimiento", telefono: "555-0104" },
  { id: 5, dni: "55667788", nombre_completo: "Luis Hernández Vega", rol: "Seguridad", telefono: "555-0105" },
]

export function PersonalView() {
  const [showPersonalModal, setShowPersonalModal] = useState(false)
  const [searchTerm, setSearchTerm] = useState("")

  const filteredPersonal = mockPersonal.filter(
    (persona) =>
      persona.nombre_completo.toLowerCase().includes(searchTerm.toLowerCase()) ||
      persona.dni.includes(searchTerm) ||
      persona.rol.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  return (
    <div className="container mx-auto px-4 py-8">

      <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 mb-8">
        <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 h-4 w-4" />
            <input
              type="text"
              placeholder="Buscar personal..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none transition-colors"
            />
          </div>

          <div className="flex gap-3">
            <button
              onClick={() => setShowPersonalModal(true)}
              className="inline-flex items-center px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white font-medium rounded-lg transition-colors"
            >
              <Users className="h-4 w-4 mr-2" />
              Nuevo Personal
            </button>
          </div>
        </div>
      </div>


      <div className="mb-6">
        <div className="border-b border-slate-200 pb-4">
          <div className="flex items-center">
            <Users className="h-5 w-5 text-emerald-600 mr-2" />
            <h2 className="text-xl font-semibold text-slate-800">Personal ({filteredPersonal.length})</h2>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredPersonal.map((persona) => (
          <PersonalCard key={persona.id} persona={persona} />
        ))}
        {filteredPersonal.length === 0 && (
          <div className="col-span-full text-center py-12">
            <Users className="h-12 w-12 text-slate-300 mx-auto mb-4" />
            <p className="text-slate-500">No se encontró personal</p>
          </div>
        )}
      </div>

      <PersonalModal isOpen={showPersonalModal} onClose={() => setShowPersonalModal(false)} />
    </div>
  )
}
