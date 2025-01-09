import { prisma } from "@/lib/db";

export default async function QuotePage({
  params,
}: {
  params: { id: string };
}) {
  const quote = await prisma.quote.findUnique({
    where: { id: params.id },
  });

  return (
    <main className="flex flex-col items-center gap-y-5 pt-24">
      <h1 className="text-3xl font-semibold">{quote?.userName}</h1>
      <p>{quote?.email}</p>
    </main>
  );
}
