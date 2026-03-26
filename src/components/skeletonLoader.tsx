const imageTiles = [
  "col-span-2 row-span-2",
  "col-span-1 row-span-2",
  "col-span-1 row-span-1",
  "col-span-2 row-span-1",
  "col-span-1 row-span-1",
  "col-span-1 row-span-2",
  "col-span-2 row-span-2",
  "col-span-1 row-span-1",
]

export default function SkeletonLoader() {
  return (
    <section
      aria-label="Loading image results"
      className="w-full min-h-screen bg-blue-300/20 px-4 py-6 sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-8 animate-pulse space-y-3">
          <div className="h-4 w-28 rounded-full bg-slate-200" />
          <div className="h-10 w-64 rounded-full bg-slate-200" />
          <div className="h-4 w-80 max-w-full rounded-full bg-slate-200" />
        </div>

        <div className="grid auto-rows-[120px] grid-cols-2 gap-4 sm:auto-rows-[140px] sm:grid-cols-3 lg:auto-rows-[160px] lg:grid-cols-4">
          {imageTiles.map((tileSize, index) => (
            <article
              key={`${tileSize}-${index}`}
              className={`relative overflow-hidden rounded-[28px] border border-slate-200/80 bg-white shadow-sm ${tileSize}`}
            >
              <div className="absolute inset-0 animate-pulse bg-linear-to-br from-slate-200 via-slate-100 to-slate-200" />

              <div className="absolute left-4 top-4 flex items-center gap-2">
                <div className="h-10 w-10 animate-pulse rounded-full bg-white/80" />
                <div className="space-y-2">
                  <div className="h-3 w-20 animate-pulse rounded-full bg-white/80" />
                  <div className="h-3 w-14 animate-pulse rounded-full bg-white/70" />
                </div>
              </div>

              <div className="absolute inset-x-4 bottom-4 space-y-3">
                <div className="h-3 w-3/4 animate-pulse rounded-full bg-white/85" />
                <div className="flex gap-2">
                  <div className="h-8 w-20 animate-pulse rounded-full bg-white/80" />
                  <div className="h-8 w-16 animate-pulse rounded-full bg-white/70" />
                </div>
              </div>
            </article>
          ))}
        </div>

        <span className="sr-only">Loading image gallery...</span>
      </div>
    </section>
  )
}
