const https = require('https');
const http = require('http');
const config = require('./config');

let strlen = (str) => {
  return new Promise((resolve, reject) =>{
    let options = {
      port: 80,
      path: config.phpApi,
      method: 'POST',
      headers: {
        'Content-Type': 'text/plain; charset=UTF-8',
        'Content-Length': Buffer.byteLength(str),
      },
    };
    let req = http.request(options, (res) => {
      res.on('data', (chunk) => {
        let length = chunk.toString('utf-8');
        resolve(Number(length));
      });
    });
    req.on('error', (e) => {
      reject('请求失败');
    });
    req.write(str);
    req.end();
  });
}

module.exports = strlen;