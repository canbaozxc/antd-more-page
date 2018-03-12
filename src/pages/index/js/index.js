
import { LocaleProvider, Table, message } from 'antd';
import Mock from 'mockjs';

// 由于 antd 组件的默认文案是英文，所以需要修改为中文
import zhCN from 'antd/lib/locale-provider/zh_CN';
import moment from 'moment';
import 'moment/locale/zh-cn';

moment.locale('zh-cn');
import '../css/index.css'




const columns = [{
  title: '姓名',
  dataIndex: 'name',
  key: 'name',
}, {
  title: '年龄',
  dataIndex: 'age',
  key: 'age',
}, {
  title: '住址',
  dataIndex: 'address',
  key: 'address',
}];

class App extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        data:[],
        columns:columns
      };
    }
    componentDidMount(){
      var _this=this;
      // 为给定 ID 的 user 创建请求
      axios.get('https://www.easy-mock.com/mock/5aa09123d653380a026f23b4/example/query')
      .then(function (response) {
          console.log(response.data.list);
          _this.setState({
            data:response.data.list
          });
      })
      .catch(function (error) {
          console.log(error);
      });
      /*$.get(`https://www.easy-mock.com/mock/5aa09123d653380a026f23b4/example/query`).done((ret)=>{
              
          if(ret.success===true){
            console.log(ret.list);
              this.setState({
                data:ret.list
              })
          }
      });*/
    }
    render() {
      return (
        <LocaleProvider locale={zhCN}>
          <div style={{ width: 400, margin: '100px auto' }}>
            <Table dataSource={this.state.data} columns={this.state.columns} />
          </div>
        </LocaleProvider>
      );
    }
  }
ReactDOM.render(
<App />
,document.querySelector("#root")
)
