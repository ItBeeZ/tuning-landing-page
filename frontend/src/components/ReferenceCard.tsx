import type { Reference } from '../data/references'

type Props = {
  item: Reference
}

export function ReferenceCard({ item }: Props) {
  const factoryShare = Math.min(100, (item.fromHp / item.toHp) * 100)

  return (
    <article className="group overflow-hidden rounded-xl border border-gray-800 bg-[#111827] shadow-2xl transition duration-300 hover:border-bmw-blue">
      <div className="relative">
        <div className="absolute top-4 right-4 z-10">
          <span className="flex items-center gap-1 rounded-full border border-gray-600 bg-gray-900/80 px-3 py-1 text-xs font-bold text-white uppercase backdrop-blur-sm">
            <svg className="h-3 w-3 text-bmw-blue" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clipRule="evenodd"
              />
            </svg>
            {item.stage}
          </span>
        </div>

        <div className="relative h-48 overflow-hidden bg-gray-900">
          <img
            src={item.image}
            alt={item.title}
            loading="lazy"
            className="h-full w-full object-contain object-center transition duration-500 group-hover:scale-110"
          />
          <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/90 to-transparent p-3">
            <div className="flex items-center gap-2">
              <div className="rounded-full bg-red-600 p-1.5">
                <svg
                  className="h-4 w-4 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <h3 className="text-lg leading-tight font-bold text-white">{item.title}</h3>
            </div>
          </div>
        </div>
      </div>

      <div className="p-4">
        <div className="grid grid-cols-2 gap-2 border-t border-gray-800 pt-4 text-sm">
          <div className="border-r border-gray-800 text-center">
            <div className="mb-1 text-xs text-gray-500">Gyári</div>
            <div className="font-bold text-white">
              {item.fromHp} LE <span className="text-gray-600">|</span> {item.fromNm} Nm
            </div>
          </div>
          <div className="text-center">
            <div className="mb-1 text-xs font-bold text-bmw-blue">{item.stage}</div>
            <div className="font-bold text-white">
              {item.toHp} LE <span className="text-gray-600">|</span> {item.toNm} Nm
            </div>
          </div>
        </div>

        <div className="mt-3 flex h-1.5 overflow-hidden rounded-full bg-gray-800">
          <div className="h-full bg-gray-500" style={{ width: `${factoryShare}%` }} />
          <div className="h-full bg-bmw-blue" style={{ width: `${100 - factoryShare}%` }} />
        </div>
      </div>
    </article>
  )
}
