This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## 🤖 Part 3: AI Integration – Essay

If I were to build a real AI-powered chat feature, I would use the **OpenAI GPT-3.5** model through the **OpenAI API**.

### 🔍 Why GPT-3.5 (OpenAI)?
- It generates human-like responses.
- Easy to integrate with TypeScript and Next.js.
- It supports real-time **streaming** of output.

### ⚙️ How I’d Integrate it in Next.js:
- Create a backend route in: `app/api/chat/route.ts`
- Send user input to this route via `fetch()`
- The backend will send a request to OpenAI's API
- Return the AI-generated reply as JSON or stream chunks of it

### 🧾 Input/Output Handling:
- Frontend (`ChatBox.tsx`) accepts user input.
- Uses `fetch('/api/chat')` to send and receive data.
- Displays the reply dynamically in the UI.

### 🔄 Streaming Responses:
- Use `ReadableStream` on the backend
- Frontend listens to stream and updates output live
- This improves user experience, especially in chat

➡️ For this test, I’ve used a mock AI that replies based on static logic.
