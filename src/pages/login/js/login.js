import {LocaleProvider, Form, Icon, Input, Button, Checkbox } from 'antd';

import zhCN from 'antd/lib/locale-provider/zh_CN';
import moment from 'moment';
import 'moment/locale/zh-cn';
import '../css/index.less';
moment.locale('zh-cn');
const FormItem = Form.Item;

class NormalLoginForm extends React.Component {
    constructor(props){
        super(props);
        this.state={
            username:'',
            passw:'',
            nameErr:false,
            passwErr:false
        }
        this.onLogin=this.onLogin.bind(this);
        this.nameChange=this.nameChange.bind(this);
    }
    onLogin(e){
        e.preventDefault();
        e.stopPropagation();
        //此处请求数据
        console.log(this.state.username);
    }
    nameChange(ev){
        let msg=ev.target.value;
        console.log(msg);
        this.setState({
            username:ev.target.value,
            nameErr:msg
        })
    }
  render() {
    let {onLogin,nameChange}=this;
    let {username,passw}=this.state;
    return (
      <Form onSubmit={onLogin}  className="login-form">
        <FormItem>
         <Input value={username} onChange={nameChange}  prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="用户名" />
        </FormItem>
        <FormItem>
          <Input value={passw} prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="密码" />
        </FormItem>
        <FormItem>
          <Checkbox>自动登陆</Checkbox>
          <a className="login-form-forgot" href="">忘记密码</a>
          <Button type="primary" htmlType="submit" className="login-form-button">
            登陆
          </Button>
          Or <a href="">去注册!</a>
        </FormItem>
      </Form>
    );
  }
}

const WrappedNormalLoginForm = Form.create()(NormalLoginForm);
  ReactDOM.render(
    <LocaleProvider locale={zhCN}>
        <div>
            <NormalLoginForm />
        </div>
  </LocaleProvider>
    
    ,document.querySelector("#root")
    )