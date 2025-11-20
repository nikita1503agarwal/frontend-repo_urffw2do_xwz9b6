import React from 'react'

export default function Navbar({ cartCount, onSearch }) {
  return (
    <header className="sticky top-0 z-40 backdrop-blur bg-slate-900/70 border-b border-slate-800">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-blue-500 grid place-items-center font-black text-white">S</div>
          <span className="text-white font-bold">SneakPeak</span>
        </div>
        <div className="hidden md:flex items-center gap-2 flex-1 max-w-md mx-6">
          <input onChange={(e)=>onSearch(e.target.value)} placeholder="Search shoes..." className="w-full px-4 py-2 rounded-xl bg-slate-800/70 border border-slate-700 text-white placeholder:text-slate-400 outline-none focus:ring-2 focus:ring-blue-500/40" />
        </div>
        <div className="flex items-center gap-4">
          <button className="text-slate-300 hover:text-white">Help</button>
          <button className="relative text-slate-300 hover:text-white">
            Cart
            {!!cartCount && (
              <span className="absolute -top-2 -right-3 text-[10px] bg-blue-500 text-white rounded-full px-1.5 py-0.5">{cartCount}</span>
            )}
          </button>
        </div>
      </div>
    </header>
  )
}
