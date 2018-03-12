class MyComponent extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        error: null,
        isLoaded: false,
        items: []
      };
    }
   
    componentDidMount() {
        var _this=this;
        // 为给定 ID 的 user 创建请求
        axios.post('https://www.easy-mock.com/mock/5aa09123d653380a026f23b4/example/login?name=nk&password=123456',{
            name:'nk',
            password:123456
            })
        .then(function (response) {
            console.log(response);
            _this.setState({
                isLoaded: true,
                items: response.data.data.userinfo
                
            });
        })
        .catch(function (error) {
            console.log(error);
        });
        
    }
  
    render() {
      const { error, isLoaded, items } = this.state;

      if (error) {
        return <div>Error: {error.message}</div>;
      } else if (!isLoaded) {
        return <div>Loading...</div>;
      } else {
        return (
            <div>{items}</div>
        );
      }
    }
  }
  ReactDOM.render(
    <MyComponent />
    ,document.querySelector("#root")
    )