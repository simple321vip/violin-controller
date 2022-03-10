## import と require
    // 这个文章说很好。
    https://segmentfault.com/a/1190000014434944

 import 是编译时导入。
 验证一下：
 1.src/mock/testImport.js export
 2.src/view/download/index.vue import
因为我们的路由时静态导入的，所以第一次请求时，import就会被导入，但是方法并没有执行。
当点道下载页面时候，vue生命周期created执行调用import的方法，


## = == ===
  - = 是赋值操作
  - == 很复杂，简单类型对象，比较值，即Number()的值
       而 复杂类型对象，比较引用的对象是否为同一个对象
  - === 很简单，类型相同，再去== 判断。
  
## 声明式函数 和 表达式函数
  function declaration() {} -> 声明式函数
  var expression = function() {} -> 表达式函数 -> var定义的是一个变量

## JS 加载 和 执行
  -　加载阶段：检查代码的语法错误，进行变量和函数的声明
    - 按顺序进行变量的初始化，但是函数优先变量，声明式函数的初始化就是函数体的内容，不需要赋值操作
    - var 定义的 变量进行提升
    - var 声明 只进行一次, 声明式函数是覆盖

    //
    console.log(F1) // undefined
    var F1 = function(){ // 此处 分解为var F1（变量提升）  和 F1 = 操作(运行时)
      console.log(1)
    } 
    F1() // 1
    var F1 = function() { // 此处 分解为var F1（此处将忽略，因为只进行一次变量提升）  和 F1 = 操作(运行时)
      console.log(2)
    }
    F1() // 2
    
    
    function F2(){ // 变量提升提升，声明式函数的初始化就是函数体的内容，不需要赋值操作
      console.log(3)
    }
    F2() // 4
    function F2(){ // 变量提升同时,覆盖掉前面F2的定义
      console.log(4)
    }
    F2() // 4

## var let const
  let 和 const 是 ES的新标准的语法
  - var 定义的 变量会挂在在windows对象上，let 和 const 则不会
  - var 定义的 存在变量提升，即加载阶段，将变量初始化为undefined状态。
  - let 和 const 没有变量提升。
  - let 和 const 定义 加载时会形成块作用域。
  - let 和 const 统一作用域下无法声明相同变量
    var b = 10
    var b = 100
    let a = 10
    let a = 100 // Identifier 'a' has already been declared  ===> 标识符a已经被声明了。
  - const 类似于java的final，声明后指针不在变动，并且需要初始化，不能是null

## this
  this 指向函数或者方法的调用者。

## prototype __proto__
  理解这个我们借助 typeof 函数
  prototype 这个只有函数才有。

    function F1() {}
    typeof F1 // 'function'
    var F2 = new F1()
    typeof F2 // 'object'
    F2 作为函数F1的实例，类型变成了'object'，所以对象是没有prototype的
    
    __proto__ 是对象拥有的，万物皆对象，所以都有
    
    所有对象都有原型类或者函数也可以
    var obj = {sss: 'guan'}
    var array = [1]
    var c = 1
    var d = new F2() // function F2() {}
 
    console.log(obj.__proto__ === Object.prototype) // true
    console.log(array.__proto__ === Array.prototype)  // true
    console.log(c.__proto__ === Number.prototype)  // true
    console.log(d.__proto__ === Function.prototype)  // false
    console.log(d.__proto__ === F2.prototype)  // true
    console.log(F2.__proto__ === Function.prototype)  // true
    // 可以看出 所有的对象(不包括原型类)的__proto__指向的是原型类的prototype
    // 原型类的__proto__ 都是 ƒ () { [native code] } 即function
    // 函数实例的__proto__是 函数的prototype 
    // 而函数的__proto__ 是Function.prototype
    // 

    由于原型类的实现是不同的。

## call bind apply 
  call、apply、bind 都是改变函数内部的this指向的
  bind 是会掉
  call 和apply 是立即执行

    // call (被指向对象，"param1", "param2")
    // apply (被指向对象，["param1", "param2"])
    // bind(被指向对象)("param1", "param2")
## Promise


## 异步的三种方式 



