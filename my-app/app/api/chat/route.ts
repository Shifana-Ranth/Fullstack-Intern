import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { message } = await req.json();
  const apiKey = process.env.GEMINI_API_KEY;
  try {
    const res = await fetch(
      "https://generativelanguage.googleapis.com/v1beta/openai/chat/completions",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${apiKey}`,
        },
        body: JSON.stringify({
          model: "gemini-2.0-flash",
          messages: [{ role: "user", content: message }],
        }),
      }
    );

    const data = await res.json();
    console.log("Gemini chat response:", data);

    const reply =
      data?.choices?.[0]?.message?.content ||
      "Sorry, I didn't get a reply.";

    return NextResponse.json({ reply });
  } catch (error) {
    console.error("Gemini chat error:", error);
    return NextResponse.json(
      { error: "Failed to fetch from Gemini chat" },
      { status: 500 }
    );
  }
}
