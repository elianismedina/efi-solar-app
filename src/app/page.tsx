"use client";

import { login } from "@/actions/actions";

export default function Home() {
  return (
    <div>
      {""}
      <p>You are not signed in</p>
      <button onClick={() => login()}>Sign in with Github</button>
    </div>
  );
}
