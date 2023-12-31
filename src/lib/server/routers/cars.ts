import { getCarById, getCars } from "@/lib/api/cars/queries";
import { protectedProcedure, publicProcedure, router } from "../trpc";
import {
  carIdSchema,
  insertCarSchema,
  updateCarSchema,
} from "@/lib/db/schema/cars";
import { createCar, deleteCar, updateCar } from "@/lib/api/cars/mutations";
export const carsRouter = router({
  getCars: protectedProcedure.query(async ({ ctx }) => {
    return getCars(ctx.session?.user.id!);
  }),
  getCarById: publicProcedure.input(carIdSchema).query(async ({ input }) => {
    return getCarById(input.id);
  }),
  createCar: publicProcedure
    .input(insertCarSchema)
    .mutation(async ({ input }) => {
      return createCar(input);
    }),
  updateCar: publicProcedure
    .input(updateCarSchema)
    .mutation(async ({ input }) => {
      return updateCar(input.id, input);
    }),
  deleteCar: publicProcedure.input(carIdSchema).mutation(async ({ input }) => {
    return deleteCar(input.id);
  }),
});
