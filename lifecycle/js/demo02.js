console.log("Included!");

var Title = React.createClass({
    
    render: function(){
        return (
            <h1> A lifecycle cast </h1>    
        )
    }
    
})

var CountBox = React.createClass({
    render: function() {
        console.log("渲染");
        return (
            <div>
                <hr />
                <h3> 自动计数：{this.state.count}</h3>
                <h3> 手动计数：{this.state.add} <button onClick={this.doAdd}>点我增加</button></h3>
            </div>
        ) 
    },
    getInitialState: function() {
        return {
            count: 0,
            add: 100
        }
    },
    componentWillMount: function() {
        console.log("componentWillMount");
        var self = this;
        
        this.timer = setInterval(function(){
            self.setState({
                count: self.state.count + 1
            })
        },1000)    

        this.setState({
            count: 0
        })
    },
    componentDidMount: function() {
        console.log("componentDidMount 加载完成");

    },
    
    shouldComponentUpdate: function(nextProps, nextState) {
        console.log("shouldComponentUpdate 准备渲染"); 
        //手动计数到105 后停止刷新
        if (nextState.add > 105) {
            return false;
        }
        return true;
    },

    componentDidUpdate: function(prevProps, prevState) {
       console.log("componetDidUpdate  渲染完成"); 
       return true;
    },

    doAdd: function() {
        this.setState({
            add: this.state.add + 1
        })
    }

})


ReactDOM.render(
        <div>
            <Title />
            <CountBox />
        </div>,
        document.getElementById('app')
);


