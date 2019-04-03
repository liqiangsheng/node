// typeScript的数据类型，写代码必须指定类型

// 布尔类型
// let flag = true;
// flag = 4567; //ts报错

// var flag:boolean = true; //指定类型
// flag = 123; //one.ts:8:1 - error TS2322: Type '123' is not assignable to type 'boolean'
// flag = false; //

// 数字类型
// var number:number=123;
// console.log(number)
// number = '123'//one.ts:14:1 - error TS2322: Type '"123"' is not assignable to type 'number'.
// 字符串类型
// let str1:string='123';
// console.log(str1)
// str = 123//one.ts:14:1 - error TS2322: Type '"123"' is not assignable to type 'string'.
// 数组类型(两方式)
// 1
// let numberarr:number[] = [11,22];//所有数字都是数字
// 2
// let numberarr1:Array<number> = [11,22];//所有数字都是数字

// let stringarr:string[] = ['11','22'];//所有数字都是字符串


// 元组类型
// let numberarr1:[number,string]=[123,'123'];//数字,字符串

// 枚举类型
// enum flag {//枚举赋值显示值
//     success=1,error=2
// }
// let s:flag = flag.success
// let f:flag = flag.error
// console.log(s);//1
// console.log(f);//2

// enum color { //枚举没有赋值显示下标
//     red,yellow,black
// }
// let colo:color=color.red;
// console.log(colo,'colo') //0 "colo"

// 任意类型

//  let num1:any = 123;

//   console.log(num1);
//   num1 = 'nihao';
//   console.log(num1);

  // null和undefined 其他类型的子类型
// let num1:number;
// console.log(num1);//undefined  //报错

// let num1:undefined ;
// console.log(num1);//undefined //正确

// let num1:undefined | number;
// console.log(num1);//undefined //正确

// let num1:null;
// console.log(num1);  //报错

// let num1:undefined | number | null;
// num1 = 1234;
// console.log(num1); //正确

// viod类型 没有任何值 定义的方法没有还回值

// function run():void{
//     console.log(111) //111
// }
// run()

// function run():void{
//     return 1111  //直接nType '1111' is not assignable to type 'void
// }
// run()

// function run():number{
//     return 1111 
// }
// console.log(run(),'run') //1111 "run"

// function run():void|number{
//     return 1111 
// }
// console.log(run(),'run') //1111 "run"


// never类型  其他类型 从不会出现赋值  声明never只能被never类型复制

// let a:undefined;
// a=123 //报错
// a=null//报错
// a=undefined //ok

// let a:null;
// a=123 //报错
// a=null//ok
// a=undefined //报错

// let a:never;
// // a=123 //报错
// a=(()=>{
//     throw new Error('错误')  //抛出错误
// })()

// console.log(a,"错误")