
import { LocaleProvider, DatePicker , message } from 'antd';
import Time from 'components/Time/Time.js';
// 由于 antd 组件的默认文案是英文，所以需要修改为中文
import zhCN from 'antd/lib/locale-provider/zh_CN';
import moment from 'moment';
import 'moment/locale/zh-cn';
import PieReact  from 'components/EchartsDemo/PieReact.js';  //饼图组件
import BarReact  from 'components/EchartsDemo/BarReact.js'; //柱状图组件
moment.locale('zh-cn');
import '../css/index.css'


class App extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        data:"",
        pieOption:{},
        barOption:{}
      };
    }
    //饼状图数据获取
    getPie(){
      var _this=this;
      axios.get('https://www.easy-mock.com/mock/5aa09123d653380a026f23b4/example/pieOption')
      .then(function (response) {
          _this.setState({
            pieOption:response.data
          });
      })
      .catch(function (error) {
          console.log(error);
      });
    }
    //柱状图数据获取
    getBar(){
      var _this=this;
      axios.get('https://www.easy-mock.com/mock/5aa09123d653380a026f23b4/example/barOption')
      .then(function (response) {
          _this.setState({
            barOption:response.data
          });
      })
      .catch(function (error) {
          console.log(error);
      });
    }
    componentDidMount(){
      this.getPie();
      this.getBar();
      
    }
    render() {
      let {pieOption,barOption}=this.state;
      return (
        
          <div style={{ width: 400, margin: '100px auto' }}>
            <Time  />
            <h2>饼图react组件实现</h2>
            <PieReact option={pieOption} />
            <hr/>
            <h2>柱状图react组件实现</h2>
            <BarReact option={barOption} />
            <hr/>
          </div>
        
      );
    }
  }
ReactDOM.render(
<LocaleProvider locale={zhCN}>
    <App />
</LocaleProvider>
,document.querySelector("#root")
)
