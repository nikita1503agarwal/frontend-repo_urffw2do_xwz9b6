import React from 'react'

export default function Hero({ onExplore }) {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        <div className="absolute -top-40 -right-32 w-[32rem] h-[32rem] bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-32 w-[28rem] h-[28rem] bg-cyan-400/10 rounded-full blur-3xl" />
      </div>

      <div className="text-center pt-20 pb-14">
        <h1 className="text-5xl md:text-6xl font-black tracking-tight text-white drop-shadow-sm">
          Step Into Your Next Pair
        </h1>
        <p className="mt-4 text-blue-100/90 text-lg max-w-2xl mx-auto">
          Discover trending sneakers, running shoes, and classics from top brands. Curated selection, fast shipping.
        </p>
        <div className="mt-8 flex items-center justify-center gap-4">
          <button onClick={onExplore} className="px-6 py-3 rounded-xl bg-blue-500 hover:bg-blue-600 text-white font-semibold shadow-lg shadow-blue-500/20 transition">
            Explore Collection
          </button>
          <a href="#new" className="px-6 py-3 rounded-xl bg-white/10 hover:bg-white/15 text-white font-semibold backdrop-blur border border-white/20 transition">
            New Arrivals
          </a>
        </div>
      </div>

      <div className="relative max-w-6xl mx-auto px-6">
        <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-3 opacity-90">
          {["/shoes/1.png","/shoes/2.png","/shoes/3.png","/shoes/4.png"].map((src, i) => (
            <div key={i} className="aspect-[4/3] rounded-2xl bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700/50 flex items-center justify-center overflow-hidden">
              <img src={src} alt="shoe" className="w-5/6 object-contain" onError={(e)=>{e.currentTarget.style.display='none'}} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
