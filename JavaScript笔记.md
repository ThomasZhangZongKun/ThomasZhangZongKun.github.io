# 24 JavaScript历史; 浏览器渲染机制;重绘与回流;白屏;FOUC;异步加载
 * 网页端的JavaScript
  * ECMAScript, DOM, BOM
	 * ECMAScript: 标准化的JavaScript,脱离宿主对象的JS语法, 也称为JavaScript核心,涉及如数据类型,数组,字符串,正则,对象等
	 * JS的运行宿主包括浏览器,服务器,桌面APP,移动端APP,命令行应用,小程序等
	 * DOM: 浏览器提供的一系列能操作网页结构的API	  (文档对象模型)
	 * BOM: 浏览器提供的一系列和页面结构无关但和浏览器其他功能相关的API  (浏览器对象模型)
 * 使用方法
  * 容器属性
	 * 1 声明使用grid布局: 
	  * display:grid;  /*inline-grid*/
	 * 2 画好虚拟表格:
	  * grid: 30px auto 30px / 10% 1fr 10%
		* grid-gap: 10px 20px;
	 * 3 告诉内容如何放置
	  * align-items: center;
		* justify-items: center;
		* align-content: start;
		* justify-content: space-evenly;
	* 子项属性
	 * 设置子项的范围和位置
	  * grid-column: 3 / span 2;
		* grid-row:3 / 4;
		* justify-self:start;
		* align-self:center;
 * 从URL输入到页面展示:
 * 浏览器的渲染机制:
  * 解析HTML标签,构建DOM树
  * 解析CSS,构建CSSOM树  (OM 对象模型)
  * 把DOM 和 CSSOM 组合成,渲染树(render tree)
  * 在渲染树的基础上进行布局,计算每个节点的几何结构
  * 把每个节点绘制到屏幕上(painting)
 * Repaint 和 Reflow
  * Reflow: (回流)
   * 重新计算元素的几何尺寸,位置
  * Repaint: (重新绘制)
   *  绘制界面发生变化的部分
 * Repaint 和 Reflow案例
  * 添加,删除,更新DOM节点(reflow, repaint)
  * 修改元素的margin,padding,border,(reflow, repaint)
  * display: none (reflow, repaint)
  * visibility: hidden (repaint)
  * 修改颜色,背景色( repaint)
 * 总结
  * 尽量一次修改样式
  * 给动画使用绝对定位可以减小reflow
  * DOM 离线后修改
 * 阻塞解析与阻塞渲染
  * 阻塞解析: 阻塞点后面的标签不会被解析，阻塞解析不一定阻塞其他外部资源的加载
  * 阻塞渲染:阻塞点后面的标签会继续被解析，img,link等会继续发送请求获取外部资源，但不会触发页面渲染（白屏），也不会执行JavaScript代码。
 * CSS加载
  * CSS 加载不阻塞解析,但会阻塞渲染
  * 白屏
   * 页面一片空白,突然显示完整的有样式的内容
   * 当link放在head标签,且加载时间久时,会出现白屏效果
  * FOUC
   * 页面一开始展示无样式的内容,突然样式正常
   * 当link放在页面底部,且加载时间久时,会出现FOUC 
  * Tips
   * 尽量把link放在head标签内,防止出现FOUC
# 25 变量;注释;数字类型
 * 变量
  * 内存能存储值的空间
  * 声明变量 
   * // var num = 1 声明一个变量,可选初始化一个值
   * // let str = 'hello'
    * 声明一个块级作用域变量, 可选初始化一个值
   * const isSelected = true
    * 声明一个只读的常量
   * 注意:
    * 变量需要先声明再使用
    * 全局使用域下var声明的变量是Windows的属性
   * 标识符规范
    * 变量的名字又叫标识符
     * 必须以字母,下划线_或者$开通
     * 后续的字符可以是数字 (0-9),字母,下划线,$
     * 区分大小写
     * 中文是合法的标识符,
     * 保留字不能作为标识符; 如 with super while function new null do...
  * 8种数据类型
   * 
    * 布尔值(Boolean), 有2个值分别是true和false
    * null 表示空, 注意不是Null 和 NULL
    * undefined, 表示变量未定义时的值
    * 数字(Number), 整数或者浮点数,比如100, 3.16. 数字大小是有限制的
    * 任意精度整数(Biglnt), 可以存储和操作大整数 100n
    * 字符串(String), 比如 "hello world", 'hello world'
    * Symbol, 创建一个独一无二的值 let key = Symbol()
   * 1种复合类型(complex type)
    * 除了上面7种以外的都是对象(Object), 比如 狭义的对象,函数,数组...
    * 对象是多个 属性: 值 的集合
   * typeof
    * 使用typeof能qu 
# 26 表达式与运算符
 * 表达式
  * 是一个值,或者说能计算得到一个值
  * 比如:
   * • 2 * (2 + 3) 
     • a + b
     • 3 > 2
     • a = 4  
 * 运算符
  * 用于连接表达式，组成一个复杂的表达式
   * 比如
    * • a * (2 + 3) 
      • a + b
      • 3 > 2
      • x = 'hello'
  * 加法运算符
  * 算术运算符
   * 加法运算符（Addition）：x + y
     减法运算符（Subtraction）： x - y
     乘法运算符（Multiplication）： x * y
     除法运算符（Division）：x / y
     余数运算符（Remainder）：x % y
     自增运算符（Increment）：++x 或者 x++
     自减运算符（Decrement）：--x 或者 x--
     求负运算符（Negate）：-x
     数值运算符（Convert to number）： +x
   * +xx : 这是一个表达式(一个结果),这个结果是x自增1后的值
   * x++ : 这是一个表达式(一个结果),这个结果是x的值,之后x自增1
  * 比较运算符:
   * === 严格相等
   * !== 严格不相等
   * < 小于
   * <= 小于或等于
   * > 大于
   * >= 大于或等于
  * 布尔值运算符
   * ! 取反运算符
   * && 且运算符
   * || 或运算符
   * condition? case : false case 三元条件运算符
  * 位运算符
 * 运算符结合性与优先级
  * 结合性
   * 从左到右 or 从右到左
    * a + b = 1 赋值是从右到左
    * 3 + 2 * 5 加法和乘法是从左到右
  * 优先级
   * 谁的优先级高先处理谁
* 27 流程控制语句
 * if
 * switch  (转换)
  * 语法
   * 进行比较的时候是===, 不发生类型转换
   * 思考并测试: 如果不加break,会有什么差别
 * while  (虽然;然而)
  * 语法: 先判断条件,在执行.  条件一直满足会一直执行
 * do-while  (语句;循环语句)
  * 语法: 先执行,在判断条件.  如果条件满足,在执行->在判断
 * for  (为了;循环)
  * 语法: (1)初始化; (2)判断条件; (3)条件改变
   * 先(1), 再(2)
   * 如果(2)为true,执行花括号内容;否则停止
   * 再(3), 再(2), 继续判断...
 * for-in
  * 语法: 遍历数组或者对象  输出数组的小标或者对象的属性
 * for-of
  * 语法: 遍历数组以及可遍历对象  输出每一项的值
 * break 关键字
  * 用于强制退出循环体: 遇到break, 循环立刻停止, 跳出循环体
 * continue 关键字: 用于强制退出本次循环:  遇到continue, 跳出本次循环, 继续下次循环
# 27 流程控制语句
 * if 
  * 注意: 条件会被强制转化成布尔值类型
 * switch
  * 进行比较时是 ===, 不发生类型转换
 * while
  * 先判断条件,再执行
  * 条件一直满足会一直执行
  

   





