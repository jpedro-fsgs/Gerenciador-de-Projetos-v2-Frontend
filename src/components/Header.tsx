import { Search, SquareChartGantt } from "lucide-react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { SheetTrigger } from "./ui/sheet";
import SheetSidebar from "./SheetSidebar";

export default function Header() {
  return (
    <header className="fixed w-full top-0 left-0 z-50 h-14 border-b py-1 px-4 backdrop-blur-sm flex items-center justify-between gap-16">
      {/* <a href="/"><SquareChartGantt size={45} /></a> */}
      <SheetSidebar/>
      <span className="flex w-2/4">
        <Input placeholder="Pesquisar" />
        <Button>
          <Search />
        </Button>
      </span>
      <p>jpfsgs</p>
    </header>
  );
}
