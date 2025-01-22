"use client";
import { login } from "@/actions/actions";
import { Button } from "../components/ui/button";

export const SignInButton = () => {
  return <Button onClick={() => login()}>Sign in with Github</Button>;
};
