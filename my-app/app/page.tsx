
import Link from 'next/link';

export default function HomePage() {
  return (
    <main style={{ padding: '2rem', fontFamily: 'Arial' }}>
      <h1>🚀 Full Stack + AI Internship Test</h1>
      <p>Click below to test each part:</p>

      <ul style={{ listStyle: 'none', padding: 0, marginTop: '1rem' }}>
        <li style={{ marginBottom: '1rem' }}>
          <Link href="/todos">
            <button style={btnStyle}>📋 Part 1 – To-Do API</button>
          </Link>
        </li>
        <li style={{ marginBottom: '1rem' }}>
          <Link href="/test-notes">
            <button style={btnStyle}>💬 Part 2 – Notesync</button>
          </Link>
        </li>
        <li style={{ marginBottom: '1rem' }}>
          <Link href="/chat">
            <button style={btnStyle}>💬 Part 3 – AI Chat</button>
          </Link>
        </li>
      </ul>
    </main>
  );
}

const btnStyle = {
  padding: '0.7rem 1.2rem',
  background: '#0070f3',
  color: '#fff',
  border: 'none',
  borderRadius: '6px',
  cursor: 'pointer',
};
