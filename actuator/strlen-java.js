const http = require('http');
const config = require('./config');

let strlen = (str) => {
  return new Promise((resolve, reject) =>{
    let postData = JSON.stringify({
      "deviceSn": "str"
    });
    let options = {
      port: 28901,
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=UTF-8',
        'Content-Length': Buffer.byteLength(postData),
      },
    };
    let req = http.request(config.javaApi, options, (res) => {
      res.on('data', (chunk) => {
        let res = JSON.parse(chunk);
        resolve(res.data.count);
      });
    });
    req.on('error', (e) => {
      reject('请求失败');
    });
    req.write(postData);
    req.end();
  });
}

module.exports = strlen;