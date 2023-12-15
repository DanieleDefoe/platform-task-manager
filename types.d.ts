interface Todo {
  id: string;
  desc: string;
  completed: boolean;
}

interface GetTodosResponse {
  message: string;
  success: boolean;
  todos: Array<Todo>;
}

interface GetOneTodoParams {
  id: string;
}

interface GetOneTodoResponse {
  todo: Todo | null;
}
