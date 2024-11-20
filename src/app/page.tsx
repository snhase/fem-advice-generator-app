import React from "react";
import AdviceCard from "@/components/AdviceGenerator";

export default function Home() {
  return (
    <div className="flex flex-col justify-center md:grid md:grid-rows-[0px_1fr_20px] md:gap-16 items-center justify-items-center min-h-screen md:px-8 md:pb-16  font-[family-name:var(--font-primary)]">
      <main className="md:flex md:flex-col md:gap-8 md:row-start-2 items-center">
        <AdviceCard />
      </main>
      <footer className="hidden md:inline text-center align-baseline md:row-start-5">
        Challenge by{" "}
        <a
          href="https://www.frontendmentor.io/challenges/advice-generator-app-QdUG-13db"
          target="_blank"
          rel="noopener noreferrer"
        >
          Frontend Mentor
        </a>{" "}
        . Coded by{" "}
        <a
          href="https://github.com/snhase"
          target="_blank"
          rel="noopener noreferrer"
        >
          snhase
        </a>
      </footer>
    </div>
  );
}
