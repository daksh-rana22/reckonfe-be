import http from 'https';

const awardNums = ['01','02','03','04','05','06','07','08','09','10','11','12','13','14','15','16','18','19','20','21','22'];
const award = awardNums.map((num, i) => ({
  id: `award-${num}`,
  src: `https://reckonsales.in/images/gallery/02/${num}.jpg`,
  category: 'Award Function',
}));

const giftNums = [2,5,8,11,14,17,20,23,26,29,32,35,38,41,44,47,50,54,58,62,66,70,74,78,82,86,90,95,100,105,110,115,120,125,130,135,140,145,150,155,158,160,162];
const gift = [
  { id: 'gift-01', src: 'https://reckonsales.in/images/gallery/03/01.jpg', category: 'Gift Distribution' },
  ...giftNums.map(n => ({
    id: `gift-${n}`,
    src: `https://reckonsales.in/images/gallery/03/(${n}).jpg`,
    category: 'Gift Distribution',
  })),
];

const presentationNums = ['01','2','3','4','5','6','7','8','9','11','12'];
const presentation = presentationNums.map(n => ({
  id: `pres-${n}`,
  src: `https://reckonsales.in/images/gallery/04/${n}.jpg`,
  category: 'Presentation',
}));

const ALL_ITEMS = [...award, ...gift, ...presentation];

const checkUrl = (item) => {
  return new Promise((resolve) => {
    const start = Date.now();
    const req = http.request(item.src, { method: 'GET', timeout: 5000 }, (res) => {
      const length = res.headers['content-length'];
      const type = res.headers['content-type'];
      // Just check first chunk of data or destroy request to save bandwidth/time
      res.destroy();
      resolve({
        id: item.id,
        src: item.src,
        statusCode: res.statusCode,
        sizeMb: length ? (parseInt(length, 10) / (1024 * 1024)).toFixed(2) : 'unknown',
        contentType: type,
        timeMs: Date.now() - start
      });
    });
    req.on('error', (err) => {
      resolve({ id: item.id, src: item.src, error: err.message });
    });
    req.on('timeout', () => {
      req.destroy();
      resolve({ id: item.id, src: item.src, error: 'timeout' });
    });
    req.end();
  });
};

console.log(`Checking ${ALL_ITEMS.length} images...`);
Promise.all(ALL_ITEMS.map(checkUrl)).then((results) => {
  const summary = {
    total: results.length,
    success: results.filter(r => r.statusCode === 200).length,
    errors: results.filter(r => r.error || r.statusCode !== 200),
  };
  console.log('SUMMARY:', summary);
  console.log('ERRORS & NON-200s:', JSON.stringify(summary.errors, null, 2));
});
