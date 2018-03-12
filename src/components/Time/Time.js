import React , {Component} from 'react'  //变量名必须为React  jSX 编译后依赖这个React
import ReactDOM from 'react-dom'
import {  DatePicker, message } from 'antd';
// 由于 antd 组件的默认文案是英文，所以需要修改为中文
import zhCN from 'antd/lib/locale-provider/zh_CN';
import moment from 'moment';
import 'moment/locale/zh-cn';

moment.locale('zh-cn');

export default class Time extends Component{
    constructor(props) {
        super(props);
        this.state = {
          date: new Date(),
        };
      }
      handleChange(date) {
        message.info('您选择的日期是: ' + date.toString());
        this.setState({ date });
      }
    render(){
        return (
            <div style={{ width: 400, margin: '100px auto' }}>
                <DatePicker onChange={value => this.handleChange(value)} />
                <div style={{ marginTop: 20 }}>当前日期：{this.state.date.toString()}</div>
            </div>
        )
    }
}
