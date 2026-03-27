import { Search } from "lucide-react";
import { useState } from "react";

type SearchProps = {
  onSearch: (value: string) => void;
}

export default function ImgSearch({ onSearch }: SearchProps) {
  const [search, setSearch] = useState('')
  return (
    <div className="flex flex-row items-center py-2 px-6 border-2 border-b-blue-800/70 outline-1 outline-blue-800/50 rounded-3xl my-3 mx-auto max-w-3xl">
      <input type="search" value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Search for an Image..." className="outline-none border-none w-full text-lg pr-4" />
      <button className="cursor-pointer" onClick={() => onSearch(search)} >
        <Search size={25} />
      </button>
    </div> 
  );
}