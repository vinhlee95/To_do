import * as React from 'react'

export default class Form extends React.Component <ITaskItemProps, ITaskItemState> {
  state = {
    task: {
      title: '', completed: false
    }
  }

  onChange = (e:React.FormEvent<HTMLInputElement>):void => {
    this.setState({
      task: {
        ...this.state.task,
        title: e.currentTarget.value
      }
    })
  }

  submit = (e) => {
    e.preventDefault()
    const {task} = this.state
    this.props.addTask(task)
    // clear input
    this.setState({
      task: {
        ...this.state.task,
        title: ''
      }
    })
  }

  render() {
    const { task: {title} } = this.state
    return (
      <form onSubmit={this.submit}>
        <input 
          value={title}
          placeholder='Add a task'
          type='text'
          onChange={this.onChange}
        />
      </form>
    )
  }
}
