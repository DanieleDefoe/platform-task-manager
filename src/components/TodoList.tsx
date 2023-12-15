import { TodoItem } from './Todo';
import type { Dispatch, SetStateAction } from 'react';

interface Props {
  todos: Array<Todo>;
  setTodos: Dispatch<SetStateAction<Todo[]>>;
}

function TodoList({ todos, setTodos }: Props) {
  return (
    <section className="w-full flex flex-col gap-3">
      {todos.map((todo) => (
        <TodoItem key={todo.id} {...todo} setTodos={setTodos} />
      ))}
    </section>
  );
}

export { TodoList };
