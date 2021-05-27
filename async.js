

function hello() {
    return "hellooo...."
};
console.log(hello());
//using async           async function always return a promise
async function hello() {
    return await "hello!"
}
hello().then(x => {
    console.log(x)
})
///promise chaining
async function hello() {
    return await "hello!"
}
hello().then(x => {
    console.log(x);
    return x + 1
})
    .then(p => {
        console.log(p);
        return p + 2;
    })
    .then(m => {
        console.log(m);
        return m + 3;             //complexity
    })
    .then(y => {
        console.log(y)
    })
function calc(a, b) {
    return new Promise(function (resolve, reject) {
        //calling api
        setTimeout(function () {
            resolve(a + b);
        }, 2000);

    })
}
//calc(2, 4).then(x => {
//  console.log(x);
//})
const ADD = async function () {
    var result = await calc(5, 5);
    var result2 = await calc(result, 11);
    return await calc(result2, 0);
};
ADD().then(x => {
    console.log(x);
})
//example:
console.log("persons1:show ticket");
console.log("persons2:show ticket");

const WifeBringingTicket = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("ticket")
    }, 1000);
});
const getPopcorn = WifeBringingTicket.then((x) => {
    console.log("wife: i have got ticket");
    console.log("husband:we should go in");
    console.log('wife: no i am hungry');
    return new Promise((resolve, reject) =>
        resolve(`${x} popcorn`))
});

const getButter = getPopcorn.then((x) => {
    console.log("husband:i got some popcorn");
    console.log("husband:we should go in");
    console.log('wife: i need butter on my icecream');
    return new Promise((resolve, reject) =>
        resolve(`${x} butter`))
});

getButter.then((x) => {
    console.log(x);
})

console.log("persons4:show ticket");
console.log("persons5:show ticket");


console.log("persons1:show ticket");
console.log("persons2:show ticket");
const premovie = async () => {
    const WifeBringingTicket = new Promise((resolve, reject) => {
        setTimeout(() => {
            reject("ticket")
        }, 1000);
    });
    const getPopcorn = new Promise((resolve, reject) =>
        resolve('popcorn'));

    // const getButter = new Promise((resolve, reject) =>
    // resolve("butter"))
    const getCandy = new Promise((resolve, reject) =>
        resolve('candy'))
    const getCOke = new Promise((resolve, reject) =>
        resolve('coke'))
    let ticket;
    try {
        ticket = await WifeBringingTicket;
    } catch (error) {
        ticket = "sad face"
    }


    //let [popcorn, candy, coke] = await Promise.all([getPopcorn, getCandy, getCOke]);
    //console.log(`${popcorn},${candy},${coke}`)

    //console.log(`wife: i have got ${ticket}`);
    //console.log("husband:we should go in");
    //console.log('wife: no i am hungry');

    //let popcorn = await getPopcorn;

    //console.log(`husband:i got some ${popcorn}`);
    //console.log("husband:we should go in");
    //console.log('wife: i need butter on my icecream');

    //let butter = await addButter;
    //console.log(`husband:i got some ${butter} on popcorn`);

    return ticket;

}
premovie().then((x) => console.log(x));



