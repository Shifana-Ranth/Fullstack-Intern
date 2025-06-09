// packages/integrations/notion/notesync/notesync.embed.ts

/**
 * Optional file for embedding logic,
 * can be left empty or used to format note data if needed.
 */

export function embedNote(note: any) {
  return {
    id: note.id,
    content: note.title,
  };
}
