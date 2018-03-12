
import { LocaleProvider,DatePicker,message } from 'antd';
// 由于 antd 组件的默认文案是英文，所以需要修改为中文
import zhCN from 'antd/lib/locale-provider/zh_CN';
import moment from 'moment';
import 'moment/locale/zh-cn';
moment.locale('zh-cn');
import '../css/index.less'

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
ReactDOM.render(
<LocaleProvider locale={zhCN}>
    <Time />
</LocaleProvider>
,document.querySelector("#root")
)
