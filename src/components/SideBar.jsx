
import { BedSingle, Blocks,  CircleUser, FileText, PackagePlus, Zap } from "lucide-react";
import { Link } from "react-router-dom";

export const SIDEBAR_WIDTH = 256;

export function SideBar() {
  return (
    <aside
      className="flex h-screen w-64 flex-col bg-white border-r border-gray-200 shadow-sm sticky top-0"
      role="navigation"
    >
      <div className="flex items-center gap-3 border-b border-gray-100 p-6">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 text-white shadow-lg">
          <Zap className="h-5 w-5" />
        </div>
        <div className="flex flex-col">
          <h1 className="text-lg font-bold text-gray-900">DashBoard</h1>
          <p className="text-xs text-gray-500">Admin Panel</p>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto px-4 py-6">
        <div className="mb-6">
          <h2 className="mb-2 px-2 text-xs font-semibold uppercase tracking-wider text-gray-500">Navegación</h2>
          <nav className="space-y-1 text-sm">

            <Link to="/dashboard/inventario" className="block focus:outline-none group">
              <div className="flex items-center rounded-md px-3 py-2 gap-2 text-gray-700 hover:bg-gray-100 hover:text-gray-900 transition-colors">
                <Blocks className="h-4 w-4" />
                <span className="font-medium">Inventario</span>
              </div>
            </Link>

            <Link to="/dashboard/control-habitaciones" className="block focus:outline-none group">
              <div className="flex items-center rounded-md px-3 py-2 gap-2 text-gray-700 hover:bg-gray-100 hover:text-gray-900 transition-colors">
                <PackagePlus className="h-4 w-4" />
                <span className="font-medium"> Control de Habitaciones </span>
              </div>
            </Link>

            <Link to="/dashboard/habitaciones" className="block focus:outline-none group">
              <div className="flex items-center rounded-md px-3 py-2 gap-2 text-gray-700 hover:bg-gray-100 hover:text-gray-900 transition-colors">
                <BedSingle className="h-4 w-4" />
                <span className="font-medium"> Habitaciones </span>
              </div>
            </Link>

            <Link to="/dashboard/personal" className="block focus:outline-none group">
              <div className="flex items-center rounded-md px-3 py-2 gap-2 text-gray-700 hover:bg-gray-100 hover:text-gray-900 transition-colors">
                <CircleUser className="h-4 w-4" />
                <span className="font-medium"> Personal </span>
              </div>
            </Link>

            <Link to="/dashboard/reportes" className="block focus:outline-none group">
              <div className="flex items-center rounded-md px-3 py-2 gap-2 text-gray-700 hover:bg-gray-100 hover:text-gray-900 transition-colors">
                <FileText className="h-4 w-4" />
                <span className="font-medium">Reportes</span>
              </div>
            </Link>

          </nav>
        </div>
      </div>
    </aside>
  );
}
