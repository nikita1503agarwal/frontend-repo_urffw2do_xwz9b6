import React from 'react'

export default function ProductCard({ item, onAdd }) {
  return (
    <div className="group rounded-2xl bg-slate-800/60 border border-slate-700/50 overflow-hidden hover:border-blue-500/40 transition relative">
      <div className="aspect-square bg-slate-900/60 flex items-center justify-center">
        {item.image ? (
          <img src={item.image} alt={item.name} className="w-4/5 h-4/5 object-contain transition-transform duration-300 group-hover:scale-105" />
        ) : (
          <div className="text-slate-400">No image</div>
        )}
      </div>
      <div className="p-4">
        <div className="flex items-center justify-between gap-3">
          <h3 className="text-white font-semibold truncate" title={item.name}>{item.name}</h3>
          <span className="text-white font-bold">${item.price?.toFixed(2)}</span>
        </div>
        <p className="mt-1 text-sm text-slate-300/80 line-clamp-2 min-h-[2.5rem]">{item.description || '—'}</p>
        <div className="mt-3 flex items-center justify-between">
          <div className="text-xs text-slate-400">{item.brand}</div>
          <button onClick={() => onAdd(item)} className="px-3 py-1.5 rounded-lg bg-blue-500 hover:bg-blue-600 text-white text-sm font-medium">
            Add to cart
          </button>
        </div>
      </div>
    </div>
  )
}
