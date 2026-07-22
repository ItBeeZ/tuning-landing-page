import { useEffect, useRef } from 'react'

const IFRAME_SRC = 'https://tuning-shop.com/iframe/iframe.php?user=7387'
const LOADER_SRC = 'https://tuning-shop.com/media/js/iframe-loader.js'

declare global {
  interface Window {
    iFrameResize?: (
      options: Record<string, unknown>,
      target: HTMLIFrameElement | string,
    ) => void
  }
}

function loadIframeResizer(): Promise<void> {
  if (typeof window.iFrameResize === 'function') {
    return Promise.resolve()
  }

  const existing = document.querySelector<HTMLScriptElement>(
    `script[src="${LOADER_SRC}"]`,
  )

  return new Promise((resolve, reject) => {
    const onReady = () => {
      if (typeof window.iFrameResize === 'function') resolve()
      else reject(new Error('iFrameResize not available'))
    }

    if (existing) {
      if (typeof window.iFrameResize === 'function') {
        resolve()
        return
      }
      existing.addEventListener('load', onReady, { once: true })
      existing.addEventListener('error', () => reject(new Error('loader failed')), {
        once: true,
      })
      return
    }

    const script = document.createElement('script')
    script.src = LOADER_SRC
    script.async = true
    script.addEventListener('load', onReady, { once: true })
    script.addEventListener('error', () => reject(new Error('loader failed')), {
      once: true,
    })
    document.body.appendChild(script)
  })
}

export function CalculatorPage() {
  const iframeRef = useRef<HTMLIFrameElement>(null)

  useEffect(() => {
    const iframe = iframeRef.current
    if (!iframe) return

    let cancelled = false

    const init = async () => {
      try {
        await loadIframeResizer()
        if (cancelled || !iframeRef.current) return

        // Az eredmény teljes oldal magasságú – maxHeight + scrolling, hogy
        // az iframe-en belül lehessen görgetni (Torque, Engine Specs, footer).
        const maxHeight = Math.max(720, Math.floor(window.innerHeight * 0.85))
        window.iFrameResize?.(
          {
            checkOrigin: false,
            scrolling: true,
            maxHeight,
            minHeight: 640,
            heightCalculationMethod: 'lowestElement',
            tolerance: 8,
          },
          iframeRef.current,
        )
      } catch {
        // Loader nélkül is engedjük a böngésző natív iframe-görgetését
      }
    }

    const onLoad = () => {
      void init()
    }

    if (iframe.contentWindow) {
      void init()
    }
    iframe.addEventListener('load', onLoad)

    return () => {
      cancelled = true
      iframe.removeEventListener('load', onLoad)
    }
  }, [])

  return (
    <section className="bg-black px-4 py-16 sm:py-20">
      <div className="mx-auto max-w-5xl text-center">
        <h1 className="text-4xl font-bold tracking-tight text-white uppercase drop-shadow-xl md:text-6xl">
          Stage Kalkulátor
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-lg font-normal text-gray-300 md:text-xl">
          Válaszd ki az autód paramétereit, és tudd meg, mekkora rejtett erőt tudunk
          felszabadítani a motorból.
        </p>
      </div>

      <div className="mx-auto mt-12 max-w-5xl rounded-xl border border-gray-800 bg-[#0f172a]/90 p-3 shadow-2xl backdrop-blur-sm sm:p-6">
        <div className="w-full overflow-auto rounded-lg bg-white">
          <iframe
            ref={iframeRef}
            title="Tuning-shop Stage Kalkulátor"
            src={IFRAME_SRC}
            width="100%"
            scrolling="yes"
            frameBorder={0}
            className="block w-full border-0"
            style={{ border: 0, minHeight: 720, overflow: 'auto' }}
          />
        </div>
      </div>
    </section>
  )
}
