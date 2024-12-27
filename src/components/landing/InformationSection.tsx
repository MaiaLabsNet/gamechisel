// InformationSection.tsx

// Imports
import { getLatestInformation } from "@/_info";
import SectionHeader from "../base/SectionHeader";
import InformationItem from "./InformationItem";

export default function InformationSection() {
  // get info from data
  const informationItems = getLatestInformation();

  return (
    <section id="information">
      <div className="container contx conty flex flex-col items-center justify-center w-full">
        <SectionHeader
          title="Information"
          subtitle="More Details"
          description=""
        />
        <div className="p-4 space-y-8">
          {informationItems.map((item) => (
            <InformationItem
              key={item.id}
              href={item.link}
              imageUrl={item.imageUrl}
              title={item.title}
              author={item.author}
              date={item.date}
              summary={item.summary}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
