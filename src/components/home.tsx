import ImgSearch from "./search";
import SkeletonLoader from "./skeletonLoader";
import { useQuery } from "@tanstack/react-query";
import fetchImages from "../api/imgfetch";
import { Children, useState } from "react";
import { Heart, X } from "lucide-react";
import { createPortal } from 'react-dom';

type UnsplashImage = {
  id: string;
  alt_description: string | null;
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

function Modal({ isOpen, onClose, children }: { isOpen: boolean; onClose: () => void; children: React.ReactNode }) {
  if (!isOpen) return null;
  return createPortal(
    <>
      <div className="fixed inset-0 bg-black/50" onClick={onClose} />
      <div className="fixed inset-0 flex items-center justify-center p-4">{children}</div>
    </>,
    document.body
  );
}

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);
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
            {images.map((image) => (
              <article
                key={image.id}
                className="flex h-full flex-col overflow-hidden rounded-2xl bg-white shadow-md transition-transform duration-200 hover:-translate-y-1 hover:shadow-xl"
              >
                <img
                  src={image.urls.small}
                  alt={image.alt_description ?? "Unsplash image"}
                  className="h-64 w-full object-cover"
                  onClick={() => setIsOpen(true)}
                />

                <div className="flex flex-1 flex-col justify-between gap-4 p-4">
                  <p className="text-lg font-semibold text-slate-800">
                    {image.user.name}
                  </p>

                  <div className="flex items-center justify-between text-sm text-slate-500">
                    <span className="rounded-full bg-blue-100 px-3 py-1 font-medium text-blue-700">
                      {search}
                    </span>
                    <span className="flex p-1 bg-blue-500/30 rounded-3xl"><Heart size={16} color="red" /> {image.likes} likes</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="rounded-2xl bg-white/80 p-10 text-center text-slate-600 shadow-sm">
            No images found for "{search}".
          </div>
        )}

        <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
          <button className="absolute top-7 right-60 rounded-full bg-black/50 text-white" onClick={() => setIsOpen(false)}>
            <X size={24}/>
          </button>
          <img
            src={images[0].urls.small}
            alt={images[0].alt_description ?? "Unsplash image"}
            className="h-full w-full object-contain rounded-2xl"
          />
        </Modal>
      </div>
    </div>
  );
}
