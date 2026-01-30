export type Highlight = { icon: string; title: string; desc: string; };
export type Stat = { value: string; label: string; colorClass?: string; };

export const HIGHLIGHTS: Highlight[] = [
  { icon: 'language',  title: 'Data Analyst',    desc: 'Interactive Dashboards' },
  { icon: 'code-merge',   title: 'Business Intelligence', desc: 'Power BI dashborads and analytics' },
  { icon: 'Data ',  title: 'Machine Learning Enthusiast', desc: 'Honing skills in Machine learning and openAI models' },
];

export const STATS: Stat[] = [
  { value: '2+',  label: 'Years Experience',   colorClass: 'text-sky-300' },
  { value: '5+', label: 'Projects Completed', colorClass: 'text-fuchsia-300' },
  { value: '10+', label: 'Technologies',       colorClass: 'text-emerald-300' },
];