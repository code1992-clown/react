import React from 'react'
import './assets/css/index.css'
import Img from './assets/images/1.jpg'
export default class App2 extends React.Component {
  render = () => (
    <div>
      <div style={{ color: "red", fontSize: "30px" }}>App2</div>
      <div className="out">out css</div>
      <img src={Img} width="100px" />
      <label>
        username:<input />
      </label>
    </div>
  )
}