import React from 'react'
import { ToDo as ITodo} from '../../../api/todos';

interface Props{
  todo: ITodo
}
export const Todo: React.FC<Props>=({todo})=> {
  return (
    <div>ID:{todo.id} Title: {todo.title}</div>
  )
}

