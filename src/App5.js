import React, { Component } from 'react'

export default class App5 extends Component {
  constructor(props){
    super(props)
    this.state={
      val:'init value'
    }
  }
  handleChange=(e)=>{
    this.setState({
      val:e.target.value
    })
  }
  render() {
    return (
      <div>
        <div>{this.state.val}</div>
        <input  value={this.state.val} onChange={(e)=>this.handleChange(e)}/>
        {/* 箭头函数需要显示的取传值 */}
        <input  value={this.state.val} onChange={this.handleChange}/>
      </div>
    )
  }
}
