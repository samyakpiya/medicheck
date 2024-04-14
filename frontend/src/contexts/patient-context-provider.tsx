"use client";

import { Patient } from "@prisma/client";

import { createContext, useState } from "react";

type PatientContextProviderProps = {
  data: Patient[];
  children: React.ReactNode;
};

type TPatientContext = {
  patients: Patient[];
  selectedPatientId: Patient["id"] | null;
  selectedPatient: Patient | undefined;
  numberOfPatients: number;
  handleChangeSelectedPatientId: (id: Patient["id"] | null) => void;
};

export const PatientContext = createContext<TPatientContext | null>(null);

export default function PatientContextProvider({
  data,
  children,
}: PatientContextProviderProps) {
  const [patients, setPatients] = useState(data);

  // state
  const [selectedPatientId, setSelectedPatientId] = useState<
    Patient["id"] | null
  >(null);

  // derived state
  const selectedPatient = patients.find(
    (patient) => patient.id === selectedPatientId
  );
  console.log(selectedPatient, "selectedPatient");
  const numberOfPatients = patients.length;

  const handleChangeSelectedPatientId = (id: Patient["id"] | null) => {
    setSelectedPatientId(id);
  };

  return (
    <PatientContext.Provider
      value={{
        patients,
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
