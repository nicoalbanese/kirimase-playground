import SignIn from "@/components/auth/SignIn";
import { api } from "@/lib/trpc/api";
import Link from "next/link";

export default async function Home() {
  const users = await api.users.getUsers.query();

  return (
    <main className="">
      <h1>Hello</h1>
      <pre>{JSON.stringify(users, null, 2)}</pre>
      <div>
        <Link href="/client">Client</Link>
      </div>
      <SignIn />
    </main>
  );
}
