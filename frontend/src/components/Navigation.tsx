interface NavigationProps {
  canGoBack: boolean;
  onBack: () => void;
  onHome: () => void;
}

export function Navigation({ canGoBack, onBack, onHome }: NavigationProps) {
  return (
    <nav className="flex flex-wrap items-center gap-2" aria-label="Framework navigation">
      <button
        type="button"
        onClick={onHome}
        className="rounded-full bg-slate-950 px-4 py-2 text-sm font-bold text-white transition hover:bg-slate-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-950"
      >
        Home
      </button>
      {canGoBack ? (
        <button
          type="button"
          onClick={onBack}
          className="rounded-full border border-slate-950 bg-white px-4 py-2 text-sm font-bold text-slate-950 transition hover:bg-slate-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-950"
        >
          Back
        </button>
      ) : null}
    </nav>
  );
}
