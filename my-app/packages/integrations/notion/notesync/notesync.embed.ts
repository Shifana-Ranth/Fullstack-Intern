
export function embedNote(note: any) {
  return {
    id: note.id,
    content: note.title,
  };
}
