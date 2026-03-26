import { Search } from "lucide-react";
import { useState } from "react";
import fetchImages from "../api/imgfetch";

const handleSearch = (search: string) => {
  fetchImages(search)
}
export default function ImgSearch() {
  const [search, setSearch] = useState('')
  return (
    <div className="flex flex-row items-center justify-center min-h-screen py-2 border-2 ">
      <input type="search" value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Search for an Image..." />
      <button className="">
        <Search size={25} onClick={() => handleSearch(search)} />
      </button>
    </div>
  );
}