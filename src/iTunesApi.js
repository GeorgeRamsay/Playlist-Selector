export async function searchiTunes(term, media = 'music', attribute = 'songTerm') {
  const url = `https://itunes.apple.com/search?term=${encodeURIComponent(
    term
  )}&media=${media}&attribute=${attribute}`;

  const response = await fetch(url);
  const data = await response.json();
  return data;
}