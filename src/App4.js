import React, { Component } from 'react'

export default class App4 extends Component{

  constructor(props){
   super(props)
   this.state={
     num:0
   }
  }

  handle=()=>{
   this.setState({
     num:this.state.num+1
   })
  }
  render=()=>(
    <div>
      <div>{this.state.num}</div>
      <button onClick={this.handle}>Click</button>
    </div>
  )
}