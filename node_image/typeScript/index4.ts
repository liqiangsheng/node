
// typeScript中的接口

//     5.1 属性类接口
//     5.2 函数类型接口
//     5.3 可索引接口
//     5.4 类类型接口
//     5.5 接口扩展




/*
接口的作用：在面向对象的编程中，接口是一种规范的定义，它定义了行为和动作的规范，在程序设计里面，接口起到一种限制和规范的作用。接口定义了某一批类所需要遵守的规范，接口不关心这些类的内部状态数据，也不关心这些类里方法的实现细节，它只规定这批类里必须提供某些方法，提供这些方法的类就可以满足实际需要。 typescrip中的接口类似于java，同时还增加了更灵活的接口类型，包括属性、函数、可索引和类等。

定义标准。

*/


// 1、属性接口     对json的约束



    //ts中定义方法
    /*
        function printLabel():void {
            console.log('printLabel');
        }
        printLabel();
    */


    /*
    ts中定义方法传入参数

        function printLabel(label:string):void {
            console.log('printLabel');
        }

        printLabel('hahah');

    */



        /*
            ts中自定义方法传入参数,对json进行约束

        */

        /*
        
        function printLabel(labelInfo:{label:string}):void {
            console.log('printLabel');
        }

        printLabel('hahah'); //错误写法


        printLabel({name:'张三'});  //错误的写法


        printLabel({label:'张三'});  //正确的写法
    */



//对批量方法传入参数进行约束。


//接口：行为和动作的规范，对批量方法进行约束



        //就是传入对象的约束    属性接口
        //  interface FullName{

        //     firstName:string;   //注意;结束
        //     secondName:string;

        // }

        // function printName(name:FullName){

        //     // 必须传入对象  firstName  secondName
        //     console.log(name.firstName+'--'+name.secondName);
        // }
        // // printName('1213');  //错误

        // var obj={   /*传入的参数必须包含 firstName  secondName*/
        //     age:20,
        //     firstName:'张',
        //     secondName:'三'
        // };
        // printName(obj)


//  接口：行为和动作的规范，对批量方法进行约束

    
            // interface FullName{
            //     firstName:string;   //注意;结束
            //     secondName:string;
            // }

            // function printName(name:FullName){
            //     // 必须传入对象  firstName  secondName
            //     console.log(name.firstName+'--'+name.secondName);
            // }



            // function printInfo(info:FullName){

            //     // 必须传入对象  firstName  secondName
            //     console.log(info.firstName+info.secondName);
            // }

            // var obj={   /*传入的参数必须包含 firstName  secondName*/
            //     age:20,
            //     firstName:'张',
            //     secondName:'三'
            // };
            // printName(obj);


            // printInfo({
            //     firstName:'李',
            //     secondName:'四'
            // })




//接口 ：可选属性



    // interface FullName{

    //     firstName:string;
    //     secondName:string;
    // }

    // function getName(name:FullName){

    //     console.log(name)
    // }
    // //参数的顺序可以不一样
    // getName({        
    //     secondName:'secondName',
    //     firstName:'firstName'
    // })


    // interface FullName{
    //     firstName:string;
    //     secondName?:string;
    // }

    // function getName(name:FullName){

    //     console.log(name)
    // }  
    // getName({               
    //     firstName:'firstName'
    // })


/*
       $.ajax({
             type: "GET",
             url: "test.json",
             data: {username:$("#username").val(), content:$("#content").val()},
             dataType: "json"             
         });
         
*/


// interface Config{
//     type:string;
//     url:string;
//     data?:string;
//     dataType:string;
// }

// //原生js封装的ajax 
// function ajax(config:Config){

//    var xhr=new XMLHttpRequest();

//    xhr.open(config.type,config.url,true);

//    xhr.send(config.data);

//    xhr.onreadystatechange=function(){

//         if(xhr.readyState==4 && xhr.status==200){
//             console.log('chengong');


//             if(config.dataType=='json'){

//                 console.log(JSON.parse(xhr.responseText));
//             }else{
//                 console.log(xhr.responseText)

//             }


//         }
//    }
// }


// ajax({
//     type:'get',
//     data:'name=zhangsan',
//     url:'http://a.itying.com/api/productlist', //api
//     dataType:'json'
// })


/*



// 加密的函数类型接口

// interface encrypt{
//     (key:string,value:string):string;
// }


// var md5:encrypt=function(key:string,value:string):string{
//         //模拟操作
//         return key+value;
// }

// console.log(md5('name','zhangsan'));



// var sha1:encrypt=function(key:string,value:string):string{

//     //模拟操作
//     return key+'----'+value;
// }

// console.log(sha1('name','lisi'));






//接口扩展：接口可以继承接口   


    // interface Animal{

    //     eat():void;
    // }

    // interface Person extends Animal{

    //     work():void;
    // }

    // class Web implements Person{

    //     public name:string;
    //     constructor(name:string){
    //         this.name=name;
    //     }

    //     eat(){

    //         console.log(this.name+'喜欢吃馒头')
    //     }
    //     work(){

    //         console.log(this.name+'写代码');
    //     }
        
    // }

    // var w=new Web('小李');

    // w.eat();


    interface Animal{

        eat():void;
    }

    interface Person extends Animal{

        work():void;
    }


    class Programmer{

        public name:string;
        constructor(name:string){
            this.name=name;
        }
        
        coding(code:string){

            console.log(this.name+code)
        }
    }


    class Web extends Programmer implements Person{
        
        constructor(name:string){
           super(name)
        }
        eat(){

            console.log(this.name+'喜欢吃馒头')
        }
        work(){

            console.log(this.name+'写代码');
        }
        
    }

    var w=new Web('小李');

    // w.eat();

    w.coding('写ts代码');



// 可索引接口：数组、对象的约束  （不常用）



    //ts定义数组的方式
        /*
            var arr:number[]=[2342,235325]


            var arr1:Array<string>=['111','222']
        */



        //可索引接口 对数组的约束
                // interface UserArr{
                //     [index:number]:string
                // }


                // // var arr:UserArr=['aaa','bbb'];

                // // console.log(arr[0]);



                // var arr:UserArr=[123,'bbb'];  /*错误*/

                // console.log(arr[0]);


        //可索引接口 对对象的约束




                // interface UserObj{

                //     [index:string]:string
                // }


                // var arr:UserObj={name:'张三'};






//类类型接口:对类的约束  和   抽象类抽象有点相似    


// interface Animal{
//     name:string;
//     eat(str:string):void;
// }

// class Dog implements Animal{

//     name:string;
//     constructor(name:string){

//         this.name=name;

//     }
//     eat(){

//         console.log(this.name+'吃粮食')
//     }
// }


// var d=new Dog('小黑');
// d.eat();


// class Cat implements Animal{
//     name:string;
//     constructor(name:string){

//         this.name=name;

//     }
//     eat(food:string){

//         console.log(this.name+'吃'+food);
//     }
// }

// var c=new Cat('小花');
// c.eat('老鼠');