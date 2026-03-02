import fetch from 'node-fetch';

async function run() {
  try {
    console.log('Fetching...');
    const res = await fetch('http://localhost:3000/api/admin/generate-case-images');
    const data = await res.json();
    console.log(JSON.stringify(data, null, 2));
  } catch (e) {
    console.error(e);
  }
}

run();
