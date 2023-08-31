"use client";

import { trpc } from "@/lib/trpc/client";
import Link from "next/link";

export default function Client() {
  const { data } = trpc.users.getUsers.useQuery();
  return (
    <main>
      <Link href="/">Server</Link>
      <h1>Hello</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </main>
  );
}
