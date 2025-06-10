
import { z } from "zod";

export const listNotesSchema = z.object({
  maxResults: z.number().int().min(1).max(100),
  query: z.string().min(0).max(100),
});
