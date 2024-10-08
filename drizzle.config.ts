import { defineConfig } from "drizzle-kit";

export default defineConfig({
  dialect: "postgresql",
  schema: "./schema/index.ts",
  out: "./drizzle",
  dbCredentials: {
    host: process.env.DB_HOST ?? "localhost",
    database: "postgres",
    user: "root",
    password: "password",
    ssl: false,
  },
});
