import type { FrameworkNode } from '../types';

interface DetailPanelProps {
  category: FrameworkNode;
  onClose: () => void;
}

export function DetailPanel({ category, onClose }: DetailPanelProps) {
  return (
    <div
      className="fixed inset-0 z-40 flex items-center justify-center bg-slate-950/55 p-4 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      aria-labelledby="section-detail-title"
    >
      <section className="max-h-[88vh] w-full max-w-5xl animate-zoomIn overflow-y-auto rounded-2xl border border-amber-200 bg-gradient-to-br from-white via-amber-50 to-rose-50 p-6 text-slate-950 shadow-[0_25px_80px_rgba(0,0,0,0.35)] sm:p-8">
        <div className="flex items-start justify-between gap-5 border-b border-amber-300 pb-4">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.24em] text-rose-700">
              Section Details
            </p>
            <h2 id="section-detail-title" className="mt-2 text-4xl font-black leading-tight">
              {category.title}
            </h2>
            <p className="mt-2 text-xl text-slate-700">{category.description}</p>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="shrink-0 rounded-full border border-slate-950 bg-white/80 px-4 py-2 text-sm font-black uppercase transition hover:bg-slate-950 hover:text-white"
          >
            Close
          </button>
        </div>

        <div className="mt-7 grid gap-7 md:grid-cols-2">
          {(category.children ?? []).map((child) => (
            <article
              key={child.id}
              className="rounded-xl border border-white/80 bg-white/75 p-5 shadow-[0_12px_35px_rgba(120,53,15,0.08)]"
            >
              <h3 className="text-2xl font-black leading-tight">{child.title}</h3>
              <p className="mt-3 text-base leading-7 text-slate-700">{child.description}</p>
              {child.points && child.points.length > 0 ? (
                <ul className="mt-4 space-y-2 text-sm leading-6 text-slate-800">
                  {child.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              ) : null}
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
