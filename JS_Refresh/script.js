let a = 45;
// let a ="hello"; --> this will give error that 'a' has already been declared
console.log(a);

var b = "hello"
var b =34;
// this will not give error --> it will put 34 in the prev b i.e. "hello"
console.log(b);

const c = 4;
console.log(c);
// c=5; --> can't change const value

function hello(){
    console.log("hey hi")

}

hello()

let obj ={
    r:54,
    m:32,
    fun: function myfun(number){
        console.log("this number is "+number);
    }
}
 
console.log(obj.m);
obj.fun(45)