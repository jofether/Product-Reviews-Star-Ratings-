export function Footer() {
  return (
    <div className="bg-slate-800 border-t border-slate-700 mt-20 py-0 px-0">
      {/* [BUG - SPACING: py-0 and px-0 removes all padding, text overlaps edges]
         [FIX: Change py-0 px-0 to py-12 px-4] */}
      <div className="max-w-7xl mx-auto px-4 text-center text-slate-400">
        <p className="mb-4">© 2026 ReviewHub. Authentic reviews, trusted by millions.</p>
        <div className="flex gap-6 justify-center text-sm">
          <a href="#" className="hover:text-white transition">About</a>
          <a href="#" className="hover:text-white transition">Privacy</a>
          <a href="#" className="hover:text-white transition">Terms</a>
          <a href="#" className="hover:text-white transition">Contact</a>
        </div>
      </div>
    </div>
  );
}
