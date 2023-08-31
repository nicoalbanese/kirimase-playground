import SignIn from "@/components/auth/SignIn";
import { getUserAuth } from "@/lib/auth/utils";
import { api } from "@/lib/trpc/api";
import Link from "next/link";

export const dynamic = "force-dynamic";
export const revalidate = 0;
export default async function Home() {
  const users = await api.users.getUsers.query();
  const { session } = await getUserAuth();
  const cars = await api.cars.getCars.query();

  return (
    <main className="">
      <h1>Hello</h1>
      <pre>{JSON.stringify(users, null, 2)}</pre>
      <div>
        <Link href="/client">Client</Link>
      </div>
      <SignIn />
      {session && <pre>{JSON.stringify(cars, null, 2)}</pre>}
    </main>
  );
}
