import * as React from 'react'

export default class Form extends React.Component <{addTask}, {singleTask: string}> {
  state = {
    singleTask: ''
  }

  onChange = (e:React.FormEvent<HTMLInputElement>):void => {
    this.setState({ singleTask: e.currentTarget.value })
  }

  submit = (e):void => {
    e.preventDefault()
    const {singleTask} = this.state
    this.props.addTask(singleTask)
    this.setState({ singleTask: '' })
  }

  render() {
    return (
      <form onSubmit={this.submit}>
        <label>Add your task</label>
        <input 
          value={this.state.singleTask}
          type='text'
          onChange={this.onChange}
        />
      </form>
    )
  }
}
