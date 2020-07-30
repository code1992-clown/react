import React, { Component } from 'react'
// 不受控组件  推荐使用受控组件
export default class App9 extends Component {
  handleclick=()=>{
    console.log(this.refs.username.value );
  }
  render() {
    return (
      <div>
        <label>
          usename:<input type="text" ref="username"/>
        </label>
        <br></br>
        <label>
          password:<input type="text" ref="password"/>
        </label>
        <br></br>
        <button onClick={this.handleclick}>提交</button>
      </div>
    )
  }
}
