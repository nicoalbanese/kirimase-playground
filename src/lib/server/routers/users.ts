import { protectedProcedure, publicProcedure, router } from "../trpc";
export const usersRouter = router({
  getUsers: publicProcedure.query(async ({ ctx }) => {
    return [{ id: 1, name: "John Doe" }, { id: 2, name: "Jane Doe" }, ctx];
  }),
});
