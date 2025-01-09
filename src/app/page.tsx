import Link from "next/link";

export default function HomePage() {
  return (
    <main className="flex flex-col items-center gap-y-5 pt-24 text-center">
      <h1 className="text-3xl font-semibold">Welcome EfiSolar app</h1>
      <Link href="/quotes" className="underline">
        Request a quote
      </Link>
    </main>
  );
}
