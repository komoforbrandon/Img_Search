export default async function fetchImages(search: string) {
  const response = await fetch( `https://pi.unsplash.com/search/photos?query=${search}&page=4&client_id=${import.meta.env.VITE_UNSPLASH_ACCESS_KEY}`);
  const data = await response.json();
  return data
}       
