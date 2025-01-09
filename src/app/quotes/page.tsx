import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { prisma } from "@/lib/db";

import QuoteForm from "./components/quoteForm";
import Link from "next/link";

export default async function QuotesPage() {
  const quotes = await prisma.quote.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });
  return (
    <main className="flex flex-col items-center gap-y-5 pt-24">
      <h1>View all quotes</h1>
      <ul>
        {quotes.map((quote) => (
          <li key={quote.id}>
            <Link href={`/quotes/${quote.id}`}>{quote.userName}</Link>
          </li>
        ))}
      </ul>

      <h2 className="text-3xl font-semibold">
        ¿¡Háblanos de ti! Queremos conocerte
      </h2>
      <Card>
        <CardHeader>
          <CardTitle>Request a quote</CardTitle>
          <CardDescription>
            Fill out the form below to get in touch with me.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <QuoteForm />
        </CardContent>
      </Card>
    </main>
  );
}
