import ImgSearch from "./search";
import SkeletonLoader from "./skeletonLoader";
import { useQuery } from "@tanstack/react-query";
import fetchImages from "../api/imgfetch";
import { useState } from "react";

type UnsplashImage = {
  id: string;
  alt_description: string | null;
  description: string | null;
  likes: number;
  user: {
    name: string;
  };
  urls: {
    small: string;
  };
};

type UnsplashResponse = {
  results: UnsplashImage[];
};

function shortenText(text: string | null, fallback: string) {
  const value = text?.trim() || fallback;

  if (value.length <= 70) {
    return value;
  }

  return `${value.slice(0, 67).trim()}...`;
}

export default function Home() {
  const [search, setSearch] = useState("nature");
  const { data, isLoading, isError, error } = useQuery<UnsplashResponse, Error>({
    queryKey: ["images", search],
    queryFn: () => fetchImages(search),
  });

  if (isLoading) return <SkeletonLoader />;
  if (isError) return <p>Something went wrong: {error.message}</p>;

  const images = data?.results ?? [];

  return (
    <div className="min-h-screen bg-blue-300/20 px-4 py-6 md:px-6">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-6">
        <ImgSearch onSearch={setSearch} />

        {images.length > 0 ? (
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-4">
            {images.map((image) => {
              const shortDescription = shortenText(
                image.description ?? image.alt_description,
                "Beautiful Unsplash image"
              );

              return (
                <article
                  key={image.id}
                  className="flex h-full flex-col overflow-hidden rounded-2xl bg-white shadow-md transition-transform duration-200 hover:-translate-y-1 hover:shadow-xl"
                >
                  <img
                    src={image.urls.small}
                    alt={image.alt_description ?? "Unsplash image"}
                    className="h-64 w-full object-cover"
                  />

                  <div className="flex flex-1 flex-col justify-between gap-4 p-4">
                    <div className="space-y-2">
                      <p className="text-lg font-semibold text-slate-800">
                        {image.user.name}
                      </p>
                      <p className="min-h-12 text-sm leading-6 text-slate-600">
                        {shortDescription}
                      </p>
                    </div>

                    <div className="flex items-center justify-between text-sm text-slate-500">
                      <span className="rounded-full bg-blue-100 px-3 py-1 font-medium text-blue-700">
                        {search}
                      </span>
                      <span>{image.likes} likes</span>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        ) : (
          <div className="rounded-2xl bg-white/80 p-10 text-center text-slate-600 shadow-sm">
            No images found for "{search}".
          </div>
        )}
      </div>
    </div>
  );
}
