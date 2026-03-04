"use client";

import {
  useMutation,
  useQuery,
  Authenticated,
  Unauthenticated,
} from "convex/react";
import { SignInButton, UserButton } from "@clerk/nextjs";
import { api } from "@workspace/backend/_generated/api";
import { Button } from "@workspace/ui/components/button";

export default function Page() {
  const users = useQuery(api.users.getMany);
  const addUser = useMutation(api.users.add);

  return (
    <>
      <Authenticated>
        <div className="flex flex-col items-center justify-center min-h-svh gap-4">
          <UserButton />
          <h1 className="text-2xl font-bold">Hello app/web</h1>
          <Button
            onClick={() => {
              addUser();
            }}
          >
            Add User
          </Button>
          <div className="max-w-sm mx-auto w-full">{JSON.stringify(users)}</div>
        </div>
      </Authenticated>
      <Unauthenticated>
        <div>Please Sign in!</div>
        <SignInButton />
      </Unauthenticated>
    </>
  );
}
