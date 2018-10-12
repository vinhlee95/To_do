import * as React from 'react'

const TaskItem = (props:ITaskItem) => {
  return(
    <div key={props.id}>
      <input type='checkbox' />
      {props.title} 
    </div>
  )
}

export default TaskItem 