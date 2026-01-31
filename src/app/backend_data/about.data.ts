export type Highlight = { icon: string; title: string; desc: string; };
export type Stat = { value: string; label: string; colorClass?: string; };

export const HIGHLIGHTS: Highlight[] = [
  {
    icon: 'analytics',
    title: 'Data Analytics',
    desc: 'Turning raw and complex data into actionable insights'
  },
  {
    icon: 'dashboard',
    title: 'Business Intelligence',
    desc: 'Interactive dashboards and KPI-driven reporting solutions'
  },
  {
    icon: 'storage',
    title: 'ETL & Data Engineering',
    desc: 'Building clean, reliable pipelines for analysis-ready data'
  },
  {
    icon: 'settings',
    title: 'Automation',
    desc: 'Streamlining workflows using Python, VBA, and process automation'
  },
  {
    icon: 'psychology',
    title: 'Applied Machine Learning',
    desc: 'Developing predictive models for real-world decision support'
  }
];

export const STATS: Stat[] = [
  { value: '1',  label: 'Years Experience',   colorClass: 'text-sky-300' },
  { value: '3+', label: 'Projects Completed', colorClass: 'text-fuchsia-300' },
  { value: '10+', label: 'Technologies',       colorClass: 'text-emerald-300' },
];