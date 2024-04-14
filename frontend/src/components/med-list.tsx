"use client";

import { SEARCH_QUERY_MIN } from "@/constants/medications";
import { useMedContext, useSearchContext } from "@/lib/hooks";
import { cn } from "@/lib/utils";

function MedList() {
  const { meds, selectedMedId, handleChangeSelectedMedId } = useMedContext();
  const { searchQuery } = useSearchContext();

  const filteredMeds = meds.filter(({ name }) =>
    name.toLowerCase().startsWith(searchQuery.toLowerCase())
  );

  return (
    <ul className="bg-white border-b border-light">
      {searchQuery.length >= SEARCH_QUERY_MIN ? (
        <>
          {filteredMeds.length > 0 ? (
            filteredMeds.map(({ id, name, isGeneric }, index) => (
              <li className="border-b" key={index}>
                <button
                  disabled={!isGeneric}
                  onClick={() => {
                    handleChangeSelectedMedId(id);
                  }}
                  className={cn(
                    "flex items-center h-[70px] w-full cursor-pointer px-5 text-base gap-3 hover:bg-[#EFF1F2] focus:hover:bg-[#EFF1F2] transition justify-between",
                    {
                      "bg-[#EFF1F2]": selectedMedId === id,
                      "text-red-500": !isGeneric,
                      "text-green-500": isGeneric,
                    }
                  )}
                >
                  <p className="font-semibold">{name}</p>
                </button>
              </li>
            ))
          ) : (
            <div className="flex justify-center items-center w-full h-full">
              <p>No meds found</p>
            </div>
          )}
        </>
      ) : (
        <div className="flex justify-center items-center w-full h-full">
          <p>
            Search term must have{" "}
            <span className="font-bold text-red-500">
              {`>${SEARCH_QUERY_MIN - 1}`}
            </span>{" "}
            characters
          </p>
        </div>
      )}
    </ul>
  );
}

export default MedList;
