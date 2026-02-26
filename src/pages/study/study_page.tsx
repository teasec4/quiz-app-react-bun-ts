export function StudyPage() {
  return (
    <div className="p-4 space-y-4">
      <h1 className="text-2xl font-bold">Study Mode</h1>
      
      <div className="bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg p-6 text-white">
        <h2 className="text-xl font-semibold mb-2">Continue Learning</h2>
        <p className="text-sm opacity-90">No active study sessions</p>
      </div>

      <div className="space-y-3">
        <h3 className="text-lg font-semibold text-gray-900">Recent Decks</h3>
        
        <div className="bg-white p-4 rounded-lg border border-gray-200">
          <p className="text-gray-500 text-center py-8">No decks yet</p>
        </div>
      </div>
    </div>
  );
}
