import Link from "next/link";
import { Button } from "./ui/button";
import { EarthIcon, NotebookTextIcon } from "lucide-react";

export default function Sidebar() {
  return (
    <div className="min-w-80 border-r max-md:hidden">
      <div className="p-1 flex flex-col gap-2 text-center text-2xl">
        <Link href={"/public-projects"} className="hover:bg-slate-100 flex items-center p-3">
          <p>Projetos Públicos</p>
          <EarthIcon size={36} className="ml-auto justify-self-end" />
        </Link>
        <Link href={"/my-projects"} className="hover:bg-slate-100 flex items-center p-3">
          <p>Meus Projetos</p>
          <NotebookTextIcon size={36} className="ml-auto justify-self-end" />
        </Link>
      </div>
    </div>
  );
}
