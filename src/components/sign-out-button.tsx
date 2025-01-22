"use client";
import { logout } from "@/actions/actions";
import { Button } from "../components/ui/button";

export const SignOutButton = () => {
  return <Button onClick={() => logout()}>Sign out</Button>;
};
