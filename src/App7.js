import React, { Component } from 'react'


class Father extends Component{

  handleClick=()=>{
    this.props.handle()
  }

  render=()=>(
    <div>
      <button onClick={this.handleClick}>点击</button>
      {this.props.children} ----wocao    
    </div>
  )
}

export default class App7 extends Component {
constructor(props){
  super(props)
  this.state={
    num:20
  }
}

  handle=()=>{
   this.setState({
     num:this.state.num+1
   })
  }

  render() {
    return (
      <div>

    <Father handle={this.handle}>{this.state.num}</Father>
      </div>
    )
  }
}
