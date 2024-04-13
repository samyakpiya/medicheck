import { MedContext } from "@/contexts/med-context-provider";
import { PatientContext } from "@/contexts/patient-context-provider";
import { SearchContext } from "@/contexts/search-context-provider";
import { useContext } from "react";

export function useSearchContext() {
    const context = useContext(SearchContext);
  
    if (!context) {
      throw new Error(
        "useSearchContext must be used within a SearchContextProvider"
      );
    }
  
    return context;
    
  }

  export function useMedContext() {
    const context = useContext(MedContext);
  
    if (!context) {
      throw new Error("useMedContext must be used within a MedContextProvider");
    }
  
    return context;
  }

  export function usePatientContext() {
    const context = useContext(PatientContext);
  
    if (!context) {
      throw new Error("usePatientContext must be used within a PatientContextProvider");
    }
  
    return context;
  }