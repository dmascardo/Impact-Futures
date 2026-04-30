export interface FrameworkNode {
  id: string;
  title: string;
  description?: string;
  points?: string[];
  children?: FrameworkNode[];
}

export type ViewMode = 'overview' | 'category' | 'detail';
