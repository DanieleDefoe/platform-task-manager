import mongoose from 'mongoose';
import { unique } from 'next/dist/build/utils';

const TodoSchema = new mongoose.Schema({
  id: {
    type: String,
    required: true,
    unique: true,
  },
  desc: {
    type: String,
    required: true,
  },
  completed: {
    type: Boolean,
    default: false,
  },
});

const Todo = mongoose.models.todos || mongoose.model('todos', TodoSchema);

export default Todo;
