var expect = require('chai').expect;
var app = require('../js/bubble-sort.js');

describe('#bubbleSort', function(){
    
    it('should sort numbers from lowest to highest', function(){
        let numArray = [33, 103, 3, 726, 200, 984, 198, 764, 9];
        expect(app.bubbleSort(numArray)).to.deep.equal([3, 9, 33, 103, 198, 200, 726, 764, 984]);
    });
});