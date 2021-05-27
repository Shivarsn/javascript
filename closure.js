var a=10;
function hello(){
    var b =30;
    var gm=function(){
        console.log(b)
    }
    return gm;
};
console.log(a);
var inner=hello();
console.log(inner);