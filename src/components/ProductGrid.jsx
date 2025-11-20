import React from 'react'
import ProductCard from './ProductCard'

export default function ProductGrid({ items, onAdd }) {
  if (!items?.length) {
    return (
      <div className="text-center text-slate-300 py-20">No products found.</div>
    )
  }
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
      {items.map((item) => (
        <ProductCard key={item.id || item._id} item={item} onAdd={onAdd} />
      ))}
    </div>
  )
}
