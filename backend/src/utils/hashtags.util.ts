export function extractHashtags(text: string | undefined | null): string[] {
  if (!text) return [];
  const regex = /#([\w_]+)/g;
  const matches = [...text.matchAll(regex)];


  const uniqueHashtags = new Set(matches.map((m) => m[1].toLowerCase()));
  return Array.from(uniqueHashtags);
}
