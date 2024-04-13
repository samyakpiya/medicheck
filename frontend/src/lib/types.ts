import { GenericMed, Patient } from "@prisma/client";

export type MedEssentials = Omit<GenericMed, "id" | "createdAt" | "updatedAt">;

export type PatientEssentials = Omit<Patient, "id" | "createdAt" | "updatedAt">;
