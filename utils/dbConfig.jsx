import { neon } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-http";
import * as schema from "./schema";
const sql = neon(
  "postgresql://neondb_owner:QPT2x8mFLdBN@ep-restless-glitter-a81n4uy0.eastus2.azure.neon.tech/neondb?sslmode=require"
);
export const db = drizzle(sql, { schema });
