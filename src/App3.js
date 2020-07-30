import React , {Component} from 'react'

let name = "xiaoming"
let age = 20
let list = [10,20,30]
export default class App3 extends Component{
  render = () => (
    <div>
      <div>name:{name}</div>
      <div>age:{age}</div>
  <div>成年{age>18?"成年":"未成年"}</div>
  <ul>
    {
      list.map((v,k)=>(
        <li key={k}>{v}</li>
        ))
    }
  </ul>

    </div>
  )
}

