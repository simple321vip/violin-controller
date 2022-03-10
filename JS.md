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

## prototype _proto_
  理解这个我们借助 typeof 函数


## Object Number 

## Promise

## 


1，子元素 填充父元素剩下高度，采用 在把子元素height: 100%
