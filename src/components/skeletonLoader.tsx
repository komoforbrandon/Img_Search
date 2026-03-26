const skeletonCards = Array.from({ length: 8 })

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

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {skeletonCards.map((_, index) => (
            <article
              key={index}
              className="overflow-hidden rounded-2xl bg-white shadow-md"
            >
              <div className="h-64 w-full animate-pulse bg-slate-200" />

              <div className="space-y-4 p-4">
                <div className="h-6 w-32 animate-pulse rounded-full bg-slate-200" />

                <div className="flex items-center justify-between gap-3">
                  <div className="h-8 w-20 animate-pulse rounded-full bg-slate-200" />
                  <div className="h-4 w-16 animate-pulse rounded-full bg-slate-200" />
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
