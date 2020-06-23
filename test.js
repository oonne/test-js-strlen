let assert = require('assert');

let data = require('./case/data');
let strlenJS = require('./actuator/strlen-js');
let strlenPHP = require('./actuator/strlen-php');
let strlenJAVA = require('./actuator/strlen-java');


data.map(testCase=>{
  describe(testCase.name, function() {
    it('JS=PHP', function() {
      return strlenPHP(testCase.text).then(res=>{
        assert.equal(res, strlenJS(testCase.text));
      })
    });
    it('JS=JAVA', function() {
      return strlenJAVA(testCase.text).then(res=>{
        assert.equal(res, strlenJS(testCase.text));
      })
    });
  });
});

