JS学习计划
1.自执行函数概念：
1.1.什么叫自执行函数？

   答:
   
   定义时没有通过保存给变量(表达式函数),直接运行;将变量和代码放入方法中;可以防止污染全局名字空间造成变量冲突而造成难以诊断的问题;
   同时简化了显示调用,非常灵活
   
1.2.自执行函数的语法？
    
    一.(function(){//代码 }()); //最常用
    
    二.(function(){//代码})();
    
    三.在function加一元操作符:
       例:
          +function{//代码}();
    
    四:new function(){//代码};
    
    五:new function(){//代码}();
    
    
1.3.什么情况下要使用自执行函数？
     
     答:
        当需要初始化浏览器页面时,或者初始化某些方法和变量时调用;
     
2.原型链的概念：
   
   原型链是一个用来实现继承和共享属性的有限对象链;
   
   原型对象也是对象,也可以有自己的原型,而它的原型的原型,也可以有原型,直到原型为Object,
   它的原型为null;这样一个个互相关联的对象树,就叫做原型链
   
2.1.使用原型构造对象
  
  有两种方法:
  
  方法1:
    
    var test = funtion(value1,value2){//构造器
       //代码
       this.value1 = 1;
       this.value2 = 2;
    }
    
    test.prototype = {//通过对象字面量来设定原型
       //通过键值对来声明属性与方法
       
         x:10,
         y:20,
         z:funciton (){
            return x+y;
         }
       
       };
   
   方法2:
      
    var test = funtion(value1,value2){//构造器
       //代码
       this.value1 = 1;
       this.value2 = 2;
    }
    
    test.prototype = function(){//通过自执行函数来设定原型
         //通过闭包来封装私有方法达到public与private的功能
         x = 10,
         z = funciton(a){
           return a ;
         };
         
         return{//通过return将方法露出
           x:x,
           z:z
         };
    }();
