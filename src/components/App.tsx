import * as React from 'react';
import Form from './Form';

interface Props {
  creator: string;
  year: number;
}

interface State {
  submit: boolean,
  tasks: string[]
}

class App extends React.Component <Props, State> {
  state ={
    submit: false,
    tasks: []
  }

  addTask = (task:string):void => {
    const updatedTasks: string[] = [...this.state.tasks]
    updatedTasks.push(task)
    this.setState({ tasks: updatedTasks })
  }

  render() {
    const { creator, year } = this.props
    const { tasks } = this.state
    return (
      <div className="App">
        <h1>My Day</h1>
        <ul>
          {tasks && tasks.map((task:string, id:number) => {
            return(
              <li key={id}>
                {task}
              </li>
            )
          })}
        </ul>        
        <Form
          addTask={this.addTask}
        />
        <span>Created by {creator} in {year}</span>
      </div>
    );
  }
}

export default App;
