"use client";

import { addMed, deleteMed, editMed } from "@/actions/actions";
import { MedEssentials } from "@/lib/types";
import { GenericMed } from "@prisma/client";

import { createContext, useOptimistic, useState } from "react";
import { toast } from "sonner";

type MedContextProviderProps = {
  data: GenericMed[];
  children: React.ReactNode;
};

type TMedContext = {
  meds: GenericMed[];
  selectedMedId: GenericMed["id"] | null;
  selectedMed: GenericMed | undefined;
  numberOfMeds: number;
  handleDispenseMed: (id: GenericMed["id"]) => Promise<void>;
  handleChangeSelectedMedId: (id: GenericMed["id"]) => void;
};

export const MedContext = createContext<TMedContext | null>(null);

export default function MedContextProvider({
  data,
  children,
}: MedContextProviderProps) {
  const [optimisticMeds, setOptimisticMeds] = useOptimistic(
    data,
    (state, { action, payload }) => {
      switch (action) {
        case "add":
          return [
            ...state,
            {
              ...payload,
              id: Date.now().toString(),
            },
          ];
        case "edit":
          return state.map((med) =>
            med.id === payload.id ? { ...med, ...payload.newMedData } : med
          );
        case "delete":
          return state.filter((med) => med.id !== payload);
        default:
          return state;
      }
    }
  );
  // state
  const [selectedMedId, setSelectedMedId] = useState<GenericMed["id"] | null>(
    null
  );

  // derived state
  const selectedMed = optimisticMeds.find((med) => med.id === selectedMedId);
  console.log(selectedMed, "selectedMed");
  const numberOfMeds = optimisticMeds.length;

  // event handlers
  const handleDispenseMed = async (medId: GenericMed["id"]) => {
    setOptimisticMeds({ action: "delete", payload: medId });
    const error = await deleteMed(medId);
    if (error) {
      toast.warning(error.message);
      return;
    }
    setSelectedMedId(null);
  };

  const handleChangeSelectedMedId = (id: GenericMed["id"]) => {
    setSelectedMedId(id);
  };

  return (
    <MedContext.Provider
      value={{
        meds: optimisticMeds,
        selectedMedId: selectedMedId,
        selectedMed: selectedMed,
        numberOfMeds: numberOfMeds,
        handleChangeSelectedMedId: handleChangeSelectedMedId,
        handleDispenseMed: handleDispenseMed,
      }}
    >
      {children}
    </MedContext.Provider>
  );
}
