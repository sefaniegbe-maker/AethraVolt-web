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
    location TEXT,
    year INTEGER NOT NULL,
    title TEXT NOT NULL,
    description TEXT NOT NULL,
    capacity TEXT,
    savings TEXT,
    image_url TEXT,
    results TEXT -- JSON string
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
    'https://images.unsplash.com/photo-1667507153686-7e8c33654479?auto=format&fit=crop&q=80&w=1000',
    JSON.stringify(['分布式光储', '绿电交易', '碳资产管理', '节能改造']),
    JSON.stringify({ '适用场景': '制造业园区', '投资回报周期': '3-5年', '减碳潜力': '100%' })
  );
}

// Check if cases table has the new columns, if not recreate it (simple migration for dev)
try {
  db.prepare('SELECT location FROM cases LIMIT 1').get();
} catch (e) {
  db.exec('DROP TABLE IF EXISTS cases');
  db.exec(`
    CREATE TABLE cases (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      industry TEXT NOT NULL,
      location TEXT,
      year INTEGER NOT NULL,
      title TEXT NOT NULL,
      description TEXT NOT NULL,
      capacity TEXT,
      savings TEXT,
      image_url TEXT,
      results TEXT -- JSON string
    )
  `);
}

const caseCount = db.prepare('SELECT count(*) as count FROM cases').get() as { count: number };

if (caseCount.count === 0) {
  const insertCase = db.prepare('INSERT INTO cases (industry, location, year, title, description, capacity, savings, image_url, results) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)');

  insertCase.run(
    '制造业',
    '中国·华东',
    2024,
    '零碳工厂：光储一体化项目',
    '通过部署 AethraEdge 和光储系统，实现削峰填谷与需量管理，显著降低用电成本。',
    '2MW/4MWh',
    '收益显著',
    'https://ibb.co/SHKkNDJ',
    JSON.stringify(['显著降低电费', '碳减排成效显著', '投资回收期短'])
  );

  insertCase.run(
    '制造业',
    '中国·华南',
    2024,
    '零碳工厂：绿电+水蓄冷项目',
    '利用夜间低谷电价进行水蓄冷，白天高峰期释放冷量，结合绿电交易实现零碳运行。',
    '5MW',
    '¥350万/年',
    'https://ibb.co/0p03ttV1',
    JSON.stringify(['移峰填谷', '降低空调能耗30%', '绿电占比100%'])
  );

  insertCase.run(
    '园区',
    '中国·西南',
    2025,
    '零碳园区：光伏+污水处理项目',
    '创新性采用“光伏 + 污水处理厂”融合模式，通过智慧能源管理系统，对光伏发电、污水处理负荷、电价峰谷及设备运行进行协同调度，实现“源-网-荷-储”一体化优化运行。',
    '10MW',
    '¥500万/年',
    'https://ibb.co/S406ZjKP',
    JSON.stringify(['污水处理成本降低20%', '自发自用率95%', '生态效益显著'])
  );

  insertCase.run(
    '园区',
    '德国·慕尼黑',
    2025,
    '零碳园区：德国光储充一体化项目',
    '集光伏、储能、充电桩于一体的微电网系统，实现能源自给自足，服务于电动汽车充电需求。',
    '1MW/2MWh',
    '€15万/年',
    'https://ibb.co/0p03ttV1',
    JSON.stringify(['能源自给率80%', '降低碳排30%', '提升品牌形象'])
  );
}

export default db;
