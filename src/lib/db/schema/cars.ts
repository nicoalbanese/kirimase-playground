import { integer, varchar, serial, pgTable } from "drizzle-orm/pg-core";
import { createInsertSchema, createSelectSchema } from "drizzle-zod";
import { z } from "zod";
import { users } from "./auth";
import { text } from "stream/consumers";

export const cars = pgTable("cars", {
  id: serial("id").primaryKey(),
  seats: integer("seats"),
  brand: varchar("brand", { length: 256 }).notNull(),
  userId: varchar("user_id", { length: 256 })
    .references(() => users.id, { onDelete: "cascade" })
    .notNull(),
});

// Schema for inserting cars - can be used to validate API requests
export const insertCarSchema = createInsertSchema(cars, {
  userId: z.coerce.string(),
});
export type NewCar = z.infer<typeof insertCarSchema>;

// Schema for selecting cars - can be used to validate API responses
export const selectCarSchema = createSelectSchema(cars, {
  id: z.coerce.number(),
});
export const updateCarSchema = selectCarSchema;

export type Car = z.infer<typeof selectCarSchema>;

export const carIdSchema = selectCarSchema.pick({ id: true });
