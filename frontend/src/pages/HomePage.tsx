import { Link } from 'react-router-dom'
import { ArrowRight, Cpu, Gauge, ShieldCheck, Activity, Zap } from 'lucide-react'
import { featuredReferences } from '../data/references'
import { ReferenceCard } from '../components/ReferenceCard'

const features = [
  {
    icon: Cpu,
    title: 'Egyedi Szoftverek',
    text: 'Minden motorhoz egyedi optimalizálás, sablonok nélkül – a Te autódra hangolva.',
  },
  {
    icon: ShieldCheck,
    title: 'Biztonságos Növelés',
    text: 'Gyári biztonsági határokon belül dolgozunk, hogy a motor és a hajtáslánc hosszú távon is bírja.',
  },
  {
    icon: Activity,
    title: 'Mérhető Eredmény',
    text: 'Minden beállítás után diagnosztikai mérésekkel bizonyítjuk a teljesítménynövekedést.',
  },
]

export function HomePage() {
  return (
    <>
      <section className="relative flex min-h-[calc(100vh-5rem)] items-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center blur-[2px] brightness-50"
          style={{ backgroundImage: "url('/assets/images/backgrounds/hero_bg.jpg')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-black/35" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/40" />

        <div className="relative z-10 mx-auto w-full max-w-7xl px-4 py-20">
          <div className="max-w-3xl">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-bmw-blue/40 bg-bmw-blue/15 px-3.5 py-1.5">
              <Zap size={14} className="text-bmw-blue" />
              <span className="text-xs font-medium tracking-[0.14em] text-bmw-blue uppercase">
                Prémium teljesítménynövelés
              </span>
            </div>

            <h1 className="text-5xl leading-[0.95] font-bold tracking-tight text-white uppercase drop-shadow-[0_0_10px_rgba(0,0,0,0.5)] sm:text-6xl lg:text-7xl">
              Szabadítsd ki a
              <span className="mt-1 block text-bmw-blue">valódi erőt</span>
            </h1>

            <p className="mt-6 max-w-xl text-lg font-medium text-gray-200 md:text-xl">
              Professzionális motoroptimalizálás, egyedi szoftverek és biztonságos
              teljesítménynövelés – mérhető eredménnyel.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to="/kalkulator"
                className="inline-flex items-center gap-2 rounded-full bg-blue-500 px-8 py-3 font-bold text-white shadow-lg transition hover:scale-105 hover:bg-blue-600"
              >
                <Gauge size={18} />
                Stage Kalkulátor
              </Link>
              <Link
                to="/referenciak"
                className="inline-flex items-center rounded-full border border-gray-600 bg-gray-900/50 px-8 py-3 font-bold text-white transition hover:border-bmw-blue hover:text-bmw-blue"
              >
                Referenciáink
              </Link>
            </div>
          </div>

          <div className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 sm:flex">
            <span className="text-[10px] tracking-[0.25em] text-gray-500 uppercase">
              Görgess lejjebb
            </span>
            <div className="h-10 w-px bg-gradient-to-b from-bmw-blue to-transparent" />
          </div>
        </div>
      </section>

      <section className="bg-black px-4 py-20">
        <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-3">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="rounded-lg border border-gray-800 bg-[#1F2937] p-6 shadow-lg transition duration-300 hover:-translate-y-1 hover:bg-gray-800"
            >
              <div className="mb-3 text-blue-500">
                <feature.icon size={28} />
              </div>
              <h2 className="mb-2 text-xl font-bold text-white">{feature.title}</h2>
              <p className="text-sm text-gray-400">{feature.text}</p>
            </div>
          ))}
        </div>

        <div className="mx-auto mt-16 flex max-w-7xl flex-wrap items-center justify-center gap-3">
          <Link
            to="/kalkulator"
            className="inline-flex items-center gap-2 rounded-full bg-blue-500 px-8 py-3 font-bold text-white shadow-lg transition hover:scale-105 hover:bg-blue-600"
          >
            <Gauge size={18} />
            Stage Kalkulátor
          </Link>
          <Link
            to="/referenciak"
            className="inline-flex items-center rounded-full border border-gray-600 px-8 py-3 font-bold text-white transition hover:border-bmw-blue hover:text-bmw-blue"
          >
            Referenciáink
          </Link>
        </div>
      </section>

      <section className="bg-[#111827] px-4 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h2 className="text-3xl font-bold text-white md:text-4xl">Kiemelt Munkáink</h2>
              <p className="mt-2 text-gray-400">
                Néhány példa a sikeres optimalizálásokból.
              </p>
            </div>
            <Link
              to="/referenciak"
              className="inline-flex items-center gap-1 text-bmw-blue transition hover:text-blue-400"
            >
              Összes megtekintése
              <ArrowRight size={16} />
            </Link>
          </div>

          <div className="grid gap-8 sm:grid-cols-2">
            {featuredReferences.map((item) => (
              <ReferenceCard key={item.id} item={item} />
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
