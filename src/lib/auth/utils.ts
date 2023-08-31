import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth/next";

export const getUserAuth = async () => {
  const session = await getServerSession(authOptions);
  return { session };
};
