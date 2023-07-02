"use client";

import Badge from "@/components/badge/Badge";
import { Hero } from "./Hero";
import { CodeCard } from "@/components/cards/CodeCard";
import { Pagination } from "nextjs-pagination";
import { ArrowLeftCircle, ArrowRightCircle } from "iconoir-react";
import React, { useEffect } from "react";
import { codeService } from "@/services/codeServices";
import useAuth from "@/hooks/useAuth";
import { Code, CodeGet } from "@/models/code";
import { useQuery } from "@tanstack/react-query";

function page() {
  const itemsPerPage = 10;
  const { auth, setAuth } = useAuth();
  const [codes, setCodes] = React.useState<CodeGet[]>([]);

  const [currentPage, setCurrentPage] = React.useState<number>(1);
  const [totalItems, setTotalItems] = React.useState<number>(0);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const { data, isSuccess } = useQuery({
    queryKey: ["codes"],
    queryFn: () => codeService.getCodes(auth.token),
  });

  useEffect(() => {
    if (isSuccess) {
      const totalCount = data.meta.pagination.total;
      setCodes(data.data);
      setTotalItems(totalCount);
    }
  }, [isSuccess]);

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
            <CodeCard code={code.attributes} idUser={code.id} key={index} />
          ))}
        </div>
      </div>
      <div className="py-2 flex flex-col justify-center items-center">
        <Pagination
          onPageChange={handlePageChange}
          totalItems={totalItems}
          itemsPerPage={itemsPerPage}
          color="#181818"
          prevText={<ArrowLeftCircle className="inline-block" />}
          nextText={<ArrowRightCircle className="inline-block" />}
        />
      </div>
    </main>
  );
}

export default page;
