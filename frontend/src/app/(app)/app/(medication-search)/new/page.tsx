import Branding from "@/components/branding";
import ContentBlock from "@/components/content-block";
import Search from "@/components/search";

export default function New() {
  return (
    <main>
      <div className="flex justify-between items-center text-white py-8">
        <Branding
          title="New Pyxis"
          subtitle="This system would have prevented the death of a patient"
        />
        {/* <Stats /> */}
      </div>

      <div className="grid md:grid-cols-3 md:grid-rows-[45px_1fr] grid-rows-[45px_300px_500px] gap-4 min-h-[600px]">
        <div className="md:row-start-1 md:row-span-1 md:col-start-1md: col-span-1">
          <Search />
        </div>

        <div className="relative md:row-start-2 md:row-span-full md:col-start-1 md:col-span-1">
          <ContentBlock>{/* <MedList /> */}</ContentBlock>
        </div>

        <div className="md:row-start-1 md:row-span-full md:col-start-2 md:col-span-full">
          <ContentBlock>{/* <MedDetails /> */}</ContentBlock>
        </div>
      </div>
    </main>
  );
}
