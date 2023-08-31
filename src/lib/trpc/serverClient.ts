import { appRouter } from "@/lib/server/routers/_app";
import { httpBatchLink } from "@trpc/client";
import { createContext } from "./context";
import { getUserAuth } from "../auth/utils";
import { cookies } from "next/headers";

export const serverClient = async () => {
  const { session } = await getUserAuth();
  return appRouter.createCaller({ session, headers: cookies().get("cookie") });
};
