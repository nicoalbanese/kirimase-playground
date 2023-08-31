import { db } from "@/lib/db";
import { eq } from "drizzle-orm";
import { carIdSchema, cars } from "@/lib/db/schema/cars";
import { userIdSchema, users } from "@/lib/db/schema/auth";
import { z } from "zod";
export const getCars = async (userId: string) => {
  const { id } = userIdSchema.parse({ userId });
  const c = await db
    .select()
    .from(cars)
    .leftJoin(users, eq(cars.userId, users.id))
    .where(eq(users.id, id));
  return { cars: c };
};

export const getCarById = async (id: number) => {
  const { id: carId } = carIdSchema.parse({ id });
  const [c] = await db
    .select()
    .from(cars)
    .where(eq(cars.id, carId))
    .leftJoin(users, eq(cars.userId, users.id));

  return { car: c };
};
