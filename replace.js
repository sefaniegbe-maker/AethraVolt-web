const fs = require('fs');
let content = fs.readFileSync('src/pages/AiPlatform.tsx', 'utf8');

content = content.replace(/bg-slate-50/g, 'bg-paper');
content = content.replace(/bg-slate-900/g, 'bg-ink');
content = content.replace(/bg-slate-800/g, 'bg-stone-800');
content = content.replace(/text-slate-400/g, 'text-stone-400');
content = content.replace(/text-slate-600/g, 'text-stone-600');
content = content.replace(/text-slate-900/g, 'text-ink');
content = content.replace(/text-slate-300/g, 'text-stone-300');
content = content.replace(/text-slate-500/g, 'text-stone-500');
content = content.replace(/border-slate-200/g, 'border-stone-200');
content = content.replace(/border-slate-700/g, 'border-stone-700');
content = content.replace(/border-slate-800/g, 'border-stone-800');
content = content.replace(/bg-slate-100/g, 'bg-stone-100');
content = content.replace(/text-slate-700/g, 'text-stone-700');
content = content.replace(/emerald-500/g, 'accent');
content = content.replace(/emerald-400/g, 'accent');
content = content.replace(/cyan-400/g, 'stone-300');
content = content.replace(/bg-\[#0a0a0a\]/g, 'bg-ink');
content = content.replace(/bg-\[#141414\]/g, 'bg-stone-900');
content = content.replace(/bg-\[#1f1f1f\]/g, 'bg-stone-800');
content = content.replace(/border-\[#333\]/g, 'border-stone-800');
content = content.replace(/hover:border-emerald-500\/50/g, 'hover:border-accent/50');

fs.writeFileSync('src/pages/AiPlatform.tsx', content);
console.log('Done');
