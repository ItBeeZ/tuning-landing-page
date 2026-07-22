import { references } from '../data/references'
import { ReferenceCard } from '../components/ReferenceCard'

export function ReferencesPage() {
  return (
    <section className="bg-[#111827] px-4 py-16 sm:py-20">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 max-w-2xl">
          <h1 className="text-4xl font-bold tracking-tight text-white uppercase md:text-5xl">
            Referenciáink
          </h1>
          <p className="mt-3 text-gray-400">
            Valós optimalizálások – mérhető teljesítmény- és nyomatéknövekedéssel.
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {references.map((item) => (
            <ReferenceCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  )
}
