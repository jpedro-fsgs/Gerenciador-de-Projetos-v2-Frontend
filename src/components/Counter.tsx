"use client";

import React, { useState } from "react";
import { Button } from "./ui/button";
import { Plus } from "lucide-react";

function Counter() {
  const [counter, setCounter] = useState(0);
  return (
    <div className="space-y-16">
      <h1 className="text-7xl font-bold text-purple-900">{counter}</h1>
      <Button className="" size="icon" onClick={() => setCounter(c => Math.random() > 0.5 ? c + 1 : c - 1)}><Plus /></Button>
    </div>
  );
}

export default Counter;
