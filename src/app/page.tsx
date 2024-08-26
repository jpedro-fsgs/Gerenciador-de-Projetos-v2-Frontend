import Counter from "@/components/Counter";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  return (
    <div className="mx-auto mt-[40vh] text-center">
      <Counter />
    </div>
  );
}
