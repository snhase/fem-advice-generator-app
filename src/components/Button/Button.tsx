import * as React from "react";
import Image from "next/image";
import diceIcon from "@/images/icon-dice.svg";

function Button() {
  return (
    <button className="mx-auto p-4 rounded-full bg-[var(--button)]">
      <Image priority src={diceIcon} width={24} height={24} alt="icon-dice" />
    </button>
  );
}

export default Button;
