
import { NextRequest, NextResponse } from "next/server";

// ✅ Define TypeScript interface for todo items
interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

// ✅ Sample static todo items (in-memory array)
let todos: Todo[] = [
  { id: 1, title: "Complete the screening test", completed: false },
  { id: 2, title: "Push code to GitHub", completed: false },
  { id: 3, title: "Deploy on Vercel", completed: false },
];

// ✅ GET request handler
export async function GET() {
  return NextResponse.json(todos);
}

// ✅ POST request handler (add new todo)
export async function POST(request: Request) {
  const body = await request.json();
  const newTodo: Todo = {
    id: todos.length + 1,
    title: body.title,
    completed: false,
  };
  todos.push(newTodo);
  return NextResponse.json(newTodo, { status: 201 });
}

// ✅ PATCH request handler (toggle complete)
export async function PATCH(request: NextRequest) {
  const { id } = await request.json();
  const todo = todos.find((t) => t.id === id);
  if (todo) {
    todo.completed = !todo.completed;
    return NextResponse.json(todo);
  }
  return NextResponse.json({ error: "Todo not found" }, { status: 404 });
}

// ✅ DELETE request handler
export async function DELETE(request: NextRequest) {
  const { id } = await request.json();
  todos = todos.filter((t) => t.id !== id);
  return NextResponse.json({ message: "Deleted successfully" });
}