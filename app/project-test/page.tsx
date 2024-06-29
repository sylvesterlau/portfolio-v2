import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col justify-between">
      <Link href="/">🏠Home</Link>
      <h1 className="text-3xl font-semibold">Project test page</h1>
    </main>
  );
}
