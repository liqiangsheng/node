// ts函数的定义
//函数声明 es5
// function run(){
//     return 1
// }
// var run1= function(){
//     return 1
// }

// ts定义函数

// 函数声明 
// function run():string{ //必须还回string
//     return '2'
// }
//匿名 函数
// let run2 = function():string{//必须还回string
//     return '2'
// }

// ts定义方法传参
// function getInfo(name:string,age:number):string{
//     return `${name}---${age}`
// }
// getInfo('李哥','20') //错误

// getInfo('李哥',20)  //正确
// let getInfo = function(name:string,age:number):string{
//     return `${name}---${age}`
// }
// getInfo('李哥','20') //错误

// getInfo('李哥',20)  //正确


//没有返回值的方法
// function run():void{
//   console.log(111111111)
// }
// run();

// 参数的可选方式

// ts中实参跟形参必须一样，如不一样需配置可选参数

// function getInfo(name:string,age?:number):string{ //?代表可选参数可传可不传
//     if(age){
//         return `${age},hahhaha`
//     }else{
//         return `${name},hahhaha`
//     }
// }
// console.log(getInfo('李哥',2222)) 

// ts默认参数

// function getInfo(name:string,age:number=20):string{ //默认参数
//     if(age){
//         return `${age},hahhaha`
//     }else{
//         return `${name},hahhaha`
//     }
// }
// console.log(getInfo('李哥')) 

// 剩余参数
// function sum(a:number,b:number,c:number,d:number){
//     return a+b+c+d
// }
// alert(sum(1,2,3,4))

// ...运算符
// function sum(...result:number[]):number{
//     let sum = 0;
//     result.forEach((item,index)=>{
//         sum+=item;
//     })
//     return sum
// }
// alert(sum(1,2,3,4,5))

// function sum(x:number,...result:number[]):number{
//     let sum = x;
//     result.forEach((item,index)=>{
//         sum+=item;
//     })
//     return sum
// }
// alert(sum(1,2,3,4,5))

// ts函数重载

// function css1(config:string):string;
// function css1(age:number):string;
// function css1(str:any):any{
//     if(typeof str==='string'){ //typeof
//         return '我是'+str
//     }else{
//         return 'hahahah'+str
//     }
// }
// console.log(css1(20)) //正确
// console.log(css1('lisi')) //正确
// console.log(css1(null)) //错误



// function css1(config:string):string;
// function css1(config:string,age:number):string;
// function css1(config:any,age?:any):any{
//       if(age){
//          return 'wo shi shuai ge'+age
//       }else{
//         return 'wo shi chou ba guai'+config
//       }
// };

// console.log(css1('2B')) //wo shi chou ba guai2b
// console.log(css1('2B',20)) //wo shi shuai ge20