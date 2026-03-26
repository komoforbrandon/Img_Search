export default async function fetchImages(query: string) {
  const response = await fetch(
    `https://api.unsplash.com/search/photos?query=${query}&page=4&client_id=${import.meta.env.VITE_UNSPLASH_ACCESS_KEY}`
  );
  const data = await response.json();
  return data.results;
}       