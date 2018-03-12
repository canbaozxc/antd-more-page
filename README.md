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
http://localhost:9000/view/from.html<br />http://localhost:9000/view/test.html<br />

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
打开src/pages/test/js/test.js
这是我为你预备的一个测试页面jsx。让我们来试试

###### 1.js顶部做引用依赖
```
import { LocaleProvider,DatePicker,message } from 'antd';
// 由于 antd 组件的默认文案是英文，所以需要修改为中文
import zhCN from 'antd/lib/locale-provider/zh_CN';
import moment from 'moment';
import 'moment/locale/zh-cn';
moment.locale('zh-cn');
import '../css/index.less'
```
说明：你可以引用你自己编写的css，less，js以及外部依赖。如LocaleProvider,DatePicker,message都是antd-design当中的组件。（注意：主要的组件如react,react-DOM等都已经默认配置好了，不需要进行引用，直接使用即可）

LocaleProvider:国际化提供了英语，中文，俄语，法语，德语等多种语言支持，所有语言包可以在 [这里](https://github.com/ant-design/ant-design/tree/master/components/locale-provider) 找到。---目前我们使用中文

```
import zhCN from 'antd/lib/locale-provider/zh_CN';
import moment from 'moment';
import 'moment/locale/zh-cn';
moment.locale('zh-cn');
```
这些引用都是配合LocaleProvider进行使用的


DatePicker：日期组件

message：消息组件


###### 2.构造与描述组件

说明：鉴于内容是一个整体，我将一次性贴出，逐段说明规范
```
class Time extends React.Component{
  //一.构造器
  constructor(props) {
      super(props);
      this.state = {
        date: new Date(),
      };
      this.handleChange=this.handleChange.bind(this);
  }
  //构造器
  //三.函数区
  handleChange(date) {
    message.info('您选择的日期: ' + date.toString());
    this.setState({ date });
  }
  //函数区 end
  //二.组件返回区
  render(){
    let {handleChange}=this;//使用绑定好的函数
      return (
          <div style={{ width: 400, margin: '100px auto' }}>
              <DatePicker onChange={(value) =>{ handleChange(value)}} />
              <div style={{ marginTop: 20 }}>当前日期：{this.state.date.toString()}</div>
          </div>
      )
  }
  //组件返回区 end
}
```
构造器：主要用于对页面状态state，函数的定义与绑定

```
  constructor(props) {
      super(props);
      this.state = {
        date: new Date(),
      };
      this.handleChange=this.handleChange.bind(this);
    }
```
注意：在这个地方我进行了函数绑定，但是官方没有。

原因：引用ant-design的时候antd作为依赖使用并不能自动绑定函数，需要手动绑定

组件返回区：用于返回最终输出的内容

```
//二.组件返回区
  render(){
    let {handleChange}=this;//使用绑定好的函数
      return (
          <div style={{ width: 400, margin: '100px auto' }}>
              <DatePicker onChange={(value) =>{ handleChange(value)}} />
              <div style={{ marginTop: 20 }}>当前日期：{this.state.date.toString()}</div>
          </div>
      )
  }
  //组件返回区 end
```

注意：let {handleChange}=this;将绑定到this上的方法解构出来，直接使用

原因：我们使用时方法将不需要通过this引用

函数区：在构造器constructor与组件返回区render之间的区域，就是自定义函数区，你可以定义你的函数对页面组件以及数据state进行操作

```
//三.函数区
  handleChange(date) {
    message.info('您选择的日期: ' + date.toString());
    this.setState({ date });
  }
  //函数区 end
```
注意：所有函数定义完成后请做以下步骤

1.构造器constructor绑定到组件中


```
this.fn=this.fn.bind(this);
```


2.组件返回区解构


```
let {fn}=this;
```


原因：目前能解决所有ant-design官方案例与现有脚手架配置不兼容问题

3.运行jsx并输出

```
ReactDOM.render(
<LocaleProvider locale={zhCN}>
    <Time />
</LocaleProvider>
,document.querySelector("#root")
)
```
说明将我们刚才编写的组件Time通过国际化组件LocaleProvider封装输出到页面的#root中
运行一下试试
http://localhost:9000/view/test.html

如无意外，你能看到一个简单的时间管理器

