"use server";

import { prisma } from "@/lib/db";
import { revalidatePath } from "next/cache";

export async function createQuote(formData: FormData) {
  await prisma.quote.create({
    data: {
      userName: formData.get("userName") as string,
      location: formData.get("location") as string,
      email: formData.get("email") as string,
      phoneNumber: formData.get("phoneNumber") as string,
      averageBill: parseInt(formData.get("averageBill") as string),
      requestType: formData.get("requestType") as string,
      roofType: formData.get("roofType") as string,
      systemType: formData.get("systemType") as string,
      billUrl: formData.get("billUrl") as string,
      additionalComments: formData.get("additionalComments") as string,
    },
  });

  revalidatePath("/quotes");
}
