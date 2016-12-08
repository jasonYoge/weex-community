![Alt Text](http://gw.alicdn.com/tps/i2/TB1DpsmMpXXXXabaXXX20ySQVXX-512-512.png_400x400.jpg)
# weex-community

> 本项目的主要目的是实现一个Web移动端的weex中文社区。这个网站应该具有查看weex中文社区发帖，评论等功能。目前还未对发表评论，登录等功能进行实现。

## 运行项目
安装node相关模块。
```javascript
npm install
```
从源文件中，生成项目所需要的==JS Buddle==文件。
```javascript
npm run build
```
接着打开服务器。打开服务器的方式有很多种，可以通过Linux或者Mac的shell运行。
```javascript
./start
```
或者在windows环境中，使用start.bat文件运行。
或者直接通过npm运行。
```javascript
npm run serve
```
## 网站流程
- 打开浏览器，输入==http://localhost:8080/web==即可进入主页。
- 点击主页中的任意文章，可进入文章详情页面。
- 点击主页登录按钮，即可弹出用户页面，点击用户的圆形图标，进入用户登录页面。
- 输入用户的weex中文社区相关ID进行登录，登录成功返回主页。
- 下拉主页可刷新页面。滑动到主页的最低部，继续上拉，即可获取更多的文章列表。

## 存在的问题
目前调用的是第三方的接口，并且因为我们团队对Native相关知识的缺乏，导致我们没能完成用户的评论以及登录功能。这是我们团队急需改进的地方。希望未来能够继续完善各方面的知识，让项目变得更完整。
