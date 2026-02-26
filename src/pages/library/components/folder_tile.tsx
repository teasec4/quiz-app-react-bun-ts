import { useNavigate } from "react-router";
import { MdFolder } from "react-icons/md";
import { appColors } from "@/config/appColors";

interface FolderTileProps {
  id: string;
  name: string;
  deckCount: number;
}

export function FolderTile({ id, name, deckCount }: FolderTileProps) {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`/library/${id}`)}
      className="p-4 bg-white rounded-lg border border-gray-200 cursor-pointer hover:shadow-md transition-shadow"
    >
      <div className="flex items-center gap-3">
        <MdFolder size={40} color={appColors.primary} />
        <div className="flex-1">
          <h3 className="font-semibold text-gray-900">{name}</h3>
          <p className="text-sm text-gray-500">{deckCount} decks</p>
        </div>
      </div>
    </div>
  );
}
