import React from "react";

interface Props {
  children: React.ReactNode;
}

function Card({ children }: Props) {
  return (
    <div className="w-4/6 mx-auto px-5 py-5 shadow-card rounded-xl bg-[var(--cardBackground)]">
      {children}
    </div>
  );
}

export default Card;
