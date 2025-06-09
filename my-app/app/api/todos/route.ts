import { NextResponse } from "next/server";

// ✅ Define TypeScript interface for todo items
interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

// ✅ Sample static todo items
const todos: Todo[] = [
  { id: 1, title: "Complete the screening test", completed: false },
  { id: 2, title: "Push code to GitHub", completed: false },
  { id: 3, title: "Deploy on Vercel", completed: false },
];

// ✅ GET request handler
export async function GET() {
  return NextResponse.json(todos);
}

// ✅ BONUS: POST request handler (in-memory add)
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
