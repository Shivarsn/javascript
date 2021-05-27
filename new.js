var p1 = new Promise(function (x, y) {
    var result = true;

    if (result) {
        x = "It is true"
        console.log(x);
    } else {
        y = "Its is a false"
        console.log(y)
    }
});
console.log(p1);
p1.then(function (val) {
    console.log(val)
})
p1.catch(function (val) {
    console.log(val)
})

function myfun() {
    console.log(" show");     // these are call back functions
}
function myfun1() {
    console.log("hide");
}
myfun();
myfun1();
let x = function () {
    console.log(" i am called from inside an function");
}
let y = function (callback) {
    console.log("do something");
    callback();
}
y(x);
let cal = function (num1, num2, calcType) {
    if (calcType === "ADD") {
        return num1 + num2
    }
    else if (calcType === "MULTIPLY") {
        return num1 * num2
    }

}
console.log(cal(2, 3, "ADD"))
let add = function (a, b) {
    return a + b;
}
let sub = function (a, b) {
    return a - b;
}
let cal1 = function (num1, num2, callback) {
    return callback(num1, num2)
}
console.log(cal1(2, 3, sub))
console.log(cal1(2, 3, function (a, b) {
    return a - b;
}))

var myArr = [
    {
        num: 5,
        str: "Apple",

    },
    {
        num: 7,
        str: "ban"
    },
    {
        num: 1,
        str: "cabbage"
    }

]
myArr.sort(function (val1, val2) {
    if (val1.num > val2.num) {
        return -1;
    } else {
        return 1;
    }
})
console.log(myArr);     // Using the call back functions
let cleanRoom = function () {
    return new Promise(function (resolve, reject) {
        resolve("cleaned the room")
    })
}
let removeGarbage = function (message) {
    return new Promise(function (resolve, reject) {
        resolve(message + " remove Garbage")
    })
}
let winIceCream = function (message) {
    return new Promise(function (resolve, reject) {
        resolve(message + " u have won the ice cream")
    })
}
//cleanRoom().then(function (result) {
//  return removeGarbage(result);
//}).then(function (result) {
//  return winIceCream(result);
//}).then(function (result) {
//  console.log("Finished" + result)
//})
Promise.all([cleanRoom(), removeGarbage(), winIceCream()]).then(function () {
    console.log("All Finished")
})
Promise.race([cleanRoom(), removeGarbage(), winIceCream()]).then(function () {
    console.log('one of them is finished')
})
