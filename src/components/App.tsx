import * as moment from 'moment'
import * as React from 'react';
import Form from './Form';
import TaskItem from './TaskItem';

interface IProps {
  creator: string;
  year: number;
}

class App extends React.Component <IProps, IAppState> {
  state ={
    tasks: []
  }

  addTask = (task) => {
    const {tasks} = this.state;
    const updatedTasks = [...tasks]
    updatedTasks.push(task)
    this.setState({ tasks: updatedTasks})
  }

  render() {
    const { creator, year } = this.props
    const { tasks } = this.state
    const today = moment().format('dddd, Do MMM');
    return (
      <div className="App">
        <h1>My Day</h1>
        <h2>{today}</h2>
          {tasks && tasks.map((task:ITaskItem, id:number) => {
            return(
              <TaskItem key={id} title={task.title} completed={task.completed}  />
            )
          })}
        <Form
          addTask={this.addTask}
        />
        <span>Created by {creator} in {year}</span>
      </div>
    );
  }
}

export default App;
