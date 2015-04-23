function Test() {

}
Test.prototype = (function () {
    var obj = Test.prototype,
        val = 0;

    obj.getVal = function () {
        return val;
    }
    obj.setVal = function (newVal) {
        val = newVal;
    }
    obj.add = function (num) {
        val += num;
    }
    return obj;
}());

var test1 = new Test();
var test2 = new Test();
var test3 = new Test();

function printTest() {
    console.log('test1:', test1.getVal());
    console.log('test2:', test2.getVal());
    console.log('test3:', test3.getVal());
}

printTest();

test1.add(3);

printTest();

test3.setVal(22);

printTest();

test2.add(100);

printTest();
