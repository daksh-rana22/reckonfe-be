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
const first24 = ALL_ITEMS.slice(0, 24);

const checkUrl = (item) => {
  return new Promise((resolve) => {
    const start = Date.now();
    const req = http.request(item.src, { method: 'HEAD', timeout: 8000 }, (res) => {
      resolve({
        id: item.id,
        src: item.src,
        statusCode: res.statusCode,
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

// Check them sequentially to avoid rate limiting
async function run() {
  const results = [];
  for (const item of first24) {
    console.log(`Checking ${item.id}...`);
    const res = await checkUrl(item);
    results.push(res);
  }
  console.log('RESULTS:', JSON.stringify(results, null, 2));
}

run();
