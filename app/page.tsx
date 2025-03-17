import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col">
    <p className="text-4xl font-sans text-purple-700 pt-6 pl-4">
      Hello from Recipe book. We will learn Next JS, Typescript, Tailwind Css.
      Check from the local machine.</p>
     <Link className="text-3xl underline" href="/private">To private</Link>
    
    </div>
  );
}
