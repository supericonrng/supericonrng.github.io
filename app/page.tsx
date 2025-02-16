// import Image from "next/image";

export default function Home() {
  return (
    <div className="items-center justify-items-center min-h-screen sm:p-20 font-[family-name:var(--font-geist-mono)]">
        <h1 className="text-xl text-center">
            RNG Simulator Tycoon GO!
        </h1>
        <div className="left-50% w-fit flex grid-flow-col grid-rows-3 border-4 border-white text-7xl">
            <div className="flex-1 text-red-500">S</div>
            <div className="flex-1 text-yellow-500">P</div>
            <div className="flex-1 text-green-500">I</div>
            <div className="flex-1 text-cyan-500">N</div>
        </div>
    </div>
  );
}
