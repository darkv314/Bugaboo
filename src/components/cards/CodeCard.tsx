import React from "react";
import CustomButton from "../interactive/CustomButton";
import Image from "next/image";
import codeImage from "@/assets/images/cuteBoo3.jpg";

export const CodeCard = () => {
  return (
    <div className="flex flex-col gap-4">
      <Image
        src={codeImage}
        alt="Hero Image"
        className="object-cover object-center w-full h-48 rounded-lg"
      />
      <h1 className="text-start text-lg sm:text-2xl font-bold font-cabin">
        Code 1
      </h1>
      <p className="text-start text-sm md:text-base line-clamp-4 text-secondaryDark">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur
        inventore itaque dolores reiciendis asperiores deserunt. Dignissimos aut
        accusamus, iusto, esse dolorum cum, culpa aspernatur sunt porro cumque
        modi! Facilis, qui!
      </p>
      <hr className="border-px border-secondaryDark"></hr>
      <div className="flex flex-row sm:gap-4 items-center justify-around sm:justify-between">
        <Image
          src={codeImage}
          alt="Hero Image"
          className="hidden sm:block object-cover object-center w-16 h-16 rounded-full"
        />
        <div className="hidden sm:block w-px h-6 bg-secondaryDark"></div>

        <span className="text-start text-sm font-cabin">PerryTech</span>
        <span className="hidden sm:block text-start text-sm font-cabin">
          September 1, 2022
        </span>
        <div>
          <CustomButton theme="primary">Comment</CustomButton>
        </div>
      </div>
      <hr className="border-px border-secondaryDark"></hr>
    </div>
  );
};
