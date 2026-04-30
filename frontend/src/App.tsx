import { useMemo, useState } from 'react';
import { DetailPanel } from './components/DetailPanel';
import { FrameworkMap } from './components/FrameworkMap';
import { Navigation } from './components/Navigation';
import { frameworkData } from './data/frameworkData';
import type { FrameworkNode } from './types';

const centerNode: FrameworkNode = {
  id: 'bh-system-of-care',
  title: 'BH System of Care',
  description:
    'A connected behavioral health framework organized around people, families, and communities.',
};

function App() {
  const [selectedCategoryId, setSelectedCategoryId] = useState<string | null>(null);

  const selectedCategory = useMemo(
    () => frameworkData.find((item) => item.id === selectedCategoryId),
    [selectedCategoryId],
  );

  function showOverview() {
    setSelectedCategoryId(null);
  }

  function showCategory(item: FrameworkNode) {
    setSelectedCategoryId(item.id);
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-stone-100 via-amber-50 to-rose-100 text-slate-950">
      <header className="border-b border-teal-900 bg-gradient-to-r from-slate-950 via-teal-900 to-sky-900 text-white shadow-sm">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 py-5 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.24em] text-teal-100">
              Impact Futures
            </p>
            <h1 className="mt-1 text-2xl font-black tracking-tight sm:text-3xl">
              Behavioral Health System of Care Framework
            </h1>
          </div>
          <Navigation
            canGoBack={selectedCategory !== undefined}
            onBack={showOverview}
            onHome={showOverview}
          />
        </div>
      </header>

      <section className="px-4 py-6 sm:px-6 lg:px-8">
        <FrameworkMap
          centerNode={centerNode}
          categories={frameworkData}
          onCategorySelect={showCategory}
        />

        {selectedCategory ? (
          <DetailPanel category={selectedCategory} onClose={showOverview} />
        ) : null}
      </section>

      <footer className="border-t border-slate-200 bg-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-4 py-4 text-sm text-slate-600 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
          <p className="font-semibold">© 2025 Impact Futures</p>
          <p>Phase 1 interactive front-end framework map</p>
        </div>
      </footer>
    </main>
  );
}

export default App;
