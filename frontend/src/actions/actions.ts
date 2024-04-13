"use server";

import prisma from "@/lib/db";
import { MedEssentials } from "@/lib/types";
import { GenericMed } from "@prisma/client";
import { revalidatePath } from "next/cache";

export async function addMed(med: MedEssentials) {
  try {
    await prisma.genericMed.create({
      data: med,
    });
  } catch (error) {
    return {
      message: "Could not add med.",
    };
  }

  revalidatePath("/app", "layout");
}

export async function editMed(medId: GenericMed["id"], newMedData: MedEssentials) {

  try {
    await prisma.genericMed.update({
      where: {
        id: medId,
      },
      data: newMedData,
    });
  } catch (error) {
    return {
      message: "Could not edit med.",
    };
  }

  revalidatePath("/app", "layout");
}

export async function deleteMed(medId: GenericMed["id"]) {

  try {
    await prisma.genericMed.delete({
      where: {
        id: medId,
      },
    });
  } catch (error) {
    return {
      message: "Could not delete med.",
    };
  }

  revalidatePath("/app", "layout");
}