import { type NextRequest, NextResponse } from 'next/server';
import { v4 } from 'uuid';

import { connect } from '@/dbConfig/db';
import TodoModel from '@/models/todo';

connect();

export async function GET() {
  try {
    const todos = await TodoModel.find({});
    return NextResponse.json({
      message: 'Found all todos',
      success: true,
      todos,
    });
  } catch (error) {
    return NextResponse.json({ message: 'An error occurred' }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  try {
    const { desc } = (await request.json()) as Todo;

    const newTodo = new TodoModel<Todo>({ id: v4(), desc, completed: false });

    const savedTodo = await newTodo.save();

    return NextResponse.json({ msg: 'Todo added', success: true, savedTodo });
  } catch (error) {
    return NextResponse.json({ message: 'An error occurred' }, { status: 500 });
  }
}

export async function DELETE() {
  try {
    await TodoModel.deleteMany({});

    return NextResponse.json({ msg: 'Todos cleared', success: true });
  } catch (error) {
    return NextResponse.json({ message: 'An error occurred' }, { status: 500 });
  }
}
