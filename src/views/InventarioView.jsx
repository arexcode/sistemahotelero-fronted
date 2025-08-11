"use client"

import { useEffect, useState } from "react"
import { Package, Tag, Search } from "lucide-react"
import { CategoryCard, CategoryModal, ProductCard, ProductModal } from "../components"
import { loadCategorias } from "../helpers/categoria"

const mockCategories = [
  { id: 1, nombre: "Electrónicos", descripcion: "Dispositivos y componentes electrónicos" },
  { id: 2, nombre: "Oficina", descripcion: "Suministros y equipos de oficina" },
  { id: 3, nombre: "Limpieza", descripcion: "Productos de limpieza y mantenimiento" },
]

const mockProducts = [
  { id: 1, nombre: "Laptop Dell", categoria_id: 1, costo_unitario: 1200, nivel_minimo: 5 },
  { id: 2, nombre: "Mouse Inalámbrico", categoria_id: 1, costo_unitario: 25, nivel_minimo: 20 },
  { id: 3, nombre: "Papel A4", categoria_id: 2, costo_unitario: 8, nivel_minimo: 50 },
  { id: 4, nombre: "Detergente", categoria_id: 3, costo_unitario: 12, nivel_minimo: 10 },
]

export function InventarioView() {
  const [showCategoryModal, setShowCategoryModal] = useState(false)
  const [showProductModal, setShowProductModal] = useState(false)
  const [searchTerm, setSearchTerm] = useState("")
  const [activeTab, setActiveTab] = useState("categories")

  const filteredCategories = mockCategories.filter(
    (category) =>
      category.nombre.toLowerCase().includes(searchTerm.toLowerCase()) ||
      category.descripcion.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  const filteredProducts = mockProducts.filter((product) =>
    product.nombre.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  useEffect(() => {
    
    const fetchCategories = async () => {
      const res = await loadCategorias();
      console.log(res);
    }

    fetchCategories();
  }, [])
  
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 mb-8">
        <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 h-4 w-4" />

            <input
              type="text"
              placeholder="Buscar categorías o productos..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-colors"
            />

          </div>

          <div className="flex gap-3">
            <button
              onClick={() => setShowCategoryModal(true)}
              className="inline-flex items-center px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors"
            >
              <Tag className="h-4 w-4 mr-2" />
              Nueva Categoría
            </button>
            <button
              onClick={() => setShowProductModal(true)}
              className="inline-flex items-center px-4 py-2 bg-green-600 hover:bg-green-700 text-white font-medium rounded-lg transition-colors"
            >
              <Package className="h-4 w-4 mr-2" />
              Nuevo Producto
            </button>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="mb-6">
        <div className="border-b border-slate-200">
          <nav className="-mb-px flex space-x-8">
            <button
              onClick={() => setActiveTab("categories")}
              className={`py-2 px-1 border-b-2 font-medium text-sm transition-colors ${
                activeTab === "categories"
                  ? "border-blue-500 text-blue-600"
                  : "border-transparent text-slate-500 hover:text-slate-700 hover:border-slate-300"
              }`}
            >
              <Tag className="h-4 w-4 inline mr-2" />
              Categorías ({filteredCategories.length})
            </button>
            <button
              onClick={() => setActiveTab("products")}
              className={`py-2 px-1 border-b-2 font-medium text-sm transition-colors ${
                activeTab === "products"
                  ? "border-blue-500 text-blue-600"
                  : "border-transparent text-slate-500 hover:text-slate-700 hover:border-slate-300"
              }`}
            >
              <Package className="h-4 w-4 inline mr-2" />
              Productos ({filteredProducts.length})
            </button>
          </nav>
        </div>
      </div>


      {activeTab === "categories" ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCategories.map((category) => (
            <CategoryCard key={category.id} category={category} />
          ))}
          {filteredCategories.length === 0 && (
            <div className="col-span-full text-center py-12">
              <Tag className="h-12 w-12 text-slate-300 mx-auto mb-4" />
              <p className="text-slate-500">No se encontraron categorías</p>
            </div>
          )}
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} categories={mockCategories} />
          ))}
          {filteredProducts.length === 0 && (
            <div className="col-span-full text-center py-12">
              <Package className="h-12 w-12 text-slate-300 mx-auto mb-4" />
              <p className="text-slate-500">No se encontraron productos</p>
            </div>
          )}
        </div>
      )}

      <CategoryModal isOpen={showCategoryModal} onClose={() => setShowCategoryModal(false)} />
      <ProductModal isOpen={showProductModal} onClose={() => setShowProductModal(false)} categories={mockCategories} />
    </div>
  )
}
