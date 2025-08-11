"use client"

import { useState } from "react"
import { Home, Search } from "lucide-react"
import { HabitacionCard, HabitacionModal } from "../components"

// Mock data
const mockHabitaciones = [
  { id: 1, numero: "101" },
  { id: 2, numero: "102" },
  { id: 3, numero: "201" },
  { id: 4, numero: "202" },
  { id: 5, numero: "301" },
  { id: 6, numero: "Suite Presidential" },
]

export function HabitacionesView() {
  const [showHabitacionModal, setShowHabitacionModal] = useState(false)
  const [searchTerm, setSearchTerm] = useState("")

  const filteredHabitaciones = mockHabitaciones.filter((habitacion) =>
    habitacion.numero.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  return (
    <div className="container mx-auto px-4 py-8">

      <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 mb-8">
        <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 h-4 w-4" />
            <input
              type="text"
              placeholder="Buscar habitaciones..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition-colors"
            />
          </div>

          <div className="flex gap-3">
            <button
              onClick={() => setShowHabitacionModal(true)}
              className="inline-flex items-center px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white font-medium rounded-lg transition-colors"
            >
              <Home className="h-4 w-4 mr-2" />
              Nueva Habitación
            </button>
          </div>
        </div>
      </div>

      {/* Header Section */}
      <div className="mb-6">
        <div className="border-b border-slate-200 pb-4">
          <div className="flex items-center">
            <Home className="h-5 w-5 text-purple-600 mr-2" />
            <h2 className="text-xl font-semibold text-slate-800">Habitaciones ({filteredHabitaciones.length})</h2>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filteredHabitaciones.map((habitacion) => (
          <HabitacionCard key={habitacion.id} habitacion={habitacion} />
        ))}
        {filteredHabitaciones.length === 0 && (
          <div className="col-span-full text-center py-12">
            <Home className="h-12 w-12 text-slate-300 mx-auto mb-4" />
            <p className="text-slate-500">No se encontraron habitaciones</p>
          </div>
        )}
      </div>

      {/* Modal */}
      <HabitacionModal isOpen={showHabitacionModal} onClose={() => setShowHabitacionModal(false)} />
    </div>
  )
}
