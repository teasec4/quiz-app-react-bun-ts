import { NavLink } from "react-router";
import { MdSchool, MdLibraryBooks, MdBarChart } from "react-icons/md";
import { appColors } from "@/config/appColors";

export function BottomNavBar() {
  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200">
      <div className="flex justify-around">
        <NavLink
          to="/study"
          className={({ isActive }) =>
            `flex-1 py-4 px-2 text-center flex flex-col items-center gap-1 ${
              isActive ? "text-gray-900" : "text-gray-500"
            }`
          }
        >
          {({ isActive }) => (
            <>
              <MdSchool
                size={24}
                color={isActive ? appColors.primary : "#9CA3AF"}
              />
              <span className="text-xs">Study</span>
            </>
          )}
        </NavLink>
        <NavLink
          to="/library"
          className={({ isActive }) =>
            `flex-1 py-4 px-2 text-center flex flex-col items-center gap-1 ${
              isActive ? "text-gray-900" : "text-gray-500"
            }`
          }
        >
          {({ isActive }) => (
            <>
              <MdLibraryBooks
                size={24}
                color={isActive ? appColors.primary : "#9CA3AF"}
              />
              <span className="text-xs">Library</span>
            </>
          )}
        </NavLink>
        <NavLink
          to="/stats"
          className={({ isActive }) =>
            `flex-1 py-4 px-2 text-center flex flex-col items-center gap-1 ${
              isActive ? "text-gray-900" : "text-gray-500"
            }`
          }
        >
          {({ isActive }) => (
            <>
              <MdBarChart
                size={24}
                color={isActive ? appColors.primary : "#9CA3AF"}
              />
              <span className="text-xs">Stats</span>
            </>
          )}
        </NavLink>
      </div>
    </nav>
  );
}
