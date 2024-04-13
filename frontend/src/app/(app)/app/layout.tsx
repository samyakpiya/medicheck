import AppFooter from "@/components/app-footer";
import AppHeader from "@/components/app-header";
import BackgroundPattern from "@/components/background-pattern";
import MedContextProvider from "@/contexts/med-context-provider";
import SearchContextProvider from "@/contexts/search-context-provider";
import prisma from "@/lib/db";

import { Toaster } from "@/components/ui/sonner";
import PatientContextProvider from "@/contexts/patient-context-provider";

async function Layout({ children }: { children: React.ReactNode }) {
  const meds = await prisma.genericMed.findMany();
  const patients = await prisma.patient.findMany();

  return (
    <>
      <BackgroundPattern />
      <div className="flex flex-col max-w-[1050px] mx-auto px-4 min-h-screen">
        <AppHeader />
        <PatientContextProvider data={patients}>
          <SearchContextProvider>
            <MedContextProvider data={meds}>{children}</MedContextProvider>
          </SearchContextProvider>
        </PatientContextProvider>
        <AppFooter />
      </div>

      <Toaster position="top-right" />
    </>
  );
}

export default Layout;
