import React, { Component } from 'react'
export default class TodoInput extends Component {
  constructor (props) {
    super(props)
    this.state = {
      val: ''
    }
    this.getValue = this.getValue.bind(this)
    this.sendToPar = this.sendToPar.bind(this)
  }

  getValue (e) {
    this.setState({
      val: e.target.value
    })
  }

  sendToPar () {
    if (this.state.val !== '') {
      this.props.getChildVal(this.state.val)
    }
  }

  componentDidMount () {
  }

  render () {
    return (
      <div>
        <h3>留下评论</h3>
        <input type='text' value={this.state.val} onChange={this.getValue} />
        <button onClick={this.sendToPar}>提交</button>
      </div>
    )
  }
}
