//组件生命周期
import React, { Component } from 'react'



class Header extends Component{
  render=()=>(
    <div>header</div>
  )
  componentWillReceiveProps(nextProps) {
    console.log(123);
  }
  
}

export default class App8 extends Component {
  constructor(props){
    super(props)  
    // 继承并且传递props
    this.state={
      num:10
    }

    console.log('1.1 constructor init')
  }


  change=()=>{
    this.setState({
      num:this.state.num+20
    })
  }

  UNSAFE_componentWillMount() {
    console.log("1.2 will mount")
  }
  componentDidMount() {

    //异步请求
    console.log("1.4 did mounted");
  }
  
  

  render() {
    console.log('1.3,consstructor render');
    return (
      <div>
        <div>生命周期</div>
        <hr/>
    <div>{this.state.num}</div>
        <button onClick={this.change}>点击</button>
        <Header/>
      </div>
    )
  }


  UNSAFE_componentWillReceiveProps(){
    console.log("2.1接受属性之前");
  }
  shouldComponentUpdate(nextProps, nextState) {

    console.log('props update');
    return (this.state.num!==nextState.num)  //优化更新性能
  }

  UNSAFE_componentWillUpdate(nextProps, nextState) {
    console.log('will update');
  }
  componentDidUpdate(prevProps, prevState) {
    console.log('did update');
  }
  
  
  
}
