"use client";

import { useMutation } from "convex/react";
import { OrganizationSwitcher, UserButton } from "@clerk/nextjs";
import { api } from "@workspace/backend/_generated/api";
import { Button } from "@workspace/ui/components/button";

export default function Page() {
  const addUser = useMutation(api.users.add);

  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-svh gap-4">
        <UserButton />
        <OrganizationSwitcher hidePersonal />
        <h1 className="text-2xl font-bold">Hello app/web</h1>
        <Button
          onClick={() => {
            addUser();
          }}
        >
          Add User
        </Button>
      </div>
    </>
  );
}
