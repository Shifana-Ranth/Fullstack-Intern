import { listNotes } from "../../packages/integrations/notion/notesync/notesync.functions";

export default function TestNotesPage() {
  const notes = listNotes({ maxResults: 3, query: "project" });

  return (
    <div>
      <h1>Test Notesync Output</h1>
      <pre>{JSON.stringify(notes, null, 2)}</pre>
    </div>
  );
}

// 'use client';

// import { useEffect, useState } from 'react';
// import { listNotes } from "../../packages/integrations/notion/notesync/notesync.functions";

// type Note = {
//   id: number;
//   title: string;
// };

// export default function TestNotesPage() {
//   const [notes, setNotes] = useState<Note[]>([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     async function fetchNotes() {
//       const result = listNotes({ maxResults: 3, query: "project" });
//       setNotes(result);
//       setLoading(false);
//     }
//     fetchNotes();
//   }, []);

//   return (
//     <main style={{ padding: '2rem', fontFamily: 'Arial' }}>
//       <h1>📝 Notesync Mock Output</h1>
//       {loading ? (
//         <p>Loading notes...</p>
//       ) : (
//         <ul style={{ listStyle: 'none', padding: 0 }}>
//           {notes.map((note) => (
//             <li
//               key={note.id}
//               style={{
//                 padding: '1rem',
//                 backgroundColor: '#ffffff',
//                 color: '#000000',
//                 marginBottom: '1rem',
//                 borderRadius: '8px',
//                 boxShadow: '0 1px 4px rgba(0,0,0,0.1)',
//               }}
//             >
//               <strong>🗒️ {note.title}</strong>
//             </li>
//           ))}
//         </ul>
//       )}
//     </main>
//   );
// }