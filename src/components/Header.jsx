export function Header() {
  return (
    <div className="bg-gradient-to-r from-slate-800 to-slate-900 border-b border-slate-700 sticky top-0 z-0 backdrop-blur-md bg-opacity-80">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-amber-400 to-amber-500 flex items-center justify-center text-xl group-hover:animate-float transition">
            📈
          </div>
          <h1 className="text-xl font-bold text-white group-hover:gradient-text transition">ReviewHub</h1>
        </div>
        <button className="bg-gradient-to-r from-amber-400 to-amber-500 text-slate-900 px-6 py-2 rounded-lg font-semibold hover:shadow-lg hover:shadow-amber-500/50 transition-all hover:scale-105">
          Write Review
        </button>
      </div>
    </div>
  );
}
