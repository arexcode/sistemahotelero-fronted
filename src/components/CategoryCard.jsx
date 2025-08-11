import { Tag, Edit, Trash2 } from "lucide-react"

export function CategoryCard({ category }) {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 hover:shadow-md transition-shadow">
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center">
          <div className="bg-blue-100 p-2 rounded-lg mr-3">
            <Tag className="h-5 w-5 text-blue-600" />
          </div>
          <div>
            <h3 className="font-semibold text-slate-800">{category.nombre}</h3>
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

      <p className="text-slate-600 text-sm mb-4">{category.descripcion}</p>

      <div className="flex items-center justify-between text-xs text-slate-500">
        <span>ID: {category.id}</span>
        <span className="bg-slate-100 px-2 py-1 rounded">Activa</span>
      </div>
    </div>
  )
}
