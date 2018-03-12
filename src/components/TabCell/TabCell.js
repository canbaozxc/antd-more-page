
import { Popover, Table, Input, Icon, Button, Popconfirm } from 'antd';
import Mock from 'mockjs';



export default class TabCell extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: this.props.value,  
    }
  }
  
  render() {
    
    const { text, content} = this.state.value;
    console.log(content);
    return (
      <div className="editable-cell">
        {
            <Popover placement="topLeft" title={text} content={content} arrowPointAtCenter>
              <Button>显示气泡</Button>
            </Popover>
        }
      </div>
    );
  }
}