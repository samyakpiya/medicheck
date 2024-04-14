import Branding from "@/components/branding";
import ContentBlock from "@/components/content-block";
import MedDetails from "@/components/med-details";
import MedList from "@/components/med-list";
import PatientSelector from "@/components/patient-selector";

import Search from "@/components/search";

async function Page() {
  return (
    <main className="">
      <div className="flex justify-between items-center text-white py-4">
        <Branding
          title="New Pyxis"
          subtitle="This system could have potentially prevented the death of a patient"
        />
        {/* <Stats /> */}
      </div>
      <div className="my-4">
        <PatientSelector />
      </div>
      <div className="grid md:grid-cols-3 md:grid-rows-[45px_1fr] grid-rows-[45px_300px_500px] gap-4 min-h-[600px]">
        <div className="md:row-start-1 md:row-span-1 md:col-start-1md: col-span-1">
          <Search />
        </div>

        <div className="relative md:row-start-2 md:row-span-full md:col-start-1 md:col-span-1">
          <ContentBlock className="max-h-[600px] overflow-auto">
            <MedList />
          </ContentBlock>
        </div>

        <div className="md:row-start-1 md:row-span-full md:col-start-2 md:col-span-full">
          <ContentBlock>
            <MedDetails />
          </ContentBlock>
        </div>
      </div>
    </main>
  );
}

export default Page;
