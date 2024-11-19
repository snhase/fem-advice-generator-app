import Button from "@/components/Button";
import Card from "@/components/Card";
import Divider from "@/components/Divider";

export default function Home() {
  return (
    <div className="grid grid-rows-[0px_1fr_20px] items-center justify-items-center min-h-screen px-8 pb-16 gap-16 font-[family-name:var(--font-manrope)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <Card>
          <div className="py-5 uppercase text-center text-xs text-[var(--title)] font-[900] tracking-[0.25em]">
            advice # 1
          </div>
          <div className="font-extrabold text-[var(--foreground) text-[var(--fontSize)]	text-center">
            Hello World! Welcome to Advice Generator App.
          </div>
          <Divider />
        </Card>
        <div className="mx-auto -translate-y-[110%] bg-[var(--button)] rounded-full glow">
          <Button />
        </div>
      </main>
      <footer className="row-start-5 flex gap-6 flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Challenge by Frontend Mentor, Coded by snhase.
        </a>
      </footer>
    </div>
  );
}
