## puppeteer SSR 性能测试

最近研究 UI 自动化测试，本来想看看 puppeteer， 看了下官方文档： https://developers.google.com/web/tools/puppeteer/articles/ssr  发现 SSR 性能表现不俗。 于是想看看 puppeteer 和 Node 做 ssr 渲染哪个更好

## 安装
$ npm install

## 运行
$ npm run dev

## async html
http://localhost:8080/index.html

## ssr html
http://localhost:8080/

## 异步页面
<img src="./img/async.gif" width = "200px" />

## 同步页面
<img src="./img/ssr.gif" width = "205xpx" />


## 性能表现

使用 puppeteer ssr 渲染 测试页面基本上需要 300ms - 400ms, 但是使用 Node 做 ssr 渲染 ReactDOMServer.renderToString 只需要 10ms。puppeteer 针对爬虫做 ssr 表现还是可圈可点， 但是针对前台页面， 额外性能开销太大， 暂不建议使用



