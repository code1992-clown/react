import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Childen extends Component{
  render=()=>(
    <div>children</div>
  )
}

class Header extends Component {

  static propTypes={
    title:PropTypes.string
  }

  static defaultProps = {  //默认值，与父组件有关联才写入
    title:"default"
  }

  render() {
    return (
      <div>
        <h1 style={{ color: this.props.color }}>
          {this.props.title}
          {this.props.children} 
           {/* 相当于占位符 ，双标签的时候占用，特殊的占位符 */}
        </h1>
        <Childen></Childen>
      </div>
    )
  }
}

export default class App6 extends Component {

  constructor(props){  //构造哈数
    super(props)  //继承
    this.state={  //数据放在这里面
      title:"index state title",
      titlelist:"list state title"
    }
  }

  render() {
    return (
      <div>
        <Header  color="red" title={123}>
          卧槽，我是子元素
        </Header>
        <Header title={this.state.titlelist} color="green"></Header>
      </div>
    )
  }
}
