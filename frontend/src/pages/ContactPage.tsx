import { useState, type FormEvent } from 'react'
import { Car, Mail, MapPin, Phone, Send } from 'lucide-react'

export function ContactPage() {
  const [sent, setSent] = useState(false)

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setSent(true)
  }

  return (
    <div className="relative min-h-[calc(100vh-5rem)] text-white">
      <div className="fixed inset-0 z-[-1] bg-[url('/assets/images/backgrounds/contact_bg.jpg')] bg-cover bg-center blur-[5px]" />

      <section className="relative overflow-hidden bg-transparent py-16 sm:py-20">
        <div className="container relative z-10 mx-auto max-w-7xl px-4">
          <div className="mb-16 text-center">
            <h1 className="mb-4 text-4xl font-bold text-white uppercase drop-shadow-xl md:text-6xl">
              Kérj Ajánlatot!
            </h1>
            <p className="mx-auto max-w-3xl text-lg font-normal text-gray-300 md:text-xl">
              Add meg az autód adatait, és egyedi ajánlatot készítünk a
              teljesítményoptimalizálásra.
            </p>
          </div>

          <div className="mx-auto mb-16 grid max-w-6xl grid-cols-1 gap-8 md:grid-cols-3">
            <div className="group flex flex-col items-center rounded-lg border border-gray-800 bg-[#0f172a]/90 p-8 shadow-2xl backdrop-blur-sm transition duration-300 hover:-translate-y-2">
              <div className="mb-4 text-blue-500 transition-colors group-hover:text-white">
                <MapPin size={40} />
              </div>
              <h3 className="mb-2 text-xl font-bold tracking-wide uppercase">Elhelyezkedés</h3>
              <p className="text-center text-sm text-gray-400">
                Nyíregyháza, Liliom u. 53B, 4400 Magyarország
              </p>
            </div>

            <div className="group flex flex-col items-center rounded-lg border border-gray-800 bg-[#0f172a]/90 p-8 shadow-2xl backdrop-blur-sm transition duration-300 hover:-translate-y-2">
              <div className="mb-4 text-blue-500 transition-colors group-hover:text-white">
                <Mail size={40} />
              </div>
              <h3 className="mb-2 text-xl font-bold tracking-wide uppercase">E-mail Cím</h3>
              <a
                href="mailto:bombis.istvan@gmail.com"
                className="text-sm text-blue-500 transition-colors hover:text-white"
              >
                bombis.istvan@gmail.com
              </a>
            </div>

            <div className="group flex flex-col items-center rounded-lg border border-gray-800 bg-[#0f172a]/90 p-8 shadow-2xl backdrop-blur-sm transition duration-300 hover:-translate-y-2">
              <div className="mb-4 text-blue-500 transition-colors group-hover:text-white">
                <Phone size={40} />
              </div>
              <h3 className="mb-2 text-xl font-bold tracking-wide uppercase">Telefonszám</h3>
              <a
                href="tel:+36302774338"
                className="text-sm text-blue-500 transition-colors hover:text-white"
              >
                +36 30 277 4338
              </a>
            </div>
          </div>

          <div className="mx-auto max-w-7xl overflow-hidden rounded-xl border border-gray-800 bg-[#0f172a]/90 shadow-2xl backdrop-blur-md">
            <div className="flex flex-col lg:flex-row">
              <form onSubmit={handleSubmit} className="flex flex-col justify-center p-6 md:p-8 lg:w-1/2">
                <h2 className="mb-2 text-2xl font-bold text-white uppercase">
                  Vegye fel velünk a kapcsolatot
                </h2>
                <p className="mb-6 text-sm text-gray-400">
                  Kérdése van, vagy chiptuningra van szüksége? Töltse ki az alábbi űrlapot.
                </p>

                <div className="space-y-4">
                  <label className="block">
                    <span className="mb-1 block text-xs font-bold text-gray-300 uppercase">
                      Az Ön neve
                    </span>
                    <input
                      required
                      name="name"
                      type="text"
                      placeholder="Teljes név"
                      className="w-full rounded-lg border border-gray-700 bg-[#1e293b] px-3 py-2 text-sm text-white placeholder-gray-500 transition duration-200 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:outline-none"
                    />
                  </label>

                  <label className="block">
                    <span className="mb-1 block text-xs font-bold text-gray-300 uppercase">
                      Telefonszám
                    </span>
                    <input
                      required
                      name="phone"
                      type="tel"
                      placeholder="+36 30 ..."
                      className="w-full rounded-lg border border-gray-700 bg-[#1e293b] px-3 py-2 text-sm text-white placeholder-gray-500 transition duration-200 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:outline-none"
                    />
                  </label>

                  <label className="block">
                    <span className="mb-1 block text-xs font-bold text-gray-300 uppercase">
                      Autó adatai
                    </span>
                    <div className="relative">
                      <Car
                        size={16}
                        className="pointer-events-none absolute top-1/2 left-3 -translate-y-1/2 text-gray-500"
                      />
                      <input
                        required
                        name="car"
                        type="text"
                        placeholder="Pl.: BMW G20 320d 2020"
                        className="w-full rounded-lg border border-gray-700 bg-[#1e293b] py-2 pr-3 pl-10 text-sm text-white placeholder-gray-500 transition duration-200 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:outline-none"
                      />
                    </div>
                  </label>

                  <label className="block">
                    <span className="mb-1 block text-xs font-bold text-gray-300 uppercase">
                      Üzenet
                    </span>
                    <textarea
                      required
                      name="message"
                      rows={4}
                      placeholder="Mesélje el nekünk igényeit vagy kérdését..."
                      className="w-full resize-none rounded-lg border border-gray-700 bg-[#1e293b] px-3 py-2 text-sm text-white placeholder-gray-500 transition duration-200 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:outline-none"
                    />
                  </label>

                  <button
                    type="submit"
                    className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-blue-600 px-6 py-3 text-sm font-bold tracking-wider text-white uppercase shadow-lg transition duration-300 hover:bg-blue-700"
                  >
                    <Send size={16} />
                    Üzenet küldése
                  </button>

                  {sent && (
                    <p className="rounded-lg border border-green-500 bg-green-500/20 p-4 text-sm text-green-200">
                      Az üzenetet sikeresen elküldtük! Hamarosan felvesszük Önnel a kapcsolatot.
                    </p>
                  )}
                </div>
              </form>

              <div className="relative h-80 lg:h-auto lg:min-h-[500px] lg:w-1/2">
                <iframe
                  title="Bömbis István BMW Szerviz Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2693.366487563038!2d21.72403931562688!3d47.95427897920876!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47389faa622f92a3%3A0x805568194480678d!2zTnnDrXJlZ3how6F6YSwgTGlsaW9tIHUuIDUzLCA0NDAw!5e0!3m2!1shu!2shu!4v1647871234567!5m2!1shu!2shu"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="h-full w-full"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
