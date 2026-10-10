import { config } from "dotenv"
import { defineConfig } from "drizzle-kit"

config({ path: ".env.local" })
config({ path: ".env" })

const dbUrl = process.env.DATABASE_URL_UNPOOLED || process.env.DATABASE_URL

if (!dbUrl) {
  throw new Error("DATABASE_URL_UNPOOLED or DATABASE_URL must be defined")
}

export default defineConfig({
  schema: "./lib/db/schema.ts",
  dialect: "postgresql",
  dbCredentials: {
    url: dbUrl,
  },
})
