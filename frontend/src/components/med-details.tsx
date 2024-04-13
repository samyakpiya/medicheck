"use client";

import { useMedContext } from "@/lib/hooks";

import Image from "next/image";
import { GenericMed } from "@prisma/client";
import { Button } from "./ui/button";

function MedDetails() {
  const { selectedMed } = useMedContext();

  return (
    <section className="flex flex-col h-full w-full">
      {!selectedMed ? (
        <EmptyView />
      ) : (
        <>
          <TopBar med={selectedMed} />
        </>
      )}
    </section>
  );
}

function EmptyView() {
  return (
    <p className="flex h-full justify-center items-center text-2xl font-medium">
      No med selected
    </p>
  );
}

type Props = {
  med: GenericMed;
};

function TopBar({ med }: Props) {
  const { handleDispenseMed } = useMedContext();

  return (
    <div className="flex items-center bg-white px-8 py-5 border-b-2 border-light">
      <h2 className="text-3xl font-semibold leading-7 ml-5">{med.name}</h2>

      <div className="ml-auto space-x-2">
        <Button
          onClick={async () => {
            await handleDispenseMed(med.id);
          }}
        >
          Dispense
        </Button>
      </div>
    </div>
  );
}

function Notes({ med }: Props) {
  return (
    <section className="flex-1 bg-white px-7 py-5 rounded-md mb-9 mx-8 border border-light"></section>
  );
}

export default MedDetails;
