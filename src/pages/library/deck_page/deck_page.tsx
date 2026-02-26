import { useParams } from "react-router";

export function DeckPage() {
  const { folderId, deckId } = useParams();

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">Deck {deckId}</h1>
      <p className="text-gray-500 mt-2">Cards will appear here</p>
      <p className="text-sm text-gray-400 mt-4">Folder: {folderId}</p>
    </div>
  );
}
