import { type NextRequest, NextResponse } from 'next/server';
import { v4 } from 'uuid';

import { connect } from '@/dbConfig/db';
import TodoModel from '@/models/todo';

connect();

export async function GET(
  _request: NextRequest,
  { params }: { params: GetOneTodoParams }
) {
  try {
    const { id } = params;

    const todo = await TodoModel.findOne({ id });

    return NextResponse.json({ message: 'Found todo', success: true, todo });
  } catch (error) {
    return NextResponse.json({ message: 'An error occurred' }, { status: 500 });
  }
}

export async function DELETE(
  _request: NextRequest,
  { params: { id } }: { params: GetOneTodoParams }
) {
  try {
    await TodoModel.deleteOne({ id });

    return NextResponse.json({ message: 'Todo deleted', success: true });
  } catch (error) {
    return NextResponse.json({ message: 'An error occurred' }, { status: 500 });
  }
}

export async function PUT(
  request: NextRequest,
  { params: { id } }: { params: GetOneTodoParams }
) {
  try {
    const { desc, completed } = (await request.json()) as Partial<Todo>;

    await TodoModel.updateOne({ id }, { $set: { desc, completed } });

    return NextResponse.json({ message: 'Todo updated', success: true });
  } catch (error) {
    return NextResponse.json({ message: 'An error occurred' }, { status: 500 });
  }
}
