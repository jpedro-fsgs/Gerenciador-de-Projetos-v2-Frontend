"use client";

import { EarthIcon, NotebookTextIcon, SquareChartGantt } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";
import Link from "next/link";

export default function SheetSidebar() {
  return(
    <Sheet>
      <SheetTrigger asChild>
        <a className="cursor-pointer"><SquareChartGantt size={45} /></a>
      </SheetTrigger>
      <SheetContent side="left">
      <div className="flex flex-col gap-2 text-center text-2xl">
        <Link href={"/public-projects"} className="hover:bg-slate-100 flex items-center p-3">
          <p>Projetos Públicos</p>
          <EarthIcon size={36} className="ml-auto justify-self-end" />
        </Link>
        <Link href={"/my-projects"} className="hover:bg-slate-100 flex items-center p-3">
          <p>Meus Projetos</p>
          <NotebookTextIcon size={36} className="ml-auto justify-self-end" />
        </Link>
      </div>
      </SheetContent>
    </Sheet>
  );
}
