import { usersRouter } from "./users";
import { router } from "../trpc";
import { carsRouter } from "./cars";

export const appRouter = router({
  users: usersRouter,
  cars: carsRouter,
});

export type AppRouter = typeof appRouter;
