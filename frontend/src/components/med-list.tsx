"use client";

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
      {filteredMeds.map(({ id, name, count }, index) => (
        <li className="border-b" key={index}>
          <button
            onClick={() => {
              handleChangeSelectedMedId(id);
            }}
            className={cn(
              "flex items-center h-[70px] w-full cursor-pointer px-5 text-base gap-3 hover:bg-[#EFF1F2] focus:hover:bg-[#EFF1F2] transition justify-between",
              {
                "bg-[#EFF1F2]": selectedMedId === id,
              }
            )}
          >
            <p className="font-semibold">{name}</p>
          </button>
        </li>
      ))}
    </ul>
  );
}

export default MedList;
