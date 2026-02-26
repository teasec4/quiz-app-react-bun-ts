import { useNavigate, useLocation } from "react-router";
import { MdArrowBack } from "react-icons/md";
import { appColors } from "@/config/appColors";

export function AppBar() {
  const navigate = useNavigate();
  const location = useLocation();

  // Показываем стрелку только на вложенных маршрутах
  const mainRoutes = ['/study', '/library', '/stats'];
  const showBackButton = !mainRoutes.includes(location.pathname);

  return (
    <div
      className="fixed top-0 left-0 right-0 h-16 flex items-center px-4"
      style={{ backgroundColor: appColors.primary }}
    >
      {showBackButton && (
        <button
          onClick={() => navigate(-1)}
          className="text-white hover:opacity-80"
        >
          <MdArrowBack size={28} />
        </button>
      )}
    </div>
  );
}
