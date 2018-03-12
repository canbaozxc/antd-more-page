
import { Popover, Table, Input, Icon, Button, Popconfirm } from 'antd';
import TabCell from 'components/TabCell/TabCell';


class EditableTable extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      isLoaded:false,
      error:null,
      data: [],
      msg:{},
    };
  }
  componentDidMount(){
    this.columns = [{
      title: 'name',
      dataIndex: 'name',
      width: '30%',
    }, {
      title: 'age',
      dataIndex: 'age',
    }, {
      title: 'address',
      dataIndex: 'address',
    }, {
      title: 'operation',
      dataIndex: 'operation',
      render: (text, record) => {
        return (
          <TabCell value={this.state.msg}/>
        );
      },
    }];
    //1.请求接口
    fetch("https://www.easy-mock.com/mock/5aa09123d653380a026f23b4/example/query")
    //2.格式化数据
    .then(res => res.json())
    //3.数据操作赋值
    .then(
      (result) => {
        console.log(result);
        this.setState({
          isLoaded: true,
          data: result.list,
          msg:result.msg
        });
      },
      // Note: it's important to handle errors here
      // instead of a catch() block so that we don't swallow
      // exceptions from actual bugs in components.
      (error) => {
        this.setState({
          isLoaded: true,
          error
        });
      }
    )
    
  }
  render() {
    const { data } = this.state;
    const columns = this.columns;
    return (
      <div>
        <Table bordered dataSource={data} columns={columns} />
      </div>
    );
  }
}


ReactDOM.render(<EditableTable />, document.getElementById('root'));