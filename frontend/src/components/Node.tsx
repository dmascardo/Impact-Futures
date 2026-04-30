import type { FrameworkNode } from '../types';

interface NodeProps {
  node: FrameworkNode;
  onSelect: (node: FrameworkNode) => void;
  compact?: boolean;
}

export function Node({ node, onSelect, compact = false }: NodeProps) {
  const visiblePoints = compact ? node.points?.slice(0, 3) : node.points;

  return (
    <button
      type="button"
      onClick={() => onSelect(node)}
      className="group block w-full text-center text-black outline-none transition duration-300 hover:scale-[1.035] focus-visible:ring-2 focus-visible:ring-black/30"
      aria-label={`Open ${node.title}`}
    >
      <h3 className={compact ? 'text-sm font-black leading-tight' : 'text-3xl font-black leading-tight tracking-wide'}>
        {node.title}
      </h3>
      {visiblePoints && visiblePoints.length > 0 ? (
        <div className={compact ? 'mt-2 space-y-1 text-[10px] leading-tight' : 'mt-8 space-y-6 text-lg leading-snug'}>
          {visiblePoints.map((point) => (
            <p key={point}>{point}</p>
          ))}
        </div>
      ) : null}
      <span className="sr-only">Click to zoom into this section</span>
    </button>
  );
}
