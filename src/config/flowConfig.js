export const nodes = [
  {
    id: '1',
    position: { x: 0, y: 0 },
    data: { label: 'Acquisition Completed' },
    type: 'input',
    style: 'border: 2px solid #3b82f6; background: #fff; padding: 20px; border-radius: 8px;',
  },
  {
    id: '2',
    position: { x: 300, y: 0 },
    data: { 
      label: 'Team Coordination Delay',
      annotation: '35% of acquisitions experience 6-month delays due to inter-department coordination issues'
    },
    style: 'border: 2px solid #ef4444; background: #fef2f2; padding: 20px; border-radius: 8px; width: 300px;',
  },
  {
    id: '3',
    position: { x: 300, y: 120 },
    data: { 
      label: 'Tech Infrastructure Gap',
      annotation: 'Legacy systems cause 30% longer integration timelines'
    },
    style: 'border: 2px solid #ef4444; background: #fef2f2; padding: 20px; border-radius: 8px; width: 300px;',
  },
  {
    id: '4',
    position: { x: 300, y: 240 },
    data: { 
      label: 'Regulatory Hurdles',
      annotation: '20% of projects face 4-8 month permit delays'
    },
    style: 'border: 2px solid #ef4444; background: #fef2f2; padding: 20px; border-radius: 8px; width: 300px;',
  },
  {
    id: '5',
    position: { x: 700, y: 0 },
    data: { label: 'Operational Integration' },
    style: 'border: 2px solid #3b82f6; background: #fff; padding: 20px; border-radius: 8px;',
  },
  {
    id: '6',
    position: { x: 700, y: 120 },
    data: { label: 'Revenue Generation' },
    style: 'border: 2px solid #3b82f6; background: #fff; padding: 20px; border-radius: 8px;',
  },
];

export const edges = [
  { id: 'e1-2', source: '1', target: '2', animated: true, style: 'stroke: #ef4444; stroke-width: 2px;' },
  { id: 'e1-3', source: '1', target: '3', animated: true, style: 'stroke: #ef4444; stroke-width: 2px;' },
  { id: 'e1-4', source: '1', target: '4', animated: true, style: 'stroke: #ef4444; stroke-width: 2px;' },
  { id: 'e2-5', source: '2', target: '5', style: 'stroke-width: 2px;' },
  { id: 'e3-5', source: '3', target: '5', style: 'stroke-width: 2px;' },
  { id: 'e4-5', source: '4', target: '5', style: 'stroke-width: 2px;' },
  { id: 'e5-6', source: '5', target: '6', style: 'stroke-width: 2px;' },
];