import { SideBar } from "../components";
import PropTypes from "prop-types";

export function MainLayout({ children }) {
    return (
        <div className="flex min-h-screen w-full bg-gray-50">
            <SideBar />
            <main className="flex-1 p-6 overflow-auto">
                {children}
            </main>
        </div>
    );
}

MainLayout.propTypes = {
    children: PropTypes.node
};