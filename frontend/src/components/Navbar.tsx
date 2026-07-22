import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Menu, X } from 'lucide-react'

const links = [
  { to: '/', label: 'Kezdőlap' },
  { to: '/kalkulator', label: 'Kalkulátor' },
  { to: '/referenciak', label: 'Referenciák' },
  { to: '/kapcsolat', label: 'Kapcsolat' },
]

export function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <nav className="sticky top-0 z-50 h-20 bg-black text-white shadow-md">
      <div className="container mx-auto flex h-full max-w-7xl items-center justify-between px-4">
        <Link to="/" className="flex h-full items-center gap-2" onClick={() => setOpen(false)}>
          <span className="relative block h-full w-[100px] sm:w-[120px]">
            <img
              src="/assets/images/logok/logo-without-bg.webp"
              alt="Bömbis István"
              className="absolute -top-2 left-0 h-24 w-full object-contain"
            />
          </span>
          <span className="hidden text-xl font-bold tracking-wider sm:inline">
            Bömbis István
          </span>
        </Link>

        <div className="hidden items-center gap-6 md:flex">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === '/'}
              className={({ isActive }) =>
                `transition ${isActive ? 'text-bmw-blue' : 'hover:text-bmw-blue'}`
              }
            >
              {link.label}
            </NavLink>
          ))}
          <Link
            to="/kapcsolat"
            className="rounded-full bg-blue-500 px-6 py-2.5 font-bold text-white shadow-lg transition hover:scale-105 hover:bg-blue-600"
          >
            Időpontfoglalás
          </Link>
        </div>

        <button
          type="button"
          className="text-white focus:outline-none md:hidden"
          aria-label={open ? 'Menü bezárása' : 'Menü megnyitása'}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <div
        className={`fixed inset-0 z-40 bg-black/50 backdrop-blur-sm transition-opacity duration-300 md:hidden ${
          open ? 'visible opacity-100' : 'invisible opacity-0'
        }`}
        onClick={() => setOpen(false)}
      />

      <div
        className={`fixed top-0 right-0 z-50 h-full w-80 transform bg-black shadow-xl transition-transform duration-300 md:hidden ${
          open ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex justify-end p-4">
          <button type="button" onClick={() => setOpen(false)} className="text-white">
            <X size={24} />
          </button>
        </div>
        <div className="space-y-2 px-4">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === '/'}
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                `block py-2 transition ${
                  isActive ? 'text-bmw-blue' : 'text-white hover:text-bmw-blue'
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
          <Link
            to="/kapcsolat"
            onClick={() => setOpen(false)}
            className="mt-4 block rounded-full bg-blue-500 py-3 text-center font-bold text-white hover:bg-blue-600"
          >
            Időpontfoglalás
          </Link>
        </div>
      </div>
    </nav>
  )
}
