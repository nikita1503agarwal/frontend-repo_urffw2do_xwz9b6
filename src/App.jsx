import { useEffect, useMemo, useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import ProductGrid from './components/ProductGrid'

function App() {
  const [items, setItems] = useState([])
  const [query, setQuery] = useState('')
  const [cart, setCart] = useState([])
  const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

  const filtered = useMemo(() => {
    if (!query) return items
    const q = query.toLowerCase()
    return items.filter(i => [i.name, i.brand, i.description, i.category].some(v => (v||'').toLowerCase().includes(q)))
  }, [items, query])

  const fetchShoes = async () => {
    try {
      const res = await fetch(`${baseUrl}/api/shoes`)
      const data = await res.json()
      setItems(data.items || [])
    } catch (e) {
      setItems([])
    }
  }

  useEffect(() => { fetchShoes() }, [])

  const handleAddToCart = (item) => {
    setCart(prev => [...prev, item])
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950">
      <Navbar cartCount={cart.length} onSearch={setQuery} />
      <main className="max-w-6xl mx-auto px-6">
        <Hero onExplore={() => {
          window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })
        }} />

        <section id="collection" className="py-10">
          <div className="flex items-end justify-between mb-6">
            <div>
              <h2 className="text-2xl font-bold text-white">Featured Collection</h2>
              <p className="text-slate-300/80">Hand-picked best sellers and new arrivals</p>
            </div>
            <button onClick={fetchShoes} className="px-3 py-1.5 rounded-lg bg-white/10 text-white border border-white/15 hover:bg-white/15">Refresh</button>
          </div>
          <ProductGrid items={filtered} onAdd={handleAddToCart} />
        </section>
      </main>

      <footer className="border-t border-slate-800 mt-10">
        <div className="max-w-6xl mx-auto px-6 py-10 text-slate-400 text-sm flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-md bg-blue-500 grid place-items-center font-black text-white">S</div>
            <span>SneakPeak © {new Date().getFullYear()}</span>
          </div>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-white">Privacy</a>
            <a href="#" className="hover:text-white">Terms</a>
            <a href="/test" className="hover:text-white">System check</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
