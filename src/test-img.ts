import https from 'https';

https.get('https://ibb.co/SHKkNDJ', (res) => {
  let data = '';
  res.on('data', (chunk) => {
    data += chunk;
  });
  res.on('end', () => {
    const match = data.match(/https:\/\/i\.ibb\.co\/[^"']+/g);
    console.log('SHKkNDJ:', match ? match[0] : 'not found');
  });
});

https.get('https://ibb.co/rK0cw10z', (res) => {
  let data = '';
  res.on('data', (chunk) => {
    data += chunk;
  });
  res.on('end', () => {
    const match = data.match(/https:\/\/i\.ibb\.co\/[^"']+/g);
    console.log('rK0cw10z:', match ? match[0] : 'not found');
  });
});
