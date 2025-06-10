'use client';

import { useEffect, useState } from 'react';

interface Note {
  id: number;
  title: string;
  content: string;
}

export default function PersonalInfoPage() {
  const [notes, setNotes] = useState<Note[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchNotes = async () => {
      try {
        const res = await fetch('/api/test-notes');
        const data = await res.json();
        setNotes(data);
      } catch (err) {
        console.error("Failed to fetch notes", err);
      } finally {
        setLoading(false);
      }
    };

    fetchNotes();
  }, []);

  return (
    <div style={{ padding: "2rem", fontFamily: "Arial" }}>
      <h1 style={{ color: "white", marginBottom: "1rem" }}>📄 Personal Info Notes</h1>

      {loading ? (
        <p>Loading...</p>
      ) : (
        <ul style={{ listStyle: "none", padding: 0 }}>
          {notes.map((note) => (
            <li
              key={note.id}
              style={{
                marginBottom: "1rem",
                padding: "1rem",
                backgroundColor: "#246A73",
                color:"white",
                border: "1px solid #ddd",
                borderRadius: "8px",
              }}
            >
              <strong>{note.title}:</strong> {note.content}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}