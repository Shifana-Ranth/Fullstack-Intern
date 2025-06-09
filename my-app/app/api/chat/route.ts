import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const { message } = await request.json();

    const reply = `You said: "${message}". That's interesting! 😊`;

    return NextResponse.json({ reply });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: 'Something went wrong in the chat route' },
      { status: 500 }
    );
  }
}
