
import {
  Box,
  FileText,
  Zap,
} from "lucide-react"
import { Link } from "react-router-dom"

export function SideBar() {
  return (
    <div className="flex h-screen w-64 flex-col bg-white border-r border-gray-200 shadow-sm">
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
        <div className="mb-8">
          <h2 className="mb-3 px-2 text-xs font-semibold uppercase tracking-wider text-gray-500"> Navegación
          </h2>
          <nav className="space-y-1">

            <Link to={"./aaa"}>
                <div className="flex border-l p-2 bg-gray-100 mb-3">
                    <Box />
                    <h3 className="font-semibold ml-2"> Inventario </h3>
                </div>
            </Link>

            <Link to={"./aaa"}>
                <div className="flex border-l p-2 bg-gray-100 ">
                    <FileText />
                    <h3 className="font-semibold ml-2"> Reportes </h3>
                </div>
            </Link>

            {/* {navigationItems.map((item) => (
              <a
                key={item.title}
                href={item.url}
                className={`group relative flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-all duration-200 hover:bg-gray-50 ${
                  item.isActive
                    ? "bg-blue-50 text-blue-700 border-r-2 border-blue-500"
                    : "text-gray-700 hover:text-gray-900"
                }`}
              >
                <item.icon
                  className={`h-5 w-5 transition-colors ${
                    item.isActive ? "text-blue-600" : "text-gray-500 group-hover:text-gray-700"
                  }`}
                />
                <span className="flex-1">{item.title}</span>
                {item.badge && (
                  <span className="flex h-5 w-5 items-center justify-center rounded-full bg-red-100 text-xs font-medium text-red-600">
                    {item.badge}
                  </span>
                )}
              </a>
            ))} */}


          </nav>
        </div>

      </div>

    </div>
  )
}
