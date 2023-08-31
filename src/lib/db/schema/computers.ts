import { integer, pgTable, serial, text } from "drizzle-orm/pg-core";

export const computers = pgTable("computers", {
  id: serial("id").primaryKey(),
  brand: text("brand").notNull(),
  cores: integer("cores").notNull(),
});
