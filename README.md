# antd-more-page配置开发

1. 本案例demo针对antd-design的ui库进行脚手架搭建，antd-design中不具备的功能或者组件会不定期更新到demo中。
1. 本demo代码，以示例为主，如echar案例.完成饼图，与柱状图。以及一些常用图表插件，但如在组件内未找到您要的图表组件，请按照我封装的方式，自己动手>_<
1. 虽然不是必须，但还是希望您在使用本demo之前能阅读一下[antd-designAPI](https://note.youdao.com/)并运行前一两个案例，这能够让你更快上手
1. 本例由于开发需要，已经与官方的配置完全不同官方的UI更多的是作为依赖库引入，代码方面将有较多小改动。

## 使用方式
下载代码

```
npm i
npm run server
```
访问入口如下：<br />
http://localhost:9000/view/index.html<br />
http://localhost:9000/view/home.html<br />
http://localhost:9000/view/detail.html<br />
http://localhost:9000/view/ajax.html<br />
http://localhost:9000/view/login.html<br />
http://localhost:9000/view/from.html<br />

目录结构
- src
- - components
- - pages
- package.json
- postcss.config.js
- webpack.config.js

以上的目录结构，文件我们后面会一一说到，或者在我的git上观看
https://github.com/canbaozxc/antd-more-page.git

先说说这个src/pages这是我们的页面文件夹，我们所有的页面都在这里编辑
打开src/pages/home/js/home.js

