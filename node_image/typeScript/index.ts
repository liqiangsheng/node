//ts中类的定义

/**
 * 
 */

//  class Person{
//      name:string; // 属性  前面省略了public 关键字
//      constructor(n:string){ //构造函数 实例化类的时候触发的方法
//         this.name = n;

//      }
//      run():void{
//          alert(this.name)
//      }
//  }
//  let p = new Person('李哥');
//  p.run();//李哥



//  class Person{
//      name:string; // 
//      constructor(name:string){ //构造函数 实例化类的时候触发的方法
//         this.name = name;

//      }
//      getName():string{
//          return this.name
//      }
//      setName(name:string):void{
//         this.name = name;

//      }
//  }
//  let p = new Person('李哥');
//  alert(p.getName()); //李哥
//  p.setName('李四')
//  ;alert(p.getName());//李四


// ts中实现继承 extends super

//  class Person{
//      name:string; // 
//      constructor(name:string){ //构造函数 实例化类的时候触发的方法
//         this.name = name;

//      }
//      run():string{
//          return `${this.name}`
//      }
  
//  }
//  let p = new Person('李哥');
// alert(p.run()) ;

// class Web extends Person{ // 继承
//     constructor(name:string){
//         super(name)
//     }
// }
// let w = new Web('大爷');
// console.log(w.run());

// ts中实现继承的探讨 
// class Person{
//      name:string; // 
//      constructor(name:string){ //构造函数 实例化类的时候触发的方法
//         this.name = name;

//      }
//      run():string{
//          return `${this.name}`
//      }
  
//  }
//  let p = new Person('李哥');
// alert(p.run()) ;

// class Web extends Person{ // 继承
//     constructor(name:string){
//         super(name)
//     }
//      work(){
//          alert(this.name+'1111111111111')
//      }
// }
// let w = new Web('大爷');
// console.log(w.run());
// w.work();

// 类里面的修饰符  typeScript定义属性的时候给我们定义了3中修饰符
/****
 * public   共有   在类里面，子类，类外面都可以访问
 * protected  保护类型 在类里面，子类，类外面不可以访问
 * private 私有 在类里面可以访问，子类，类外面不可以访问
 * 
 * 属性如果不加修饰符就是公有public
 */

// public
// class Person{
//     public name:string; // 公有
//     constructor(name:string){ //构造函数 实例化类的时候触发的方法
//        this.name = name;

//     }
//     run():string{
//         return `${this.name}`
//     }
 
// }
// let p = new Person('李哥');
// alert(p.run()) ;

// class Web extends Person{ // 继承
//    constructor(name:string){
//        super(name)
//    }
//     work(){
//         console.log((this.name+'1111111111111'));
//     }
// }
// let w = new Web('大爷');
// console.log(w.run());//大爷1111111111111
// w.work();
// console.log(w.name) //大爷

// protected 保护
// class Person{
//     protected name:string; // 保护类
//     constructor(name:string){ //构造函数 实例化类的时候触发的方法
//        this.name = name;

//     }
//     run():string{
//         return `${this.name}`
//     }
 
// }
// let p = new Person('李哥');
// alert(p.run()) ;

// class Web extends Person{ // 继承
//    constructor(name:string){
//        super(name)
//    }
//     work(){
//         console.log((this.name+'1111111111111'));
//     }
// }
// let w = new Web('大爷');
// console.log(w.run());//大爷1111111111111
// w.work();
// console.log(w.name) // 提示报错了 但是浏览器转换为了es5可以访问

// private 私有
// class Person{
//     private name:string; // 私有
//     constructor(name:string){ //构造函数 实例化类的时候触发的方法
//        this.name = name;

//     }
//     run():string{
//         return `${this.name}`
//     }
 
// }
// let p = new Person('李哥');
// alert(p.run()) ;

// class Web extends Person{ // 继承
//    constructor(name:string){
//        super(name)
//    }
//     work(){
//         console.log((this.name+'1111111111111')); //提示报错了 但是浏览器转换为了es5可以访问
//     }
// }
// let w = new Web('大爷');
// console.log(w.run());//大爷1111111111111
// w.work();
// console.log(w.name) // 提示报错了 但是浏览器转换为了es5可以访问