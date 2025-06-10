
'use client';

import { useState, useRef, useEffect } from 'react';

interface Message {
  role: 'user' | 'assistant';
  content: string;
}

export default function ChatBox() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  const sendMessage = async () => {
    if (!input.trim()) return;

    const userMessage: Message = { role: 'user', content: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput('');
    setLoading(true);

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: userMessage.content }),
      });

      const data = await res.json();
      const botMessage: Message = {
        role: 'assistant',
        content: data.reply || '🤖 Sorry, no reply received.',
      };
      setMessages((prev) => [...prev, botMessage]);
    } catch (error) {
      console.error(error);
      setMessages((prev) => [
        ...prev,
        { role: 'assistant', content: '❌ Error connecting to server.' },
      ]);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    sendMessage();
  };

  useEffect(() => {
    scrollRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  return (
    <div
      style={{
        maxWidth: '700px',
        margin: '2rem auto',
        padding: '1rem',
        fontFamily: 'sans-serif',
        backgroundColor: '#e6e6e6', // Light grey background
        borderRadius: '10px',
        boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
      }}
    >
      <h2 style={{ color:"Black",textAlign: 'center', marginBottom: '1rem' }}>💬 AI Chat</h2>

      <div
        style={{
          backgroundColor: '#f4f4f4',
          padding: '1rem',
          height: '300px',
          overflowY: 'auto',
          borderRadius: '8px',
        }}
      >
        {messages.map((msg, idx) => (
          <div
            key={idx}
            style={{
              marginBottom: '1rem',
              backgroundColor: msg.role === 'user' ? '#d1e7ff' : '#fffbe6',
              padding: '0.75rem 1rem',
              borderRadius: '8px',
              alignSelf: msg.role === 'user' ? 'flex-end' : 'flex-start',
              color: msg.role === 'user' ? '#003366' : '#664d00',
            }}
          >
            <strong>{msg.role === 'user' ? '🧑 You' : '🤖 AI'}:</strong>{' '}
            {msg.content}
          </div>
        ))}
        <div ref={scrollRef} />
      </div>

      <form
        onSubmit={handleSubmit}
        style={{ marginTop: '1rem', display: 'flex', gap: '0.5rem' }}
      >
        <input
          type="text"
          value={input}
          placeholder="Type your message..."
          onChange={(e) => setInput(e.target.value)}
          style={{
          flex: 1,
          padding: '0.6rem',
          borderRadius: '5px',
          border: '1px solid #999',
          backgroundColor: '#e0e0e0',   // Light grey textbox
          color: '#000',                // Black text
        }}
        />
        <button
          type="submit"
          disabled={loading}
          style={{
            padding: '0.6rem 1rem',
            backgroundColor: '#0070f3',
            color: '#fff',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
          }}
        >
          {loading ? '...' : 'Send'}
        </button>
      </form>
    </div>
  );
}