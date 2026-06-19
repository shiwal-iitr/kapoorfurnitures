const https = require('https');
https.get('https://piyestraindia.com/', (res) => {
  let data = '';
  res.on('data', d => data += d);
  res.on('end', () => {
    const regex = /https:\/\/piyestraindia\.com\/wp-content\/uploads\/[0-9]{4}\/[0-9]{2}\/[^"'>]+\.png/gi;
    let match;
    const urls = new Set();
    while ((match = regex.exec(data)) !== null) {
      urls.add(match[0]);
    }
    console.log(Array.from(urls).join('\n'));
  });
});
