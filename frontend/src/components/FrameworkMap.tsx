import type { FrameworkNode } from '../types';

interface FrameworkMapProps {
  centerNode: FrameworkNode;
  categories: FrameworkNode[];
  onCategorySelect: (node: FrameworkNode) => void;
}

const sectionPlacement: Record<string, string> = {
  wellness: 'lg:col-start-2 lg:row-start-1',
  quality: 'lg:col-start-1 lg:row-start-2',
  support: 'lg:col-start-3 lg:row-start-2',
  critical: '',
  treatment: '',
};

const previewColumns: Record<string, string> = {
  treatment: 'sm:grid-cols-3',
  wellness: 'sm:grid-cols-3',
};

const sectionStyles: Record<string, string> = {
  wellness: 'border-emerald-200 bg-gradient-to-br from-emerald-50 to-lime-100/80',
  quality: 'border-violet-200 bg-gradient-to-br from-violet-50 to-fuchsia-100/70',
  support: 'border-sky-200 bg-gradient-to-br from-sky-50 to-cyan-100/80',
  critical: 'border-rose-200 bg-gradient-to-br from-rose-50 to-red-100/70',
  treatment: 'border-amber-200 bg-gradient-to-br from-amber-50 to-orange-100/75',
};

function SectionBox({
  category,
  onCategorySelect,
}: {
  category: FrameworkNode;
  onCategorySelect: (node: FrameworkNode) => void;
}) {
  return (
    <article
      className={`rounded-md border p-4 text-center shadow-[0_18px_45px_rgba(15,23,42,0.08)] transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_24px_55px_rgba(15,23,42,0.12)] sm:p-5 ${
        sectionStyles[category.id] ?? 'border-slate-200 bg-white'
      } ${
        sectionPlacement[category.id] ?? ''
      }`}
    >
      <div className="flex items-center justify-center gap-2">
        <h2 className="text-lg font-black leading-none tracking-wide sm:text-xl">
          {category.title}
        </h2>
        <button
          type="button"
          onClick={() => onCategorySelect(category)}
          className="rounded-full border border-slate-900 px-2.5 py-1 text-[10px] font-black uppercase tracking-wide transition hover:bg-slate-950 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-950"
          aria-label={`Zoom into ${category.title}`}
        >
          Zoom
        </button>
      </div>

      <p className="mt-2 text-xs leading-none text-slate-700">
        {category.description}
      </p>

      <div
        className={`mt-5 grid ${
          previewColumns[category.id] ?? 'sm:grid-cols-2'
        } gap-x-4 gap-y-5`}
      >
        {(category.children ?? []).map((child) => (
          <div key={child.id} className="min-w-0">
            <h3 className="text-[11px] font-black leading-tight text-slate-950">
              {child.title}
            </h3>
            <div className="mt-2 space-y-1.5 text-[10px] leading-snug text-slate-700">
              {child.points?.map((point) => (
                <p key={point}>{point}</p>
              ))}
            </div>
          </div>
        ))}
      </div>
    </article>
  );
}

export function FrameworkMap({
  centerNode,
  categories,
  onCategorySelect,
}: FrameworkMapProps) {
  return (
    <section
      className="mx-auto w-full max-w-7xl animate-zoomOut rounded-xl border border-white/70 bg-gradient-to-br from-white/90 via-amber-50/80 to-rose-50/80 p-4 shadow-[0_30px_90px_rgba(15,23,42,0.10)] backdrop-blur sm:p-6"
      aria-label="Behavioral Health System of Care framework map"
    >
      <div className="grid gap-5 lg:grid-cols-[1fr_1.04fr_1fr] lg:grid-rows-[auto_auto_auto]">
        {categories
          .filter((category) => category.id !== 'critical' && category.id !== 'treatment')
          .map((category) => (
          <SectionBox
            key={category.id}
            category={category}
            onCategorySelect={onCategorySelect}
          />
        ))}

        <div className="order-first flex min-h-[180px] flex-col items-center justify-center rounded-xl border border-teal-200 bg-gradient-to-br from-slate-950 via-teal-900 to-sky-900 px-6 py-7 text-center text-white shadow-[0_24px_70px_rgba(15,118,110,0.28)] ring-4 ring-teal-100 lg:order-none lg:col-start-2 lg:row-start-2">
          <p className="mb-3 text-xs font-black uppercase tracking-[0.24em] text-teal-100">
            Framework Core
          </p>
          <h1 className="text-3xl font-black leading-tight tracking-tight sm:text-4xl">
            {centerNode.title}
          </h1>
          <p className="mt-4 max-w-sm text-sm font-semibold leading-6 text-teal-50">
            Connected services, supports, and quality structures centered around
            community behavioral health needs.
          </p>
        </div>

        <div className="grid gap-5 lg:col-span-3 lg:row-start-3 lg:grid-cols-2 lg:px-[13%]">
          {categories
            .filter((category) => category.id === 'critical' || category.id === 'treatment')
            .map((category) => (
              <SectionBox
                key={category.id}
                category={category}
                onCategorySelect={onCategorySelect}
              />
            ))}
        </div>
      </div>
    </section>
  );
}
