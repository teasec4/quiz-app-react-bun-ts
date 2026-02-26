import { useNavigate, useParams } from "react-router";
import { MdLibraryBooks } from "react-icons/md";
import { appColors } from "@/config/appColors";

interface DeckTileProps {
  id: string;
  name: string;
  cardCount: number;
}

export function DeckTile({ id, name, cardCount }: DeckTileProps) {
  const navigate = useNavigate();
  const { folderId } = useParams();

  return (
    <div
      onClick={() => navigate(`/library/${folderId}/${id}`)}
      className="p-4 bg-white rounded-lg border border-gray-200 cursor-pointer hover:shadow-md transition-shadow"
    >
      <div className="flex items-center gap-3">
        <MdLibraryBooks size={40} color={appColors.primary} />
        <div className="flex-1">
          <h3 className="font-semibold text-gray-900">{name}</h3>
          <p className="text-sm text-gray-500">{cardCount} cards</p>
        </div>
      </div>
    </div>
  );
}
