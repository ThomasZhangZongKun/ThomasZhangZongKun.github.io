* 24 JavaScript历史; 浏览器渲染机制;重绘与回流;白屏;FOUC;异步加载
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



