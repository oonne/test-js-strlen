let assert = require('assert');

let data = require('./case/data');
let strlenJS = require('./actuator/strlen-js');
let strlenPHP = require('./actuator/strlen-php');


data.map(testCase=>{
  describe(testCase.name, function() {
    it('JS=PHP', function() {
      return strlenPHP(testCase.text).then(res=>{
        assert.equal(res, strlenJS(testCase.text));
      })
    });
  });
});

