"use client";

import { SEARCH_QUERY_MIN } from "@/constants/medications";
import { useMedContext, useSearchContext } from "@/lib/hooks";

function Search() {
  const { searchQuery, handleChangeSearchQuery } = useSearchContext();
  const { handleChangeSelectedMedId } = useMedContext();

  return (
    <form className="w-full h-full">
      <input
        className="w-full h-full bg-white/20 rounded-md px-5 outline-none transition focus:bg-white/50 hover:bg-white/30 placeholder:text-white/50"
        placeholder="Search meds"
        type="search"
        value={searchQuery}
        onChange={(e) => {
          if (searchQuery.length < SEARCH_QUERY_MIN)
            handleChangeSelectedMedId(null);
          handleChangeSearchQuery(e.target.value);
        }}
      />
    </form>
  );
}

export default Search;
