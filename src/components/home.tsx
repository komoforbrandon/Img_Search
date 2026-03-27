import ImgSearch from "./search";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <ImgSearch/>
      <h1 className="text-4xl font-bold mb-4">Welcome to the Image Search App</h1>
       <p className="text-lg text-gray-600">Search for images using the Unsplash API</p>
    </div>
  );
}
