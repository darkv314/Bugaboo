import Badge from "@/components/badge/Badge";
import CustomCard from "@/components/cards/CustomCard";
import { Star, FaceId } from "iconoir-react";
import { Hero } from "./Hero";
import { CodeCard } from "@/components/cards/CodeCard";

function page() {
  const codes = Array.from({ length: 10 }, (_, i) => i);
  return (
    <main className="min-h-screen bg-white">
      <Hero />
      <div className="px-4 lg:px-72 py-40 flex flex-col gap-16">
        <div className="flex flex-col gap-4 grow">
          <Badge theme="secondary" id="codes">
            CODES
          </Badge>
          <h1 className="text-xl md:text-4xl font-bold font-cabin">
            Take a look at the latest shared code
          </h1>
        </div>
        <div className="grid auto-rows-auto grid-cols-auto-fill-20 sm:gap-20">
          {codes.map((code, index) => (
            <CodeCard key={index} />
          ))}
        </div>
      </div>
    </main>
  );
}

export default page;
