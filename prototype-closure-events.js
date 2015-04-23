function EventListener(event1, event2) {
    var me = this;
    this.addEvent1(event1);
    this.addEvent2(event2);
    this.destroy = function () {
        EventListener.prototype.destroy(event1, event2);
    }
}

EventListener.prototype = (function () {
    var obj = EventListener.prototype,
        event1Queue = [],
        event2Queue = [];

    obj.addEvent1 = function (fc) {
        event1Queue.push(fc);
    }

    obj.addEvent2 = function (fc) {
        event2Queue.push(fc);
    }

    obj.callEvent1 = function (val) {
        event1Queue.forEach(function (fc) {
            fc(val);
        });
    }
    obj.callEvent2 = function (val) {
        event2Queue.forEach(function (fc) {
            fc(val);
        });
    }

    obj.destroy = function (event1, event2) {
        for (var i = 0; i < event1Queue.length; i++) {
            if (event1Queue[i] === event1) {
                event1Queue.splice(i, 1);
            }
        }
        for (var i = 0; i < event2Queue.length; i++) {
            if (event2Queue[i] === event2) {
                event2Queue.splice(i, 1);
            }
        }
    }

    return obj;
}());


var test1 = new EventListener(function (val) {
    console.log('test1:event1', val);
}, function (val) {
    console.log('test1:event2', val);
});

var test2 = new EventListener(function (val) {
    console.log('test2:event1', val);
}, function (val) {
    console.log('test2:event2', val);
});

var test3 = new EventListener(function (val) {
    console.log('test3:event1', val);
}, function (val) {
    console.log('test3:event2', val);
});


test1.callEvent2(4);

test2.destroy();

test3.callEvent1(100);
