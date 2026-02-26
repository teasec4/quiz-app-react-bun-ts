export function StatsPage() {
  return (
    <div className="p-4 space-y-4">
      <h1 className="text-2xl font-bold">Statistics</h1>
      
      <div className="grid grid-cols-2 gap-3">
        <div className="bg-white p-4 rounded-lg border border-gray-200">
          <p className="text-gray-500 text-sm">Cards Learned</p>
          <p className="text-3xl font-bold text-purple-500 mt-2">0</p>
        </div>
        <div className="bg-white p-4 rounded-lg border border-gray-200">
          <p className="text-gray-500 text-sm">Study Streak</p>
          <p className="text-3xl font-bold text-orange-500 mt-2">0</p>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-3">
        <div className="bg-white p-4 rounded-lg border border-gray-200">
          <p className="text-gray-500 text-sm">Total Time</p>
          <p className="text-3xl font-bold text-green-500 mt-2">0h</p>
        </div>
        <div className="bg-white p-4 rounded-lg border border-gray-200">
          <p className="text-gray-500 text-sm">Decks Created</p>
          <p className="text-3xl font-bold text-blue-500 mt-2">0</p>
        </div>
      </div>

      <div className="bg-white p-4 rounded-lg border border-gray-200">
        <h3 className="font-semibold mb-3">Activity</h3>
        <p className="text-gray-500 text-center py-8">No activity yet</p>
      </div>
    </div>
  );
}
