"use client";

import { signOut } from "next-auth/react";
import { Button } from "../components/ui/button";

const LogoutButton = ({ label }: { label: string }) => {
  return (
    <Button className="mt-5" onClick={() => signOut()}>
      {label}
    </Button>
  );
};

export default LogoutButton;
