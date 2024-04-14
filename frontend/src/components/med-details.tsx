"use client";

import {
  useMedContext,
  usePatientContext,
  useSearchContext,
} from "@/lib/hooks";

import { GenericMed, Patient } from "@prisma/client";
import { Button } from "./ui/button";

import { BRAND_MEDS_LIST, SEARCH_QUERY_MIN } from "@/constants/medications";
import { Separator } from "./ui/separator";
import ConfidenceRating from "./confidence-rating";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

function MedDetails() {
  const { selectedMed } = useMedContext();
  const { searchQuery } = useSearchContext();
  const { selectedPatient } = usePatientContext();

  const filteredBrandMeds = BRAND_MEDS_LIST.filter((name) =>
    name.toLowerCase().startsWith(searchQuery.toLowerCase())
  );

  console.log(selectedPatient);

  return (
    <section className="flex flex-col h-full w-full">
      {!selectedMed ||
      !selectedPatient ||
      searchQuery.length < SEARCH_QUERY_MIN ? (
        <EmptyView />
      ) : (
        <>
          <TopBar med={selectedMed} />
          <ConfidenceRating patient={selectedPatient} med={selectedMed.name} />
          <PatientInfo patient={selectedPatient} />
          <Notes brandMeds={filteredBrandMeds} length={searchQuery.length} />
        </>
      )}
    </section>
  );
}

function EmptyView() {
  return (
    <p className="flex h-full justify-center items-center text-2xl font-medium">
      No patient / med selected
    </p>
  );
}

type Props = {
  med: GenericMed;
  // patient: Patient;
};

function TopBar({ med }: Props) {
  const { handleDispenseMed } = useMedContext();

  return (
    <div className="flex items-center bg-white px-8 py-5 border-b-2 border-light">
      <h2 className="text-xl font-semibold leading-7">
        {med.name}
        {/* for <span>{patient.name}</span> */}
      </h2>

      <div className="ml-auto space-x-2">
        <AlertDialog>
          <AlertDialogTrigger asChild>
            <Button>Dispense</Button>
          </AlertDialogTrigger>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>
                The confidence rating is low. Are you absolutely sure the
                patient needs this?
              </AlertDialogTitle>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel>Recheck</AlertDialogCancel>
              <AlertDialogAction
                className="bg-red-600"
                onClick={async () => {
                  await handleDispenseMed(med.id);
                }}
              >
                Override
              </AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </div>
    </div>
  );
}

function PatientInfo({ patient }: { patient: Patient }) {
  return (
    <div className="flex justify-around py-10 px-5 text-center">
      <div>
        <h3 className="text-[13px] font-medium uppercase text-zinc-700">
          Patient name
        </h3>
        <p className="mt-1 text-lg text-zinc-800">{patient?.name}</p>
      </div>
      <div>
        <h3 className="text-[13px] font-medium uppercase text-zinc-700">Age</h3>
        <p className="mt-1 text-lg text-zinc-800">{patient?.age} yr</p>
      </div>
      <div>
        <h3 className="text-[13px] font-medium uppercase text-zinc-700">
          Gender
        </h3>
        <p className="mt-1 text-lg text-zinc-800">
          {patient?.gender === 0 ? "Male" : "Female"}
        </p>
      </div>
      <div>
        <h3 className="text-[13px] font-medium uppercase text-zinc-700">
          Height
        </h3>
        <p className="mt-1 text-lg text-zinc-800">{patient?.weight} in</p>
      </div>
      <div>
        <h3 className="text-[13px] font-medium uppercase text-zinc-700">
          Weight
        </h3>
        <p className="mt-1 text-lg text-zinc-800">{patient?.height} lb</p>
      </div>
      <div>
        <h3 className="text-[13px] font-medium uppercase text-zinc-700">
          Seizures
        </h3>
        <p className="mt-1 text-lg text-zinc-800">
          {patient?.seizures ? (
            <span className="text-red-500">Yes</span>
          ) : (
            <span>No</span>
          )}
        </p>
      </div>
    </div>
  );
}

function Notes({ brandMeds, length }: { brandMeds: string[]; length: number }) {
  return (
    <section className="flex-1 bg-white px-7 py-5 rounded-md mb-9 mx-8 border border-light">
      <h2 className="text-2xl font-semibold">Brand Names Conflict</h2>
      <Separator className="w-full" />
      <ul className="py-2">
        {brandMeds.map((med, index) => (
          <li key={index}>
            <span className="text-red-500">{med.substring(0, length)}</span>
            <span>{med.substring(length)}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default MedDetails;
