import { FolderTile } from "./components/folder_tile";

const mockFolders = [
  { id: '1', name: 'English', deckCount: 5 },
  { id: '2', name: 'Math', deckCount: 3 },
  { id: '3', name: 'History', deckCount: 7 },
  { id: '4', name: 'Biology', deckCount: 4 },
];

export function LibraryPage() {
  return (
    <div className="p-4 space-y-3">
      <h1 className="text-2xl font-bold mb-4">Library</h1>
      {mockFolders.map((folder) => (
        <FolderTile
          key={folder.id}
          id={folder.id}
          name={folder.name}
          deckCount={folder.deckCount}
        />
      ))}
    </div>
  );
}