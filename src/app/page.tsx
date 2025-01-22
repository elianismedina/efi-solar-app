"use server";

import { auth } from "@/auth";
import { SignInButton } from "@/components/sign-in-button";
import { SignOutButton } from "@/components/sign-out-button";
import Image from "next/image";

export default async function Home() {
  const session = await auth();

  if (session?.user) {
    return (
      <div className="container mx-auto">
        {""}
        <h1> Next Auth v5 + NextJS 15</h1>
        <p>user is signed in with name: {session.user.name}</p>
        <p>user is signed in with email: {session.user.email}</p>
        {session.user.image && (
          <Image
            src={session.user.image}
            width={48}
            height={48}
            alt={session.user.name ?? "Avatar"}
            style={{ borderRadius: "50%" }}
          />
        )}
        <SignOutButton />
      </div>
    );
  }
  return (
    <div>
      <nav>
        <SignInButton />
      </nav>
    </div>
  );
}
