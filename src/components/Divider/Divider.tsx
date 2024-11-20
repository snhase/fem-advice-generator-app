import * as React from "react";
import Image from "next/image";
import divider from "@/images/pattern-divider-desktop.svg";

function Divider() {
  return (
    <div className="flex justify-center items-center align-middle py-10 px-5">
      <hr className="w-64 border-[var(--divider)]" />
      <Image className="ml-5" priority src={divider} alt="seperator"></Image>
      <hr className="w-64 border-[var(--divider)]" />
    </div>
  );
}

export default Divider;
