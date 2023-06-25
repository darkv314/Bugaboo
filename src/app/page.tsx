import Image from "next/image";
import heroImage from "@/assets/images/cuteBoo1.jpg";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <div className="w-full h-[31em]">
        <Image
          src={heroImage}
          alt="Hero Image"
          className="object-cover object-center w-full h-full"
        />
      </div>
    </main>
  );
}
