
import { listNotesSchema } from "./notesync.schema";

const allNotes = [
  { id: 1, title: "Name", content: "Shifana Ranth" },
  { id: 2, title: "Age", content: "21" },
  { id: 3, title: "Skills", content: "HTML, CSS, JavaScript, PHP, MySQL" },
  { id: 4, title: "Hobbies", content: "K-pop, Coding, Designing" },
  { id: 5, title: "Dream", content: "Travel and Explore" },
];

export function listNotes(input: { maxResults: number; query: string }) {
  const parsed = listNotesSchema.safeParse(input);
  if (!parsed.success) {
    throw new Error("Invalid input to listNotes");
  }

  const { maxResults, query } = parsed.data;

  const filtered = allNotes.filter((note) =>
    note.title.toLowerCase().includes(query.toLowerCase())
  );

  return filtered.slice(0, maxResults);
}
