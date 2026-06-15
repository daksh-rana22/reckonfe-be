import fs from 'fs';

try {
  const buf = fs.readFileSync('C:\\Users\\ranad\\Desktop\\Reckon\\scratch\\test01.jpg');
  console.log('File size:', buf.length);
  console.log('First 10 bytes:', buf.slice(0, 10));
  // JPEG magic bytes are FF D8 FF
  if (buf[0] === 0xff && buf[1] === 0xd8 && buf[2] === 0xff) {
    console.log('It is a valid JPEG magic header!');
  } else {
    console.log('INVALID JPEG header! First few bytes as string:', buf.slice(0, 100).toString('utf8'));
  }
} catch (e) {
  console.error(e);
}
