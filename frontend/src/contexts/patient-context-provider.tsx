"use client";

import { Patient } from "@prisma/client";

import { createContext, useOptimistic, useState } from "react";

type PatientContextProviderProps = {
  data: Patient[];
  children: React.ReactNode;
};

type TPatientContext = {
  patients: Patient[];
  selectedPatientId: Patient["id"] | null;
  selectedPatient: Patient | undefined;
  numberOfPatients: number;
  handleChangeSelectedPatientId: (id: Patient["id"]) => void;
};

export const PatientContext = createContext<TPatientContext | null>(null);

export default function PatientContextProvider({
  data,
  children,
}: PatientContextProviderProps) {
  const [optimisticPatients, setOptimisticPatients] = useOptimistic(data);

  // state
  const [selectedPatientId, setSelectedPatientId] = useState<
    Patient["id"] | null
  >(null);

  // derived state
  const selectedPatient = optimisticPatients.find(
    (patient) => patient.id === selectedPatientId
  );
  console.log(selectedPatient, "selectedPatient");
  const numberOfPatients = optimisticPatients.length;

  const handleChangeSelectedPatientId = (id: Patient["id"]) => {
    setSelectedPatientId(id);
  };

  return (
    <PatientContext.Provider
      value={{
        patients: optimisticPatients,
        selectedPatientId,
        selectedPatient,
        numberOfPatients,
        handleChangeSelectedPatientId,
      }}
    >
      {children}
    </PatientContext.Provider>
  );
}
