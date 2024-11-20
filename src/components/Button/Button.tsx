import * as React from "react";
import Image from "next/image";
import diceIcon from "@/images/icon-dice.svg";

interface Props {
  advice?: string;
  handleClick: () => void;
}

function Button({ advice, handleClick }: Props) {
  return (
    <button
      className={`mx-auto p-4 rounded-full bg-[var(--button)] ${
        advice === undefined
          ? "font-[family-name:var(--font-loading)] animate-spin"
          : ""
      }`}
      onClick={handleClick}
    >
      <Image priority src={diceIcon} width={24} height={24} alt="icon-dice" />
    </button>
  );
}

export default Button;
