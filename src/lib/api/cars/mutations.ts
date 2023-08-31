import { db } from "@/lib/db";
import { eq } from "drizzle-orm";
import {
  NewCar,
  insertCarSchema,
  cars,
  carIdSchema,
} from "@/lib/db/schema/cars";

export const createCar = async (car: NewCar) => {
  const newCar = insertCarSchema.parse(car);
  try {
    const [c] = await db.insert(cars).values(newCar).returning();
    return { car: c };
  } catch (err) {
    return { error: (err as Error).message ?? "Error, please try again" };
  }
};

export const updateCar = async (id: number, car: NewCar) => {
  const { id: carId } = carIdSchema.parse({ id });
  const newCar = insertCarSchema.parse(car);
  try {
    const [c] = await db
      .update(cars)
      .set(newCar)
      .where(eq(cars.id, carId!))
      .returning();
    return { car: c };
  } catch (err) {
    return { error: (err as Error).message ?? "Error, please try again" };
  }
};

export const deleteCar = async (id: number) => {
  const { id: carId } = carIdSchema.parse({ id });
  try {
    const [c] = await db.delete(cars).where(eq(cars.id, carId!)).returning();
    return { car: c };
  } catch (err) {
    return { error: (err as Error).message ?? "Error, please try again" };
  }
};
