import { useParams } from "react-router";
import { DeckTile } from "../components/deck_tile";

const mockDecks = [
  { id: '1', name: 'Vocabulary', cardCount: 25 },
  { id: '2', name: 'Grammar', cardCount: 18 },
  { id: '3', name: 'Phrases', cardCount: 12 },
];

export function FolderPage() {
  const { folderId } = useParams();

  return (
    <div className="p-4 space-y-3">
      <h1 className="text-2xl font-bold">Folder {folderId}</h1>
      {mockDecks.map((deck) => (
        <DeckTile
          key={deck.id}
          id={deck.id}
          name={deck.name}
          cardCount={deck.cardCount}
        />
      ))}
    </div>
  );
}
