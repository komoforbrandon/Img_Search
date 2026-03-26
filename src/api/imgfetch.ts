export default async function fetchImages(search: string) {
  const response = await fetch( `https://api.unsplash.com/search/photos?query=${search}&page=6&client_id=${import.meta.env.VITE_UNSPLASH_ACCESS_KEY}`);
  const data = await response.json();
  return data
}       
