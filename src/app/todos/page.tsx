'use client';
import { TodoList } from '@/components/TodoList';
import axios from 'axios';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { ProgressSpinner } from 'primereact/progressspinner';

export const revalidate = 0;

export default function TodosPage() {
  const [inputText, setInputText] = useState<string>('');
  const [todos, setTodos] = useState<Array<Todo>>([]);
  const [loading, setLoading] = useState<boolean | null>(true);
  const [adding, setAdding] = useState<boolean>(false);

  useEffect(() => {
    setLoading(true);
    (async () => {
      const {
        data: { todos },
      } = await axios.get<GetTodosResponse>('/api/todos');
      setTodos(todos);
      setLoading(false);
    })();
  }, []);

  async function addTodo() {
    setAdding(true);
    const data: Partial<Todo> = {
      desc: inputText,
    };

    const {
      data: {
        savedTodo: { desc, id, completed },
      },
    } = await axios.post('/api/todos', data);
    const newTodo: Todo = { desc, id, completed };

    setInputText('');

    setTodos((prevTodos) => [newTodo, ...prevTodos]);

    setAdding(false);
  }

  async function clearTodos() {
    await axios.delete('/api/todos');

    setTodos([]);
  }

  return (
    <section className="flex flex-col items-center gap-8 pt-8 bg-violet-300 pb-32 w-full max-w-3xl">
      <h2 className="text-2xl text-black font-bold">Список задач</h2>
      <section className="flex gap-3 w-full">
        <input
          className="text-xl rounded-md shadow-md px-1 text-black w-full"
          type="text"
          placeholder="Введите задачу"
          value={inputText}
          onChange={(event) => setInputText(event.target.value)}
        />
        <button
          className="text-xl shandow-md rounded-md bg-blue-500 text-white hover:bg-blue-400 transition-all px-3 py-1 disabled:opacity-80 disabled:pointer-events-none"
          onClick={addTodo}
          disabled={inputText.length === 0}
        >
          Добавить
        </button>
        <button
          className="text-xl shandow-md bg-gray-500 text-white hover:bg-gray-400 transition-all px-3 py-1 rounded-md disabled:opacity-80 disabled:pointer-events-none"
          onClick={clearTodos}
          disabled={todos.length === 0}
        >
          Очистить
        </button>
      </section>
      {adding && <ProgressSpinner style={{ width: 100, height: 100 }} />}
      {loading && <ProgressSpinner />}
      {loading === false && todos.length === 0 && adding === false && (
        <h3 className="text-xl font-bold text-black text-center">
          Задач нет...
        </h3>
      )}
      {loading === false && todos.length > 0 && (
        <TodoList todos={todos} setTodos={setTodos} />
      )}
    </section>
  );
}
