"use client";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { usePatientContext } from "@/lib/hooks";
import { Button } from "./ui/button";

function PatientSelector() {
  const {
    patients,
    selectedPatient,
    selectedPatientId,
    handleChangeSelectedPatientId,
  } = usePatientContext();

  return (
    <div className="">
      <h1 className="text-white text-xl">Select Patient</h1>
      {patients.map((patient) => (
        <Button
          className={`my-1 mr-2 ${
            selectedPatient?.id === patient.id
              ? "bg-green-500 hover:bg-green-500/80 text-white"
              : ""
          }`}
          variant="secondary"
          onClick={() => {
            selectedPatientId === patient.id
              ? handleChangeSelectedPatientId(null)
              : handleChangeSelectedPatientId(patient.id);
          }}
        >
          {patient.name}
        </Button>
      ))}
    </div>
  );

  return (
    <Select>
      <SelectTrigger className="text-white/50">
        <SelectValue placeholder="Select Patient..." />
      </SelectTrigger>
      <SelectContent className="w-full">
        {patients.map((patient) => (
          <SelectItem
            key={patient.id}
            value={patient.id}
            onClick={() => handleChangeSelectedPatientId(patient.id)}
          >
            {patient.name}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}

export default PatientSelector;
