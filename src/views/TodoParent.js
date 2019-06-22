import React, { Component } from 'react'
import TodoInput from './TodoInput'
import TodoShow from './TodoShow'
export default class TodoParent extends Component {
  constructor (props) {
    super(props)
    this.state = {
      lists: []
    }
    this.getChildVal = this.getChildVal.bind(this)
    this.delOneById = this.delOneById.bind(this)
  }

  // 新增
  getChildVal (val) {
    const id = Date.now()
    this.setState({
      lists: this.state.lists.concat({
        id: id,
        text: val
      })
    })
  }

  // 单删
  delOneById (id) {
    const data = this.state.lists
    this.setState({
      lists: data.filter((item, index) => {
        if (item.id !== id) {
          return item
        }
      })
    })
  }

  componentDidMount () {
  }

  render () {
    return (
      <div>
        <TodoInput getChildVal={this.getChildVal} />
        <TodoShow lists={this.state.lists} delOneById={this.delOneById} />
      </div>
    )
  }
}
