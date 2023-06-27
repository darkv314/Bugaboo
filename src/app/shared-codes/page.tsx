"use client";

import Badge from "@/components/badge/Badge";
import { Hero } from "./Hero";
import { CodeCard } from "@/components/cards/CodeCard";
import { Pagination } from "nextjs-pagination";
import { ArrowLeftCircle, ArrowRightCircle } from "iconoir-react";
import React from "react";

function page() {
  const codes = Array.from({ length: 20 }, (_, i) => i);
  const [showCodes, setShowCodes] = React.useState<number[]>(
    codes.slice(0, 10)
  );
  const [currentPage, setCurrentPage] = React.useState<number>(1);
  const itemsPerPage = 10;

  const handlePageChange = (page: number) => {
    setShowCodes(codes.slice((page - 1) * 10, page * 10));
  };

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
          {showCodes.map((code, index) => (
            <CodeCard key={index} />
          ))}
        </div>
      </div>
      <div className="py-2 flex flex-col justify-center items-center">
        <Pagination
          onPageChange={handlePageChange}
          totalItems={codes.length}
          itemsPerPage={itemsPerPage}
          color="#181818"
          onSuccess={(page: number) => console.log("Current page: ", showCodes)}
          onError={(error: React.ErrorInfo) => console.error(error)}
          prevText={<ArrowLeftCircle className="inline-block" />}
          nextText={<ArrowRightCircle className="inline-block" />}
        />
      </div>
    </main>
  );
}

export default page;
