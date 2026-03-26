import ImgSearch from "./search";
import SkeletonLoader from "./skeletonLoader";
import { useQuery } from "@tanstack/react-query";
import fetchImages from "../api/imgfetch";
import { useState } from "react";


export default function Home() {
  const [search, setSearch] = useState('nature')
  const { data, isLoading,isSuccess, isError, error } = useQuery({
    queryKey: ['images', search],
    queryFn: () => fetchImages(search)
  })

  if (isLoading) return (<SkeletonLoader />)
  if (isError) return <p>Something went wrong: {error.message}</p>

  if (isSuccess) {
    return <p className="m-3">{JSON.stringify(data)}</p>
  }

  return (
    <div className="flex flex-col items-center  min-h-screen py-2 bg-blue-300/20 m-5">
      <ImgSearch onSearch={setSearch} />
      
    </div>
  );
}
