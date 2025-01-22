import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import QuoteForm from "./components/quoteForm";

export default function QuotesPage() {
  return (
    <main className="flex flex-col items-center gap-y-5 pt-24">
      <h2 className="text-3xl font-semibold">
        ¡Háblanos de ti! Queremos conocerte
      </h2>
      <Card className="w-full max-w-md p-4">
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
