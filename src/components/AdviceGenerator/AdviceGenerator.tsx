"use client";
import * as React from "react";
import Button from "@/components/Button";
import Card from "@/components/Card";
import Divider from "@/components/Divider";
import { fetchAdvice } from "@/helpers/request-fetcher";

interface AdviceSlip {
  id?: number;
  advice?: string;
}

function AdviceCard() {
  const initialSlip = {
    id: undefined,
    advice: undefined,
  };
  const [slip, setSlip] = React.useState<AdviceSlip>(initialSlip);

  React.useEffect(() => {
    async function adviceFetcher() {
      const data = await fetchAdvice();
      if (data) {
        setSlip(data);
      }
    }
    adviceFetcher();
  }, [setSlip]);

  async function handleClick() {
    setSlip(initialSlip);
    const data = await fetchAdvice();
    if (data) {
      setSlip(data);
    }
  }

  return (
    <div className="text-center">
      <Card>
        <div
          className={`py-5 uppercase text-center text-xs text-[var(--title)] font-[900] tracking-[0.25em] ${
            slip.advice === undefined
              ? "font-[family-name:var(--font-loading)] animate-pulse"
              : ""
          }`}
        >
          advice # {slip.id ? slip.id : "0"}
        </div>
        <q
          className={`font-extrabold text-[color:var(--foreground)] text-[28px]	text-center ${
            slip.advice === undefined
              ? "font-[family-name:var(--font-loading)] animate-pulse"
              : "font-[family-name:var(--font-primary)]"
          }`}
        >
          {slip.advice
            ? slip.advice
            : "Lorem ipsum dolor sit amet, consectetur adipiscing elit."}
        </q>
        <Divider />
      </Card>
      <div className="w-fit mx-auto -translate-y-[50%] bg-[var(--button)] rounded-full glow">
        <Button advice={slip.advice} handleClick={handleClick} />
      </div>
    </div>
  );
}

export default AdviceCard;
