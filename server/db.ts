import Database from 'better-sqlite3';
import path from 'path';

const db = new Database('aethravolt.db');

// Initialize tables
db.exec(`
  CREATE TABLE IF NOT EXISTS products (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    category TEXT NOT NULL,
    name TEXT NOT NULL,
    description TEXT NOT NULL,
    image_url TEXT,
    features TEXT, -- JSON string
    specs TEXT -- JSON string
  );

  CREATE TABLE IF NOT EXISTS cases (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    industry TEXT NOT NULL,
    year INTEGER NOT NULL,
    title TEXT NOT NULL,
    description TEXT NOT NULL,
    image_url TEXT,
    results TEXT -- JSON string
  );

  CREATE TABLE IF NOT EXISTS news (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    title TEXT NOT NULL,
    date TEXT NOT NULL,
    summary TEXT NOT NULL,
    content TEXT NOT NULL,
    image_url TEXT
  );

  CREATE TABLE IF NOT EXISTS messages (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    phone TEXT NOT NULL,
    company TEXT,
    message TEXT NOT NULL,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
  );
`);

// Seed data if empty
const productCount = db.prepare('SELECT count(*) as count FROM products').get() as { count: number };

if (productCount.count === 0) {
  const insertProduct = db.prepare('INSERT INTO products (category, name, description, image_url, features, specs) VALUES (?, ?, ?, ?, ?, ?)');
  
  insertProduct.run(
    '智能设备',
    'AethraEdge 边缘能量控制器',
    '一体化智能硬件架构，内置AI控制模块，实现负荷预测与动态功率优化。',
    'https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?auto=format&fit=crop&q=80&w=1000',
    JSON.stringify(['毫秒级响应', '非侵入式接入', '内置AI模型', '高频数字电源']),
    JSON.stringify({ '响应速度': '<10ms', '预测准确率': '>95%', '节能效率': '5-15%' })
  );

  insertProduct.run(
    '软件系统',
    'AethraGrid 能源管理云平台',
    '端-边-云三位一体能源数字化系统，实现能源资产的全生命周期管理。',
    'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1000',
    JSON.stringify(['实时监控', '碳排管理', '多维报表', '策略下发']),
    JSON.stringify({ '支持设备数': '10000+', '数据刷新率': '秒级', '部署方式': 'SaaS/私有化' })
  );

  insertProduct.run(
    '解决方案',
    '零碳工厂整体解决方案',
    '从源头减碳到末端抵消的全流程闭环服务，助力企业实现碳中和。',
    'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1000',
    JSON.stringify(['分布式光储', '绿电交易', '碳资产管理', '节能改造']),
    JSON.stringify({ '适用场景': '制造业园区', '投资回报周期': '3-5年', '减碳潜力': '100%' })
  );
}

const caseCount = db.prepare('SELECT count(*) as count FROM cases').get() as { count: number };

if (caseCount.count === 0) {
  const insertCase = db.prepare('INSERT INTO cases (industry, year, title, description, image_url, results) VALUES (?, ?, ?, ?, ?, ?)');

  insertCase.run(
    '制造业',
    2024,
    '某大型汽车零部件工厂光储一体化',
    '通过部署AethraEdge和光储系统，实现削峰填谷与需量管理，显著降低用电成本。',
    'https://images.unsplash.com/photo-1628260412297-a3377e45006f?auto=format&fit=crop&q=80&w=1000',
    JSON.stringify(['年省电费200万+', '碳减排500吨/年', '投资回收期3.5年'])
  );

  insertCase.run(
    '园区',
    2025,
    '德国光储充一体化示范项目',
    '集光伏、储能、充电桩于一体的微电网系统，实现能源自给自足。',
    'https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&q=80&w=1000',
    JSON.stringify(['能源自给率80%', '降低碳排30%', '提升品牌形象'])
  );
}

const newsCount = db.prepare('SELECT count(*) as count FROM news').get() as { count: number };

if (newsCount.count === 0) {
  const insertNews = db.prepare('INSERT INTO news (title, date, summary, content, image_url) VALUES (?, ?, ?, ?, ?)');

  insertNews.run(
    '合擎源动完成A轮融资，加速全球化布局',
    '2025-10-15',
    '获得知名机构领投，资金将用于研发投入及海外市场拓展。',
    '详细内容...',
    'https://images.unsplash.com/photo-1553729459-efe14ef6055d?auto=format&fit=crop&q=80&w=1000'
  );

  insertNews.run(
    '发布AethraCore能源中枢大模型',
    '2025-09-01',
    '基于海量能源数据训练，预测准确率突破98%，重新定义能源调度。',
    '详细内容...',
    'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=1000'
  );
  
  insertNews.run(
    '入选2025年度零碳科技创新企业TOP10',
    '2025-08-20',
    '凭借在AI+能源领域的持续创新，荣获行业权威认可。',
    '详细内容...',
    'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&q=80&w=1000'
  );
}

export default db;
