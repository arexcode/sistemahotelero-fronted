
import { Package, DollarSign, AlertTriangle, Edit, Trash2 } from "lucide-react"

export function ProductCard({ product, categories }) {
  const category = categories.find((cat) => cat.id === product.categoria_id)
  const isLowStock = Math.random() > 0.7 // Mock low stock indicator

  return (
    <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 hover:shadow-md transition-shadow">
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center">
          <div className="bg-green-100 p-2 rounded-lg mr-3">
            <Package className="h-5 w-5 text-green-600" />
          </div>
          <div>
            <h3 className="font-semibold text-slate-800">{product.nombre}</h3>
            <p className="text-xs text-slate-500">{category?.nombre}</p>
          </div>
        </div>
        <div className="flex gap-1">
          <button className="h-8 w-8 p-0 rounded-md hover:bg-slate-100 flex items-center justify-center transition-colors">
            <Edit className="h-4 w-4 text-slate-500" />
          </button>
          <button className="h-8 w-8 p-0 rounded-md hover:bg-red-50 flex items-center justify-center transition-colors">
            <Trash2 className="h-4 w-4 text-red-500" />
          </button>
        </div>
      </div>

      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center text-sm">
            <DollarSign className="h-4 w-4 text-slate-400 mr-1" />
            <span className="text-slate-600">Costo unitario</span>
          </div>
          <span className="font-semibold text-slate-800">${product.costo_unitario}</span>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center text-sm">
            <AlertTriangle className="h-4 w-4 text-slate-400 mr-1" />
            <span className="text-slate-600">Nivel mínimo</span>
          </div>
          <span className="font-semibold text-slate-800">{product.nivel_minimo}</span>
        </div>
      </div>

      <div className="flex items-center justify-between mt-4 pt-4 border-t border-slate-100">
        <span className="text-xs text-slate-500">ID: {product.id}</span>
        {isLowStock && (
          <span className="bg-red-100 text-red-700 px-2 py-1 rounded text-xs font-medium">Stock Bajo</span>
        )}
        {!isLowStock && (
          <span className="bg-green-100 text-green-700 px-2 py-1 rounded text-xs font-medium">En Stock</span>
        )}
      </div>
    </div>
  )
}
