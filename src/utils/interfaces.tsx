// interface of a task
interface ITaskItem {
  id?: string;
  title: string;
  completed: boolean
}

// interface of props of a task
interface ITaskItemProps {
  addTask: (task) => void
}

// interface of app state
interface IAppState {
  tasks: ITaskItem[]
}

// interface of form state
interface ITaskItemState {
  task: ITaskItem
}