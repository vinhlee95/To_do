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
    console.log(this.state.tasks)
    const { creator, year } = this.props
    return (
      <div className="App">
        <h1>TypeScript React Starter</h1>
        <Form
          addTask={this.addTask}
        />
        <span>Created by {creator} in {year}</span>
      </div>
    );
  }
}

export default App;
