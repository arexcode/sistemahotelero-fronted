"use client"

import { useState } from "react"
import { X, Package } from "lucide-react"

export function ProductModal({ isOpen, onClose, categories }) {
  const [formData, setFormData] = useState({
    nombre: "",
    categoria_id: "",
    costo_unitario: "",
    nivel_minimo: "",
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    // Aquí iría la lógica para guardar el producto
    console.log("Nuevo producto:", formData)
    setFormData({ nombre: "", categoria_id: "", costo_unitario: "", nivel_minimo: "" })
    onClose()
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-xl shadow-xl max-w-md w-full">
        <div className="flex items-center justify-between p-6 border-b border-slate-200">
          <div className="flex items-center">
            <div className="bg-green-100 p-2 rounded-lg mr-3">
              <Package className="h-5 w-5 text-green-600" />
            </div>
            <h2 className="text-xl font-semibold text-slate-800">Nuevo Producto</h2>
          </div>
          <button
            onClick={onClose}
            className="h-8 w-8 p-0 rounded-md hover:bg-slate-100 flex items-center justify-center transition-colors"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-6">
          <div className="space-y-4">
            <div>
              <label htmlFor="nombre" className="block text-sm font-medium text-slate-700 mb-1">
                Nombre del producto
              </label>
              <input
                id="nombre"
                type="text"
                value={formData.nombre}
                onChange={(e) => setFormData({ ...formData, nombre: e.target.value })}
                placeholder="Ej: Laptop Dell"
                className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition-colors"
                required
              />
            </div>

            <div>
              <label htmlFor="categoria" className="block text-sm font-medium text-slate-700 mb-1">
                Categoría
              </label>
              <select
                id="categoria"
                value={formData.categoria_id}
                onChange={(e) => setFormData({ ...formData, categoria_id: e.target.value })}
                className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition-colors bg-white"
                required
              >
                <option value="">Selecciona una categoría</option>
                {categories.map((category) => (
                  <option key={category.id} value={category.id.toString()}>
                    {category.nombre}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label htmlFor="costo_unitario" className="block text-sm font-medium text-slate-700 mb-1">
                Costo unitario ($)
              </label>
              <input
                id="costo_unitario"
                type="number"
                step="0.01"
                value={formData.costo_unitario}
                onChange={(e) => setFormData({ ...formData, costo_unitario: e.target.value })}
                placeholder="0.00"
                className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition-colors"
                required
              />
            </div>

            <div>
              <label htmlFor="nivel_minimo" className="block text-sm font-medium text-slate-700 mb-1">
                Nivel mínimo de stock
              </label>
              <input
                id="nivel_minimo"
                type="number"
                value={formData.nivel_minimo}
                onChange={(e) => setFormData({ ...formData, nivel_minimo: e.target.value })}
                placeholder="10"
                className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition-colors"
                required
              />
            </div>
          </div>

          <div className="flex gap-3 mt-6">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 px-4 py-2 border border-slate-300 text-slate-700 font-medium rounded-lg hover:bg-slate-50 transition-colors"
            >
              Cancelar
            </button>
            <button
              type="submit"
              className="flex-1 px-4 py-2 bg-green-600 hover:bg-green-700 text-white font-medium rounded-lg transition-colors"
            >
              Crear Producto
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
